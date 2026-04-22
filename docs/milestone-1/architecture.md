# Milestone 1 Architecture

## Verified Project Context

The active production property is `digital-cv-blaine-fisher` on Netlify, serving `https://blainefisher.com/` from the public GitHub repository `Bfisher911/digital-cv` on branch `main`.

The current repository is a small static site:

| Area | Current state |
| --- | --- |
| Site files | `index.html`, `styles.css`, `script.js` |
| Assets | `assets/BlaineFisher.png`, `assets/BlaineFisher2.png`, `Blaine Fisher - CV.pdf` |
| Active aesthetic | MU-TH-UR 6000 terminal style, black field, red command accent, scanline overlay, boot screen, terminal input |
| Active interaction | Sound toggle, persona switcher, mobile nav, terminal commands |
| Current content model | Hard-coded HTML and JavaScript |
| Current deployment | Netlify production from `main`, no published sitemap or robots file found |

Milestone 1 does not rebuild the site. It defines the information architecture, content model, verification needs, and migration direction for the full rebuild.

## Architecture Direction

The rebuilt site should use Astro as a static, content-first framework. Astro keeps the final site fast while allowing deep routes, Markdown or MDX content collections, reusable components, and small client islands for the interactive terminal layer.

The landing page remains an orchestrated front door. Dedicated deep-dive routes carry the full professional record.

This milestone now includes `page-content-briefs.md` as the bridge between information architecture and build work. The wireframes describe page structure. The content briefs describe page promise, draft copy direction, proof points, required cards, and route-specific flags.

## Global Structure

| Route | Purpose | Primary audience | Content depth |
| --- | --- | --- | --- |
| `/` | Overview and persona-driven front door | Hiring committees, journalists, search firms, collaborators, students | Hero, current scope, section previews, persona-emphasized order |
| `/about` | Long-form biography in first person | General professional audience, journalists, collaborators | 900 to 1200 words, 4 to 6 narrative paragraphs |
| `/experience` | Full career record | Hiring committees, search firms, institutional partners | Reverse chronology, role cards, narrative, accomplishments, related links |
| `/teaching` | Teaching identity and course catalog | Students, faculty peers, academic leaders | Philosophy, course catalog, bootcamps, teaching recognition |
| `/research` | Research portfolio | Research collaborators, academic readers, journalists | MissDelta, Dos Aguadas, methods, collaborators |
| `/publications` | Complete writing and editorial index | Readers, journalists, tenure-style reviewers | Books, editorial leadership, newsletter, dissertation, conceptual work |
| `/book` | Dedicated page for *The AI Human* | Readers, event hosts, media | Synopsis, themes, purchase links, sample status, related talks |
| `/speaking` | Keynotes and speaking archive | Event organizers, media, professional associations | Reverse-chronological engagements, topics, booking path |
| `/consulting` | Sparkfish Consulting page | Executive, university, and international clients | Service areas, engagements, client types, inquiry routing |
| `/newsletter` | *Hooked on AI* hub | Newsletter readers, AI educators, professional network | Description, subscribe link, curated or imported archive |
| `/media` | Press and appearances | Journalists, media bookers, search firms | Television, podcast, print, web, embeds where available |
| `/honors` | Awards and recognition | Hiring committees, academic reviewers | Catalog of awards, fellowships, editorial and peer review roles |
| `/credentials` | Degrees, licenses, certifications | Credential reviewers, HR, academic partners | Academic, professional, and technology credentials |
| `/press-kit` | Press and speaker assets | Journalists, event producers | Bios, headshots, fact sheet, topics, media links |
| `/contact` | Inquiry routing | All external audiences | General, speaking, consulting, media, academic collaboration |
| `/cv` | Canonical downloads | Hiring committees, search firms, collaborators | CV, resume, cover letter template, portfolio one-pager |

## Content Density Targets

The rebuilt site should feel complete on first visit and reward deeper review. These targets give Milestone 2 enough shape to build without another content planning cycle.

| Route | Minimum page weight | Required evidence |
| --- | --- | --- |
| `/` | Full front door with hero, persona state, proof rail, and 8 to 10 route previews | 6 career threads, 6 proof metrics, all primary CTAs |
| `/about` | 900 to 1200 words | First-person biography, interdisciplinary thesis, invitation to collaborate |
| `/experience` | 12 role cards plus thread navigation | Titles, organizations, dates, narrative, accomplishments, related links |
| `/teaching` | 300 to 500 word philosophy plus course and bootcamp catalog | Course groups, bootcamps, teaching recognition, LMS training platforms |
| `/research` | 3 major sections plus method catalog | MissDelta, Dos Aguadas, methods, equipment, presentations |
| `/publications` | Complete index with grouped records | Book, editorial leadership, peer review, newsletter, dissertation, in-development work |
| `/book` | 400 to 600 word synopsis plus purchase and audience panels | ISBN, retailer links, themes, missing sample and review flags |
| `/speaking` | Topic list plus year-grouped archive | Confirmed events from 2013 to 2026, recording links where available |
| `/consulting` | Positioning page with service areas and engagement evidence | Sparkfish, Dubai, Mayo College, Federal Reserve, Louisiana associations |
| `/newsletter` | Subscription hub plus archive model | Manual archive fields, LinkedIn dependency flag |
| `/media` | Chronological media index | Television, podcast, print and web, embed policy |
| `/honors` | Recognition catalog | Awards, fellowships, peer review appointment, editorial service cross-links |
| `/credentials` | Verification-oriented credential catalog | Academic, clinical, and technology credentials |
| `/press-kit` | Approved asset and copy hub | Bios, headshots, monogram, fact sheet, speaking topics, contact |
| `/contact` | Routed inquiry page | Inquiry type selector, direct links, routing flags |
| `/cv` | Download hub | Current CV fallback, canonical pack integration plan |

## Landing Page Sections

The landing page should contain summary modules, each with a clear route link:

| Section | Summary role | Route |
| --- | --- | --- |
| Hero | Establish Dr. Fisher's identity, credential line, thesis, headshot, primary CTAs | `/about`, `/book`, `/speaking`, `/research`, `/cv` |
| Current Work Matrix | Show the six career threads without collapsing them | `/experience` |
| Enterprise AI and Academic Technology | Highlight Tulane AI strategy, WAVE, LMS administration, training scale | `/experience` |
| Teaching | Preview the course catalog, bootcamps, fellowships, teaching award | `/teaching` |
| Research | Preview MissDelta, Dos Aguadas, methods, field imagery | `/research` |
| Publications and Book | Preview *The AI Human*, HSToday, newsletter, dissertation | `/publications`, `/book` |
| Speaking and Media | Preview selected keynotes and media appearances | `/speaking`, `/media` |
| Consulting | Establish Sparkfish as a separate advisory practice | `/consulting` |
| Credentials and Honors | Surface degrees, licenses, certifications, awards | `/credentials`, `/honors` |
| Terminal Interface | Preserve MU-TH-UR interaction and route discovery | all key routes |

## Persona Switcher Model

The persona switcher should change the landing page emphasis, not only the accent color. It should update the hero title, hero summary, visible metric cards, section order, featured cards, terminal suggestions, and primary CTA order. Dedicated routes remain stable.

| Persona | Landing section order |
| --- | --- |
| Default Profile | Hero, Current Work Matrix, Enterprise AI, Teaching, Research, Publications, Speaking, Consulting, Credentials |
| AI Consultant | Hero, Consulting, Book, Newsletter, Speaking, Bootcamps, Enterprise AI, Media, Contact |
| Technology Professor | Hero, Teaching, Course Catalog, Faculty Fellowships, Teaching Excellence, Enterprise Technology, Publications |
| Emergency Management Professor | Hero, Emergency Management Teaching, HSToday, Paramedic and Healthcare Background, Speaking, Tulane |
| Archaeologist | Hero, Research, Dos Aguadas, Peer Review Appointment, LiDAR and GIS Methods, Dissertation, Teaching |
| GIS Researcher | Hero, MissDelta, Drone and Sensor Work, Remote Sensing Methods, Dos Aguadas, School of Science and Engineering Teaching |

## Content Source Model

Astro content collections should separate stable biographical facts from page layout:

| Collection | Purpose | Example items |
| --- | --- | --- |
| `profile` | Canonical identity, hero strings, credentials, external profiles | name, thesis, credential line, social links |
| `experience` | Role cards and career chronology | Tulane ILC, Sparkfish, HSToday, MissDelta, paramedic roles |
| `teaching` | Course and bootcamp records | AI in Modern Society, Health and Medical Issues in Emergency Management, W.A.V.E. workshops |
| `research` | Research projects and methods | MissDelta, Dos Aguadas, ArcGIS Pro, LiDAR methods |
| `publications` | Books, dissertation, editorial leadership, newsletter | *The AI Human*, HSToday, LSU dissertation |
| `speaking` | Speaking engagements and topics | NOAI, LDAA, LCPA, Federal Reserve keynote |
| `media` | Media appearances | The National Desk, WVUE Fox 8, Nola.com, Citizen Chef |
| `honors` | Honors and recognition | John Percy Dyer Award, Sigma Iota Epsilon, Faculty Fellow |
| `credentials` | Degrees, licenses, certifications | Ph.D., NRP, IBM AI, LinkedIn Learning certificates |
| `downloads` | CV and press kit assets | CV PDF, resume, headshots, fact sheet |

## Visual System Requirements

The design system should deepen the current terminal aesthetic:

| System | Direction |
| --- | --- |
| Color | Near-black field, CRT green or soft amber accent, Deep Sea Teal and Warm Gold as restrained supporting colors |
| Typography | Monospace for terminal labels and metadata, serif for long-form reading, clean sans for UI chrome |
| Motion | Boot sequence, cursor blink, typewriter reveal, persona glitch shift, all gated by `prefers-reduced-motion` and quiet mode |
| Texture | Scanlines as a subtle overlay, toggleable through quiet mode |
| Imagery | Existing headshots until better professional imagery is provided, no stock photography |
| Accessibility | Keyboard-first controls, color contrast AA, reduced motion, captions or transcripts for media |

## Route-Level SEO And Metadata

Every route should define:

| Metadata | Requirement |
| --- | --- |
| Title | Page-specific, human-readable |
| Description | 140 to 170 characters where practical |
| Canonical URL | `https://blainefisher.com/{route}` |
| Open Graph | Title, description, image, type |
| Twitter Card | Summary large image where a visual asset exists |
| Structured data | Person on core pages, Book on `/book`, Event for speaking entries where dates are confirmed, Article for newsletter entries if archived |

## Cross-Linking Rules

Each professional thread should stand alone and cross-link to related pages:

| Thread | Primary page | Cross-links |
| --- | --- | --- |
| Enterprise academic technology | `/experience` | `/teaching`, `/consulting`, `/speaking` |
| Teaching | `/teaching` | `/experience`, `/honors`, `/speaking` |
| Published authorship | `/publications` | `/book`, `/newsletter`, `/speaking` |
| Consulting | `/consulting` | `/speaking`, `/book`, `/contact` |
| Research | `/research` | `/publications`, `/credentials`, `/speaking` |
| Paramedic and healthcare background | `/experience` | `/teaching`, `/credentials`, `/media` |

## Milestone Boundary

Milestone 1 stops after documentation review. Milestone 2 begins the Astro design system, component library, content schema, and interactive island planning.
