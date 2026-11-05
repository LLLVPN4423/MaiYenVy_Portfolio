# Feature Inventory

Status legend: COMPLETE / PARTIAL / UI ONLY / BROKEN / NOT IMPLEMENTED / UNKNOWN.

| # | Feature | Entry point | Implementation | Status | Issues |
|---|---|---|---|---|---|
| F1 | Hero section | `#home`, first paint | `Hero.jsx` — animated name/position/quote/CTA | COMPLETE | Content mismatch: quote says "Đam mê văn hóa ẩm thực" (food passion) and position "Văn hóa học & Báo chí" while About describes same — consistent internally, but README describes a Communications-student template. Title tag still has `[Mai Yến Vy]` brackets. |
| F2 | Navbar + anchor nav | top of every page | `Navbar.jsx` — desktop links + mobile hamburger | COMPLETE | All 5 anchors verified to exist. No scroll-spy/active state. |
| F3 | About / bio / skills | `#about` | `About.jsx` — portrait img, bio text, 3 soft skills, 6 skill bars | COMPLETE (content) | Portrait loaded from raw.githubusercontent.com — external runtime dependency; breaks if repo renamed/made private. |
| F4 | Experience timeline | `#experience` | `Experience.jsx` — 5 hardcoded entries, vertical timeline | COMPLETE | Dates like "Tháng 10/2025" are future-dated relative to some entries ordering (not sorted chronologically — Elle Learning 10/2025 listed before HTV 4/2025). Cosmetic. |
| F5 | Portfolio filter | `#portfolio` filter pills | `Portfolio.jsx` `handleFilterChange` (debounced 150 ms) | COMPLETE | "Tất cả" (All) shows max 2 projects per category → only 2 of 18 media photos visible until user picks "Media & Chụp ảnh". Likely confusing. |
| F6 | Portfolio pagination | grid footer | 12 items/page, prev/numbered/next | COMPLETE | Only appears when filtered list > 12 (media category = 20 items → 2 pages). |
| F7 | Image lightbox | click gallery/text card | modal w/ backdrop close + X button | COMPLETE | `type:'text'` (editor project) opens `thumbnail` as full image — acceptable but mislabeled semantics. No keyboard Esc handling, no focus trap (a11y gap). |
| F8 | Video playback | click video card | `<video controls autoPlay>` modal, `videoUrl` `/videos/*.mp4|mov` | **BROKEN (production)** | `public/videos/` is gitignored → files absent from repo → absent from CI `dist/` → 404 on GitHub Pages. Works only in local `npm run dev`/`preview` where `public/videos` exists. `videoError` state is declared but never used (dead code, no error UI). |
| F9 | Contact info + social links | `#contact` | `Contact.jsx` — mailto link, phone, address, 4 social buttons | PARTIAL | Email/phone/address real. All 4 social links are placeholders (`yourprofile`) — clicking them leads to generic FB/Insta/LinkedIn/Behance pages. `behance` key labeled "Portfolio". |
| F10 | Lazy loading / perf | portfolio grid | `LazyImage` + IntersectionObserver, `React.lazy` sections | COMPLETE | Image `src` only set after intersection — good. |
| F11 | Responsive design | all | Tailwind breakpoints, mobile menu | COMPLETE (static review) | Not runtime-verified on devices; no tests. |
| F12 | Accessibility | all | semantic-ish HTML, alt texts | PARTIAL | Modals lack Esc-close/focus management; filter buttons lack `aria-pressed`; images in lightbox `alt="Full size"`. |
| F13 | SEO/meta | `index.html` | description meta, lang="vi" | PARTIAL | No Open Graph/Twitter cards, no favicon, title contains literal `[Mai Yến Vy]`. SPA so limited anyway. |
| F14 | Contact form | — | — | NOT IMPLEMENTED | No form exists; README doesn't promise one. Only mailto/social. |
| F15 | Backend/API/DB | — | — | NOT IMPLEMENTED (by design) | Static site; nothing to verify. |

## Content authenticity notes

- `creator` (2 projects) and `design` (2 projects) cards use **Unsplash stock-photo placeholders** with fictional descriptions ("Campaign TikTok đạt 1M views"). They render as real portfolio items — misrepresentation risk + broken-looking thumbnails vs. real photos elsewhere.
- `editor` category has exactly 1 project.
- Media categories: 18 gallery photos (6 Korean festival, 6 volunteer, 6 BTS) generated from filename arrays.
