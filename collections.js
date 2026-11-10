'use strict';

// Shared custom banks and repeat tracking. All data stays in localStorage.
const collectionKey = 'tonight-custom-collections-v1';
const usageKey = 'tonight-bank-cycles-v1';
const collectionLimit = 2000;
let collection = { trivia: [], hunt: [] };
let bankUsage = {};
let collectionView = { kind: 'trivia', editId: null, search: '', limit: 15 };

function normalizeText(value) {
  return String(value).trim().replace(/\s+/g, ' ').toLowerCase();
}
function newEntryId(prefix) {
  const suffix = globalThis.crypto?.randomUUID?.() ?? `${Date.now()}-${Math.random().toString(36).slice(2)}`;
  return `${prefix}-${suffix}`;
}
function validText(value, min, max) {
  return typeof value === 'string' && value.trim().length >= min && value.trim().length <= max;
}
function isQuestion(item) {
  return item && validText(item.id, 1, 100) && validText(item.question, 3, 240) &&
    validText(item.answer, 1, 300) && validText(item.category, 1, 40) &&
    ['easy', 'medium', 'hard'].includes(item.difficulty);
}
function isHuntItem(item) {
  return item && validText(item.id, 1, 100) && validText(item.text, 3, 200) &&
    ['indoor', 'outdoor', 'both'].includes(item.setting);
}
function initializeCollections() {
  const saved = readStored(collectionKey, null);
  if (saved && Array.isArray(saved.trivia) && Array.isArray(saved.hunt)) {
    collection.trivia = saved.trivia.filter(isQuestion).slice(0, collectionLimit);
    collection.hunt = saved.hunt.filter(isHuntItem).slice(0, collectionLimit);
  }
  const savedUsage = readStored(usageKey, {});
  bankUsage = savedUsage && typeof savedUsage === 'object' && !Array.isArray(savedUsage) ? savedUsage : {};
}
function saveCollection() { persist(collectionKey, collection); }
function questionPool(source, category, difficulty) {
  const pool = source === 'custom' ? collection.trivia : source === 'built-in'
    ? builtInQuestions : [...builtInQuestions, ...collection.trivia];
  return pool.filter(q => (category === 'any' || q.category === category) &&
    (difficulty === 'any' || q.difficulty === difficulty));
}
function huntPool(source, setting) {
  const pool = source === 'custom' ? collection.hunt : source === 'built-in'
    ? builtInHuntItems : [...builtInHuntItems, ...collection.hunt];
  // Dedupe wording in a mixed pool, including custom Both entries.
  const seenText = new Set();
  return pool.filter(item => {
    if (item.setting !== setting && item.setting !== 'both') return false;
    const key = normalizeText(item.text);
    if (seenText.has(key)) return false;
    seenText.add(key); return true;
  });
}
function drawBank(pool, count, key) {
  // Consume all unseen entries before wrapping. Never repeat inside a session.
  const selected = [];
  const valid = new Set(pool.map(item => item.id));
  const previous = Array.isArray(bankUsage[key]) ? bankUsage[key] : [];
  let used = new Set(previous.filter(id => valid.has(id)));
  while (selected.length < Math.min(count, pool.length)) {
    const remaining = pool.filter(item => !used.has(item.id) && !selected.some(s => s.id === item.id));
    if (!remaining.length) {
      used = new Set();
      if (selected.length === pool.length) break;
      continue;
    }
    const next = remaining[Math.floor(Math.random() * remaining.length)];
    selected.push({ ...next }); used.add(next.id);
  }
  bankUsage[key] = [...used]; persist(usageKey, bankUsage);
  return selected;
}
function sourceOptions() {
  return '<option value="built-in">Built-in only</option><option value="custom">My own only</option><option value="mixed">Mixed</option>';
}
function difficultyOptions(value = 'medium', includeAny = false) {
  return `${includeAny ? '<option value="any">Any difficulty</option>' : ''}${['easy', 'medium', 'hard'].map(d => `<option value="${d}" ${d === value ? 'selected' : ''}>${d[0].toUpperCase() + d.slice(1)}</option>`).join('')}`;
}
function collectionHeader() {
  return `<div class="eyebrow">MY COLLECTION · THIS BROWSER</div><h2>Make it your own.</h2>
    <p>Save your own questions and hunt prompts here. Entries stay on this browser, not in an account. Export a backup before clearing browser data or moving devices.</p>
    <p class="help">Built-in banks: 500 trivia questions · 100 indoor hunt items · 100 outdoor hunt items. Your additions: ${collection.trivia.length} questions · ${collection.hunt.length} hunt items.</p>
    <div class="actions"><button class="outline" id="export-collection">Export backup</button><label class="outline upload-label">Import backup<input type="file" id="import-collection" accept=".json,application/json"></label></div>
    <p id="collection-message" role="status"></p>
    <div class="actions"><button class="${collectionView.kind === 'trivia' ? 'dark' : 'outline'}" data-collection-tab="trivia">Trivia questions</button><button class="${collectionView.kind === 'hunt' ? 'dark' : 'outline'}" data-collection-tab="hunt">Hunt items</button></div>`;
}
function renderCollection() {
  const kind = collectionView.kind;
  const item = collection[kind].find(entry => entry.id === collectionView.editId);
  const filtered = collection[kind].filter(entry => normalizeText(kind === 'trivia' ? `${entry.question} ${entry.category}` : entry.text).includes(normalizeText(collectionView.search)));
  const items = filtered.slice(0, collectionView.limit);
  $('kit-content').innerHTML = collectionHeader() + `
    <div class="collection-form"><h3>${item ? 'Edit' : 'Add'} ${kind === 'trivia' ? 'a question' : 'a hunt item'}</h3>
      ${kind === 'trivia' ? `
        <label class="form-field">Question (3–240 characters)<textarea id="custom-question" maxlength="240">${escapeHtml(item?.question ?? '')}</textarea></label>
        <label class="form-field">Answer (1–300 characters)<textarea id="custom-answer" maxlength="300">${escapeHtml(item?.answer ?? '')}</textarea></label>
        <div class="collection-fields"><label class="form-field">Category<input id="custom-category" type="text" maxlength="40" value="${escapeHtml(item?.category ?? 'My questions')}"></label>
        <label class="form-field">Difficulty<select id="custom-difficulty">${difficultyOptions(item?.difficulty)}</select></label></div>` : `
        <label class="form-field">What should players find? (3–200 characters)<textarea id="custom-hunt" maxlength="200">${escapeHtml(item?.text ?? '')}</textarea></label>
        <label class="form-field">Setting<select id="custom-setting">${['indoor', 'outdoor', 'both'].map(s => `<option value="${s}" ${s === item?.setting ? 'selected' : ''}>${s[0].toUpperCase() + s.slice(1)}</option>`).join('')}</select></label>
        <p class="help">Write observable prompts. Avoid private property, handling wildlife, or collecting hazardous objects.</p>`}
      <p class="form-error" id="custom-error" role="alert"></p><div class="actions"><button class="dark" id="save-custom">${item ? 'Save changes' : 'Add to my collection'}</button>${item ? '<button class="outline" id="cancel-custom-edit">Cancel edit</button>' : ''}</div>
    </div>
    <label class="form-field">Search my ${kind === 'trivia' ? 'questions' : 'hunt items'}<input type="text" id="collection-search" maxlength="200" value="${escapeHtml(collectionView.search)}" placeholder="Search this collection"></label>
    <div class="actions"><button class="outline" id="search-collection">Search</button><button class="text-button" id="clear-collection-search">Clear search</button></div>
    <p class="help">${filtered.length} matching entries · showing ${items.length}</p>
    ${items.length ? items.map(entry => `<article class="collection-entry"><h3>${escapeHtml(kind === 'trivia' ? entry.question : entry.text)}</h3>
      <p>${kind === 'trivia' ? `Answer: ${escapeHtml(entry.answer)}<br>${escapeHtml(entry.category)} · ${entry.difficulty}` : `Setting: ${entry.setting}`}</p>
      <div class="actions"><button class="outline" data-edit-custom="${escapeHtml(entry.id)}">Edit</button><button class="text-button" data-delete-custom="${escapeHtml(entry.id)}">Delete</button></div></article>`).join('') : '<p class="help">No entries yet, or none match your search. Add one above.</p>'}
    ${items.length < filtered.length ? '<button class="outline" id="more-collection">Show more</button>' : ''}
    <div class="actions"><button class="outline" data-kit="trivia">Play trivia</button><button class="outline" data-kit="hunt">Start a hunt</button></div>`;
}
function openCollection(kind = 'trivia') {
  collectionView = { kind: kind === 'hunt' ? 'hunt' : 'trivia', editId: null, search: '', limit: 15 };
  activeKit = 'collection'; renderCollection();
  if ($('detail').open) $('detail').close();
  if (!$('kit-dialog').open) $('kit-dialog').showModal();
  clearInterval(timerInterval); timerInterval = null;
}
function saveCustomEntry() {
  const kind = collectionView.kind;
  const previous = collection[kind].find(item => item.id === collectionView.editId);
  if (!previous && collection[kind].length >= collectionLimit) throw new Error(`This browser supports up to ${collectionLimit} custom entries of each type. Export a backup and remove unused entries first.`);
  let entry;
  if (kind === 'trivia') {
    entry = {
      id: previous?.id ?? newEntryId('cq'), question: $('custom-question').value.trim(),
      answer: $('custom-answer').value.trim(), category: $('custom-category').value.trim(),
      difficulty: $('custom-difficulty').value
    };
    if (!isQuestion(entry)) throw new Error('Enter a question, answer, category, and valid difficulty within the displayed limits.');
    const duplicate = [...builtInQuestions, ...collection.trivia].some(q => q.id !== entry.id && normalizeText(q.question) === normalizeText(entry.question));
    if (duplicate) throw new Error('That question already exists. Edit the existing custom entry or write a different question.');
  } else {
    entry = { id: previous?.id ?? newEntryId('ch'), text: $('custom-hunt').value.trim(), setting: $('custom-setting').value };
    if (!isHuntItem(entry)) throw new Error('Enter a hunt item between 3 and 200 characters and choose a setting.');
    const duplicate = [...builtInHuntItems, ...collection.hunt].some(h => h.id !== entry.id && normalizeText(h.text) === normalizeText(entry.text) && (h.setting === entry.setting || h.setting === 'both' || entry.setting === 'both'));
    if (duplicate) throw new Error('That prompt already exists for an overlapping setting.');
  }
  if (previous) collection[kind] = collection[kind].map(item => item.id === previous.id ? entry : item);
  else collection[kind].unshift(entry);
  saveCollection(); collectionView.editId = null; renderCollection();
  $('collection-message').textContent = 'Saved to this browser. Export a backup to keep a separate copy.';
}
function exportCollection() {
  const data = { app: 'tonight-custom-collections', version: 1, exportedAt: new Date().toISOString(), trivia: collection.trivia, hunt: collection.hunt };
  const url = URL.createObjectURL(new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' }));
  const link = document.createElement('a'); link.href = url; link.download = 'tonight-my-collection.json';
  document.body.appendChild(link); link.click(); link.remove();
  setTimeout(() => URL.revokeObjectURL(url), 10000);
  $('collection-message').textContent = 'Backup download started. Keep the JSON file somewhere safe.';
}
function mergeBackup(data) {
  if (!data || data.app !== 'tonight-custom-collections' || data.version !== 1 ||
      !Array.isArray(data.trivia) || !Array.isArray(data.hunt) ||
      data.trivia.length > collectionLimit || data.hunt.length > collectionLimit ||
      !data.trivia.every(isQuestion) || !data.hunt.every(isHuntItem)) {
    throw new Error('This is not a valid Tonight collection backup. No entries were imported.');
  }
  // Build a new collection first; errors never leave a half-imported bank.
  const next = { trivia: [...collection.trivia], hunt: [...collection.hunt] };
  let added = 0;
  let skipped = 0;
  for (const q of data.trivia) {
    const duplicate = [...builtInQuestions, ...next.trivia].some(item => normalizeText(item.question) === normalizeText(q.question));
    if (duplicate) { skipped++; continue; }
    next.trivia.push({ id: newEntryId('cq'), question: q.question.trim(), answer: q.answer.trim(), category: q.category.trim(), difficulty: q.difficulty }); added++;
  }
  for (const h of data.hunt) {
    const duplicate = [...builtInHuntItems, ...next.hunt].some(item => normalizeText(item.text) === normalizeText(h.text) && (item.setting === h.setting || item.setting === 'both' || h.setting === 'both'));
    if (duplicate) { skipped++; continue; }
    next.hunt.push({ id: newEntryId('ch'), text: h.text.trim(), setting: h.setting }); added++;
  }
  if (next.trivia.length > collectionLimit || next.hunt.length > collectionLimit) throw new Error('The merged collection would exceed the 2,000-entry limit per type. Nothing was imported.');
  collection = next; saveCollection();
  return { added, skipped };
}
async function importCollection(file) {
  if (!file) return;
  const message = $('collection-message');
  try {
    if (file.size > 5 * 1024 * 1024) throw new Error('Choose a backup under 5 MB.');
    const data = JSON.parse(await file.text());
    const result = mergeBackup(data); renderCollection();
    $('collection-message').textContent = `Imported ${result.added} entries. Skipped ${result.skipped} duplicates. Existing entries were kept.`;
  } catch (error) {
    if (message.isConnected !== false) message.textContent = error instanceof SyntaxError ? 'This file is not valid JSON. Nothing was imported.' : error.message;
  }
}
function handleCollectionClick(event) {
  const edit = event.target.closest('[data-edit-custom]');
  const remove = event.target.closest('[data-delete-custom]');
  const tab = event.target.closest('[data-collection-tab]');
  const id = event.target.closest('button')?.id;
  if (tab) { collectionView = {kind: tab.dataset.collectionTab, editId: null, search: '', limit: 15}; renderCollection(); }
  if (edit) { collectionView.editId = edit.dataset.editCustom; renderCollection(); $('kit-dialog').scrollTop = 0; }
  if (remove && confirmRestart('Delete this custom entry from this browser? Export a backup first if you may want it later.')) {
    collection[collectionView.kind] = collection[collectionView.kind].filter(item => item.id !== remove.dataset.deleteCustom);
    collectionView.editId = null; saveCollection(); renderCollection();
  }
  if (id === 'save-custom') { try { saveCustomEntry(); } catch (error) { $('custom-error').textContent = error.message; } }
  if (id === 'cancel-custom-edit') { collectionView.editId = null; renderCollection(); }
  if (id === 'export-collection') exportCollection();
  if (id === 'search-collection') { collectionView.search = $('collection-search').value; collectionView.limit = 15; renderCollection(); }
  if (id === 'clear-collection-search') { collectionView.search = ''; renderCollection(); }
  if (id === 'more-collection') { collectionView.limit += 15; renderCollection(); }
}
