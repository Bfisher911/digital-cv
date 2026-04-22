# Milestone 1 Verification Flags

This document lists unresolved facts, missing files, and decisions that must be resolved before public launch. Milestone 1 may proceed with these flags. A launch candidate must not ship visible placeholders.

## Launch-Blocking Facts

| Flag | Needed for | Why it matters | Proposed handling |
| --- | --- | --- | --- |
| `[FLAG: verify with Dr. Fisher] AHA Instructor date range` | `/experience`, `/credentials` | The brief says 8-plus years, but not exact dates | Keep date range hidden until confirmed |
| `[FLAG: verify with Dr. Fisher] Franciscan Missionaries date range and exact role language` | `/experience` | The brief describes the work but does not give dates or a formal title | Use a flagged draft role card for review |
| `[FLAG: verify with Dr. Fisher] GIS and remote sensing course titles` | `/teaching` | The page requires course cards, and titles should not be guessed | List program area only until titles are provided |
| `[FLAG: verify with Dr. Fisher] Applied Artificial Intelligence current offering status` | `/teaching` | The brief marks this course as TBD | Exclude from nav-highlighted catalog until confirmed |
| `[FLAG: verify with Dr. Fisher] Dissertation advisor and committee` | `/research` | The research page requests advisor and committee if provided | Omit until confirmed |
| `[FLAG: verify with Dr. Fisher] Research collaborators to highlight` | `/research` | Collaborator names and links require consent and accuracy | Omit the section until confirmed |
| `[FLAG: verify with Dr. Fisher] Drone manufacturers and models` | `/research`, `/credentials` | Equipment specifics affect professional and safety claims | Use sensor types only until confirmed |
| `[FLAG: verify with Dr. Fisher] Consulting email or form destination` | `/contact`, `/consulting` | Inquiry routing cannot be guessed | Use academic email only if no separate consulting address is provided |
| `[FLAG: verify with Dr. Fisher] Press contact email` | `/press-kit`, `/contact` | Press inquiries may need separate routing | Use general contact if no press address exists |
| `[FLAG: verify with Dr. Fisher] Rate card visibility` | `/speaking`, `/consulting` | Publishing rates is a business decision | Link to inquiry form unless a public rate card is approved |
| `[FLAG: verify with Dr. Fisher] Canonical career-application-studio source path` | `/cv` | Downloads must sync from the authoritative source | Use existing `Blaine Fisher - CV.pdf` as temporary fallback |

## Missing Or Incomplete Assets

| Flag | Needed for | Current state | Proposed handling |
| --- | --- | --- | --- |
| `[FLAG: provide asset] Professional headshots at 300dpi and 72dpi` | `/press-kit`, `/`, `/about` | Repo has `assets/BlaineFisher.png` and `assets/BlaineFisher2.png` | Use current headshot for preview, mark press-kit variants missing |
| `[FLAG: provide asset] Horizontal and vertical headshot crops` | `/press-kit` | Not present in repo | Generate crops only from approved source photography |
| `[FLAG: provide asset] Headshots with and without blazer` | `/press-kit` | Current repo appears to include blazer images only | Omit unprovided variants |
| `[FLAG: provide asset] Book cover image` | `/book`, `/publications` | Current site uses a CSS placeholder cover | Request final cover file |
| `[FLAG: provide asset] Sample chapter or approved excerpt` | `/book` | No sample provided | Hide sample block until approved |
| `[FLAG: provide asset] Reviews or blurbs for *The AI Human*` | `/book` | No reviews provided | Hide reviews section until supplied |
| `[FLAG: provide asset] MissDelta fieldwork photos` | `/research`, `/press-kit` | Not present in repo | Use abstract terminal map treatment until authentic images exist |
| `[FLAG: provide asset] Drone fieldwork photos` | `/research` | Not present in repo | Use sensor/method diagrams until supplied |
| `[FLAG: provide asset] Guatemala or Dos Aguadas imagery` | `/research` | Not present in repo | Use map-style geometric treatment until supplied |
| `[FLAG: provide asset] Teaching or classroom photography` | `/teaching` | Not present in repo | Use content cards only until supplied |
| `[FLAG: provide asset] Conference or keynote photography` | `/speaking`, `/press-kit` | Not present in repo | Use terminal cards only until supplied |
| `[FLAG: provide asset] Monogram SVG, transparent PNG, and PDF` | `/press-kit` | No monogram files in repo | Create only after brand direction is approved |
| `[FLAG: provide asset] Fact sheet one-pager PDF` | `/press-kit` | Not present in repo | Generate in a later milestone after content approval |
| `[FLAG: provide asset] Canonical resume PDF` | `/cv` | Not present in repo | Pull from canonical pack once source is located |
| `[FLAG: provide asset] Cover letter template` | `/cv` | Not present in repo | Pull from canonical pack once source is located |
| `[FLAG: provide asset] Portfolio one-pager` | `/cv` | Not present in repo | Pull from canonical pack once source is located |

## Missing Or Incomplete URLs

| Flag | Needed for | Current state | Proposed handling |
| --- | --- | --- | --- |
| `[FLAG: verify URL] Hooked on AI canonical LinkedIn URL` | `/newsletter` | Current site uses `https://shorturl.at/ttjkv` | Replace short URL with canonical LinkedIn newsletter URL |
| `[FLAG: verify URL] Amazon print purchase URL` | `/book`, `/publications` | Brief provides URL | Confirm final retailer URL before launch |
| `[FLAG: verify URL] Amazon Kindle purchase URL` | `/book`, `/publications` | Current site uses a long Amazon URL, brief provides cleaner URL | Use clean brief URL after confirmation |
| `[FLAG: verify URL] Barnes and Noble purchase URL` | `/book`, `/publications` | Brief provides URL | Confirm final retailer URL before launch |
| `[FLAG: verify URL] Big Red Education Command Z promo video` | `/media`, `/consulting` | URL pending in brief | Omit until supplied |
| `[FLAG: verify URL] LDAA 50th Annual Conference page` | `/speaking` | No URL provided | Card can launch without URL if details are confirmed |
| `[FLAG: verify URL] LCPA 2026 Accounting Educators Workshop page` | `/speaking` | No URL provided | Card can launch without URL if details are confirmed |
| `[FLAG: verify URL] Futures Abroad Dubai engagement page` | `/consulting`, `/speaking` | No URL provided | Card can launch without URL if details are confirmed |
| `[FLAG: verify URL] NOAI Festival speaker page` | `/speaking` | Current site links `https://noai.org` only | Use event page if available |
| `[FLAG: verify URL] CELT workshop pages` | `/speaking`, `/teaching` | No URLs provided | Cards can launch without URLs |
| `[FLAG: verify URL] DevLearn session pages` | `/speaking` | No URLs provided | Group entry can launch without URLs after session details are confirmed |

## Content Details Requiring Review

| Flag | Needed for | Why it matters | Proposed handling |
| --- | --- | --- | --- |
| `[FLAG: approve copy] About page long-form bio` | `/about` | The about page uses first-person voice and should match Dr. Fisher's approved cadence | Draft from master profile once available |
| `[FLAG: provide source] Master profile Section 3 long-form bio` | `/about`, `/press-kit` | The brief names this as the canonical voice reference | Do not finalize biography copy without it |
| `[FLAG: approve copy] Press kit short, medium, and long bios` | `/press-kit` | These are reusable public assets | Draft after `/about` is approved |
| `[FLAG: approve copy] Book synopsis` | `/book` | The page requires 400 to 600 words | Draft from book materials and Dr. Fisher review |
| `[FLAG: approve copy] Teaching philosophy` | `/teaching` | The brief requests 300 to 500 words | Draft after voice reference is available |
| `[FLAG: approve copy] Consulting positioning` | `/consulting` | Sparkfish must remain separate from Tulane | Draft with explicit independence language |
| `[FLAG: approve policy] Newsletter archive depth` | `/newsletter` | Importing issues may require manual curation | Default to manually maintained recent issue list |
| `[FLAG: approve policy] Media embeds` | `/media` | Embeds affect privacy, performance, and accessibility | Use thumbnails and links unless embed approval is given |
| `[FLAG: approve policy] Analytics provider` | Global | Brief allows Plausible, Fathom, or Vercel Analytics, and forbids Google Analytics | Default to no analytics until provider is selected |
| `[FLAG: approve policy] Contact form service` | `/contact` | Form routing requires a backend or third-party service | Default to Netlify Forms if Netlify remains active |

## Current Site Issues To Address In Later Milestones

| Issue | Current evidence | Future fix |
| --- | --- | --- |
| Nav links to `#about`, but no `about` section exists in current HTML | `index.html` nav includes `#about`; current sections start with `#experience` after hero | Astro route `/about` and landing summary section |
| Persona switcher filters cards but does not reorganize section emphasis | `script.js` uses `display: block` or `display: none` based on `data-tag` | Use persona data model to reorder and feature content |
| Some persona filters have no matching cards | `AI_CONSULTANT` uses `filter: 'ai'`, but no current timeline or feature cards carry `data-tag="ai"` | Add content taxonomy and featured cards |
| Current page depends on Google Fonts and FontAwesome CDN | `index.html` loads external font and icon CSS | Self-host fonts and remove decorative icon dependency |
| No published sitemap or robots file found | Public `/sitemap.xml` and `/robots.txt` return Netlify 404 | Generate sitemap and robots in Astro |
| Large PNG headshots ship directly | Current assets are roughly 1.9 MB and 2.9 MB | Convert approved images to AVIF and WebP with fallback |
| Scanlines and flicker lack quiet mode | `styles.css` applies effects globally | Add persistent quiet mode and reduced motion support |
| Existing book cover is CSS placeholder | Current publications section uses `.cover-design` | Replace with approved cover image |
| Current publication section only covers the book | `index.html` has one book showcase | Add full publication index |
| Sparkfish is missing | No current Sparkfish role or page | Add `/consulting` and experience role |

## Non-Blocking Notes

| Note | Treatment |
| --- | --- |
| Personal family details should remain light and professional | Use only in `/about`, if approved |
| Hobbies and language learning can add human texture | Use one sentence maximum in `/about`, if approved |
| Creative fiction portfolio is out of scope | Do not add route unless requested later |
| Stock photography is disallowed | Use authentic assets or abstract terminal graphics only |
| AI-generated representational imagery is disallowed | Do not generate headshots or fieldwork substitutes |
