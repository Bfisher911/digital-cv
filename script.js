document.addEventListener('DOMContentLoaded', () => {

    /* --- Mobile Navigation Toggle --- */
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const navItems = document.querySelectorAll('.nav-links li a');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            hamburger.querySelector('i').classList.toggle('fa-bars');
            hamburger.querySelector('i').classList.toggle('fa-times');
        });

        // Close menu when a link is clicked
        navItems.forEach(item => {
            item.addEventListener('click', () => {
                navLinks.classList.remove('active');
                hamburger.querySelector('i').classList.remove('fa-times');
                hamburger.querySelector('i').classList.add('fa-bars');
            });
        });
    }

    /* --- Navbar Scroll Hide/Show & Blur --- */
    let lastScrollY = window.scrollY;
    const navbar = document.getElementById('navbar');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            if (window.scrollY > lastScrollY) {
                // Scroll down
                navbar.classList.add('scrolled-down');
                navbar.classList.remove('scrolled-up');
            } else {
                // Scroll up
                navbar.classList.add('scrolled-up');
                navbar.classList.remove('scrolled-down');
            }
        } else {
            navbar.classList.remove('scrolled-down');
            navbar.classList.remove('scrolled-up');
        }
        lastScrollY = window.scrollY;
    });

    /* --- Scroll Reveal Animations --- */
    
    // Using Intersection Observer API
    const revealElements = document.querySelectorAll('.reveal, .fade-up');

    const revealOptions = {
        threshold: 0.15, // Trigger when 15% of element is visible
        rootMargin: "0px 0px -50px 0px"
    };

    const revealOnScroll = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                // Determine which class to add based on element's base class
                if (entry.target.classList.contains('reveal')) {
                    entry.target.classList.add('active');
                } else if (entry.target.classList.contains('fade-up')) {
                    entry.target.classList.add('visible');
                }
                // Stop observing once revealed
                observer.unobserve(entry.target);
            }
        });
    }, revealOptions);

    revealElements.forEach(el => {
        revealOnScroll.observe(el);
    });
    
    // Trigger animations for hero section immediately
    setTimeout(() => {
        const heroContent = document.querySelector('.hero-content');
        if(heroContent) heroContent.classList.add('visible');
    }, 100);

});
