# API Reference

## Backend APIs: NONE

This project has no backend, no serverless functions, no API routes, and no external API integrations beyond passive asset fetching. There is nothing to authenticate against and no request/response contract to document.

## Outbound runtime requests (client → third parties)

| Request | Trigger | Purpose | Failure behavior |
|---|---|---|---|
| `GET raw.githubusercontent.com/LLLVPN4423/MaiYenVy_Portfolio/main/public/{file}` | Portfolio grid render (post-intersection), About portrait | Images | Silent broken image (gray pulse placeholder persists) |
| `GET images.unsplash.com/photo-...` | 4 mock project cards | Placeholder thumbnails | Broken thumbnail on those cards only |
| `GET fonts.googleapis.com/css2?family=Inter...Playfair+Display...` | `index.html` `<link>` | Webfonts | Fallback system fonts |
| `GET /MaiYenVy_Portfolio/videos/{file}` | Video modal open | Local video playback | **404 in production** (gitignored assets) |
| Navigation to facebook.com / instagram.com / linkedin.com / behance.net | Contact buttons | Social profiles | Placeholder `yourprofile` URLs |
| `mailto:vymai7336@gmail.com` | Contact email | Email client | n/a |

## CI pipeline (not a runtime API)

`.github/workflows/deploy.yml` — triggers: push to `main`, `workflow_dispatch`, `repository_dispatch`. Steps: checkout → setup-node 20 → `npm ci` → `npm run build` → copy `public/*.{jpg,JPG,png,PNG}` into `dist/` (root level only; note this step is largely redundant since Vite already copies `public/` — it exists from earlier iterations when media lived elsewhere) → configure-pages → upload-pages-artifact (`./dist`) → deploy-pages.

## Error behavior

- No global error boundary in `App.jsx` — a render exception in any section whitescreens the whole app.
- No loading/error states for failed images beyond the gray pulse placeholder.
