'use strict';

// All six features are browser-local. No accounts, API keys, or server required.
const $ = id => document.getElementById(id);
const escapeHtml = value => String(value).replace(/[&<>"']/g, c => ({
  '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
}[c]));
const fields = ['mood', 'budget', 'crew', 'time'];
const ideasById = new Map(ideas.map(a => [a.id, a]));
const featuredIds = [0, 1, 2, 3, 5, 8, 10, 11, 17];
const colors = { chill: '#e5e8d9', creative: '#e7def0', competitive: '#f4dfb6', adventure: '#dbe7ed' };
const labels = { chill: 'Chill & cozy', creative: 'Get creative', competitive: 'Friendly competition', adventure: 'A little adventure' };
const supplyLabels = {
  household: 'Household objects & containers', paper: 'Paper & pens', craft: 'Craft supplies', kitchen: 'Kitchen & ingredients',
  device: 'Phone or computer', camera: 'Phone camera', books: 'Books or library access',
  cards: 'Playing cards', board: 'Board games / puzzles', sports: 'Sports equipment',
  bike: 'Bicycle & helmet', skates: 'Skates / board & protection', plants: 'Plants & gardening supplies',
  instrument: 'Instrument or music software', venue: 'Venue / event access', outdoor: 'Outdoor space'
};
let storageFailed = false;
function readStored(key, fallback) {
  try {
    const value = localStorage.getItem(key);
    return value === null ? fallback : JSON.parse(value);
  } catch { storageFailed = true; return fallback; }
}
function persist(key, value) {
  try { localStorage.setItem(key, JSON.stringify(value)); }
  catch { storageFailed = true; }
  $('storage-warning').hidden = !storageFailed;
}
function shuffle(items) {
  const result = [...items];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}
function cleanNames(text, min, max) {
  const names = text.split('\n').map(n => n.trim()).filter(Boolean);
  if (names.length < min || names.length > max) throw new Error(`Enter ${min}–${max} names, one per line.`);
  if (names.some(n => n.length > 40)) throw new Error('Keep each name to 40 characters or fewer.');
  if (new Set(names.map(n => n.toLowerCase())).size !== names.length) throw new Error('Give every player or team a different name.');
  return names;
}
function validIds(value) {
  return Array.isArray(value) ? value.filter(id => Number.isInteger(id) && ideasById.has(id)) : [];
}
const favoriteKey = 'tonight-favorites-curated-300';
let storedFavorites = readStored(favoriteKey, null);
if (storedFavorites === null) {
  storedFavorites = validIds(readStored('tonight-favorites', [])).filter(id => id < 32);
}
let favorites = new Set(validIds(storedFavorites));
let completed = readStored('tonight-completed-v1', {});
if (!completed || typeof completed !== 'object' || Array.isArray(completed)) completed = {};
completed = Object.fromEntries(Object.entries(completed).filter(([id, record]) => (
  ideasById.has(Number(id)) && record && typeof record === 'object' && Number.isFinite(Date.parse(record.date))
)));
let savedOnly = false;
let current = null;
let visibleLimit = 18;
let seen = new Set();
let cycleKey = '';
let activeKit = null;
let timerInterval = null;

// ------------ Discovery, supplies, and featured homepage ------------
function availableSupplies() {
  return new Set([...document.querySelectorAll('[data-supply]:checked')].map(el => el.dataset.supply));
}
function matchesFilters(activity) {
  const crew = $('crew').value;
  const groupRanges = { '1': [1, 1], '2': [2, 2], '4': [3, 4], '6': [5, 6] };
  // A group-size range means the activity must support every size in that range.
  const range = groupRanges[crew];
  const available = availableSupplies();
  return (
    (!savedOnly || favorites.has(activity.id)) &&
    ($('mood').value === 'any' || activity.mood === $('mood').value) &&
    ($('budget').value === 'any' || activity.cost <= Number($('budget').value)) &&
    (!range || activity.min <= range[0] && activity.max >= range[1]) &&
    ($('time').value === 'any' || activity.time <= Number($('time').value)) &&
    (!$('hide-completed').checked || !completed[activity.id]) &&
    (!$('use-supplies').checked || activity.supplies.every(tag => available.has(tag)))
  );
}
function matching() { return ideas.filter(matchesFilters); }
function syncCycle(list) {
  const key = JSON.stringify([
    ...fields.map(id => $(id).value), savedOnly,
    $('hide-completed').checked, $('use-supplies').checked,
    [...availableSupplies()].sort(), list.map(a => a.id)
  ]);
  if (key !== cycleKey) { cycleKey = key; seen.clear(); visibleLimit = 18; }
}
function cost(a) { return a.cost ? `~$${a.cost} / person` : 'Free'; }
function hasFilters() {
  return fields.some(id => $(id).value !== 'any') || $('hide-completed').checked || $('use-supplies').checked;
}
function render() {
  const list = matching();
  syncCycle(list);
  const featured = !savedOnly && !hasFilters();
  const display = featured ? featuredIds.map(id => ideasById.get(id)) : list.slice(0, visibleLimit);
  $('count').textContent = favorites.size;
  $('saved').setAttribute('aria-pressed', String(savedOnly));
  $('result-count').textContent = featured
    ? '9 favorites to get you started — filter to explore all 750'
    : `${list.length} ${savedOnly ? 'saved ' : ''}matching ideas · showing ${display.length}`;
  $('empty').hidden = list.length > 0;
  $('surprise').disabled = list.length === 0;
  $('supplies-panel').hidden = !$('use-supplies').checked;
  $('more-area').hidden = featured || display.length >= list.length;
  $('cards').innerHTML = display.map(a => `
    <article class="card">
      <div class="card-art" style="background:${colors[a.mood]}">
        <span class="symbol" aria-hidden="true">${a.icon}</span>
        <button class="save" data-save="${a.id}" aria-label="${favorites.has(a.id) ? 'Unsave' : 'Save'} ${escapeHtml(a.title)}" aria-pressed="${favorites.has(a.id)}">${favorites.has(a.id) ? '♥' : '♡'}</button>
      </div>
      <div class="card-body">
        <span class="tag">${labels[a.mood]}</span><h3>${escapeHtml(a.title)}</h3>
        <p>${escapeHtml(a.description)}</p>
        <div class="meta"><span>${cost(a)}</span><span>◷ ${a.time} min</span><span>${a.min}–${a.max} people</span></div>
        ${completed[a.id] ? '<div class="done-label">✓ You did this</div>' : ''}
        <button class="details" data-open="${a.id}">Make it happen <span>↗</span></button>
      </div>
    </article>`).join('');
}
function kitFor(a) {
  if (/scavenger/i.test(a.title)) return 'hunt';
  if (/trivia|geography quiz/i.test(a.title)) return 'trivia';
  if (/tournament|showdown|championship/i.test(a.title)) return 'bracket';
  return null;
}
function openIdea(a) {
  if (!a) return;
  current = a.id;
  const kit = kitFor(a);
  $('detail-content').innerHTML = `
    <div class="big-icon" aria-hidden="true">${a.icon}</div><div class="tag">${labels[a.mood]}</div>
    <h2>${escapeHtml(a.title)}</h2><p>${escapeHtml(a.description)}</p>
    <div class="meta"><span>${cost(a)}</span><span>${a.time} minutes</span><span>${a.min}–${a.max} people</span></div>
    <p><strong>Main requirements:</strong> ${a.supplies.length ? a.supplies.map(t => supplyLabels[t]).join(', ') : 'No special equipment listed'}.</p>
    <h3>Here's the plan</h3><ol>${a.steps.map(s => `<li>${escapeHtml(s)}</li>`).join('')}</ol>
    <div class="actions">
      <button class="done-button" data-complete="${a.id}">${completed[a.id] ? '↺ Mark as not done' : '✓ We did this'}</button>
      <button class="outline" data-save="${a.id}">${favorites.has(a.id) ? '♥ Saved' : '♡ Save this plan'}</button>
      ${kit ? `<button class="dark" data-kit="${kit}">Launch activity kit ↗</button>` : ''}
    </div>
    <p class="help">Costs are estimates. Check ingredients, equipment, local access, and any booking requirements before starting.</p>`;
  if (!$('detail').open) $('detail').showModal();
}
function pick() {
  const list = matching(); syncCycle(list);
  if (!list.length) return;
  let options = list.filter(a => !seen.has(a.id));
  if (!options.length) { seen.clear(); options = list; }
  if (options.length > 1) options = options.filter(a => a.id !== current);
  const a = options[Math.floor(Math.random() * options.length)];
  seen.add(a.id); openIdea(a);
}
function reset() {
  fields.forEach(id => { $(id).value = 'any'; });
  $('hide-completed').checked = false; $('use-supplies').checked = false;
  savedOnly = false; visibleLimit = 18; render();
}
function toggleFavorite(id) {
  if (!ideasById.has(id)) return;
  favorites.has(id) ? favorites.delete(id) : favorites.add(id);
  persist(favoriteKey, [...favorites]); render();
  if ($('detail').open && current === id) openIdea(ideasById.get(id));
}

// ------------ 1. Completion history and feedback ------------
function toggleComplete(id) {
  if (!ideasById.has(id)) return;
  if (completed[id]) delete completed[id];
  else completed[id] = { date: new Date().toISOString(), rating: null };
  persist('tonight-completed-v1', completed); render(); renderHistory();
  if ($('detail').open && current === id) openIdea(ideasById.get(id));
}
function renderHistory() {
  const entries = Object.entries(completed).sort((a, b) => Date.parse(b[1].date) - Date.parse(a[1].date));
  $('history-list').innerHTML = entries.length ? entries.map(([id, record]) => {
    const a = ideasById.get(Number(id));
    return `<article class="history-row"><h3>${a.icon} ${escapeHtml(a.title)}</h3>
      <p>Completed ${escapeHtml(new Date(record.date).toLocaleDateString())}</p>
      <div class="actions">
        <button class="rating" data-rating="liked" data-id="${id}" aria-pressed="${record.rating === 'liked'}">👍 Would do again</button>
        <button class="rating" data-rating="not-for-me" data-id="${id}" aria-pressed="${record.rating === 'not-for-me'}">👎 Not for me</button>
        <button class="rating" data-open="${id}">View plan</button>
        <button class="text-button" data-remove-history="${id}">Remove</button>
      </div></article>`;
  }).join('') : '<div class="panel"><p>Your completed activities will appear here. Open a plan and select “We did this.”</p></div>';
}

// ------------ Custom collections and saved bank cycles ------------
initializeCollections();

// ------------ 3. Scavenger hunt kit ------------
let hunt = readStored('tonight-hunt-v2', null);
if (!hunt || !Array.isArray(hunt.items) || !hunt.items.length || hunt.items.length > 12 ||
    !hunt.items.every(isHuntItem) || !Array.isArray(hunt.checked)) hunt = null;
if (hunt) {
  hunt.checked = [...new Set(hunt.checked.filter(i => Number.isInteger(i) && i >= 0 && i < hunt.items.length))];
  hunt.timed = Boolean(hunt.timed);
  if (!Number.isFinite(hunt.deadline)) hunt.deadline = null;
  hunt.pausedMs = Math.max(0, Number(hunt.pausedMs) || 0);
}
function saveHunt() { persist('tonight-hunt-v2', hunt); }
function renderHunt() {
  if (!hunt) {
    $('kit-content').innerHTML = `<div class="eyebrow">ACTIVITY KIT 01</div><h2>Scavenger hunt</h2>
      <p>Draw up to 12 items from 100 indoor or 100 outdoor prompts, your own collection, or both. Find items without collecting or disturbing them.</p>
      <label class="form-field">Prompt source<select id="hunt-source">${sourceOptions()}</select></label>
      <label class="form-field">Where are you hunting?<select id="hunt-mode"><option value="indoor">Indoors</option><option value="outdoor">Outdoors</option></select></label>
      <label class="form-field">Optional timer<select id="hunt-minutes"><option value="0">No timer</option><option value="10">10 minutes</option><option value="20">20 minutes</option><option value="30">30 minutes</option></select></label>
      <p class="help">Prompts cycle before repeating within each source and setting. If fewer than 12 are available, your hunt uses them all.</p>
      <p class="form-error" id="hunt-error" role="alert"></p><div class="actions"><button class="dark" id="start-hunt">Start hunt ↗</button><button class="outline" data-collection="hunt">My hunt collection</button></div>`;
    return;
  }
  const done = hunt.checked.length;
  $('kit-content').innerHTML = `<div class="eyebrow">${escapeHtml(hunt.mode.toUpperCase())} HUNT · ${escapeHtml(hunt.source)}</div><h2>${done === hunt.items.length ? 'You found them all! 🎉' : 'Look a little closer.'}</h2>
    <p class="help">Stay in permitted spaces. Leave wildlife, plants, and private property undisturbed. Your checklist saves in this browser. Some prompts may not exist nearby; start a new hunt if needed.</p>
    <p id="hunt-progress" role="status">${done} of ${hunt.items.length} found</p>
    <div class="progress-track"><div class="progress-fill" style="width:${done / hunt.items.length * 100}%"></div></div>
    ${hunt.timed ? '<div class="timer" id="hunt-clock" role="timer" aria-label="Hunt time remaining"></div>' : '<p>No timer. Go at your own pace.</p>'}
    <ul class="hunt-list">${hunt.items.map((item, i) => `<li><label class="check-label"><input type="checkbox" data-hunt-item="${i}" ${hunt.checked.includes(i) ? 'checked' : ''}><span>${escapeHtml(item.text)}</span></label></li>`).join('')}</ul>
    ${done === hunt.items.length ? '<button class="done-button" data-mark-kit="hunt">✓ Add scavenger hunt to history</button>' : ''}
    <div class="actions">${hunt.timed ? `<button class="outline" id="pause-hunt">${hunt.deadline ? 'Pause timer' : 'Resume timer'}</button>` : ''}<button class="outline" id="restart-hunt">New hunt</button><button class="text-button" data-collection="hunt">My collection</button></div>`;
  updateClock();
}
function updateClock() {
  if (!hunt || !$('hunt-clock')) return;
  const remaining = hunt.deadline ? Math.max(0, hunt.deadline - Date.now()) : hunt.pausedMs;
  const seconds = Math.ceil(remaining / 1000);
  $('hunt-clock').textContent = seconds > 0
    ? `${Math.floor(seconds / 60)}:${String(seconds % 60).padStart(2, '0')}${hunt.deadline ? '' : ' · paused'}`
    : "Time's up! You can keep exploring.";
}

// ------------ 4. Trivia kit ------------
let trivia = readStored('tonight-trivia-v2', null);
function validTrivia(t) {
  return t && Array.isArray(t.teams) && t.teams.length >= 1 && t.teams.length <= 6 &&
    t.teams.every(n => typeof n === 'string' && n.length <= 40) &&
    Array.isArray(t.questions) && t.questions.length >= 1 && t.questions.length <= 10 &&
    t.questions.every(isQuestion) && new Set(t.questions.map(q => q.id)).size === t.questions.length &&
    Array.isArray(t.awards) && t.awards.length === t.questions.length &&
    t.awards.every(row => Array.isArray(row) && row.length === t.teams.length && row.every(v => typeof v === 'boolean')) &&
    Number.isInteger(t.index) && t.index >= 0 && t.index <= t.questions.length;
}
if (!validTrivia(trivia)) trivia = null;
function triviaScores(t) { return t.teams.map((_, i) => t.awards.reduce((sum, row) => sum + Number(row[i]), 0)); }
function saveTrivia() { persist('tonight-trivia-v2', trivia); }
function renderTrivia() {
  if (!trivia) {
    const categories = [...new Set([...builtInQuestions, ...collection.trivia].map(q => q.category))].sort();
    $('kit-content').innerHTML = `<div class="eyebrow">ACTIVITY KIT 02</div><h2>Trivia night</h2>
      <p>500 built-in questions, plus your own. Choose up to 10 questions per game. The host reveals answers and awards points.</p>
      <label class="form-field">Question source<select id="trivia-source">${sourceOptions()}</select></label>
      <div class="collection-fields"><label class="form-field">Category<select id="trivia-category"><option value="any">Any category</option>${categories.map(c => `<option value="${escapeHtml(c)}">${escapeHtml(c)}</option>`).join('')}</select></label>
      <label class="form-field">Difficulty<select id="trivia-difficulty">${difficultyOptions('any', true)}</select></label></div>
      <label class="form-field">1–6 players or teams, one per line<textarea id="trivia-teams" maxlength="260">Team One\nTeam Two</textarea></label>
      <p class="help">Questions cycle before repeating within each source, category, and difficulty combination. If fewer than 10 match, the game uses them all. Difficulty labels are approximate.</p>
      <p class="form-error" id="trivia-error" role="alert"></p><div class="actions"><button class="dark" id="start-trivia">Start quiz ↗</button><button class="outline" data-collection="trivia">My question collection</button></div>`;
    return;
  }
  const scores = triviaScores(trivia);
  const finished = trivia.index === trivia.questions.length;
  const maxScore = Math.max(...scores);
  const leaders = trivia.teams.filter((_, i) => scores[i] === maxScore);
  const scoreHtml = `<div class="score-grid">${trivia.teams.map((name, i) => `<div class="score-box">${escapeHtml(name)}<strong>${scores[i]}</strong>${!finished && trivia.revealed ? `<button class="quiz-team" data-trivia-award="${i}" aria-pressed="${trivia.awards[trivia.index][i]}">${trivia.awards[trivia.index][i] ? '✓ Point awarded · undo' : '+1 correct answer'}</button>` : ''}</div>`).join('')}</div>`;
  if (finished) {
    $('kit-content').innerHTML = `<div class="eyebrow">FINAL SCORES · ${trivia.questions.length} QUESTIONS</div><h2>${leaders.length > 1 ? "It's a tie!" : 'We have a winner!'}</h2><p>${leaders.map(escapeHtml).join(' & ')} · ${maxScore} points</p>${scoreHtml}<div class="actions"><button class="done-button" data-mark-kit="trivia">✓ Add trivia to history</button><button class="outline" id="restart-trivia">New quiz</button><button class="text-button" data-collection="trivia">My collection</button></div>`;
    return;
  }
  const q = trivia.questions[trivia.index];
  $('kit-content').innerHTML = `<div class="eyebrow">QUESTION ${trivia.index + 1} OF ${trivia.questions.length} · ${escapeHtml(q.category.toUpperCase())} · ${escapeHtml(q.difficulty.toUpperCase())}</div><h2>Think it through.</h2>
    ${scoreHtml}<div class="question">${escapeHtml(q.question)}</div>
    ${trivia.revealed ? `<div class="answer">${escapeHtml(q.answer)}</div><p class="help">Award points above to every correct team. Select an awarded point again to undo it.</p>` : '<button class="dark" id="reveal-trivia">Reveal answer</button>'}
    <div class="actions"><button class="dark" id="next-trivia" ${trivia.revealed ? '' : 'disabled'}>${trivia.index === trivia.questions.length - 1 ? 'See final scores' : 'Next question ↗'}</button><button class="text-button" id="restart-trivia">Restart quiz</button></div>`;
}

// ------------ 5. Tournament bracket kit ------------
let bracket = readStored('tonight-bracket-v1', null);
if (!bracket || !Array.isArray(bracket.names) || bracket.names.length < 2 || bracket.names.length > 16 ||
    !bracket.names.every(n => typeof n === 'string' && n.length <= 40) ||
    !bracket.choices || typeof bracket.choices !== 'object') bracket = null;
function buildRounds(names, choices) {
  const size = 2 ** Math.ceil(Math.log2(names.length));
  const entrants = [...names, ...Array(size - names.length).fill(null)];
  const rounds = [];
  for (let r = 0; r < Math.log2(size); r++) {
    const matches = [];
    for (let m = 0; m < size / 2 ** (r + 1); m++) {
      const parents = r === 0 ? null : [rounds[r - 1][m * 2], rounds[r - 1][m * 2 + 1]];
      const ready = !parents || parents.every(p => p.decided);
      const slots = r === 0 ? [entrants[m * 2], entrants[m * 2 + 1]] : parents.map(p => p.winner);
      let winner = null;
      let decided = false;
      if (ready) {
        const actual = slots.filter(n => n !== null);
        if (actual.length <= 1) { winner = actual[0] ?? null; decided = true; }
        else if (actual.includes(choices[`${r}-${m}`])) { winner = choices[`${r}-${m}`]; decided = true; }
      }
      matches.push({ slots, ready, decided, winner });
    }
    rounds.push(matches);
  }
  return rounds;
}
function chooseWinner(r, m, side) {
  const rounds = buildRounds(bracket.names, bracket.choices);
  const match = rounds[r]?.[m];
  if (!match || !match.ready || match.slots.filter(n => n !== null).length !== 2 || ![0, 1].includes(side)) return;
  if (match.winner === match.slots[side]) return;
  // An earlier result change invalidates later rounds, so no stale champion survives.
  Object.keys(bracket.choices).forEach(key => {
    if (Number(key.split('-')[0]) > r) delete bracket.choices[key];
  });
  bracket.choices[`${r}-${m}`] = match.slots[side];
  persist('tonight-bracket-v1', bracket); renderBracket();
}
function renderBracket() {
  if (!bracket) {
    $('kit-content').innerHTML = `<div class="eyebrow">ACTIVITY KIT 03</div><h2>Build your bracket.</h2><p>For any head-to-head game. Enter 2–16 players or teams. Odd-sized fields receive automatic byes.</p>
      <label class="form-field">Entrants, one per line<textarea id="bracket-names" maxlength="660" placeholder="Alex\nJordan\nSam\nTaylor"></textarea></label>
      <label class="check-label"><input type="checkbox" id="shuffle-bracket" checked> Shuffle the starting order</label>
      <p class="form-error" id="bracket-error" role="alert"></p><button class="dark" id="start-bracket">Create bracket ↗</button>`;
    return;
  }
  const rounds = buildRounds(bracket.names, bracket.choices);
  const final = rounds[rounds.length - 1][0];
  $('kit-content').innerHTML = `<div class="eyebrow">SINGLE-ELIMINATION TOURNAMENT</div><h2>The road to the final.</h2>
    <p class="help">Select each match winner. You can change a result; doing so clears later rounds so they can be played again. Swipe the bracket horizontally on small screens.</p>
    ${final.decided && final.winner ? `<div class="champion">🏆 Champion: ${escapeHtml(final.winner)}</div>` : ''}
    <div class="bracket">${rounds.map((round, r) => `<section class="bracket-round"><h3>${r === rounds.length - 1 ? 'Final' : `Round ${r + 1}`}</h3>${round.map((match, m) => `<div class="match"><small>Match ${m + 1}${match.decided && match.slots.filter(n => n !== null).length < 2 ? ' · automatic bye' : ''}</small>${match.slots.map((name, side) => `<button class="${name !== null && name === match.winner ? 'winner' : ''}" data-bracket-r="${r}" data-bracket-m="${m}" data-bracket-side="${side}" ${!match.ready || name === null || match.slots.some(n => n === null) ? 'disabled' : ''} aria-pressed="${name !== null && name === match.winner}">${match.ready ? (name === null ? 'Bye' : escapeHtml(name)) : 'Awaiting earlier match'}</button>`).join('')}</div>`).join('')}</section>`).join('')}</div>
    <div class="actions">${final.decided ? '<button class="done-button" data-mark-kit="bracket">✓ Add tournament to history</button>' : ''}<button class="outline" id="restart-bracket">New tournament</button></div>`;
}

// ------------ 6. Pass-the-phone group voting ------------
let vote = readStored('tonight-vote-v1', null);
function validVote(v) {
  return v && Array.isArray(v.names) && v.names.length >= 2 && v.names.length <= 6 &&
    v.names.every(n => typeof n === 'string' && n.length <= 40) &&
    Array.isArray(v.ids) && v.ids.length > 0 && v.ids.length <= 12 &&
    v.ids.every(id => ideasById.has(id)) &&
    Array.isArray(v.ballots) && v.ballots.length === v.names.length &&
    v.ballots.every(row => Array.isArray(row) && row.length === v.ids.length && row.every(n => n === null || [0, 1, 2].includes(n))) &&
    Number.isInteger(v.person) && v.person >= 0 && v.person <= v.names.length &&
    Number.isInteger(v.card) && v.card >= 0 && v.card < v.ids.length &&
    ['handoff', 'voting', 'results'].includes(v.phase);
}
if (!validVote(vote)) vote = null;
function rankVotes(v) {
  return v.ids.map((id, index) => {
    const answers = v.ballots.map(row => row[index]);
    return {
      id, score: answers.reduce((sum, x) => sum + (x ?? 0), 0),
      yes: answers.filter(x => x === 2).length,
      maybe: answers.filter(x => x === 1).length,
      pass: answers.filter(x => x === 0).length
    };
  }).sort((a, b) => (a.pass - b.pass) || (b.score - a.score) || (b.yes - a.yes) || (a.id - b.id));
}
function saveVote() { persist('tonight-vote-v1', vote); }
function renderVote() {
  const panel = $('vote-panel');
  if (!vote) {
    panel.innerHTML = `<p>Set your filters above first. Budget and time apply to everyone. We'll also check that each plan supports your exact number of voters.</p>
      <label class="form-field">2–6 people, one name per line<textarea id="vote-names" maxlength="260" placeholder="Alex\nJordan\nSam"></textarea></label>
      <p class="form-error" id="vote-error" role="alert"></p><button class="dark" id="start-vote">Find our shared plan ↗</button>`;
    return;
  }
  if (vote.phase === 'handoff') {
    panel.innerHTML = `<div class="vote-card"><div class="eyebrow">PERSON ${vote.person + 1} OF ${vote.names.length}</div><h3>Pass to ${escapeHtml(vote.names[vote.person])}.</h3><p>Take your turn, then pass the device along. The shortlist stays fixed for this session even if the filters change.</p><button class="dark" id="begin-voter">I'm ${escapeHtml(vote.names[vote.person])} · start voting</button></div><button class="text-button" id="restart-vote">Start over</button>`;
    return;
  }
  if (vote.phase === 'voting') {
    const a = ideasById.get(vote.ids[vote.card]);
    panel.innerHTML = `<div class="vote-card"><div class="eyebrow">${escapeHtml(vote.names[vote.person])} · PLAN ${vote.card + 1} OF ${vote.ids.length}</div>
      <div class="kit-icon">${a.icon}</div><h3>${escapeHtml(a.title)}</h3><p>${escapeHtml(a.description)}</p><p>${cost(a)} · ${a.time} minutes · ${a.min}–${a.max} people</p>
      <div class="vote-buttons"><button data-vote-value="0">Pass</button><button data-vote-value="1">Maybe</button><button data-vote-value="2">Yes!</button></div>
      ${vote.card > 0 ? '<button class="text-button" id="previous-vote">← Previous plan</button>' : ''}</div><button class="text-button" id="restart-vote">Start over</button>`;
    return;
  }
  const ranked = rankVotes(vote);
  const noPass = ranked.some(r => r.pass === 0);
  panel.innerHTML = `<h3>${noPass ? 'Your best shared matches' : 'No full agreement this time'}</h3><p class="help">Plans with fewer Pass votes rank first, then total points (Yes = 2, Maybe = 1). Ties share a rank. ${noPass ? '' : 'Try different filters or discuss the closest options.'}</p>
    ${ranked.map((r, i) => {
      const a = ideasById.get(r.id);
      const rank = ranked.findIndex(x => x.pass === r.pass && x.score === r.score && x.yes === r.yes) + 1;
      return `<article class="result-row ${r.yes === vote.names.length ? 'unanimous' : ''}"><h3>${rank}. ${a.icon} ${escapeHtml(a.title)}</h3><p>${r.yes} Yes · ${r.maybe} Maybe · ${r.pass} Pass · ${r.score}/${vote.names.length * 2} points${r.yes === vote.names.length ? ' · Everyone said yes!' : ''}</p><button class="outline" data-open="${r.id}">Open this plan ↗</button></article>`;
    }).join('')}<button class="dark" id="restart-vote">Plan another hangout</button>`;
}
function castVote(value) {
  if (!vote || vote.phase !== 'voting' || ![0, 1, 2].includes(value)) return;
  vote.ballots[vote.person][vote.card] = value;
  vote.card++;
  if (vote.card === vote.ids.length) {
    vote.card = 0; vote.person++;
    vote.phase = vote.person === vote.names.length ? 'results' : 'handoff';
  }
  saveVote(); renderVote();
}

// ------------ Kit navigation and event handlers ------------
function openKit(type) {
  if (!['hunt', 'trivia', 'bracket'].includes(type)) return;
  if ($('detail').open) $('detail').close();
  activeKit = type;
  renderActiveKit();
  if (!$('kit-dialog').open) $('kit-dialog').showModal();
  clearInterval(timerInterval);
  if (type === 'hunt') timerInterval = setInterval(updateClock, 1000);
}
function renderActiveKit() {
  if (activeKit === 'collection') renderCollection();
  if (activeKit === 'hunt') renderHunt();
  if (activeKit === 'trivia') renderTrivia();
  if (activeKit === 'bracket') renderBracket();
}
function confirmRestart(text) { return window.confirm(text); }
function handleKitClick(event) {
  if (activeKit === 'collection') { handleCollectionClick(event); return; }
  const award = event.target.closest('[data-trivia-award]');
  const win = event.target.closest('[data-bracket-r]');
  const mark = event.target.closest('[data-mark-kit]');
  if (award && trivia && trivia.revealed && trivia.index < trivia.questions.length) {
    const i = Number(award.dataset.triviaAward);
    trivia.awards[trivia.index][i] = !trivia.awards[trivia.index][i];
    saveTrivia(); renderTrivia(); return;
  }
  if (win && bracket) {
    chooseWinner(Number(win.dataset.bracketR), Number(win.dataset.bracketM), Number(win.dataset.bracketSide)); return;
  }
  if (mark) {
    const ids = { hunt: 6, trivia: 7, bracket: 24 };
    const id = ids[mark.dataset.markKit];
    completed[id] = { date: new Date().toISOString(), rating: completed[id]?.rating ?? null };
    persist('tonight-completed-v1', completed); render(); renderHistory();
    mark.textContent = '✓ Added to history'; mark.disabled = true; return;
  }
  const id = event.target.closest('button')?.id;
  if (id === 'start-hunt') {
    try {
      const mode = $('hunt-mode').value;
      const source = $('hunt-source').value;
      const pool = huntPool(source, mode);
      if (!pool.length) throw new Error('No prompts match. Add your own items for this setting or choose a different source.');
      const items = drawBank(pool, 12, JSON.stringify(['hunt', source, mode]));
      const minutes = Number($('hunt-minutes').value);
      hunt = { mode, source, items, checked: [], timed: minutes > 0, deadline: minutes ? Date.now() + minutes * 60000 : null, pausedMs: minutes * 60000 };
      saveHunt(); renderHunt();
    } catch (error) { $('hunt-error').textContent = error.message; }
  }
  if (id === 'pause-hunt' && hunt) {
    if (hunt.deadline) { hunt.pausedMs = Math.max(0, hunt.deadline - Date.now()); hunt.deadline = null; }
    else if (hunt.pausedMs > 0) hunt.deadline = Date.now() + hunt.pausedMs;
    saveHunt(); renderHunt();
  }
  if (id === 'restart-hunt' && confirmRestart('Start a new hunt and clear this checklist? Custom items and bank repeat history will stay saved.')) { hunt = null; saveHunt(); renderHunt(); }
  if (id === 'start-trivia') {
    try {
      const teams = cleanNames($('trivia-teams').value, 1, 6);
      const source = $('trivia-source').value;
      const category = $('trivia-category').value;
      const difficulty = $('trivia-difficulty').value;
      const pool = questionPool(source, category, difficulty);
      if (!pool.length) throw new Error('No questions match. Add your own questions or change the source, category, or difficulty.');
      const selected = drawBank(pool, 10, JSON.stringify(['trivia', source, category, difficulty]));
      trivia = { teams, questions: selected, source, index: 0, revealed: false, awards: selected.map(() => teams.map(() => false)) };
      saveTrivia(); renderTrivia();
    } catch (error) { $('trivia-error').textContent = error.message; }
  }
  if (id === 'reveal-trivia' && trivia) { trivia.revealed = true; saveTrivia(); renderTrivia(); }
  if (id === 'next-trivia' && trivia?.revealed && trivia.index < trivia.questions.length) { trivia.index++; trivia.revealed = false; saveTrivia(); renderTrivia(); }
  if (id === 'restart-trivia' && confirmRestart('Start a new quiz and clear these scores? Custom questions and bank repeat history will stay saved.')) { trivia = null; saveTrivia(); renderTrivia(); }
  if (id === 'start-bracket') {
    try {
      let names = cleanNames($('bracket-names').value, 2, 16);
      if ($('shuffle-bracket').checked) names = shuffle(names);
      bracket = { names, choices: {} }; persist('tonight-bracket-v1', bracket); renderBracket();
    } catch (error) { $('bracket-error').textContent = error.message; }
  }
  if (id === 'restart-bracket' && confirmRestart('Clear this bracket and start a new tournament?')) { bracket = null; persist('tonight-bracket-v1', bracket); renderBracket(); }
}
$('supply-options').innerHTML = Object.entries(supplyLabels).map(([key, text]) => `<label class="check-label"><input type="checkbox" data-supply="${key}" checked>${text}</label>`).join('');
fields.forEach(id => $(id).addEventListener('change', render));
['hide-completed', 'use-supplies'].forEach(id => $(id).addEventListener('change', render));
$('supply-options').addEventListener('change', render);
$('reset').onclick = reset; $('empty-reset').onclick = reset;
$('more').onclick = () => { visibleLimit += 18; render(); };
$('saved').onclick = () => { savedOnly = !savedOnly; render(); $('explore').scrollIntoView({ behavior: 'auto' }); };
$('surprise').onclick = pick; $('another').onclick = pick;
$('close').onclick = () => $('detail').close();
$('close-kit').onclick = () => $('kit-dialog').close();
$('kit-dialog').addEventListener('close', () => { clearInterval(timerInterval); timerInterval = null; });
$('kit-content').addEventListener('click', handleKitClick);
$('kit-content').addEventListener('change', event => {
  if (event.target.id === 'import-collection') { importCollection(event.target.files[0]); return; }
  if (!event.target.matches('[data-hunt-item]') || !hunt) return;
  const i = Number(event.target.dataset.huntItem);
  hunt.checked = event.target.checked ? [...new Set([...hunt.checked, i])] : hunt.checked.filter(x => x !== i);
  if (hunt.checked.length === hunt.items.length && hunt.deadline) {
    hunt.pausedMs = Math.max(0, hunt.deadline - Date.now()); hunt.deadline = null;
  }
  saveHunt(); renderHunt();
  $('kit-content').querySelector(`[data-hunt-item="${i}"]`)?.focus();
});
$('vote-panel').addEventListener('click', event => {
  const choice = event.target.closest('[data-vote-value]');
  if (choice) { castVote(Number(choice.dataset.voteValue)); return; }
  const id = event.target.closest('button')?.id;
  if (id === 'start-vote') {
    try {
      const names = cleanNames($('vote-names').value, 2, 6);
      const eligible = matching().filter(a => a.min <= names.length && a.max >= names.length);
      if (!eligible.length) throw new Error('No plans fit these filters and your exact group size. Adjust the filters and try again.');
      const ids = shuffle(eligible).slice(0, 12).map(a => a.id);
      vote = { names, ids, ballots: names.map(() => ids.map(() => null)), person: 0, card: 0, phase: 'handoff' };
      saveVote(); renderVote();
    } catch (error) { $('vote-error').textContent = error.message; }
  }
  if (id === 'begin-voter' && vote) { vote.phase = 'voting'; saveVote(); renderVote(); }
  if (id === 'previous-vote' && vote?.phase === 'voting') { vote.card = Math.max(0, vote.card - 1); saveVote(); renderVote(); }
  if (id === 'restart-vote' && confirmRestart('Start a new group vote and clear this session?')) { vote = null; saveVote(); renderVote(); }
});
$('clear-history').onclick = () => {
  if (Object.keys(completed).length && confirmRestart('Clear all completed activities and ratings?')) {
    completed = {}; persist('tonight-completed-v1', completed); render(); renderHistory();
  }
};
document.addEventListener('click', event => {
  const customCollection = event.target.closest('[data-collection]');
  if (customCollection) { openCollection(customCollection.dataset.collection); return; }
  const kit = event.target.closest('[data-kit]');
  const open = event.target.closest('[data-open]');
  const save = event.target.closest('[data-save]');
  const done = event.target.closest('[data-complete]');
  const rating = event.target.closest('[data-rating]');
  const remove = event.target.closest('[data-remove-history]');
  if (kit) openKit(kit.dataset.kit);
  if (open) openIdea(ideasById.get(Number(open.dataset.open)));
  if (save) {
    toggleFavorite(Number(save.dataset.save));
    if (!$('detail').open) document.querySelector(`[data-save="${save.dataset.save}"]`)?.focus();
  }
  if (done) toggleComplete(Number(done.dataset.complete));
  if (rating && completed[rating.dataset.id]) {
    const record = completed[rating.dataset.id];
    record.rating = record.rating === rating.dataset.rating ? null : rating.dataset.rating;
    persist('tonight-completed-v1', completed); renderHistory();
  }
  if (remove) toggleComplete(Number(remove.dataset.removeHistory));
});
[$('detail'), $('kit-dialog')].forEach(dialog => dialog.addEventListener('click', event => {
  if (event.target !== dialog) return;
  const box = dialog.getBoundingClientRect();
  if (event.clientX < box.left || event.clientX > box.right || event.clientY < box.top || event.clientY > box.bottom) dialog.close();
}));
$('storage-warning').hidden = !storageFailed;
render(); renderHistory(); renderVote();
