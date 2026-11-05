# Development History

## Timeline (from `git log`, all on `main`, clean tree)

| Date | Commit | What happened |
|---|---|---|
| 2026-07-11/27 | `15711b1` Initial commit | Portfolio source: React+Vite+Tailwind+Framer Motion landing page (Hero/About/Portfolio/Contact/Navbar), README in Vietnamese. |
| 2026-07-27 | `c7f922c` → `d7f2640` | GitHub Pages deployment added: Actions workflow, `base: '/MaiYenVy_Portfolio/'`, `repository_dispatch` trigger. |
| 2026-07-27 | `b83b345` | "Add selected media files for GitHub Pages (18 images, ~84MB)" — real photos committed. |
| 2026-07-27 | `e044920` → `affc476` → `a90287b` → `841949b` | Rapid iteration fixing media paths: `media-selected/` folder, explicit copy steps in workflow, index.html update, manual deploy trigger. |
| 2026-07-27 | `02e8cb5` → `faddbda` → `fddc2a1` → `256ee4e` | Media strategy pivot: files moved to `public/` root, copy step simplified, then **all image URLs switched to `raw.githubusercontent.com` hotlinks** "to bypass deployment issues" — the current architecture. |
| 2026-08-25 | `5b0010c` | Experience section added (timeline layout) — most recent commit; ~1 month gap suggests paused development. |

## Milestones

1. **Template → personalized**: README still describes generic "Sinh viên ngành Truyền thông" template; actual content is Mai Yến Vy (Văn hóa học & Báo chí, food-culture passion angle).
2. **Deployment established**: GitHub Pages at `/MaiYenVy_Portfolio/` subpath.
3. **Real content partial**: 18 real photos live; video, creator, design, social links remain placeholder/broken.
4. **Local archives exist but untracked**: `public/media/` (300 imgs), `public/videos/` (2 vids ~1.3 GB) — the raw material for future content.

## Prior agent/work artifacts

- `src_backup/` = complete older source snapshot (pre-redesign: different color scheme per tailwind "keep old colors for compatibility", no Experience section, `components_backup/` + `components_corrupted/` inside).
- `components_corrupted_ignore/` = 4 files (Navbar/Hero/About/Contact) from a corrupted generation attempt — untracked, kept "just in case".
- `src_new/` = empty dir from an abandoned restructure.
- `vite.config.js` watch-ignore and `tailwind.config.js` content-exclusion patterns reference `components_corrupted*` — evidence these dirs once lived inside `src/` or were anticipated there.

## Current development state

- Working tree clean; `main` == `origin/main`.
- Latest commit (Experience section) is the newest feature; no uncommitted work, no stashes, no other branches.
- Development appears human-driven with occasional AI assistance (commit messages, corrupted-component artifacts).
