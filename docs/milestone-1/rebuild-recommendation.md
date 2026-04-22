# Milestone 1 Rebuild Recommendation

## Recommendation

Rebuild `Bfisher911/digital-cv` as an Astro static site with Markdown or MDX content collections, reusable layout components, and small client-side islands for the MU-TH-UR 6000 interactive layer.

This approach fits the brief because the site is mostly content, metadata, and static pages, with a small number of purposeful interactions:

| Need | Astro fit |
| --- | --- |
| Deep professional pages | Static routes are simple and fast |
| Version-controlled content | Markdown and MDX collections are first-class |
| Terminal aesthetic | Shared layouts and CSS tokens preserve the visual language |
| Persona switcher | Small island can reorder landing content without turning the whole site into an app |
| SEO | Static metadata, canonical URLs, sitemap, and structured data can be generated |
| Performance | Minimal JavaScript by default |
| Netlify previews | Branch deploys and deploy previews work cleanly |

## Current Repo Assessment

The current production repo contains:

| File | Role | Limitation |
| --- | --- | --- |
| `index.html` | Entire site markup | Hard to maintain as pages multiply |
| `styles.css` | Full visual system | Good aesthetic base, but global effects need accessibility controls |
| `script.js` | Persona, sound, boot, terminal, mobile nav | Useful prototype, but not structured for page-level content |
| `assets/BlaineFisher.png` | Existing image asset | Large PNG, needs optimization |
| `assets/BlaineFisher2.png` | Active hero image | Large PNG, needs optimization |
| `Blaine Fisher - CV.pdf` | Current CV download | Needs canonical sync with career application source |

The existing static site is valuable as a design prototype. It should not remain the long-term implementation because every new page, speaking entry, publication, and credential would require direct code edits.

## Proposed Astro Structure

```text
.
|-- astro.config.mjs
|-- netlify.toml
|-- package.json
|-- public/
|   |-- assets/
|   |-- downloads/
|   `-- robots.txt
|-- src/
|   |-- components/
|   |   |-- terminal/
|   |   |-- cards/
|   |   |-- layouts/
|   |   `-- media/
|   |-- content/
|   |   |-- credentials/
|   |   |-- downloads/
|   |   |-- experience/
|   |   |-- honors/
|   |   |-- media/
|   |   |-- profile/
|   |   |-- publications/
|   |   |-- research/
|   |   |-- speaking/
|   |   `-- teaching/
|   |-- data/
|   |   `-- personas.ts
|   |-- islands/
|   |   |-- PersonaSwitcher.tsx
|   |   |-- SoundToggle.tsx
|   |   |-- TerminalConsole.tsx
|   |   `-- QuietModeToggle.tsx
|   |-- layouts/
|   |   |-- BaseLayout.astro
|   |   |-- LongformLayout.astro
|   |   `-- TerminalPageLayout.astro
|   |-- pages/
|   |   |-- index.astro
|   |   |-- about.astro
|   |   |-- experience.astro
|   |   |-- teaching.astro
|   |   |-- research.astro
|   |   |-- publications.astro
|   |   |-- book.astro
|   |   |-- speaking.astro
|   |   |-- consulting.astro
|   |   |-- newsletter.astro
|   |   |-- media.astro
|   |   |-- honors.astro
|   |   |-- credentials.astro
|   |   |-- press-kit.astro
|   |   |-- contact.astro
|   |   `-- cv.astro
|   |-- scripts/
|   |   |-- check-fact-flags.ts
|   |   `-- sync-canonical-pack.ts
|   `-- styles/
|       |-- global.css
|       |-- tokens.css
|       `-- terminal.css
`-- docs/
    `-- milestone-1/
```

## Content Collections

| Collection | Frontmatter fields |
| --- | --- |
| `experience` | `title`, `organization`, `location`, `startDate`, `endDate`, `status`, `threads`, `summary`, `accomplishments`, `links`, `flags` |
| `teaching` | `title`, `institution`, `program`, `level`, `audience`, `topics`, `assignments`, `status`, `flags` |
| `research` | `title`, `role`, `dates`, `funding`, `studyArea`, `methods`, `tools`, `links`, `flags` |
| `publications` | `type`, `title`, `year`, `citation`, `publisher`, `isbn`, `links`, `abstract`, `flags` |
| `speaking` | `date`, `year`, `event`, `venue`, `city`, `audienceSize`, `title`, `description`, `recordingUrl`, `topics`, `flags` |
| `media` | `date`, `source`, `medium`, `title`, `url`, `embedUrl`, `summary`, `transcriptStatus`, `flags` |
| `honors` | `date`, `title`, `organization`, `category`, `description`, `links`, `flags` |
| `credentials` | `date`, `title`, `issuer`, `category`, `credentialUrl`, `description`, `flags` |
| `downloads` | `title`, `file`, `category`, `source`, `lastUpdated`, `flags` |

Flag fields should allow the build to surface unresolved items during local checks. A launch build should fail if public pages contain unresolved `[FLAG: verify with Dr. Fisher]` markers.

## Component Library

| Component | Purpose |
| --- | --- |
| `TerminalHeader` | Page header with route label, ASCII divider, and terminal status line |
| `PersonaSwitcher` | Landing page persona control with content reordering |
| `SoundToggle` | Web Audio control, default off |
| `QuietModeToggle` | Disables scanlines, flicker, glitch, and sound |
| `TerminalConsole` | Route-aware command interface |
| `ExperienceCard` | Career role card with dates, organization, narrative, and links |
| `CourseCard` | Teaching catalog card |
| `ResearchProject` | Research deep-dive module |
| `PublicationCard` | Books, dissertation, editorial, newsletter, and conceptual work |
| `SpeakingCard` | Engagement archive item |
| `MediaCard` | Press item with optional embed and transcript status |
| `CredentialCard` | Degrees, licenses, certifications |
| `DownloadCard` | CV, resume, press kit, one-pagers |
| `FlagNotice` | Internal review-only unresolved fact indicator |

## Interaction Model

The rebuilt site should keep the current interaction motifs while improving accessibility:

| Interaction | Requirement |
| --- | --- |
| Boot sequence | Optional, short, skipped automatically for reduced motion and returning users |
| Sound | Default off, no autoplay, user initiated only |
| Persona switcher | Reorders landing page sections, updates hero and featured cards |
| Terminal console | Helps route discovery and does not hide core navigation |
| Scanlines | On by default only if contrast remains acceptable, disabled by quiet mode |
| Glitch effects | Decorative only, never required for comprehension |
| Keyboard support | Every control is reachable, visible focus states required |

## Netlify Workflow

Keep Netlify as the active deployment target.

| Environment | Branch or event | Purpose |
| --- | --- | --- |
| Production | `main` | Live `blainefisher.com` |
| Deploy Preview | Pull requests | Review changes before merge |
| Branch deploy | `codex/*` branches if enabled | Internal milestone previews |

Recommended `netlify.toml` after Astro migration:

```toml
[build]
  command = "npm run build"
  publish = "dist"

[build.environment]
  NODE_VERSION = "22"

[[headers]]
  for = "/*"
  [headers.values]
    X-Content-Type-Options = "nosniff"
    Referrer-Policy = "strict-origin-when-cross-origin"
```

Netlify Forms can be used for `/contact` if Dr. Fisher approves Netlify-hosted form handling. If a different form destination is preferred, keep contact routing as mailto links until a provider is chosen.

## Performance Plan

| Requirement | Implementation direction |
| --- | --- |
| Lighthouse 90-plus | Static pages, minimal JavaScript, optimized images |
| LCP under 2.0s on 3G | Preload hero image, ship responsive AVIF and WebP |
| Landing page under 400KB gzipped | Avoid heavy client frameworks, remove icon font dependency |
| Modern image formats | Generate AVIF and WebP from approved source photography |
| Font performance | Self-host selected fonts with `font-display: swap` |
| Third-party scripts | Avoid Google Analytics, avoid unnecessary embeds |

## Accessibility Plan

| Requirement | Implementation direction |
| --- | --- |
| WCAG 2.1 AA | Test contrast for terminal palette and long-form reading pages |
| Reduced motion | Gate boot, glitch, scanline, typewriter, and cursor animations |
| Keyboard navigation | Real buttons, skip links, focus rings, no click-only controls |
| Screen reader support | Semantic headings, meaningful link names, ARIA only where needed |
| Video accessibility | Captions or transcript links for every embedded video |
| Quiet mode | Persistent local setting that disables visual noise and sound |

## SEO Plan

| Requirement | Implementation direction |
| --- | --- |
| Sitemap | Generate with Astro sitemap integration |
| Canonicals | Set `https://blainefisher.com/{route}` for each page |
| Open Graph | Use route-specific metadata and approved images |
| Twitter Cards | Use summary large image where an image exists |
| Schema.org Person | Global identity on home and about |
| Schema.org Book | `/book` |
| Schema.org Event | Speaking entries with confirmed dates and venues |
| Schema.org Article | Newsletter entries if archived on-site |

## Migration Sequence

| Milestone | Work |
| --- | --- |
| 2 | Add Astro scaffold, tokens, layouts, components, content schemas, quiet mode, persona model |
| 3 | Rebuild landing page with persona-driven section ordering |
| 4 | Build core deep-dive pages |
| 5 | Build secondary pages |
| 6 | Add canonical CV and application pack sync |
| 7 | QA, accessibility, performance, SEO |
| 8 | Netlify deploy preview, review, production launch after sign-off |

## Risks And Mitigations

| Risk | Mitigation |
| --- | --- |
| Content scale overwhelms implementation | Use content collections and route templates |
| Unverified facts creep into public copy | Build flag checker and launch-blocking policy |
| Terminal aesthetic hurts readability | Use long-form reading panels and quiet mode |
| External embeds hurt performance | Use linked thumbnails by default |
| Contact form needs backend decisions | Default to Netlify Forms or mailto until routing is approved |
| Canonical CV source remains unavailable | Keep current CV PDF as temporary fallback and flag sync as incomplete |

## Decision For Milestone 2

Milestone 2 should start by replacing the static repo internals with an Astro scaffold on a feature branch, while preserving the current production branch until a Netlify deploy preview is approved. The current `index.html`, `styles.css`, and `script.js` should be treated as reference material for the visual and interaction design, not as files to extend indefinitely.
