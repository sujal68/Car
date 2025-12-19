// Mobile Navigation JavaScript
document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.getElementById('navToggle');
    const mobileNav = document.getElementById('mobileNav');
    const mobileOverlay = document.getElementById('mobileOverlay');
    const navClose = document.getElementById('navClose');
    const body = document.body;

    // Open mobile nav
    function openNav() {
        mobileNav.classList.add('nav-open');
        mobileOverlay.classList.add('active');
        navToggle.classList.add('active');
        body.classList.add('nav-open');
    }

    // Close mobile nav
    function closeNav() {
        mobileNav.classList.remove('nav-open');
        mobileOverlay.classList.remove('active');
        navToggle.classList.remove('active');
        body.classList.remove('nav-open');
    }

    // Toggle button click
    if (navToggle) {
        navToggle.addEventListener('click', function(e) {
            e.preventDefault();
            if (mobileNav.classList.contains('nav-open')) {
                closeNav();
            } else {
                openNav();
            }
        });
    }

    // Close button click
    if (navClose) {
        navClose.addEventListener('click', function(e) {
            e.preventDefault();
            closeNav();
        });
    }

    // Overlay click
    if (mobileOverlay) {
        mobileOverlay.addEventListener('click', function() {
            closeNav();
        });
    }

    // Close on escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && mobileNav.classList.contains('nav-open')) {
            closeNav();
        }
    });

    // Close nav when clicking on nav links
    const navLinks = document.querySelectorAll('.mobile-nav-menu a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            closeNav();
        });
    });
});