# Codebase Map

Only files tracked by git matter for the deployed site; local-only dirs noted at the end.

## Tracked source files (complete list)

| Path | Responsibility |
|---|---|
| `index.html` | HTML shell, fonts, `<title>Portfolio - [Mai Yến Vy]</title>` (stray brackets), `lang="vi"` |
| `src/main.jsx` | ReactDOM root mount, StrictMode, imports `index.css` |
| `src/App.jsx` | Layout shell: fixed `Navbar`, 5 `React.lazy` sections each in own `Suspense`, footer |
| `src/index.css` | Tailwind directives, base typography (Inter/Playfair), smooth scroll, custom scrollbar |
| `src/components/Navbar.jsx` | Fixed nav, 5 anchor links, mobile hamburger menu w/ AnimatePresence |
| `src/components/Hero.jsx` | `#home` hero: name, position, quote, CTA → `#portfolio`, scroll indicator |
| `src/components/About.jsx` | `#about`: portrait (raw GitHub URL), bio, soft skills, skill bars w/ % levels |
| `src/components/Experience.jsx` | `#experience`: vertical timeline, 5 hardcoded experience entries |
| `src/components/Portfolio.jsx` | `#portfolio`: filter pills, paginated project grid, image lightbox, video modal, custom hooks |
| `src/components/Contact.jsx` | `#contact`: email/phone/address card, 4 social-icon links (placeholder URLs) |
| `tailwind.config.js` | Content globs, color palette, font families |
| `vite.config.js` | react plugin, `base: '/MaiYenVy_Portfolio/'`, dev port 3000, watch ignores |
| `postcss.config.js` | tailwindcss + autoprefixer |
| `package.json` | Scripts: `dev`, `build`, `preview`. Deps listed in ARCHITECTURE.md |
| `.github/workflows/deploy.yml` | Pages deployment pipeline |
| `.gitignore` | Ignores node_modules, dist, backups, `public/media/`, `public/videos/`; un-ignores `media-selected` and root images |
| `README.md` | Vietnamese setup/customization docs (partially stale — see TECHNICAL_DEBT) |

## Tracked media (38 files under `public/`)

- `public/portrait.jpg` — used by About via raw GitHub URL.
- 18 selected images duplicated at `public/` root (flat filenames) AND under `public/media-selected/{korean-festival,volunteer,bts}/` — the root copies exist solely so `raw.githubusercontent.com/.../main/public/<file>` URLs resolve. The `media-selected/` copies are redundant for runtime (Vite would copy them to `dist/` but nothing references them).
- Filenames referenced in `Portfolio.jsx` must match exactly, including spaces/case: `DSC_3705 (1).JPG`, `IMG_0208.JPG`, etc.

## Local-only (untracked) items — DO NOT delete casually

- `public/media/` (~1.1 GB, 300 files) — raw photo archive, gitignored.
- `public/videos/` (~1.3 GB) — `GALA - PHẦN 2.mp4`, `LAMKICH_TAP CUOI_0406.mov`; referenced by Portfolio video cards but **not deployed**.
- `dist/` (~2.4 GB locally because Vite copies all of `public/`); gitignored, rebuilt by `npm run build`.
- `src_backup/` — older copy of entire src incl. `components_backup/` and `components_corrupted/`; gitignored.
- `components_corrupted_ignore/` — 4 corrupted component files kept for reference; gitignored.
- `src_new/` — empty directory.
- `node_modules/` — installed deps.

## Entry-point chain

`index.html` → `/src/main.jsx` → `App.jsx` → lazy `Navbar`(eager) + sections. Anchor ids: `home`, `about`, `experience`, `portfolio`, `contact` — all present (verified).
