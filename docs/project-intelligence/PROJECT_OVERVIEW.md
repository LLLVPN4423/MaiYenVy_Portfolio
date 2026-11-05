# Project Overview

## What this project is

A personal portfolio single-page application (SPA) for **Mai Yến Vy**, a Communications / Cultural Studies student (ĐH KHXH&NV – ĐHQG TP.HCM, GPA 8.45/8.36). It is a Vietnamese-language static marketing site: hero, about, experience timeline, portfolio grid with filters/lightbox, and contact section. There is **no backend, no database, no authentication, and no user-generated content** — all content is hardcoded in JSX.

## Product purpose

Showcase the owner's work (photography, event coverage, content creation, video editing) and professional experience to recruiters/employers, and provide contact/social links.

## Target users

Recruiters, professors, collaborators, and event organizers viewing the portfolio. Single anonymous visitor model.

## Tech stack (verified)

| Layer | Technology | Version |
|---|---|---|
| UI framework | React | ^18.2.0 |
| Build tool | Vite | ^5.0.0 (installed 5.4.21) |
| Styling | Tailwind CSS | ^3.4.0 |
| Animation | Framer Motion | ^11.0.0 |
| Icons | lucide-react | ^0.344.0 |
| Hosting | GitHub Pages via GitHub Actions | — |

## Entry points

- `index.html` → `src/main.jsx` → `src/App.jsx` (SPA, single route, anchor-based sections)
- Sections: `#home` (Hero), `#about`, `#experience`, `#portfolio`, `#contact`

## Deployment

- `.github/workflows/deploy.yml`: on push to `main`, `workflow_dispatch`, or `repository_dispatch` → `npm ci` → `npm run build` → copy root-level `public/*.{jpg,JPG,png,PNG}` into `dist/` → deploy `dist/` to GitHub Pages.
- `vite.config.js` sets `base: '/MaiYenVy_Portfolio/'` (repo-name subpath deployment).
- Live repo referenced by media URLs: `https://github.com/LLLVPN4423/MaiYenVy_Portfolio`.

## Current stage

Functional MVP deployed on GitHub Pages. Content is real (experience entries, selected photos) but several categories still contain Unsplash placeholder/mock data. Video playback is broken in production (see FEATURE_INVENTORY / SECURITY_AUDIT notes).

## Repo hygiene notes

- `public/` locally contains ~2.5 GB of media (`media/` 1.1 GB / 300 files, `videos/` 1.3 GB, `media-selected/` 85 MB). Only 38 files are git-tracked: 18 selected images duplicated at `public/` root + inside `media-selected/`, plus `portrait.jpg`.
- `public/media/` and `public/videos/` are gitignored — they exist only on the owner's machine.
- `src_backup/` (full copy of an older source tree incl. `components_corrupted/`) and empty `src_new/` are local-only leftovers; `components_corrupted_ignore/` also local-only.
