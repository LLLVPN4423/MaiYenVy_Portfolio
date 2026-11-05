# Prioritized Roadmap

Ordered by risk-reduction first, then completeness, then polish. Each task is independent unless noted.

## Phase 0 — Stop-the-bleeding (content correctness)

| ID | Task | Problem | Proposed implementation | Files | Risk | Acceptance criteria | Tests |
|---|---|---|---|---|---|---|---|
| P0-1 | Fix or remove video playback | Videos 404 on production | Option A (recommended): host compressed videos externally (YouTube unlisted/Vimeo/Cloudinary) and update `videoUrl`; Option B: remove video category + 2 cards until hosting decided | `Portfolio.jsx:181-199` | Low | Clicking a video card plays video on the deployed Pages site | Manual: deploy preview, click each video card |
| P0-2 | Replace placeholder social links | All 4 links are `yourprofile` | Insert real profile URLs in `Contact.jsx` config, or delete `socialLinks`/section until available | `Contact.jsx:11-16` | None | Every social button reaches the owner's real profile | Manual click-through |
| P0-3 | Label or remove mock projects | Unsplash mockups with fake metrics shown as real work | Either replace with real creator/design work, or remove the 4 mock cards and their filter categories | `Portfolio.jsx:158-174,201-217`, `categories` | Low | No fabricated metrics visible; filters match available content | Visual check of each filter |
| P0-4 | Fix page title | Literal `[Mai Yến Vy]` brackets | `index.html:7` → `Mai Yến Vy — Portfolio` | `index.html` | None | Tab title clean | Visual |

## Phase 1 — Reliability & media architecture

| ID | Task | Problem | Proposed implementation | Files | Risk | Acceptance criteria | Tests |
|---|---|---|---|---|---|---|---|
| P1-1 | Decide canonical media strategy | Images hotlinked from raw.githubusercontent; 2.5 GB untracked local archive; slow 3m36s builds | Recommended: keep only deploy-needed assets in `public/` (~90 MB), move `media/`+`videos/` archives to a sibling dir outside Vite's publicDir (e.g. `media-archive/`) and gitignore it; rebuild `dist` speed | `vite.config.js` (`publicDir`), `.gitignore`, folder moves | Medium — must update every referenced path at once | `npm run build` < 60s; all images still load on Pages | Build timing + browser check all filters |
| P1-2 | Serve images same-origin | Raw GitHub dependency (SEC-02) | After P1-1, change URLs from raw.githubusercontent to `/media-selected/...` or `/images/...` paths | `Portfolio.jsx`, `About.jsx` | Medium — single atomic URL migration; keep old files until verified | No requests to raw.githubusercontent.com in devtools | Network tab audit |
| P1-3 | Add error boundary + image error fallback | One render crash whitescreens app; failed images show infinite gray pulse | Add `react-error-boundary` (or tiny custom class) around sections in `App.jsx`; extend `LazyImage` with `onError` → fallback/placeholder | `App.jsx`, `Portfolio.jsx` | Low | Simulated failing chunk shows fallback UI, not white screen | Temporarily break an import, verify |
| P1-4 | Remove dead workflow step | `deploy.yml` copy step redundant | Delete lines 40-45 after confirming Vite copies needed files | `.github/workflows/deploy.yml` | Low | Deploy still green, images present in artifact | Watch next Actions run |

## Phase 2 — UX & accessibility polish

| ID | Task | Problem | Files | Acceptance criteria |
|---|---|---|---|---|
| P2-1 | Modal a11y | No Esc-close, focus trap, `aria-modal`; body scroll not locked | `Portfolio.jsx` modals | Esc closes, Tab trapped, background doesn't scroll |
| P2-2 | "Tất cả" filter UX | Caps at 2/category → portfolio looks tiny | `Portfolio.jsx:221-235` | Either show all or add per-category "view more" |
| P2-3 | SEO/social meta | No OG/Twitter tags, no favicon | `index.html` | Link preview renders name/description/image |
| P2-4 | Experience ordering | Not reverse-chronological | `Experience.jsx` | Sorted newest-first or documented order |
| P2-5 | Loading/empty states audit | Filter debounce may feel laggy; verify empty state reachable | `Portfolio.jsx` | All states visually verified |

## Phase 3 — Engineering hygiene (optional)

| ID | Task | Problem | Acceptance criteria |
|---|---|---|---|
| P3-1 | Add ESLint + Prettier (or Biome) | No lint/format gate | `npm run lint` clean on existing code |
| P3-2 | Remove `src_backup/`, `src_new/`, `components_corrupted_ignore/` (or archive outside repo) | Dead dirs confuse agents | Repo root contains only live dirs |
| P3-3 | Update README (or replace with docs pointer) | Stale docs | README matches reality |
| P3-4 | Consolidate project generators + dedupe `media-selected/` vs root copies | TD-03 | Single generator function; single canonical image dir |
| P3-5 | Pin GitHub Actions to SHAs | Supply-chain hardening | Workflow uses commit SHAs |
| P3-6 | Add a minimal smoke test (e.g. vitest render of App) | Zero test coverage | `npm test` runs ≥1 passing test |

## Explicit non-goals (unless user requests)

- No backend/CMS — content editing via JSX is appropriate for a personal portfolio.
- No framework migration — React 18 + Vite + Tailwind is working and appropriate.
- No redesign — current sea-blue/beige palette is consistent.
