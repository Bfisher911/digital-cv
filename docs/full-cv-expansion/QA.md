# Full CV Expansion QA

## Lighthouse Scores

Baseline audit was run against the original static homepage on `http://127.0.0.1:4173/` before implementation. Final audit was run against the expanded homepage on the same local preview server.

| Category | Before | After |
| --- | ---: | ---: |
| Performance | 62 | 94 |
| Accessibility | 76 | 100 |
| Best Practices | 96 | 100 |
| SEO | 91 | 100 |

## Baseline Issues Found Before Fixing

| Issue | Lighthouse signal |
| --- | --- |
| Slow paint and interactivity | FCP 3.9 s, LCP 18.2 s, TTI 18.2 s |
| Console noise | Browser console errors logged |
| Contrast failures | Background and foreground color ratios below threshold |
| Form labeling | Form controls without associated labels |
| Icon-only links | Links without discernible names |
| Link text | Several links had weak or repeated text |
| Image delivery | Original portrait PNGs were large |
| Missing robots support | No valid `robots.txt` at the preview root |

## Final Residual Notes

| Item | Status |
| --- | --- |
| LCP | Improved to 3.1 s locally, still the main performance opportunity |
| CSS and JS minification | Not applied because the site remains dependency-free static HTML |
| Cache lifetime | Local Python server does not represent Netlify cache behavior |
| Image delivery | WebP variants added for the hero portrait, original PNG remains as fallback |

## Screenshots

| View | File |
| --- | --- |
| Home page | `docs/full-cv-expansion/screenshots/home.png` |
| Speaking page | `docs/full-cv-expansion/screenshots/speaking.png` |
| Research page | `docs/full-cv-expansion/screenshots/research.png` |

## Manual Checks

| Check | Result |
| --- | --- |
| JavaScript syntax | Passed with `node --check script.js` |
| ASCII and punctuation scan | No non-ASCII punctuation found in public HTML, CSS, JS, SEO files, or new pages |
| Em dash scan | No em dashes found |
| Voice rule scan | No `not X but Y` pattern found |
| Local route checks | Home and all new static pages returned HTTP 200 |
| Browser console | Final sampled research page showed 0 errors and 0 warnings |
