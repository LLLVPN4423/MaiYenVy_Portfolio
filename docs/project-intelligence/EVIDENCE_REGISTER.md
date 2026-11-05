# Evidence Register

Confidence: VERIFIED (direct evidence) / PARTIAL / INFERRED / UNKNOWN / BROKEN.

| ID | Claim | Evidence | Method | Confidence | Limitations |
|---|---|---|---|---|---|
| EV-01 | Project is a static React SPA portfolio, no backend/DB/auth | `package.json` deps; no server dirs; grep found no localStorage/fetch-to-API | File inspection + grep | VERIFIED | — |
| EV-02 | Deployed via GitHub Actions → Pages at `/MaiYenVy_Portfolio/` | `.github/workflows/deploy.yml`; `vite.config.js:6` base | File inspection | VERIFIED | Live URL not fetched this session |
| EV-03 | Build succeeds | `npm run build` output: 1833 modules, chunks emitted, exit 0, ~3m36s | Executed command | VERIFIED | — |
| EV-04 | 0 prod dependency vulnerabilities | `npm audit --omit=dev` → "found 0 vulnerabilities" | Executed command | VERIFIED | Dev deps not deeply audited |
| EV-05 | All portfolio images load from raw.githubusercontent.com | `Portfolio.jsx:122,132,142,154,187,196`; `About.jsx:50` | Code inspection | VERIFIED (code) / PARTIAL (runtime — URLs not fetched) | Raw URLs assumed resolvable since files are git-tracked at `public/` root (confirmed via `git ls-files`) |
| EV-06 | Video playback broken in production | `Portfolio.jsx:189,198` reference `/videos/*`; `.gitignore` ignores `public/videos/`; `git ls-files public` shows no videos | Git + code inspection | BROKEN (high confidence) | Not browser-verified on live site |
| EV-07 | 18 images committed at `public/` root + duplicated in `media-selected/` | `git ls-files public` → 38 files | Git inspection | VERIFIED | — |
| EV-08 | `public/media/` (300 files, ~1.1 GB) and `public/videos/` (~1.3 GB) untracked | `find`/`du` counts; `.gitignore` rules | Filesystem + git | VERIFIED | Sizes measured locally |
| EV-09 | Social links are placeholders | `Contact.jsx:12-15` literal `yourprofile` URLs | Code inspection | VERIFIED | — |
| EV-10 | creator/design projects use Unsplash mockups | `Portfolio.jsx:164,172,207,215` images.unsplash.com URLs | Code inspection | VERIFIED | — |
| EV-11 | "Tất cả" filter caps 2 items/category | `Portfolio.jsx:221-235` | Code inspection | VERIFIED | — |
| EV-12 | `videoError` state unused | `Portfolio.jsx:84` declared; no other reference in file | grep within file | VERIFIED | — |
| EV-13 | No tests/lint/format tooling | `package.json` scripts = dev/build/preview only; no config files | File inspection | VERIFIED | — |
| EV-14 | Git state clean, single branch, 13 commits | `git status`, `git log`, `git branch -a` | Executed commands | VERIFIED | — |
| EV-15 | `src_backup/`, `src_new/`(empty), `components_corrupted_ignore/` are untracked leftovers | `git ls-files` excludes them; `.gitignore` lists first two; `find` shows contents | Git + filesystem | VERIFIED | `src_new` empty confirmed |
| EV-16 | Anchor navigation targets all exist | Navbar hrefs `#home/#about/#experience/#portfolio/#contact`; matching `id=` in Hero/About/Experience/Portfolio/Contact | Code inspection | VERIFIED | — |
| EV-17 | Personal data (email/phone/address) published | `About.jsx:64,68`; `Contact.jsx:8-10` | Code inspection | VERIFIED | Consent unknown — flagged for owner confirmation |
| EV-18 | Modals lack Esc-close/focus-trap; filter buttons lack aria-pressed | `Portfolio.jsx:432-499` modal JSX; `:275-289` buttons | Code inspection | VERIFIED | — |
| EV-19 | No XSS/injection surface | No `dangerouslySetInnerHTML`, no `innerHTML`, no dynamic HTML; all content static | grep | VERIFIED | — |
| EV-20 | Experience entries not strictly chronological | `Experience.jsx:10,23,32,41,52` periods 10/2025, 4/2025, 10-11/2025, 11/2024, 11/2024–Nay in that order | Code inspection | VERIFIED | Ordering may be intentional (relevance vs date) |
| EV-21 | Dev server / live site not runtime-tested this session | Only build + audit executed | — | UNKNOWN for runtime UX | Recommend manual `npm run dev` click-through |
| EV-22 | GitHub Pages artifact/size limits not re-verified | Workflow relies on defaults | — | UNKNOWN | Check current GitHub docs before media migration (P1-1/P1-2) |
