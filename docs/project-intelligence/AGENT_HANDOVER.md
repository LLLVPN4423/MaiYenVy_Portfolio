# Agent Handover

## What this project is

Personal portfolio SPA for **Mai Yến Vy** (Communications/Cultural Studies student, ĐH KHXH&NV–ĐHQG HCM). Vietnamese-language single page: Hero → About → Experience timeline → Portfolio (filterable, paginated grid + lightbox + video modal) → Contact → footer. **Static only — no backend, DB, auth, or forms.** Deployed to GitHub Pages at `https://LLLVPN4423.github.io/MaiYenVy_Portfolio/` (repo `LLLVPN4423/MaiYenVy_Portfolio`, branch `main`).

## How to run

```bash
npm install     # deps already in package-lock
npm run dev     # Vite dev server → http://localhost:3000 (opens browser)
npm run build   # production build → dist/  (SLOW ~3-4min: copies 2.5GB public/)
npm run preview # serve dist locally
```

Node 22 / npm 10 verified working. Deploy = push to `main` (GitHub Actions → Pages).

## Architecture in one paragraph

`index.html` → `src/main.jsx` → `src/App.jsx`, which lazy-loads 5 section components (`src/components/{Hero,About,Experience,Portfolio,Contact}.jsx`) behind individual `Suspense` boundaries; `Navbar` is eager. No router — anchor links (`#home/#about/#experience/#portfolio/#contact`). All content is hardcoded JSX constants. Tailwind (custom `sea-blue`/`soft-beige` palette) + Framer Motion + lucide-react icons.

## The weird part you MUST understand before touching media

- **Images are NOT bundled.** Every project image/portrait is fetched at runtime from `https://raw.githubusercontent.com/LLLVPN4423/MaiYenVy_Portfolio/main/public/<flat-filename>`. The 18 selected photos exist as flat files at `public/` root **specifically so these raw URLs resolve** (they're committed to git). Duplicates also live in `public/media-selected/{korean-festival,volunteer,bts}/`.
- **`public/videos/` and `public/media/` are gitignored** → they exist only locally (~2.4 GB). Videos referenced in Portfolio (`/videos/GALA - PHẦN 2.mp4`, `/videos/LAMKICH_TAP CUOI_0406.mov`) **404 on the deployed site** — confirmed broken in production.
- Local `npm run build` copies ALL of `public/` (2.5 GB) into `dist/` → multi-minute builds. CI never sees the untracked dirs.
- `vite.config.js` `base: '/MaiYenVy_Portfolio/'` is required for Pages subpath — don't remove.
- `src_backup/`, `src_new/` (empty), `components_corrupted_ignore/` are untracked dead dirs — leave them unless asked to clean.

## What's implemented & verified

- All 5 sections render; build passes (verified 2026-11-05, `vite v5.4.21`, 0 vulnerabilities via `npm audit --omit=dev`).
- Portfolio: 6 filter categories, 12/page pagination, lazy images via IntersectionObserver, image lightbox, video modal (local-only playback).
- Content: real bio/skills/5 experience entries/18 real photos. MOCK content remains: 2 Unsplash "creator" cards, 2 "design" cards, all social links are `yourprofile` placeholders.

## Known bugs/risks (see docs for detail)

1. Video playback broken on production (gitignored assets).
2. All imagery depends on repo staying public at that exact path.
3. No error boundary — any render crash whitescreens the app.
4. "Tất cả" filter shows only 2 items per category.
5. `videoError` state unused; modals lack Esc/focus-trap; title has `[brackets]`.

## Git state

`main`, clean tree, == `origin/main`, 13 commits (Jul 27 → Aug 25, 2026). No other branches/stashes.

## Conventions

- JSX (no TS), functional components, default exports, Tailwind utilities, Framer Motion `whileInView`/`viewport={{once:true}}` animation pattern, Vietnamese UI copy.
- Content edits = edit the `config`/`projects`/`experiences` arrays in the relevant component, commit, push.
- When adding images: put file at `public/` root (flat name) AND add filename to the right array in `Portfolio.jsx`; URL template is `https://raw.githubusercontent.com/LLLVPN4423/MaiYenVy_Portfolio/main/public/${img}`.

## Must NOT change casually

- `base` in `vite.config.js`, the workflow's Pages config, or the raw-GitHub URL pattern — all three are load-bearing for the current deploy.
- Do not commit `public/media/` or `public/videos/` (gitignored for size; videos ~1.3 GB).
- Do not delete untracked dirs without asking — they may be the only copy of raw media/backups.

## Recommended next task

**P0 batch** (see `ROADMAP.md`): fix video playback (host externally or remove), replace placeholder social links, label/remove Unsplash mock projects, fix `<title>` brackets. Then P1-1 media-archive reorganization to fix the 3m36s build.

## How to verify future changes

1. `npm run build` must pass (expect several minutes until media reorg).
2. `npm run dev` → click every filter, open lightbox, try video modal, resize to mobile width, check mobile menu.
3. After push: check the GitHub Actions run is green and spot-check the live Pages URL.
4. Full docs: `docs/project-intelligence/` (14 files — start with `AGENT_HANDOVER.md` ↔ `ROADMAP.md`).
