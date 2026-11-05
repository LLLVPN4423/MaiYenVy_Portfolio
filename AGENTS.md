# AGENTS.md — Instructions for AI Coding Agents

This repository is a personal portfolio SPA (React 18 + Vite + Tailwind). Before doing ANY project work:

## Mandatory first steps

1. **Read `PROJECT_CONTEXT.md` at the repo root.** It is the authoritative project memory — architecture, feature status, known issues, decisions, roadmap, and agent change history.
2. Read relevant files in `docs/project-intelligence/` for detail (audit docs).
3. Run `git status` and inspect the source files you will touch.

## Mandatory rules (summary — full text in PROJECT_CONTEXT.md §MANDATORY AI AGENT OPERATING RULES)

- **Preserve existing functionality.** No unnecessary rewrites, no discarding uncommitted work, no unrelated refactors. Architectural decisions are logged in PROJECT_CONTEXT.md §G — don't silently reverse them.
- **Load-bearing files:** `vite.config.js` (`base` path), `.gitignore` (controls deployable media), `.github/workflows/deploy.yml`, and the raw-GitHub image URL pattern in `src/components/Portfolio.jsx` + `About.jsx`. Understand the media architecture (PROJECT_CONTEXT.md §B/F) before touching them.
- **After every meaningful change, update `PROJECT_CONTEXT.md`:** refresh Sections C/D/I/K as needed and append a `CHANGE-NNN` entry to Section J using the format in PROJECT_CONTEXT.md §J. Record actual changes and real validation results only.
- **History is append-only.** Never delete or rewrite past CHANGE entries; corrections are new entries.
- **Validate before claiming done:** run `npm run build` (expect several minutes — `public/` is ~2.5 GB) and any applicable checks. No tests/lint exist; state that honestly.
- **Don't commit or delete untracked dirs** (`src_backup/`, `src_new/`, `components_corrupted_ignore/`, `public/media/`, `public/videos/`) without asking — they hold the only copies of raw media/backups.
- **Content edits** are done by editing the `config`/`projects`/`experiences` arrays inside `src/components/*.jsx`, then commit + push to deploy.

## Quick facts

- Run: `npm run dev` (port 3000) · `npm run build` · `npm run preview`
- Deploy: push to `main` → GitHub Actions → GitHub Pages at `/MaiYenVy_Portfolio/`
- Next recommended task: P0 batch in PROJECT_CONTEXT.md §I (video playback fix, social links, mock content, title brackets)
