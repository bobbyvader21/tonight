# Tonight — Complete activities website
Created by RBC Studios

This is the full website, not a patch. It includes 750 activities and all six requested features. Files have readable indentation and line breaks.

## Open and test
1. Extract this ZIP.
2. Open `tonight-complete/index.html` in a modern browser.
3. Keep all seven runtime files together (see Required files below).
4. A hosted URL is the most reliable way to test persistent browser storage. Google Fonts are optional: system fonts work if the font service is unavailable.

## Publish or update
Netlify: upload the entire `tonight-complete` folder to Netlify Drop for a new site. To update an existing site, upload the whole folder to that project's Deploys area.
Cloudflare Pages: create a Pages Direct Upload project and upload this folder. For updates, create a new deployment in the same project.
No build command, dependencies, accounts, database, or API keys are required by the website itself. No paid AI service is called.
The Netlify configuration is optional on Cloudflare and does not control Cloudflare settings.

## The six features
1. **Completion history**: open a plan and choose We did this. Rate completed activities as Would do again or Not for me. Remove entries or clear history. Enable Hide activities I've completed to exclude them from matching results, random picks, and new group-voting shortlists. Ratings are memory aids; they do not automatically train a recommendation system.
2. **Supplies filtering**: enable Match what I have available, then deselect unavailable supplies. All of an activity's main requirements must be selected. Main supplies are approximate; read the plan for consumables, tickets, access, or specialized equipment. Group ranges support every size in the selected range.
3. **Scavenger hunt**: 12-item randomized checklists from 100 indoor and 100 outdoor prompts, progress tracking, optional timer, pause/resume, saved checklist, and reset. The timer uses real elapsed time and continues when you close the kit unless paused. It stops counting when all items are found. Checklist entries are self-reported; no camera permission or photo upload is required.
4. **Trivia**: 1–6 teams, up to ten shuffled questions per quiz from a 500-question bank plus browser-saved custom questions, answer reveals, one-point scoring with undo per team per question, and final scores including ties. The host judges answers. Questions cycle through the matching bank before repeating; source and filters define independent saved cycles. Progress and scores resume after refreshing.
5. **Tournament bracket**: 2–16 entrants, optional shuffle, automatic byes, winner selection, champion display, and saved progress. Changing an earlier result clears all later rounds to avoid stale results. Swipe horizontally on a small screen. Enter each team once; group size in discovery is independent of tournament entrant count.
6. **Single-device group voting**: 2–6 named voters take turns using the same device. A fixed shortlist of up to 12 activities uses the current filters and supports the exact voter count. Participants vote Yes (2), Maybe (1), or Pass (0). Results rank fewer Pass votes first, then points, then Yes votes. Equal results share rank. Everyone said yes is highlighted; no-consensus results are labeled. This is casual pass-the-phone voting, not secure or private balloting. No links or cross-device synchronization are provided.

## Other included behavior
- Nine featured cards on the default homepage.
- Filtered results show 18 at a time with Show more.
- Random picks use the complete matching list, cycling through unseen options before repeating. Any filter or matching-list change starts a new cycle. Refresh resets this cycle.
- Browser-local favorites, retaining compatible favorites from the previous curated 300-activity file.
- Completion history, hunt, trivia, tournament, and voting sessions are stored in localStorage. Clearing browser data removes them. Storage is separate per website origin, so publishing at another address does not carry local test data across automatically.
- If storage is blocked, a message explains that current changes may not survive refresh.
- The site sends no analytics, emails, uploads, or user data to a backend. The optional Google Fonts stylesheet makes a normal external font request.

## Customize
- `index.html`: titles, page copy, studio credit, section structure.
- `style.css`: all layout, colors, and responsive styles.
- `activities.js`: all 750 records with IDs, mood, budget, minutes, group limits, descriptions, steps, and main-supply tags. Preserve IDs for favorites and history. Include any new supply tag in supplyLabels inside script.js.
- `script.js`: behavior, supplies labels, hunt checklists, trivia bank, tournament logic, and voting.

The previous script.js alone is no longer sufficient: upload all seven runtime files together, including the bank and collections scripts.
Venue prices are estimates, not live listings. Time estimates may exclude passive drying, freezing, or advance booking.

# Expanded browser-saved collections update

This version includes expanded banks and custom collections in addition to all six original features.

## Required files
Keep all seven runtime files together:
- index.html
- style.css
- activities.js
- trivia-bank.js
- hunt-bank.js
- collections.js
- script.js

The scripts load in the order listed in index.html. Upload the full folder rather than replacing script.js alone. The ZIP also includes netlify.toml and this README.

## Trivia bank
- Exactly 500 built-in questions across ten categories.
- Category and approximate Easy/Medium/Hard difficulty filtering.
- Built-in only, My own only, and Mixed modes.
- Draws ten questions without duplicates within the quiz, or all matching questions if fewer than ten are available.
- A saved repeat cycle for each source/category/difficulty combination. Changing the combination uses its own cycle; returning to it resumes that cycle.
- Once a bank is exhausted, drawing wraps into a fresh cycle. If a session crosses that boundary it uses the remaining unseen entries first, then fills from the new cycle without repeating within that session.
- Starting a quiz counts its selected questions as used, even if you restart without finishing. To preserve repeat history, use stable built-in IDs when modifying the code.
- The host still judges answers and awards one point to each correct team. Custom accepted answers are written for a human host, not automatically matched.

## Scavenger-hunt bank
- Exactly 100 unique indoor prompts and 100 unique outdoor prompts.
- Each hunt draws twelve prompts, or all matching prompts if fewer than twelve are available.
- Same three source modes as trivia.
- Custom items can apply to Indoor, Outdoor, or Both.
- Separate saved repeat cycles for each source and setting.
- Checked items, timer state, and the active checklist save in this browser.
- These are observational suggestions, not a guarantee every item exists in your immediate location. Leave objects and wildlife in place. A pointing gesture or personal photo is sufficient; the website does not upload images.

## My collection
Open the button above the activity kits, or choose My collection within a kit.
- Add, edit, delete, and search custom trivia questions and hunt items.
- Trivia fields: question, answer, category, difficulty.
- Hunt fields: prompt and indoor/outdoor/both setting.
- Supports up to 2,000 custom trivia questions and 2,000 custom hunt items, subject to browser storage capacity.
- Detects duplicate questions and overlapping hunt prompts.
- Custom text is escaped before rendering; imported backups must pass schema and length validation.
- Changes to the custom bank do not rewrite a quiz or hunt already in progress; new sessions use the edited bank.

## Backup and restore
1. Open My collection and select Export backup.
2. Save tonight-my-collection.json somewhere safe.
3. On another browser or after moving domains, open My collection and choose Import backup.
4. Import the JSON file. Entries merge into the existing bank; duplicate entries are skipped.
5. Invalid or oversized imports are rejected without partially importing entries. A backup must be under 5 MB.

Backups contain only your custom questions and hunt prompts. They do not export built-in banks, history, votes, scores, timer state, or repeat cycles. Treat a backup as private if you wrote personal information into it. Importing a file parses it locally without uploading it to a server.

Browser storage belongs to the current website origin. A local file, a netlify.app address, a pages.dev address, and a custom .com address do not share collections automatically. Export/import transfers custom entries between them. Clearing browser data removes collections and repeat history. If storage is blocked or full, an on-screen warning explains that changes may only last for the current session.

Existing favorites, activity completion history, tournament progress, and voting sessions keep their original storage keys. Old fixed-bank trivia and hunt sessions do not migrate to the larger-bank format; start a new session. No registered membership or cross-device synchronization is included.


# 750-activity edition

The discovery catalog now contains exactly 750 activities: the original 300, with their IDs and details preserved, plus 450 new entries. The additional activities include craft projects, creative technology, cooking, named games, practical skills, quiet activities, public outings, and community events. Each entry includes mood, estimated per-person cost, time, group limits, main supplies, a description, and a three-step plan.

Previous browser favorites, completion history, and group-voting sessions continue to use the same IDs. The storage key containing `curated-300` is intentionally retained for compatibility. Your own questions and hunt items remain in the same browser when updating the same website address. Export your custom collection before moving to a different address.

Venue and workshop prices are indicative budgets, not promises that an event is available locally at that price. Check full current fees and included equipment before booking. Some crafts and recipes require additional passive drying, proofing, chilling, or curing time beyond the listed hands-on session.

To update a hosted website, upload every runtime file in this folder together. The built-in banks remain 500 trivia questions, 100 indoor hunt prompts, and 100 outdoor hunt prompts, plus your browser-saved custom entries.
