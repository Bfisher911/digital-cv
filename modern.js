/* =========================================================================
   BlaineFisher.com — Modern edition behavior
   Vanilla JS, no dependencies. Progressive enhancement: if this fails, the
   page is still readable. Honors prefers-reduced-motion throughout.
   The preserved retro experience (classic.html) has its own script.js.
   ========================================================================= */
(() => {
    "use strict";

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const canHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const $ = (sel, root = document) => root.querySelector(sel);
    const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

    // Mark JS as ready: the hidden pre-reveal state is scoped to html.js, so if
    // this script never runs the content is visible by default (no blank ship).
    document.documentElement.classList.add("js");

    /* ---------- Theme toggle (light / dark) ----------
       Initial theme is set by a tiny inline <head> script (no FOUC); here we add
       the in-nav toggle, persist the choice, and keep the browser chrome in sync. */
    (() => {
        const root = document.documentElement;
        const themeColor = $('meta[name="theme-color"]');
        const isLight = () => root.classList.contains("light");
        const syncMeta = () => themeColor && themeColor.setAttribute("content", isLight() ? "#f3f1ec" : "#0b0b0d");
        syncMeta();
        const navEnd = $(".nav-end");
        if (!navEnd) return;
        const btn = document.createElement("button");
        btn.type = "button";
        btn.className = "theme-toggle";
        btn.innerHTML =
            '<svg class="ic-sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>' +
            '<svg class="ic-moon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 12.8A9 9 0 1 1 11.2 3 7 7 0 0 0 21 12.8z"/></svg>';
        const relabel = () => btn.setAttribute("aria-label", isLight() ? "Switch to dark mode" : "Switch to light mode");
        relabel();
        btn.addEventListener("click", () => {
            root.classList.toggle("light");
            try { localStorage.setItem("bf-theme", isLight() ? "light" : "dark"); } catch (e) {}
            relabel();
            syncMeta();
        });
        navEnd.insertBefore(btn, navEnd.firstChild);
        requestAnimationFrame(() => root.classList.add("theme-ready"));
    })();

    /* ---------- Scroll reveal ---------- */
    const revealEls = $$("[data-reveal]");
    if (revealEls.length) {
        const showAll = () => revealEls.forEach((el) => el.classList.add("is-visible"));
        if (reduceMotion || !("IntersectionObserver" in window)) {
            showAll();
        } else {
            const io = new IntersectionObserver(
                (entries, obs) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                            entry.target.classList.add("is-visible");
                            obs.unobserve(entry.target);
                        }
                    });
                },
                { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
            );
            revealEls.forEach((el) => io.observe(el));
            // Safety net: if the observer never fired (broken environment), reveal everything.
            window.setTimeout(() => {
                if (!revealEls.some((el) => el.classList.contains("is-visible"))) showAll();
            }, 2500);
        }
    }

    /* ---------- BlurText: per-letter hero name reveal ---------- */
    const blurTarget = $("[data-blur-text]");
    if (blurTarget) {
        const text = blurTarget.getAttribute("aria-label") || blurTarget.textContent.trim();
        blurTarget.textContent = "";
        const frag = document.createDocumentFragment();
        const wrap = document.createElement("span");
        wrap.setAttribute("aria-hidden", "true");
        text.split("").forEach((ch, i) => {
            const seg = document.createElement("span");
            seg.className = "bt-seg";
            seg.textContent = ch === " " ? " " : ch;
            seg.style.transitionDelay = `${i * 45}ms`;
            wrap.appendChild(seg);
        });
        frag.appendChild(wrap);
        blurTarget.appendChild(frag);
        const segs = $$(".bt-seg", blurTarget);
        const revealName = () => segs.forEach((s) => s.classList.add("is-in"));
        // setTimeout (not requestAnimationFrame) so the reveal still fires reliably
        // in throttled or headless renders where rAF callbacks can be deferred.
        if (reduceMotion) revealName();
        else window.setTimeout(revealName, 80);
    }

    /* ---------- Glitch tokens (hover scramble) ---------- */
    if (canHover && !reduceMotion) {
        const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        $$(".glitch").forEach((el) => {
            const base = el.dataset.text || el.textContent;
            const target = el.dataset.hover || base;
            let timer = null;
            el.addEventListener("mouseenter", () => {
                let frame = 0;
                clearInterval(timer);
                timer = setInterval(() => {
                    el.textContent = target
                        .split("")
                        .map((c, i) => (i < frame || c === " " ? target[i] : letters[(Math.random() * 26) | 0]))
                        .join("");
                    if (frame >= target.length) clearInterval(timer);
                    frame += 1 / 2;
                }, 30);
            });
            el.addEventListener("mouseleave", () => {
                clearInterval(timer);
                el.textContent = base;
            });
        });
    }

    /* ---------- Expertise orbit -> facet panel ---------- */
    const nodes = $$(".orbit-node");
    const facets = $$(".facet");
    if (nodes.length && facets.length) {
        const activate = (key) => {
            nodes.forEach((n) => n.classList.toggle("is-active", n.dataset.facet === key));
            nodes.forEach((n) => n.setAttribute("aria-pressed", String(n.dataset.facet === key)));
            facets.forEach((f) => f.classList.toggle("is-active", f.dataset.facetDetail === key));
        };
        nodes.forEach((n) => {
            n.setAttribute("aria-pressed", "false");
            n.addEventListener("click", () => activate(n.dataset.facet));
            n.addEventListener("mouseenter", () => { if (canHover) activate(n.dataset.facet); });
        });
        activate("ai");
    }

    /* ---------- Speaking archive filter (deep-dive page) ---------- */
    const chips = $$(".filter-chip");
    if (chips.length) {
        const items = $$(".archive-item");
        chips.forEach((chip) => {
            chip.addEventListener("click", () => {
                const f = chip.dataset.filter;
                chips.forEach((c) => {
                    const on = c === chip;
                    c.classList.toggle("active", on);
                    c.setAttribute("aria-pressed", String(on));
                });
                items.forEach((it) => { it.hidden = f !== "all" && it.dataset.type !== f; });
            });
        });
    }

    /* ---------- Magnetic primary buttons ---------- */
    if (canHover && !reduceMotion) {
        $$(".btn-solid").forEach((btn) => {
            let raf = null;
            btn.addEventListener("pointermove", (e) => {
                const r = btn.getBoundingClientRect();
                const x = (e.clientX - r.left - r.width / 2) * 0.18;
                const y = (e.clientY - r.top - r.height / 2) * 0.28;
                if (raf) cancelAnimationFrame(raf);
                raf = requestAnimationFrame(() => {
                    btn.style.transform = `translate(${x}px, ${y}px)`;
                });
            });
            btn.addEventListener("pointerleave", () => {
                if (raf) cancelAnimationFrame(raf);
                btn.style.transform = "";
            });
        });

        /* tile spotlight follows cursor */
        $$("[data-tilt]").forEach((tile) => {
            tile.addEventListener("pointermove", (e) => {
                const r = tile.getBoundingClientRect();
                tile.style.setProperty("--mx", `${((e.clientX - r.left) / r.width) * 100}%`);
                tile.style.setProperty("--my", `${((e.clientY - r.top) / r.height) * 100}%`);
            });
        });
    }

    /* ---------- Nav: scrolled state + active link ---------- */
    const nav = $(".nav");
    if (nav) {
        const onScroll = () => nav.classList.toggle("is-scrolled", window.scrollY > 24);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
    }

    const navLinkMap = new Map();
    $$(".nav-links a").forEach((a) => {
        const id = a.getAttribute("href").slice(1);
        if (id) navLinkMap.set(id, a);
    });
    if (navLinkMap.size && "IntersectionObserver" in window) {
        const spy = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    const link = navLinkMap.get(entry.target.id);
                    if (link && entry.isIntersecting) {
                        navLinkMap.forEach((l) => l.classList.remove("is-active"));
                        link.classList.add("is-active");
                    }
                });
            },
            { rootMargin: "-45% 0px -50% 0px" }
        );
        navLinkMap.forEach((_, id) => {
            const sec = document.getElementById(id);
            if (sec) spy.observe(sec);
        });
    }

    /* ---------- Mobile menu ---------- */
    const toggle = $(".nav-toggle");
    const menu = $("#mobile-menu");
    if (toggle && menu) {
        menu.removeAttribute("hidden");
        const setMenu = (open) => {
            menu.classList.toggle("is-open", open);
            toggle.setAttribute("aria-expanded", String(open));
            toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
            document.body.style.overflow = open ? "hidden" : "";
        };
        toggle.addEventListener("click", () => setMenu(!menu.classList.contains("is-open")));
        $$("a", menu).forEach((a) => a.addEventListener("click", () => setMenu(false)));
        document.addEventListener("keydown", (e) => {
            if (e.key === "Escape" && menu.classList.contains("is-open")) setMenu(false);
        });
    }

    /* ---------- Contact form validation + mailto compose ---------- */
    const form = $("#contact-form");
    if (form) {
        const setError = (id, on) => {
            const input = $(`#${id}`);
            const field = input?.closest(".field");
            if (field) field.classList.toggle("has-error", on);
            if (input) input.setAttribute("aria-invalid", String(on));
        };
        const validEmail = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
        form.addEventListener("submit", (e) => {
            e.preventDefault();
            const name = $("#cname"), email = $("#cemail"), msg = $("#cmsg");
            const inquiry = $("#inquiry");
            let ok = true, firstBad = null;
            const checks = [
                [name, !!name.value.trim()],
                [email, validEmail(email.value.trim())],
                [msg, !!msg.value.trim()],
            ];
            checks.forEach(([el, pass]) => {
                setError(el.id, !pass);
                if (!pass && !firstBad) firstBad = el;
                if (!pass) ok = false;
            });
            if (!ok) { firstBad?.focus(); return; }
            const subject = encodeURIComponent(`[${inquiry.value}] Inquiry from ${name.value.trim()}`);
            const body = encodeURIComponent(`${msg.value.trim()}\n\n— ${name.value.trim()}\n${email.value.trim()}`);
            window.location.href = `mailto:Bfisher3@tulane.edu?subject=${subject}&body=${body}`;
        });
        ["cname", "cemail", "cmsg"].forEach((id) => {
            $(`#${id}`)?.addEventListener("input", () => setError(id, false));
        });
    }

    /* =====================================================================
       EASTER EGG: boot the preserved classic MU-TH-UR 6000 terminal
       Triggers: footer/menu "classic" links, typing "retro"/"classic",
       the Konami code, or triple-clicking the logo.
       ===================================================================== */
    const goClassic = () => {
        const wipe = $(".crt-wipe");
        if (reduceMotion || !wipe) { window.location.href = "classic.html"; return; }
        wipe.classList.add("is-on");
        window.setTimeout(() => { window.location.href = "classic.html"; }, 320);
    };

    $$("[data-classic]").forEach((el) =>
        el.addEventListener("click", (e) => { e.preventDefault(); goClassic(); })
    );

    /* triple-click the logo */
    const logo = $("[data-logo]");
    if (logo) {
        let clicks = 0, t = null;
        logo.addEventListener("click", (e) => {
            clicks += 1;
            if (clicks === 1) t = window.setTimeout(() => { clicks = 0; }, 600);
            if (clicks >= 3) { e.preventDefault(); window.clearTimeout(t); clicks = 0; goClassic(); }
        });
    }

    /* keyboard: type the word, or Konami code */
    const typed = [];
    const konami = ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "b", "a"];
    const konamiBuf = [];
    document.addEventListener("keydown", (e) => {
        const tag = (e.target && e.target.tagName) || "";
        if (/INPUT|TEXTAREA|SELECT/.test(tag)) return;

        // word triggers
        if (/^[a-z]$/i.test(e.key)) {
            typed.push(e.key.toLowerCase());
            if (typed.length > 8) typed.shift();
            const word = typed.join("");
            if (word.endsWith("retro") || word.endsWith("classic")) { typed.length = 0; goClassic(); return; }
        }

        // Konami
        konamiBuf.push(e.key);
        if (konamiBuf.length > konami.length) konamiBuf.shift();
        if (konami.every((k, i) => konamiBuf[i] === k)) { konamiBuf.length = 0; goClassic(); }
    });
})();
