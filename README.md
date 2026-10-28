# Accounting and Recounting: The Daily Life of a Medici

Workshop website for the SIMS / Penn Libraries spring 2027 workshop series.

## Pages

| File | Contents |
|---|---|
| `index.html` | Overview, workspace buttons, session cards, leaders, summary matrix |
| `session-1.html` … `session-4.html` | One page per workshop: documents & tools box, overview, assignment, session log |
| `bonus.html` | Bonus manuscript meeting with Elena Brizio (March 10) |
| `workspace.html` | All tools in one place: FromThePage, project log, transcription statement, eScriptorium, both MSS, and a note on the Leggio and Conti demonstration |
| `resources.html` | Bibliography & resources (placeholders to fill in) |

## Adding your links (one file)

Open `assets/config.js` and paste URLs into the empty `""` values:

- `fromthepage` – the FromThePage collection/project
- `projectLog` – shared Google Sheet
- `transcriptionStatement` – Google Doc of transcription conventions
- `escriptorium` – Penn Libraries eScriptorium instance

Any link left empty shows as a dashed "Link coming soon" button everywhere it appears.

## Posting session updates

Each session page has a **Session Log** section with a commented-out template.
Copy the `<article class="log-entry">` block, fill it in, and put the newest entry at the top.
Images go in `assets/`.

## Publishing on GitHub Pages

1. Create a new repository (e.g. `accounting-recounting`) and upload the contents of this folder.
2. Settings → Pages → Source: *Deploy from a branch*, branch `main`, folder `/ (root)`.
3. The site appears at `https://<your-username>.github.io/accounting-recounting/`.
