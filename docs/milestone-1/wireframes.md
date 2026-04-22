# Milestone 1 Text Wireframes

These wireframes define page structure and content intent. They do not define final visual design. The final UI should preserve the MU-TH-UR 6000 visual language with improved readability, quiet mode, and accessible interactions.

## Shared Page Frame

| Region | Content |
| --- | --- |
| Top chrome | Skip link, compact terminal nav, persona switcher, sound toggle, quiet mode toggle |
| Header | `BF.` terminal mark, primary nav, mobile nav |
| Main | Route-specific content |
| Footer | Contact links, canonical profiles, CV link, copyright |
| Terminal layer | Optional command input with route-aware suggestions |
| Accessibility controls | Reduced motion support, quiet mode, keyboard-visible focus |

## `/`

| Section | Wireframe |
| --- | --- |
| Hero | Terminal status label, name `Dr. Blaine S. Fisher, PhD`, credential line `PhD, MS, MA, NRP, PG-Cert`, static title line, three-sentence bio reveal, headshot, CTAs for book, keynote, research, CV |
| Persona dock | Six profile buttons with accessible `aria-pressed` state |
| Current Work Matrix | Six cards for enterprise academic technology, faculty appointments, authorship and editorial leadership, consulting, research, paramedic and healthcare background |
| Featured Metrics | 13,000-student institution, over 2,000 faculty trained, $22M research consortium, 14 institutions, 2025 book, 2020-present editorial leadership |
| Section Previews | About, Experience, Teaching, Research, Publications, Book, Speaking, Consulting, Media, Credentials |
| Terminal | Route discovery commands, example `BOOK`, `RESEARCH`, `SPEAKING`, `CONSULTING`, `CV` |

Persona behavior:

| Persona | Primary CTA order | Featured preview order |
| --- | --- | --- |
| Default Profile | Book, Keynote, Research, CV | Experience, Teaching, Research, Publications, Speaking, Consulting |
| AI Consultant | Consulting, Book, Keynote, Newsletter | Consulting, Book, Newsletter, Speaking, Bootcamps, Enterprise AI |
| Technology Professor | Teaching, CV, Book, Contact | Teaching, Course Catalog, Fellowships, Award, Enterprise Technology |
| Emergency Management Professor | Teaching, HSToday, Speaking, Contact | Emergency Management Teaching, HSToday, Paramedic Background, Media |
| Archaeologist | Research, Dissertation, CV, Contact | Dos Aguadas, Methods, Peer Review, Presentations |
| GIS Researcher | MissDelta, Methods, CV, Contact | MissDelta, Drone Systems, Remote Sensing, Dos Aguadas |

## `/about`

| Section | Wireframe |
| --- | --- |
| Page hero | Terminal label `BIOGRAPHICAL RECORD`, page title, short positioning statement |
| Biography | 900 to 1200 words in first person, 4 to 6 paragraphs |
| Collaboration panel | Three cards for consulting, speaking, research collaboration |
| External profiles | Tulane Experts, SoPA faculty bio, HSToday author page, LinkedIn |
| Related routes | Experience, Teaching, Research, Publications |

Biography paragraph plan:

| Paragraph | Content |
| --- | --- |
| 1 | Thesis, interdisciplinary scope, executive altitude |
| 2 | Tulane enterprise technology work, AI strategy, WAVE, LMS platforms, faculty training |
| 3 | Teaching and research, SoPA, Science and Engineering, MissDelta, Dos Aguadas |
| 4 | Public intellectual work, book, HSToday, newsletter, speaking |
| 5 | New Orleans roots, paramedic past, family context, professional curiosity |
| 6 | Optional invitation to collaborate |

## `/experience`

| Section | Wireframe |
| --- | --- |
| Page hero | Terminal label `CAREER LOG`, executive positioning summary |
| Filter bar | All, Tulane, Teaching, Consulting, Editorial, Research, Healthcare, Early Career |
| Current roles | Role cards for Tulane ILC, SoPA professor, School of Science and Engineering instructor, Sparkfish, HSToday, MissDelta |
| Past roles | Role cards for AHA instructor, Franciscan Missionaries work, East After Hours Urgent Care, Audubon, Acadian Ambulance, Premier Industries |
| Career thread index | Six career threads with route links |
| Download CTA | CV route and canonical PDF |

Role card structure:

| Element | Requirement |
| --- | --- |
| Title | Official title where a title exists |
| Organization | Full organization name |
| Location | City or remote status where confirmed |
| Dates | Confirmed range or `[FLAG: verify with Dr. Fisher]` |
| Narrative | 2 to 4 paragraphs, executive altitude |
| Accomplishments | Quantified bullets only when facts are confirmed |
| Links | Related teaching, research, publication, consulting, or media pages |

## `/teaching`

| Section | Wireframe |
| --- | --- |
| Page hero | Terminal label `TEACHING INTERFACE`, teaching thesis |
| Pedagogical philosophy | 300 to 500 words |
| Course catalog | Cards grouped by Tulane SoPA IT, Tulane SoPA Emergency Management, School of Science and Engineering, bootcamps and intensives |
| Bootcamp system | W.A.V.E. Workshop Series, Preflight Bootcamp, AI Fundamentals, AI for Research, AI as a Second Brain, Applied AI, AI-enhanced Course Design, 9 to 5 AI for Productivity |
| Teaching recognition | John Percy Dyer Award, Faculty Fellow appointments, Training WAVE, Bridge LMS, Oracle Learn |
| Related routes | Experience, Speaking, Honors |

Course card structure:

| Element | Requirement |
| --- | --- |
| Course title | Confirmed title |
| Level | Graduate, undergraduate, mixed, bootcamp, or `[FLAG: verify with Dr. Fisher]` |
| Audience | Students, faculty, professionals, or specific program |
| Description | Short description |
| Key topics | Confirmed topics |
| Notable assignments | `[FLAG: verify with Dr. Fisher]` unless provided |

## `/research`

| Section | Wireframe |
| --- | --- |
| Page hero | Terminal label `REMOTE SENSING RECORD`, research positioning |
| MissDelta | Full deep-dive, funding, consortium, role, study area, equipment, link to `missdelta.org` |
| Dos Aguadas | Dissertation deep-dive, methods, site, LSU link, presentations |
| Methods and tools | ArcGIS Pro, ArcPy, QGIS, LiDAR, multispectral, thermal, photogrammetry, line-of-sight, least-cost path, volumetric labor analysis |
| Collaborators | Named collaborators if provided |
| Related routes | Publications, Speaking, Credentials |

Research project card structure:

| Element | Requirement |
| --- | --- |
| Project name | Full name |
| Role | Confirmed role |
| Dates | Confirmed range |
| Scope | Funding, institutions, collaborators, study region |
| Methods | Confirmed tools and methods |
| Outputs | Dissertation, presentations, publications, links |
| Asset | Authentic imagery only, or abstract geometric treatment |

## `/publications`

| Section | Wireframe |
| --- | --- |
| Page hero | Terminal label `PUBLISHED RECORD`, writing and editorial summary |
| Books | *The AI Human* card with ISBN and retailer links |
| Editorial leadership | HSToday Pracademic Affairs context |
| Peer review | Advances in Archaeological Practice appointment |
| Newsletter | *Hooked on AI* description and subscription link |
| Dissertation | LSU dissertation citation, abstract status, link |
| Conceptual work | "The Founder-as-Orchestrator" flagged as in development |
| Media mentions | Reviews, citations, and press mentions if provided |

## `/book`

| Section | Wireframe |
| --- | --- |
| Page hero | Book cover, title, subtitle, ISBN, purchase CTAs |
| Synopsis | 400 to 600 words |
| Themes | Promotion framework, stewardship, human agency, critical thinking, educators, leaders |
| Audience paths | For educators, for leaders, for students |
| Sample | Excerpt or `[FLAG: verify with Dr. Fisher]` |
| Retailers | Amazon print, Amazon Kindle, Barnes and Noble |
| Related | Talks, podcasts, press, newsletter issues |

## `/speaking`

| Section | Wireframe |
| --- | --- |
| Page hero | Terminal label `SPEAKING LOG`, booking summary |
| Topics | Seven topic cards from the brief |
| Featured talks | Federal Reserve, NOAI, Dubai, Big Red, LDAA, LCPA |
| Engagement archive | Reverse-chronological groups by year |
| Booking panel | Contact route, rate card status, media kit link |
| Related routes | Consulting, Book, Media |

Engagement card structure:

| Element | Requirement |
| --- | --- |
| Date | Month and year or exact date where confirmed |
| Venue | Confirmed event or organization |
| City | Confirmed city or `[FLAG: verify with Dr. Fisher]` |
| Audience size | Confirmed size or omitted |
| Talk title | Confirmed title or `[FLAG: verify with Dr. Fisher]` |
| Description | Brief, factual summary |
| Recording | URL where available |

## `/consulting`

| Section | Wireframe |
| --- | --- |
| Page hero | Terminal label `ADVISORY PRACTICE`, Sparkfish positioning |
| Service areas | Six service cards from the brief |
| Engagements | Dubai, Mayo College Ajmer, Federal Reserve, Louisiana professional associations |
| Client types | Higher education, government, corporate, international educational organizations |
| Operating model | Workshops, executive advisory, curriculum design, faculty capability building |
| Inquiry CTA | Contact form routed to consulting |

## `/newsletter`

| Section | Wireframe |
| --- | --- |
| Page hero | Terminal label `NEWSLETTER ARCHIVE`, *Hooked on AI* summary |
| Subscribe | LinkedIn newsletter link |
| Recent issues | Manually maintained or imported issue cards |
| Editorial themes | AI adoption, teaching, leadership, ethics, workflow |
| Related routes | Book, Publications, Speaking |

## `/media`

| Section | Wireframe |
| --- | --- |
| Page hero | Terminal label `MEDIA SIGNALS`, press and appearances summary |
| Television | The National Desk, WVUE Fox 8 |
| Podcast | Citizen Chef with Tom Colicchio |
| Print and web | Nola.com, FBI phishing warning coverage |
| Promotional video | Big Red Education Command Z, pending URL |
| Embed policy | Embed when available, transcript or caption required |

## `/honors`

| Section | Wireframe |
| --- | --- |
| Page hero | Terminal label `RECOGNITION LOG`, honors summary |
| Awards | John Percy Dyer Award, Sigma Iota Epsilon, ZOOper Star |
| Fellowships | Tulane SoPA, Newcomb College Institute |
| Service appointments | Advances in Archaeological Practice peer reviewer, HSToday editorial leadership |
| Related routes | Teaching, Publications, Credentials |

## `/credentials`

| Section | Wireframe |
| --- | --- |
| Page hero | Terminal label `CREDENTIAL CHECK`, credential summary |
| Academic degrees | Ph.D., M.A., M.S., PG-Cert, Paramedic, B.G.S. |
| Professional licenses | NREMT Paramedic, AHA Instructor, Tactical Operations Medical Technician, EMT Basic |
| Technology certifications | IBM AI and LinkedIn Learning certificates |
| Download | CV route |

## `/press-kit`

| Section | Wireframe |
| --- | --- |
| Page hero | Terminal label `PRESS KIT`, use guidance |
| Bios | Short, medium, long |
| Headshots | Current files plus requested future variants |
| Brand assets | Monogram files, credential string |
| Fact sheet | One-pager download |
| Recent media | Links and embed codes |
| Speaking topics | Condensed topic list |
| Press contact | Separate press inquiry routing if provided |

## `/contact`

| Section | Wireframe |
| --- | --- |
| Page hero | Terminal label `CONTACT ROUTER`, contact summary |
| Form | Inquiry type selector, name, organization, email, message, consent note |
| Routing | General, speaking, consulting, media, academic collaboration |
| Direct links | Academic email, consulting email if provided, LinkedIn, Tulane Experts, SoPA, HSToday |
| Response expectations | `[FLAG: verify with Dr. Fisher]` |

## `/cv`

| Section | Wireframe |
| --- | --- |
| Page hero | Terminal label `CANONICAL PACK`, download summary |
| Downloads | CV PDF, resume, cover letter template, portfolio one-pager |
| Source | Career application studio canonical pack |
| Update policy | Build-time sync or verification report |
| Fallback | Current repo file `Blaine Fisher - CV.pdf` until canonical sync is implemented |
