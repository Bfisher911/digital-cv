document.addEventListener('DOMContentLoaded', () => {

    /* --- Persona System --- */
    const personas = {
        'DEFAULT': {
            accent: '#ff0000',
            title: 'Technology Leader & Professor',
            summary: 'Executive technology and innovation leader with 10-plus years leading AI initiatives, vendor acquisitions, and platform adoption at Tulane University. Professor designing applied, ethics-aware curricula. Geospatial researcher leveraging drone technology for coastal resilience.',
            filter: 'all'
        },
        'AI_CONSULTANT': {
            accent: '#00ffff',
            title: 'AI Strategy & Implementation Consultant',
            summary: 'Author of "The AI Human" (2025). Specializing in bridging the gap between technical AI potential and operational reality. I help organizations navigate the shift from execution to stewardship through ethical, habit-based AI adoption.',
            filter: 'ai'
        },
        'TECH_PROFESSOR': {
            accent: '#00ff00',
            title: 'Professor of Information Technology',
            summary: 'Leading instructional technology at Tulane University. I design and teach applied curricula in UI/UX Design and AI in Modern Society, focusing on creating accessible, high-quality learning environments.',
            filter: 'tech'
        },
        'EM_PROFESSOR': {
            accent: '#ffaa00',
            title: 'Professor of Emergency Preparedness',
            summary: 'Drawing on a foundation as a Paramedic and NRP, I educate the next generation of crisis responders. My work focuses on health, medical issues, and the logistical complexities of modern disaster science.',
            filter: 'em'
        },
        'ARCHAEOLOGIST': {
            accent: '#d4af37',
            title: 'Maya Archaeologist & PhD',
            summary: 'PhD in Geography and Anthropology. Utilizing LiDAR and remote sensing to uncover the secrets of ancient Maya fortifications. My research at Dos Aguadas reveals complex strategic defense patterns from antiquity.',
            filter: 'arch'
        },
        'GIS_RESEARCHER': {
            accent: '#20b2aa',
            title: 'Geospatial Scientist & Researcher',
            summary: 'SME for the $22M MissDelta initiative. I leverage LiDAR and thermal drone technology to model environmental shifts in the Mississippi River Delta, informing global coastal resilience strategies.',
            filter: 'gis'
        }
    };

    const setPersona = (key) => {
        const p = personas[key];
        document.documentElement.style.setProperty('--accent-red', p.accent);
        
        // Glitch effect on body
        document.body.classList.add('glitch-active');
        playTone(300, 'sawtooth', 0.2, 0.05); // Shift sound
        
        setTimeout(() => {
            // Update Text content
            document.querySelector('.hero .title').innerText = p.title;
            document.querySelector('.hero .summary').innerText = p.summary;
            
            // Filter Timeline and Cards
            document.querySelectorAll('.timeline-item, .feature-card, .media-item').forEach(el => {
                if (p.filter === 'all' || el.getAttribute('data-tag') === p.filter) {
                    el.style.display = 'block';
                } else {
                    el.style.display = 'none';
                }
            });

            document.body.classList.remove('glitch-active');
            playChirp();
        }, 300);
    };

    // Persona Menu Toggle
    const personaBtn = document.getElementById('persona-toggle');
    const personaMenu = document.getElementById('persona-menu');
    
    if (personaBtn && personaMenu) {
        personaBtn.addEventListener('click', () => {
            personaMenu.classList.toggle('active');
            playClick();
        });

        personaMenu.querySelectorAll('.persona-option').forEach(opt => {
            opt.addEventListener('click', () => {
                const key = opt.getAttribute('data-persona');
                setPersona(key);
                personaMenu.classList.remove('active');
            });
        });
    }

    /* --- Sound System (Web Audio API) --- */
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
        if (!soundEnabled || !audioCtx) return;
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

    const playClick = () => playTone(800, 'square', 0.05, 0.05); // Keyboard click
    const playChirp = () => playTone(2000, 'sawtooth', 0.1, 0.02); // System prompt
    const playError = () => playTone(150, 'sawtooth', 0.3, 0.05); // Bad command

    // Sound Toggle
    const soundBtn = document.getElementById('sound-toggle');
    if (soundBtn) {
        soundBtn.addEventListener('click', () => {
            initAudio();
            soundEnabled = !soundEnabled;
            soundBtn.innerText = soundEnabled ? '[ SOUND: ON ]' : '[ SOUND: OFF ]';
            if (soundEnabled) playChirp();
            soundBtn.style.color = soundEnabled ? 'var(--accent-primary)' : 'var(--accent-red)';
        });
    }

    // Attach clicks to buttons
    document.querySelectorAll('a, button, .btn').forEach(el => {
        el.addEventListener('mousedown', playClick);
    });

    /* --- Boot Sequence --- */
    const bootScreen = document.getElementById('boot-screen');
    const bootText = document.getElementById('boot-text');
    
    const bootLines = [
        "INITIATING SYSTEM BOOT...",
        "MEMORY CHECK: OK [640K RAM]",
        "LOADING OS KERNEL...",
        "MOUNTING DRIVES...",
        "ESTABLISHING SECURE CONNECTION...",
        "BYPASSING PROTOCOL 7...",
        "ACCESS GRANTED.",
        "WELCOME TO MU-TH-UR 6000 TERMINAL."
    ];

    let lineIndex = 0;
    
    const typeBootLine = () => {
        if (!bootScreen || !bootText) return;
        if (lineIndex < bootLines.length) {
            bootText.innerHTML += `<div>> ${bootLines[lineIndex]}</div>`;
            playClick();
            lineIndex++;
            setTimeout(typeBootLine, Math.random() * 200 + 100);
        } else {
            setTimeout(() => {
                bootScreen.style.opacity = '0';
                setTimeout(() => {
                    bootScreen.style.display = 'none';
                    playChirp();
                }, 500);
            }, 800);
        }
    };

    // Start boot sequence
    if (bootScreen) {
        setTimeout(typeBootLine, 500);
    }

    /* --- Interactive Terminal --- */
    const terminalInput = document.getElementById('terminal-input');
    const terminalOutput = document.getElementById('terminal-output');

    const commands = {
        'HELP': 'AVAILABLE COMMANDS:<br>WHOAMI - Display user profile<br>PUBLICATIONS - List authorized texts<br>EXPERIENCE - View career log<br>CLEAR - Wipe terminal output<br>ACCESS - Request classified data',
        'WHOAMI': 'PROFILE: DR. BLAINE FISHER<br>STATUS: EXECUTIVE TECHNOLOGY LEADER / PROFESSOR<br>EXPERTISE: AI INITIATIVES, GEOSPATIAL SCIENCE, CRISIS RESPONSE.',
        'PUBLICATIONS': 'AUTHORIZED TEXT FOUND: "THE AI HUMAN" (2025).<br>SUBJECT: NAVIGATING A TRANSFORMED WORLD. STEWARDSHIP OVER EXECUTION.',
        'EXPERIENCE': 'LOG ENTRIES FOUND:<br>- TULANE UNIVERSITY: SNR INSTRUCTIONAL TECH MGR<br>- TULANE SOPA: PROFESSOR (IT & EMERGENCY PREP)<br>- HSTODAY: PRACADEMICS EDITOR<br>- MISSDELTA: GEOSPATIAL RESEARCHER',
        'ACCESS': 'ACCESS DENIED. CLEARANCE LEVEL INSUFFICIENT.',
        'SUDO': 'NICE TRY. THIS INCIDENT WILL BE REPORTED.'
    };

    if (terminalInput && terminalOutput) {
        terminalOutput.innerHTML = '<div>MU-TH-UR 6000 ONLINE. TYPE "HELP" FOR COMMANDS.</div>';
        
        terminalInput.addEventListener('keydown', (e) => {
            playClick(); // Sound on type
            if (e.key === 'Enter') {
                const val = terminalInput.value.trim().toUpperCase();
                terminalInput.value = '';
                
                if (val === '') return;

                terminalOutput.innerHTML += `<div><span style="color:var(--accent-red)">> ${val}</span></div>`;
                
                if (val === 'CLEAR') {
                    terminalOutput.innerHTML = '';
                    return;
                }

                setTimeout(() => {
                    if (commands[val]) {
                        terminalOutput.innerHTML += `<div>${commands[val]}</div>`;
                        playChirp();
                    } else {
                        terminalOutput.innerHTML += `<div>COMMAND NOT RECOGNIZED: ${val}</div>`;
                        playError();
                    }
                    terminalOutput.scrollTop = terminalOutput.scrollHeight;
                }, 400);
            }
        });
    }

    /* --- Mobile Navigation Toggle --- */
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            playClick();
        });
    }
});