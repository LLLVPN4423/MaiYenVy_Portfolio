# Security Audit

Attack surface is minimal: static site, no backend, no auth, no forms, no user input handling, no cookies/storage. Findings below are therefore mostly operational/privacy risks rather than exploitable vulnerabilities.

## Findings

| ID | Severity | Finding | Evidence | Status |
|---|---|---|---|---|
| SEC-01 | MEDIUM | **Personal data exposure (intentional but worth confirming)** — real name, personal email `vymai7336@gmail.com`, phone `(+84) 766 976 223`, and home address `62/37 Ngô Gia Tự, An Bình, Dĩ An, Bình Dương` are published in `About.jsx`/`Contact.jsx`. For a public portfolio this may be intended, but a home address + phone is more exposure than typical. | `src/components/About.jsx:64,68`; `src/components/Contact.jsx:8-10` | CONFIRMED (by design?) |
| SEC-02 | MEDIUM | **Single point of failure for all imagery** — every image is hotlinked from `raw.githubusercontent.com/LLLVPN4423/MaiYenVy_Portfolio`. If repo is renamed/made private/deleted, or GitHub changes raw URL behavior, the entire media layer breaks silently. Also couples site availability to GitHub uptime and leaks the source repo path. | `Portfolio.jsx:122,132,142,154,187,196`; `About.jsx:50` | CONFIRMED risk |
| SEC-03 | LOW | **Video assets referenced but undeployable** — `/videos/*.mp4|mov` 404 on production; not a vulnerability but a broken feature (see F8). | `Portfolio.jsx:189,198`; `.gitignore` `public/videos/` | CONFIRMED broken |
| SEC-04 | LOW | **Placeholder social links** — all 4 social buttons point to `yourprofile` generic pages; users clicking expect the owner's profiles. Phishing-ish UX risk is nil, but it's unfinished. | `Contact.jsx:12-15` | CONFIRMED |
| SEC-05 | LOW | **Mock portfolio items presented as real** — Unsplash stock photos with fabricated metrics ("1M views", "8% engagement") under creator/design categories. Misrepresentation, not security. | `Portfolio.jsx:160-174, 202-217` | CONFIRMED |
| SEC-06 | INFORMATIONAL | **No SRI / subresource integrity** on Google Fonts; standard practice for static sites, low risk. | `index.html:10-12` | Potential risk |
| SEC-07 | INFORMATIONAL | External links use `target="_blank" rel="noopener noreferrer"` — correct. No `dangerouslySetInnerHTML` anywhere; all content is static JSX → **no XSS surface**. | grep: no `dangerouslySetInnerHTML`, no `innerHTML` | VERIFIED safe |
| SEC-08 | INFORMATIONAL | `npm audit --omit=dev` → **0 vulnerabilities** (2026-11-05). Dev deps not audited but not shipped to runtime. | `npm audit` output | VERIFIED |
| SEC-09 | INFORMATIONAL | No secrets, tokens, or `.env` files in repo (verified — none exist). | repo listing | VERIFIED |
| SEC-10 | LOW | GitHub Actions workflow uses pinned major-version actions (`@v4`, `@v3`) not SHA-pinned — standard supply-chain hardening opportunity. Permissions block is appropriately minimal (`contents: read`, `pages: write`, `id-token: write`). | `.github/workflows/deploy.yml:9-12,26-57` | Potential risk |

## Explicitly checked and found clean

- Injection (SQL/NoSQL/XSS/command): no backend, no dynamic HTML, no eval — N/A.
- CSRF: no state-changing requests — N/A.
- AuthN/AuthZ/session: none exist — N/A.
- File upload: none — N/A.
- Rate limiting: N/A (static hosting).
- Dependency vulnerabilities: 0 (prod deps).

## Recommendations (priority order)

1. Confirm the owner consents to publishing phone + home address publicly; consider removing street address.
2. Replace raw.githubusercontent hotlinks with files served from the Pages site itself (requires solving the size problem — see ROADMAP) or a CDN.
3. Fill in real social URLs or remove placeholder buttons.
4. Remove or clearly label mock Unsplash projects.
5. Pin GitHub Actions to commit SHAs if hardening is desired.
