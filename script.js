document.addEventListener('DOMContentLoaded', () => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const personas = {
        DEFAULT: {
            label: 'DEFAULT',
            accent: '#ff2a2a',
            key: 'default',
            title: 'Technology Leader and Professor',
            summary: 'Technology and innovation leader, professor, author, geospatial researcher, and former paramedic. Dr. Fisher works across AI adoption, instructional technology, emergency management, remote sensing, and institutional strategy.',
            order: ['about', 'experience', 'teaching', 'research', 'writing', 'speaking', 'consulting', 'press', 'education', 'contact']
        },
        AI_CONSULTANT: {
            label: 'AI CONSULTANT',
            accent: '#4af0a8',
            key: 'ai',
            title: 'AI strategy and curriculum for executives, universities, and international clients',
            summary: 'Founder and Principal of Sparkfish Consulting, LLC. Dr. Fisher advises clients on AI adoption, curriculum design, executive technology strategy, faculty capability building, and ethical implementation.',
            order: ['consulting', 'writing', 'speaking', 'teaching', 'experience', 'press', 'about', 'research', 'education', 'contact']
        },
        TECH_PROFESSOR: {
            label: 'TECH PROFESSOR',
            accent: '#00ff66',
            key: 'tech',
            title: 'Professor of Information Technology, Tulane SoPA',
            summary: 'Professor of Information Technology teaching AI, UI/UX, enterprise applications, ethics of technology, and applied technology practice for graduate and undergraduate students.',
            order: ['teaching', 'experience', 'speaking', 'writing', 'about', 'press', 'education', 'research', 'consulting', 'contact']
        },
        EM_PROFESSOR: {
            label: 'EM PROFESSOR',
            accent: '#ffb86c',
            key: 'em',
            title: 'Pracademic bridging scholarship and frontline practice',
            summary: 'Professor of Emergency Management, former paramedic, and Pracademics Editor at Homeland Security Today, with work spanning health, medical issues, disaster planning, public safety, and practice-facing scholarship.',
            order: ['teaching', 'writing', 'experience', 'press', 'speaking', 'about', 'education', 'research', 'consulting', 'contact']
        },
        ARCHAEOLOGIST: {
            label: 'ARCHAEOLOGIST',
            accent: '#d4af37',
            key: 'arch',
            title: 'LiDAR and GIS analysis of Classic Maya defensive earthworks',
            summary: 'Ph.D. in Geography and Anthropology with dissertation research on Classic Maya defensive strategies at Dos Aguadas, Guatemala, using LiDAR, GIS, photogrammetry, and spatial analysis.',
            order: ['research', 'writing', 'speaking', 'education', 'teaching', 'about', 'experience', 'press', 'consulting', 'contact']
        },
        GIS_RESEARCHER: {
            label: 'GIS RESEARCHER',
            accent: '#20d6c7',
            key: 'gis',
            title: 'Remote sensing and geospatial analysis for coastal resilience',
            summary: 'Remote Sensing and Geospatial Scientist with MissDelta, using GIS, LiDAR, multispectral, thermal, and photogrammetric methods for coastal and archaeological research.',
            order: ['research', 'teaching', 'experience', 'speaking', 'education', 'about', 'writing', 'consulting', 'press', 'contact']
        }
    };

    /*
      TODO: Confirm School of Science and Engineering teaching role details.
      TODO: Confirm AHA instructor dates and Franciscan Missionaries role language.
      TODO: Confirm book ASIN mapping, MissDelta funding share, and Command Z promo URL.
      These public TODO markers also appear in CONTENT_TODOS.md and the relevant page sections.
    */

    let audioCtx = null;
    let soundEnabled = false;

    const initAudio = () => {
        if (!audioCtx) {
            audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        }
        if (audioCtx.state === 'suspended') {
            audioCtx.resume();
        }
    };

    const playTone = (freq, type, duration, vol) => {
        if (!soundEnabled || !audioCtx || prefersReducedMotion) return;
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.type = type;
        osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
        gain.gain.setValueAtTime(vol, audioCtx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + duration);
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        osc.start();
        osc.stop(audioCtx.currentTime + duration);
    };

    const playClick = () => playTone(760, 'square', 0.045, 0.04);
    const playChirp = () => playTone(1800, 'sawtooth', 0.09, 0.025);
    const playError = () => playTone(140, 'sawtooth', 0.24, 0.04);

    const soundBtn = document.getElementById('sound-toggle');
    if (soundBtn) {
        soundBtn.addEventListener('click', () => {
            initAudio();
            soundEnabled = !soundEnabled;
            soundBtn.textContent = soundEnabled ? '[ SOUND: ON ]' : '[ SOUND: OFF ]';
            soundBtn.setAttribute('aria-pressed', String(soundEnabled));
            if (soundEnabled) playChirp();
        });
    }

    const themeBtn = document.getElementById('theme-toggle');
    if (themeBtn) {
        themeBtn.addEventListener('click', () => {
            const isHighContrast = document.body.classList.toggle('high-contrast');
            themeBtn.textContent = isHighContrast ? '[ CONTRAST: HIGH ]' : '[ CONTRAST: TERMINAL ]';
            themeBtn.setAttribute('aria-pressed', String(isHighContrast));
            playClick();
        });
    }

    const personaBtn = document.getElementById('persona-toggle');
    const personaMenu = document.getElementById('persona-menu');
    const personaOptions = document.querySelectorAll('.persona-option');
    const heroTitle = document.getElementById('hero-title');
    const heroSummary = document.getElementById('hero-summary');
    const personaSections = document.querySelectorAll('.persona-section');

    const hasPersona = (element, key) => {
        const values = (element.dataset.personas || '').split(',').map((item) => item.trim());
        return key === 'default' || values.includes(key);
    };

    const setPersona = (personaKey) => {
        const persona = personas[personaKey] || personas.DEFAULT;
        document.documentElement.style.setProperty('--accent-red', persona.accent);
        document.body.classList.add('glitch-active');

        if (heroTitle) heroTitle.textContent = persona.title;
        if (heroSummary) heroSummary.textContent = persona.summary;
        if (personaBtn) personaBtn.textContent = `[ PERSONA: ${persona.label} ]`;

        personaSections.forEach((section) => {
            const sectionId = section.id;
            const index = persona.order.indexOf(sectionId);
            const fallbackOrder = Number(section.dataset.defaultOrder || 200);
            section.style.order = String(index === -1 ? fallbackOrder + 100 : (index + 1) * 10);
            section.classList.toggle('persona-featured', hasPersona(section, persona.key));
            section.classList.toggle('persona-dimmed', persona.key !== 'default' && !hasPersona(section, persona.key));
        });

        document.querySelectorAll('[data-personas]').forEach((element) => {
            if (element.classList.contains('persona-section')) return;
            element.classList.toggle('persona-dimmed', persona.key !== 'default' && !hasPersona(element, persona.key));
        });

        personaOptions.forEach((option) => {
            const isActive = option.dataset.persona === personaKey;
            option.setAttribute('aria-checked', String(isActive));
        });

        window.setTimeout(() => document.body.classList.remove('glitch-active'), 320);
        playChirp();
    };

    if (personaBtn && personaMenu) {
        personaBtn.addEventListener('click', () => {
            const isOpen = personaMenu.classList.toggle('active');
            personaBtn.setAttribute('aria-expanded', String(isOpen));
            playClick();
        });

        document.addEventListener('click', (event) => {
            if (!personaMenu.contains(event.target) && !personaBtn.contains(event.target)) {
                personaMenu.classList.remove('active');
                personaBtn.setAttribute('aria-expanded', 'false');
            }
        });
    }

    personaOptions.forEach((option) => {
        option.addEventListener('click', () => {
            setPersona(option.dataset.persona);
            if (personaMenu && personaBtn) {
                personaMenu.classList.remove('active');
                personaBtn.setAttribute('aria-expanded', 'false');
            }
        });
    });

    const filterButtons = document.querySelectorAll('.filter-chip');
    const speakingEntries = document.querySelectorAll('.speaking-entry');

    filterButtons.forEach((button) => {
        button.addEventListener('click', () => {
            const filter = button.dataset.filter;
            filterButtons.forEach((btn) => {
                const active = btn === button;
                btn.classList.toggle('active', active);
                btn.setAttribute('aria-pressed', String(active));
            });
            speakingEntries.forEach((entry) => {
                entry.hidden = filter !== 'all' && entry.dataset.type !== filter;
            });
            playClick();
        });
    });

    const bootScreen = document.getElementById('boot-screen');
    const bootText = document.getElementById('boot-text');
    const bootLines = [
        'INITIATING SYSTEM BOOT...',
        'MEMORY CHECK: OK',
        'LOADING PROFESSIONAL RECORD...',
        'MOUNTING TEACHING, RESEARCH, WRITING...',
        'ESTABLISHING SECURE CONNECTION...',
        'ACCESS GRANTED.',
        'WELCOME TO MU-TH-UR 6000 TERMINAL.'
    ];

    const finishBoot = () => {
        if (!bootScreen) return;
        bootScreen.classList.add('boot-complete');
        window.setTimeout(() => {
            bootScreen.style.display = 'none';
        }, 420);
    };

    if (bootScreen && bootText) {
        if (prefersReducedMotion) {
            finishBoot();
        } else {
            let lineIndex = 0;
            const typeBootLine = () => {
                if (lineIndex < bootLines.length) {
                    const row = document.createElement('div');
                    row.textContent = `> ${bootLines[lineIndex]}`;
                    bootText.appendChild(row);
                    lineIndex += 1;
                    window.setTimeout(typeBootLine, 105);
                } else {
                    window.setTimeout(finishBoot, 450);
                }
            };
            window.setTimeout(typeBootLine, 180);
        }
    }

    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.getElementById('primary-nav');
    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            const active = navLinks.classList.toggle('active');
            hamburger.setAttribute('aria-expanded', String(active));
            playClick();
        });

        navLinks.querySelectorAll('a').forEach((link) => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                hamburger.setAttribute('aria-expanded', 'false');
            });
        });
    }

    document.querySelectorAll('a, button').forEach((element) => {
        element.addEventListener('mousedown', playClick);
    });

    const terminalInput = document.getElementById('terminal-input');
    const terminalOutput = document.getElementById('terminal-output');
    const commands = {
        HELP: 'AVAILABLE COMMANDS: WHOAMI, TEACHING, RESEARCH, WRITING, SPEAKING, CONSULTING, PRESS, CV, CLEAR',
        WHOAMI: 'PROFILE: DR. BLAINE FISHER. STATUS: TECHNOLOGY LEADER, PROFESSOR, AUTHOR, GEOSPATIAL RESEARCHER, FORMER PARAMEDIC.',
        TEACHING: 'TEACHING RECORD: AI, UI/UX, ENTERPRISE APPLICATIONS, EMERGENCY MANAGEMENT, GIS, REMOTE SENSING.',
        RESEARCH: 'RESEARCH RECORD: MISSDELTA, DOS AGUADAS, LIDAR, GIS, PHOTOGRAMMETRY, COASTAL AND ARCHAEOLOGICAL FIELDWORK.',
        WRITING: 'WRITING RECORD: THE AI HUMAN, HOOKED ON AI, TECH TEMPLES AND TERRAIN, HSTODAY PRACADEMIC AFFAIRS.',
        SPEAKING: 'SPEAKING RECORD: KEYNOTES, PANELS, WORKSHOPS, ACADEMIC TALKS, MEDIA SESSIONS.',
        CONSULTING: 'SPARKFISH CONSULTING: AI ADOPTION, CURRICULUM DESIGN, EXECUTIVE TECHNOLOGY STRATEGY.',
        PRESS: 'PRESS RECORD: THE NATIONAL DESK, WVUE FOX 8, NOLA.COM, CITIZEN CHEF.',
        CV: 'CANONICAL CV FILE: BLAINE FISHER - CV.PDF.',
        ACCESS: 'ACCESS GRANTED. STAY CURIOUS.',
        SUDO: 'NICE TRY. INCIDENT LOGGED WITH AFFECTION.'
    };

    if (terminalInput && terminalOutput) {
        const writeTerminal = (text, accent = false) => {
            const row = document.createElement('div');
            row.textContent = text;
            if (accent) row.style.color = 'var(--accent-red)';
            terminalOutput.appendChild(row);
            terminalOutput.scrollTop = terminalOutput.scrollHeight;
        };

        writeTerminal('MU-TH-UR 6000 ONLINE. TYPE HELP FOR COMMANDS.');

        terminalInput.addEventListener('keydown', (event) => {
            if (event.key !== 'Enter') return;
            const value = terminalInput.value.trim().toUpperCase();
            terminalInput.value = '';
            if (!value) return;

            if (value === 'CLEAR') {
                terminalOutput.textContent = '';
                return;
            }

            writeTerminal(`> ${value}`, true);
            if (commands[value]) {
                writeTerminal(commands[value]);
                playChirp();
            } else {
                writeTerminal(`COMMAND NOT RECOGNIZED: ${value}`);
                playError();
            }
        });
    }

    setPersona('DEFAULT');
});
