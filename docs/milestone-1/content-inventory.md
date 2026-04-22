# Milestone 1 Content Inventory

This inventory maps source facts to their primary destination in the rebuilt site. A fact should have one primary home and may appear elsewhere only as a short preview, citation, metric, or cross-link.

## Source Status Legend

| Status | Meaning |
| --- | --- |
| Confirmed in brief | Fact supplied in the rebuild brief |
| Confirmed in current site | Fact appears in the deployed static site or current repo |
| Needs source asset | Fact is usable, but supporting media or file is missing |
| Verify | Fact needs confirmation before launch |

## Current Site Facts

| Fact | Primary page | Section | Content type | Cross-links | Status |
| --- | --- | --- | --- | --- | --- |
| Netlify site name `digital-cv-blaine-fisher` | `/cv` | Site operations note | Deployment metadata | Architecture docs | Confirmed in Netlify lookup |
| Custom domain `blainefisher.com` | Global | SEO and canonical metadata | Site config | All routes | Confirmed in Netlify lookup |
| GitHub repo `Bfisher911/digital-cv` | `/cv` | Site operations note | Repository metadata | Architecture docs | Confirmed in Netlify lookup |
| Production branch `main` | `/cv` | Site operations note | Deployment metadata | Architecture docs | Confirmed in Netlify lookup |
| Current site uses `index.html`, `styles.css`, `script.js` | Architecture docs | Current state | Technical inventory | Rebuild recommendation | Confirmed in current repo |
| Current headshot `assets/BlaineFisher2.png` | `/press-kit` | Headshots | Image asset | `/`, `/about` | Confirmed in current repo |
| Existing alternate headshot `assets/BlaineFisher.png` | `/press-kit` | Headshots | Image asset | `/about` | Confirmed in current repo |
| Existing CV PDF `Blaine Fisher - CV.pdf` | `/cv` | Downloads | Download asset | `/press-kit` | Confirmed in current repo |
| Current MU-TH-UR boot screen | `/` | Terminal layer | Interaction pattern | Design system | Confirmed in current repo |
| Current sound toggle | `/` | Terminal controls | Interaction pattern | Design system | Confirmed in current repo |
| Current persona switcher labels | `/` | Persona switcher | Interaction pattern | All route previews | Confirmed in current repo |
| Current terminal commands `HELP`, `WHOAMI`, `PUBLICATIONS`, `EXPERIENCE`, `CLEAR`, `ACCESS`, `SUDO` | `/` | Terminal layer | Interaction pattern | All routes | Confirmed in current repo |

## Identity And Positioning

| Fact | Primary page | Section | Content type | Cross-links | Status |
| --- | --- | --- | --- | --- | --- |
| Name: Dr. Blaine S. Fisher, PhD | `/about` | Hero and biography | Identity | Global metadata | Confirmed in brief |
| Credential line: PhD, MS, MA, NRP, PG-Cert | `/credentials` | Credential summary | Credential string | `/`, `/press-kit` | Confirmed in brief |
| Identity noun: senior academic technology executive | `/about` | Thesis paragraph | Positioning | `/`, `/experience` | Confirmed in brief |
| Identity includes professor | `/teaching` | Teaching overview | Positioning | `/about`, `/experience` | Confirmed in brief |
| Identity includes published author | `/publications` | Publications overview | Positioning | `/book` | Confirmed in brief |
| Identity includes editorial leader | `/publications` | Editorial leadership | Positioning | `/experience`, `/honors` | Confirmed in brief |
| Identity includes independent advisory practice principal | `/consulting` | Page hero | Positioning | `/experience` | Confirmed in brief |
| Identity includes geospatial researcher | `/research` | Page hero | Positioning | `/experience` | Confirmed in brief |
| Identity includes former paramedic | `/experience` | Healthcare career thread | Positioning | `/credentials`, `/teaching` | Confirmed in brief |
| One-sentence thesis: enterprise adoption of emerging technology in complex institutional environments, especially where public health, safety, and academic mission intersect | `/about` | Thesis paragraph | Narrative copy | `/` | Confirmed in brief |
| Altitude framing: director-to-AVP scope with Tulane manager title | `/about` | Thesis paragraph | Narrative context | `/experience` | Confirmed in brief |

## Enterprise Academic Technology Leadership

| Fact | Primary page | Section | Content type | Cross-links | Status |
| --- | --- | --- | --- | --- | --- |
| Senior Instructional Technology Manager at Tulane Innovative Learning Center | `/experience` | Current roles | Role card | `/about` | Confirmed in brief |
| Date range: October 2012 to present | `/experience` | Tulane ILC role | Role dates | `/cv` | Confirmed in brief |
| Owns Tulane enterprise AI adoption strategy | `/experience` | Tulane ILC role | Accomplishment | `/consulting`, `/speaking` | Confirmed in brief |
| Scope: 13,000-student, multi-school institution | `/experience` | Tulane ILC role | Metric | `/` | Confirmed in brief |
| Canvas LMS administrator for every academic unit | `/experience` | Tulane ILC role | Accomplishment | `/teaching` | Confirmed in brief |
| Trained over 2,000 faculty across ten schools | `/experience` | Tulane ILC role | Metric | `/`, `/teaching` | Confirmed in brief |
| W.A.V.E. Workshop Series | `/teaching` | Bootcamps and intensives | Program card | `/experience` | Confirmed in brief |
| Preflight Bootcamp | `/teaching` | Bootcamps and intensives | Program card | `/experience` | Confirmed in brief |
| Architected Training WAVE | `/teaching` | Teaching recognition | Platform accomplishment | `/experience` | Confirmed in brief |
| Training WAVE was Tulane's first internal compliance LMS | `/teaching` | Teaching recognition | Platform detail | `/experience` | Confirmed in brief |
| Directed transitions to Bridge LMS and Oracle Learn | `/teaching` | Teaching recognition | Platform detail | `/experience` | Confirmed in brief |
| Transitions span three generations of enterprise learning platforms | `/teaching` | Teaching recognition | Platform detail | `/experience` | Confirmed in brief |
| Founded WAVE, Tulane internal network of AI visionaries and educators | `/experience` | Tulane ILC role | Accomplishment | `/teaching` | Confirmed in brief |
| Serves on Tulane AI in the Classroom Workgroup | `/experience` | Tulane ILC role | Service item | `/honors` | Confirmed in brief |
| Serves on Tulane Tech Industry Advisory Board | `/experience` | Tulane ILC role | Service item | `/honors` | Confirmed in brief |

## Faculty Appointments And Teaching

| Fact | Primary page | Section | Content type | Cross-links | Status |
| --- | --- | --- | --- | --- | --- |
| Professor at Tulane School of Professional Advancement | `/experience` | Current roles | Role card | `/teaching` | Confirmed in brief |
| SoPA teaching began December 2014 | `/experience` | SoPA role | Role dates | `/cv` | Confirmed in brief |
| Teaches in SoPA Information Technology program | `/teaching` | Course catalog | Program group | `/experience` | Confirmed in brief |
| Teaches in SoPA Emergency Management program | `/teaching` | Course catalog | Program group | `/experience` | Confirmed in brief |
| AI in Modern Society | `/teaching` | SoPA IT courses | Course card | `/speaking`, `/book` | Confirmed in brief |
| AI in Action | `/teaching` | SoPA IT courses | Course card | `/speaking`, `/book` | Confirmed in brief |
| UI/UX Design Fundamentals | `/teaching` | SoPA IT courses | Course card | `/credentials` | Confirmed in brief |
| Enterprise Applications Architecture | `/teaching` | SoPA IT courses | Course card | `/experience` | Confirmed in brief |
| Ethics of Technology Through Science Fiction | `/teaching` | SoPA IT courses | Course card | `/publications` | Confirmed in brief |
| Applied Artificial Intelligence | `/teaching` | SoPA IT courses | Course card | `/book` | Verify current offering |
| Health and Medical Issues in Emergency Management | `/teaching` | SoPA Emergency Management courses | Course card | `/experience` | Confirmed in brief |
| Teaches GIS and remote sensing through Tulane School of Science and Engineering | `/teaching` | School of Science and Engineering | Course group | `/research` | Confirmed in brief |
| GIS and remote sensing specific course titles | `/teaching` | School of Science and Engineering | Course cards | `/research` | Verify |
| Faculty Fellow at SoPA | `/honors` | Fellowships | Honor card | `/teaching` | Confirmed in brief |
| Faculty Fellow at Newcomb College Institute | `/honors` | Fellowships | Honor card | `/teaching` | Confirmed in brief |
| John Percy Dyer Award for Teaching Excellence | `/honors` | Awards | Honor card | `/teaching` | Confirmed in brief |
| Award date: May 2017 | `/honors` | Awards | Date | `/teaching` | Confirmed in brief |
| Teaching philosophy links pressure, practice, ethics, and applied work | `/teaching` | Pedagogical philosophy | Long-form copy | `/about` | Confirmed in brief |
| AI literacy belongs alongside reading, writing, and math | `/teaching` | Pedagogical philosophy | Thesis | `/speaking` | Confirmed in brief |
| Push-to-pull education model from NOAI keynote | `/teaching` | Pedagogical philosophy | Thesis | `/speaking` | Confirmed in brief |

## Authorship, Editorial Leadership, And Newsletter

| Fact | Primary page | Section | Content type | Cross-links | Status |
| --- | --- | --- | --- | --- | --- |
| Author of *The AI Human: Navigating a Transformed World* | `/book` | Hero | Book record | `/publications` | Confirmed in brief |
| Publication year: 2025 | `/book` | Book metadata | Date | `/publications` | Confirmed in brief |
| ISBN 979-8993144207 | `/book` | Book metadata | Identifier | `/publications` | Confirmed in brief |
| Amazon print link | `/book` | Purchase links | URL | `/publications` | Confirmed in brief |
| Amazon Kindle link | `/book` | Purchase links | URL | `/publications` | Confirmed in brief |
| Barnes and Noble link | `/book` | Purchase links | URL | `/publications` | Confirmed in brief |
| Book themes: AI adoption promotion framework | `/book` | Key themes | Theme card | `/speaking` | Confirmed in brief |
| Book themes: stewardship vs execution | `/book` | Key themes | Theme card | `/speaking` | Confirmed in brief |
| Book themes: human agency and critical thinking | `/book` | Key themes | Theme card | `/teaching` | Confirmed in brief |
| Book themes: tested frameworks for educators and leaders | `/book` | Key themes | Theme card | `/consulting` | Confirmed in brief |
| Senior editorial leader of Pracademic Affairs at HSToday | `/publications` | Editorial leadership | Editorial role | `/experience` | Confirmed in brief |
| HSToday service began 2020 | `/publications` | Editorial leadership | Date | `/experience` | Confirmed in brief |
| Pracademic Affairs bridges scholarly research and frontline practice | `/publications` | Editorial leadership | Description | `/speaking` | Confirmed in brief |
| Section co-founded in 2020 by Meghan McPherson and Dr. Michael Wallace | `/publications` | Editorial history | Description | `/experience` | Confirmed in brief |
| First four editions published by Naval Postgraduate School Center for Homeland Security and Defense | `/publications` | Editorial history | Description | none | Confirmed in brief |
| Section migrated to HSToday following executive orders affecting original host | `/publications` | Editorial history | Description | none | Confirmed in brief |
| 6th edition published January 2026 | `/publications` | Editorial history | Date | none | Confirmed in brief |
| Publishes biweekly *Hooked on AI* newsletter on LinkedIn | `/newsletter` | Overview | Newsletter record | `/publications` | Confirmed in brief |
| Newsletter archive can be manually maintained if LinkedIn API access is unavailable | `/newsletter` | Archive policy | Maintenance note | Rebuild recommendation | Confirmed in brief |
| Peer Reviewer for *Advances in Archaeological Practice* | `/honors` | Service appointments | Appointment card | `/publications`, `/research` | Confirmed in brief |
| Appointment date: April 2026 | `/honors` | Service appointments | Date | `/publications` | Confirmed in brief |
| Publisher: Cambridge University Press / Society for American Archaeology | `/honors` | Service appointments | Organization | `/publications` | Confirmed in brief |
| Conceptual article "The Founder-as-Orchestrator" in development | `/publications` | In-development work | Work record | `/consulting` | Confirmed in brief |
| Target journals: *Entrepreneurship Theory and Practice*, *MIS Quarterly* | `/publications` | In-development work | Target list | none | Confirmed in brief |

## Consulting And Speaking

| Fact | Primary page | Section | Content type | Cross-links | Status |
| --- | --- | --- | --- | --- | --- |
| Founder and Principal of Sparkfish Consulting, LLC | `/consulting` | Hero | Advisory practice identity | `/experience` | Confirmed in brief |
| Sparkfish serves executive, university, and international clients | `/consulting` | Positioning | Client statement | `/experience` | Confirmed in brief |
| Service: enterprise AI adoption strategy | `/consulting` | Service areas | Service card | `/speaking` | Confirmed in brief |
| Service: AI curriculum design and bootcamp delivery | `/consulting` | Service areas | Service card | `/teaching` | Confirmed in brief |
| Service: executive technology advisory | `/consulting` | Service areas | Service card | `/experience` | Confirmed in brief |
| Service: faculty capability building for higher education | `/consulting` | Service areas | Service card | `/teaching` | Confirmed in brief |
| Service: AI ethics consulting | `/consulting` | Service areas | Service card | `/book` | Confirmed in brief |
| Service: GIS and remote sensing consulting for coastal and environmental research | `/consulting` | Service areas | Service card | `/research` | Confirmed in brief |
| Dubai four-day executive AI workshop | `/consulting` | Past engagements | Engagement card | `/speaking` | Confirmed in brief |
| Client: Futures Abroad | `/consulting` | Past engagements | Client detail | `/speaking` | Confirmed in brief |
| Dubai workshop date: June 2025 | `/consulting` | Past engagements | Date | `/speaking` | Confirmed in brief |
| Command Z Future Tech Lab mentorship | `/consulting` | Past engagements | Engagement card | `/speaking` | Confirmed in brief |
| Mayo College, Ajmer, India | `/consulting` | Past engagements | Location | `/speaking` | Confirmed in brief |
| Big Red Education engagement date: July 2026 | `/consulting` | Past engagements | Date | `/speaking` | Confirmed in brief |
| Federal Reserve Bank keynote to 2,000-plus employees | `/speaking` | 2023 archive | Engagement card | `/consulting` | Confirmed in brief |
| Louisiana District Attorneys Association keynote | `/speaking` | 2026 archive | Engagement card | `/consulting` | Confirmed in brief |
| Society of Louisiana CPAs keynote | `/speaking` | 2026 archive | Engagement card | `/consulting` | Confirmed in brief |
| NOAI Festival keynote | `/speaking` | 2025 archive | Engagement card | `/teaching` | Confirmed in brief |
| Speaking topics list | `/speaking` | Topics | Topic cards | `/consulting` | Confirmed in brief |
| Booking contact and rate card | `/speaking` | Booking panel | CTA and download | `/contact` | Verify |

## Research

| Fact | Primary page | Section | Content type | Cross-links | Status |
| --- | --- | --- | --- | --- | --- |
| Geospatial science lead on MissDelta | `/research` | MissDelta | Research role | `/experience` | Confirmed in brief |
| MissDelta full name: Mississippi River Delta Transition Initiative | `/research` | MissDelta | Project name | `/experience` | Confirmed in brief |
| National Academies Gulf Research Program award SCON-10000883 | `/research` | MissDelta | Funding detail | `/publications` | Confirmed in brief |
| $22 million total funding | `/research` | MissDelta | Metric | `/` | Confirmed in brief |
| Five-year project | `/research` | MissDelta | Project scope | `/experience` | Confirmed in brief |
| Dates: 2024 through 2029 | `/research` | MissDelta | Date range | `/experience` | Confirmed in brief |
| Consortium: 14 institutions | `/research` | MissDelta | Metric | `/` | Confirmed in brief |
| Consortium: 50-plus co-PIs, postdocs, graduate students | `/research` | MissDelta | Metric | `/` | Confirmed in brief |
| Role includes remote sensing and GIS subject matter expert | `/research` | MissDelta | Role detail | `/experience` | Confirmed in brief |
| Role includes drone operator | `/research` | MissDelta | Role detail | `/experience` | Confirmed in brief |
| Equipment: LiDAR systems | `/research` | Methods and tools | Equipment | `/credentials` | Confirmed in brief |
| Equipment: multispectral systems | `/research` | Methods and tools | Equipment | `/credentials` | Confirmed in brief |
| Equipment: thermal systems | `/research` | Methods and tools | Equipment | `/credentials` | Confirmed in brief |
| Equipment: photogrammetry drone systems | `/research` | Methods and tools | Equipment | `/credentials` | Confirmed in brief |
| Study area: Birdsfoot Delta region | `/research` | MissDelta | Study area | `/media` | Confirmed in brief |
| Link to `missdelta.org` | `/research` | MissDelta | External link | `/experience` | Confirmed in brief |
| Dissertation research: Classic Maya defensive strategies at Dos Aguadas | `/research` | Dos Aguadas | Research project | `/publications` | Confirmed in brief |
| Region: Guatemalan Peten | `/research` | Dos Aguadas | Study area | `/speaking` | Confirmed in brief |
| LSU dissertation year: 2024 | `/publications` | Dissertation | Citation date | `/research` | Confirmed in brief |
| Dissertation URL `https://repository.lsu.edu/gradschool_dissertations/6415/` | `/publications` | Dissertation | External link | `/research` | Confirmed in brief |
| Dos Aguadas methods: LiDAR, GIS, photogrammetry, multispectral imaging, thermal imaging | `/research` | Dos Aguadas methods | Method list | `/credentials` | Confirmed in brief |
| Dos Aguadas analyses: population estimation, least-cost path, line-of-sight, volumetric labor investment | `/research` | Dos Aguadas methods | Method list | `/speaking` | Confirmed in brief |
| South-Central Conference on Mesoamerica presentation, October 2024 | `/speaking` | 2024 archive | Engagement card | `/research` | Confirmed in brief |
| Presentation title: "Strategic Fortifications and Warfare: Analyzing Defensive Earthworks at Dos Aguadas, Guatemala through LiDAR and GIS" | `/speaking` | 2024 archive | Talk title | `/research` | Confirmed in brief |
| Tech Day co-presentation, June 2022, "LiDAR Technology and Maya Archaeology" | `/speaking` | 2022 archive | Engagement card | `/research` | Confirmed in brief |
| ArcGIS Pro | `/research` | Methods and tools | Tool | `/credentials` | Confirmed in brief |
| ArcPy | `/research` | Methods and tools | Tool | `/credentials` | Confirmed in brief |
| QGIS | `/research` | Methods and tools | Tool | `/credentials` | Confirmed in brief |
| Drone manufacturers and models | `/research` | Methods and tools | Equipment detail | `/press-kit` | Verify |
| Advisor and committee | `/research` | Dos Aguadas | Academic detail | `/publications` | Verify |
| Research collaborators | `/research` | Collaborators | Profile links | `/press-kit` | Verify |

## Education, Licensure, Certifications, And Honors

| Fact | Primary page | Section | Content type | Cross-links | Status |
| --- | --- | --- | --- | --- | --- |
| Ph.D., Geography and Anthropology, Louisiana State University, 2024 | `/credentials` | Academic degrees | Degree record | `/research` | Confirmed in brief |
| M.A., Liberal Arts, Tulane University, 2017 | `/credentials` | Academic degrees | Degree record | `/about` | Confirmed in brief |
| M.S., Health Care Management, University of New Orleans, 2012 | `/credentials` | Academic degrees | Degree record | `/experience` | Confirmed in brief |
| Post-Graduate Certificate, Geographic Information Systems, Tulane School of Science and Engineering, 2018 | `/credentials` | Academic degrees | Credential record | `/research` | Confirmed in brief |
| Paramedic, National EMS Academy, 2008 | `/credentials` | Academic degrees | Credential record | `/experience` | Confirmed in brief |
| B.G.S., General Studies, Southeastern Louisiana University, 2010 | `/credentials` | Academic degrees | Degree record | `/about` | Confirmed in brief |
| Minors in Health Promotion and History | `/credentials` | Academic degrees | Degree detail | `/about` | Confirmed in brief |
| Emergency Medical Technician - Paramedic, NREMT, May 2008 | `/credentials` | Professional licenses | License record | `/experience` | Confirmed in brief |
| American Heart Association Instructor, 8-plus years | `/credentials` | Professional licenses | Certification record | `/experience` | Confirmed in brief |
| AHA courses: Heartsaver, CPR, ACLS, PALS | `/credentials` | Professional licenses | Scope list | `/teaching` | Confirmed in brief |
| Tactical Operations Medical Technician, Cypress Creek EMS, December 2005 | `/credentials` | Professional licenses | Certification record | `/experience` | Confirmed in brief |
| Emergency Medical Technician Basic, Nunez Community College, May 2004 | `/credentials` | Professional licenses | Certification record | `/experience` | Confirmed in brief |
| IBM Introduction to Artificial Intelligence, September 2024 | `/credentials` | Technology certifications | Certification record | `/consulting` | Confirmed in brief |
| IBM verification URL `https://coursera.org/verify/HQLNV85TPU5L` | `/credentials` | Technology certifications | External link | none | Confirmed in brief |
| Figma for UX Design, LinkedIn, October 2022 | `/credentials` | Technology certifications | Certification record | `/teaching` | Confirmed in brief |
| User Experience for Web Design, LinkedIn, October 2022 | `/credentials` | Technology certifications | Certification record | `/teaching` | Confirmed in brief |
| Foundations of Corporate Training, LinkedIn, August 2019 | `/credentials` | Technology certifications | Certification record | `/consulting` | Confirmed in brief |
| How to Design and Deliver Training Programs, LinkedIn, August 2019 | `/credentials` | Technology certifications | Certification record | `/consulting` | Confirmed in brief |
| Gamification of Learning, LinkedIn, June 2019 | `/credentials` | Technology certifications | Certification record | `/teaching` | Confirmed in brief |
| Grant Writing for Education, LinkedIn, June 2019 | `/credentials` | Technology certifications | Certification record | `/research` | Confirmed in brief |
| Learning Management Systems Quick Start, LinkedIn, June 2019 | `/credentials` | Technology certifications | Certification record | `/experience` | Confirmed in brief |
| Learning SCORM and Tin Can API, LinkedIn, June 2019 | `/credentials` | Technology certifications | Certification record | `/experience` | Confirmed in brief |
| Learning to Write a Syllabus, LinkedIn, June 2019 | `/credentials` | Technology certifications | Certification record | `/teaching` | Confirmed in brief |
| The Neuroscience of Learning, LinkedIn, June 2019 | `/credentials` | Technology certifications | Certification record | `/teaching` | Confirmed in brief |
| Sigma Iota Epsilon Induction, UNO, November 2012 | `/honors` | Awards | Honor card | `/credentials` | Confirmed in brief |
| ZOOper Star Employee of the Year, Audubon Nature Institute, January 2010 | `/honors` | Awards | Honor card | `/experience` | Confirmed in brief |

## Prior Professional Roles

| Fact | Primary page | Section | Content type | Cross-links | Status |
| --- | --- | --- | --- | --- | --- |
| American Heart Association Instructor, dates TBD | `/experience` | Past roles | Role card | `/credentials` | Verify dates |
| Hospital and Health Program Development, Franciscan Missionaries of Our Lady, dates TBD | `/experience` | Past roles | Role card | `/media` | Verify dates |
| Helped build hospitals and health programs in New Orleans East | `/experience` | Franciscan Missionaries role | Accomplishment | `/about` | Confirmed in brief |
| Connected to East After Hours Urgent Care Center | `/experience` | Franciscan Missionaries role | Detail | `/credentials` | Confirmed in brief |
| Paramedic, East After Hours Urgent Care, 07/2011 to 01/2013 | `/experience` | Past roles | Role card | `/credentials` | Confirmed in brief |
| Health and Wellness Program Manager and First Responder, Audubon Nature Institute, 04/2006 to 06/2014 | `/experience` | Past roles | Role card | `/honors` | Confirmed in brief |
| Critical Care and Flight Paramedic, Acadian Ambulance, 05/2007 to 01/2011 | `/experience` | Past roles | Role card | `/credentials` | Confirmed in brief |
| Structural Welder, Premier Industries, 05/2003 to 05/2005 | `/experience` | Past roles | Role card | `/about` | Confirmed in brief |
| Tulane environmental health and safety program design, training, and compliance systems | `/experience` | Healthcare and compliance thread | Accomplishment | `/credentials` | Confirmed in brief |

## Speaking Archive

| Fact | Primary page | Section | Content type | Cross-links | Status |
| --- | --- | --- | --- | --- | --- |
| LDAA 50th Annual Conference, April 2026 | `/speaking` | 2026 archive | Engagement card | `/consulting` | Confirmed in brief |
| LCPA 2026 Accounting Educators Workshop, March 2026 | `/speaking` | 2026 archive | Engagement card | `/consulting` | Confirmed in brief |
| Big Red Education webinar, March 2026 | `/speaking` | 2026 archive | Engagement card | `/consulting` | Confirmed in brief |
| Big Red recording `https://www.youtube.com/watch?v=cK7TIXkWaB8` | `/speaking` | 2026 archive | Recording URL | `/media` | Confirmed in brief |
| Command Z Future Tech Lab Mayo College India, July 2026 | `/speaking` | 2026 archive | Engagement card | `/consulting` | Confirmed in brief |
| NOAI Festival, November 2025 | `/speaking` | 2025 archive | Engagement card | `/teaching` | Confirmed in brief |
| Futures Abroad Dubai, June 2025 | `/speaking` | 2025 archive | Engagement card | `/consulting` | Confirmed in brief |
| CELT Creating Innovative Classroom Learning Experiences Using AI, October 2025, with Kay McLennan | `/speaking` | 2025 archive | Engagement card | `/teaching` | Confirmed in brief |
| Professional Development Day "9-5 AI", September 2024 | `/speaking` | 2024 archive | Engagement card | `/teaching` | Confirmed in brief |
| South-Central Conference on Mesoamerica, October 2024 | `/speaking` | 2024 archive | Engagement card | `/research` | Confirmed in brief |
| Tech Day AI Panel Moderator, June 2024 | `/speaking` | 2024 archive | Engagement card | `/media` | Confirmed in brief |
| Top Hat Fireside Chat with Dr. Bradley Cohen, December 2023 | `/speaking` | 2023 archive | Engagement card | `/teaching` | Confirmed in brief |
| TCC Federal Reserve Bank keynote "AI Decoded", December 2023 | `/speaking` | 2023 archive | Engagement card | `/consulting` | Confirmed in brief |
| 5th Annual Sparking Success, December 2023 | `/speaking` | 2023 archive | Engagement card | `/teaching` | Confirmed in brief |
| CELT "Using AI to Create your Course", November 2023 | `/speaking` | 2023 archive | Engagement card | `/teaching` | Confirmed in brief |
| CELT-ILC AI Series "AI 101", September 2023 | `/speaking` | 2023 archive | Engagement card | `/teaching` | Confirmed in brief |
| Professional Development Day, September 2022 | `/speaking` | 2022 archive | Engagement card | `/teaching` | Confirmed in brief |
| Tech Day LiDAR/Maya, June 2022 | `/speaking` | 2022 archive | Engagement card | `/research` | Confirmed in brief |
| 4th Annual Sparking Success, December 2022 | `/speaking` | 2022 archive | Engagement card | `/teaching` | Confirmed in brief |
| CELT "Canvas 2.0 Increasing Efficiency", August 2021 | `/speaking` | 2021 archive | Engagement card | `/teaching` | Confirmed in brief |
| DevLearn Las Vegas, three sessions across 2013-2015 | `/speaking` | 2013-2015 archive | Engagement group | `/experience` | Confirmed in brief, verify session details |

## Media

| Fact | Primary page | Section | Content type | Cross-links | Status |
| --- | --- | --- | --- | --- | --- |
| The National Desk appearances in 2025 on Grok 3 | `/media` | Television | Media card | `/speaking` | Confirmed in brief |
| The National Desk appearances in 2025 on DeepSeek | `/media` | Television | Media card | `/speaking` | Confirmed in brief |
| The National Desk appearances in 2025 on AI-enabled phishing | `/media` | Television | Media card | `/speaking` | Confirmed in brief |
| Current site DeepSeek URL `https://www.youtube.com/watch?v=6IJ0ZcxQm7o` | `/media` | Television | Video URL | `/speaking` | Confirmed in current site |
| Current site Grok 3 URL `https://www.youtube.com/watch?v=OB4TSnfO1cw` | `/media` | Television | Video URL | `/speaking` | Confirmed in current site |
| WVUE Fox 8 on cybersecurity | `/media` | Television | Media card | `/credentials` | Confirmed in brief |
| WVUE Fox 8 on disaster response | `/media` | Television | Media card | `/experience` | Confirmed in brief |
| WVUE Fox 8 on AI Bootcamp | `/media` | Television | Media card | `/teaching` | Confirmed in brief |
| Current site AI Bootcamp URL `https://www.youtube.com/watch?v=A0T1aFN09oQ` | `/media` | Television | Video URL | `/teaching` | Confirmed in current site |
| Citizen Chef with Tom Colicchio, iHeart Radio, June 2020 | `/media` | Podcast | Podcast card | `/experience` | Confirmed in brief |
| Nola.com Hurricane Laura coverage, August 2020 | `/media` | Print and web | Article card | `/experience` | Confirmed in brief |
| FBI phishing email warning coverage, January 2025 | `/media` | Print and web | Article card | `/speaking` | Confirmed in brief |
| Big Red Education Command Z promo video URL | `/media` | Promotional video | Video card | `/consulting` | Verify |

## Press Kit, Contact, And Downloads

| Fact | Primary page | Section | Content type | Cross-links | Status |
| --- | --- | --- | --- | --- | --- |
| Short bio, 50 words | `/press-kit` | Bios | Download or copy block | `/about` | Needs drafting from approved bio |
| Medium bio, 150 words | `/press-kit` | Bios | Download or copy block | `/about` | Needs drafting from approved bio |
| Long bio, 500 words | `/press-kit` | Bios | Download or copy block | `/about` | Needs drafting from approved bio |
| Headshots at 300dpi and 72dpi | `/press-kit` | Headshots | Image downloads | `/` | Needs source asset |
| Horizontal and vertical headshot framing | `/press-kit` | Headshots | Image downloads | `/` | Needs source asset |
| With and without blazer headshots | `/press-kit` | Headshots | Image downloads | `/` | Needs source asset |
| Monogram SVG, PNG, PDF | `/press-kit` | Brand assets | Download assets | Global | Needs source asset |
| Credential string for one-line attribution | `/press-kit` | Credential string | Copy block | `/credentials` | Confirmed in brief |
| Fact sheet one-pager PDF | `/press-kit` | Fact sheet | Download asset | `/cv` | Needs source asset |
| Recent media mentions with links and embed codes | `/press-kit` | Media mentions | Link list | `/media` | Partially confirmed |
| Academic email `bfisher3@tulane.edu` | `/contact` | Direct links | Contact link | `/press-kit` | Confirmed in brief |
| Consulting email | `/contact` | Direct links | Contact link | `/consulting` | Verify |
| Contact inquiry types: general, speaking, consulting, media, academic collaboration | `/contact` | Form | Routing fields | `/press-kit` | Confirmed in brief |
| Tulane Experts profile | `/contact` | External profiles | URL | `/about` | Confirmed in current site |
| SoPA faculty bio | `/contact` | External profiles | URL | `/teaching` | Confirmed in current site |
| HSToday author page | `/contact` | External profiles | URL | `/publications` | Confirmed in current site |
| LinkedIn profile | `/contact` | External profiles | URL | `/newsletter` | Confirmed in current site |
| Canonical CV PDF from career-application-studio | `/cv` | Downloads | Download asset | `/press-kit` | Verify source path |
| Canonical resume | `/cv` | Downloads | Download asset | `/press-kit` | Verify source path |
| Cover letter template | `/cv` | Downloads | Download asset | `/press-kit` | Verify source path |
| Portfolio one-pager | `/cv` | Downloads | Download asset | `/press-kit` | Verify source path |

## Content Exclusions

| Fact | Primary page | Section | Content type | Cross-links | Status |
| --- | --- | --- | --- | --- | --- |
| Married to Jenna, sons Bryec and Brady | `/about` | Human paragraph | Context only | none | Confirmed in brief, use lightly |
| Fishing, recreational drone piloting, D&D campaign, language learning | `/about` | Human paragraph | Context only | none | Confirmed in brief, use lightly |
| Creative fiction projects | No route | Excluded | Exclusion note | none | Exclude unless Dr. Fisher requests writing portfolio |
