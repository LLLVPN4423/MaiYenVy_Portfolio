# Database & Storage

## Persistent storage: NONE (verified)

- No database, ORM, or client library (no mongoose/prisma/firebase/etc. in `package.json`).
- No `localStorage`, `sessionStorage`, `IndexedDB`, cookies, or service worker usage — confirmed by grep across `src/`.
- No file uploads anywhere.

## Content storage model

All content is **hardcoded in JSX/JS constants**:

| Content | Location |
|---|---|
| Bio, skills, contact info, social links | `src/components/About.jsx`, `Contact.jsx` (`config` objects) |
| Work experience entries | `src/components/Experience.jsx` (`experiences` array) |
| Portfolio projects | `src/components/Portfolio.jsx` (`projects` array + 3 filename→object generators) |
| Hero copy | `src/components/Hero.jsx` |

## Static assets storage

- `public/` is copied verbatim into `dist/` by Vite at build time.
- Tracked assets: 18 flat images at `public/` root, their duplicates under `public/media-selected/`, `portrait.jpg`.
- Untracked local archives: `public/media/` (300 files), `public/videos/` (2 files, ~1.3 GB) — exist only on the owner's machine; `dist/` locally inherits them (2.4 GB) but CI builds never see them.

## Backup & recovery

- Git history is the only backup for tracked files (13 commits, single `main` branch, clean tree, up to date with `origin/main`).
- Untracked media (`public/media`, `public/videos`, `src_backup`, `components_corrupted_ignore`) have **no version-control backup** — loss of the local disk = permanent loss.
- No CI backup, no releases, no tags.

## Implications

- "Editing content" = editing JSX constants and redeploying via push to `main`.
- Any future CMS/backend would be a new subsystem, not an extension of existing persistence.
