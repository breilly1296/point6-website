/**
 * Point6 Website - Main JavaScript
 * Vanilla JS (no frameworks) with ES6+ features
 * Handles navigation, animations, forms, and interactive elements
 */

(function() {
    'use strict';

    // =========================================================================
    // Configuration & Utilities
    // =========================================================================

    const CONFIG = {
        scrollThreshold: 50,
        mobileBreakpoint: 768,
        animationDuration: 1500,
        formSubmitDelay: 1000
    };

    // Development mode check (disable console.logs in production)
    const IS_DEV = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';

    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Debounce utility
    function debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    // Throttle using requestAnimationFrame
    function throttleRAF(func) {
        let ticking = false;
        return function(...args) {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    func.apply(this, args);
                    ticking = false;
                });
                ticking = true;
            }
        };
    }

    // =========================================================================
    // Mobile Menu Toggle
    // =========================================================================

    function initMobileMenu() {
        const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
        const navLinks = document.querySelector('.nav-links');
        const mobileOverlay = document.querySelector('.mobile-menu-overlay');

        if (!mobileMenuBtn || !navLinks) return;

        function openMenu() {
            mobileMenuBtn.classList.add('active');
            mobileMenuBtn.setAttribute('aria-expanded', 'true');
            mobileMenuBtn.setAttribute('aria-label', 'Close navigation menu');
            navLinks.classList.add('active');
            if (mobileOverlay) mobileOverlay.classList.add('active');
            document.body.classList.add('menu-open');

            // Focus first menu item for accessibility
            const firstLink = navLinks.querySelector('a');
            if (firstLink) firstLink.focus();
        }

        function closeMenu() {
            mobileMenuBtn.classList.remove('active');
            mobileMenuBtn.setAttribute('aria-expanded', 'false');
            mobileMenuBtn.setAttribute('aria-label', 'Open navigation menu');
            navLinks.classList.remove('active');
            if (mobileOverlay) mobileOverlay.classList.remove('active');
            document.body.classList.remove('menu-open');
        }

        function toggleMenu() {
            const isOpen = mobileMenuBtn.classList.contains('active');
            isOpen ? closeMenu() : openMenu();
        }

        // Event listeners
        mobileMenuBtn.addEventListener('click', toggleMenu);

        if (mobileOverlay) {
            mobileOverlay.addEventListener('click', closeMenu);
        }

        // Close menu when clicking nav links
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', closeMenu);
        });

        // Close on Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && mobileMenuBtn.classList.contains('active')) {
                closeMenu();
                mobileMenuBtn.focus();
            }
        });

        // Close on resize above breakpoint
        const handleResize = debounce(() => {
            if (window.innerWidth > CONFIG.mobileBreakpoint && mobileMenuBtn.classList.contains('active')) {
                closeMenu();
            }
        }, 100);

        window.addEventListener('resize', handleResize);
    }

    // =========================================================================
    // Navigation Scroll Effect
    // =========================================================================

    function initNavScroll() {
        const nav = document.querySelector('nav, .site-nav');
        if (!nav) return;

        function handleScroll() {
            if (window.scrollY > CONFIG.scrollThreshold) {
                nav.classList.add('scrolled');
            } else {
                nav.classList.remove('scrolled');
            }
        }

        // Use throttled scroll handler
        window.addEventListener('scroll', throttleRAF(handleScroll), { passive: true });

        // Initial check
        handleScroll();
    }

    // =========================================================================
    // Active Navigation Highlighting
    // =========================================================================

    function initActiveNavHighlight() {
        const currentPath = window.location.pathname;
        const currentPage = currentPath.split('/').pop() || 'index.html';

        document.querySelectorAll('.nav-links a:not(.btn)').forEach(link => {
            const href = link.getAttribute('href');
            if (href === currentPage ||
                (currentPage === '' && href === 'index.html') ||
                (currentPage === 'index.html' && href === 'index.html')) {
                link.classList.add('active');
                link.setAttribute('aria-current', 'page');
            }
        });
    }

    // =========================================================================
    // Smooth Scrolling for Anchor Links
    // =========================================================================

    function initSmoothScroll() {
        const nav = document.querySelector('nav, .site-nav');

        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;

                const target = document.querySelector(targetId);
                if (!target) return;

                e.preventDefault();

                const navHeight = nav ? nav.offsetHeight : 0;
                const targetPosition = target.getBoundingClientRect().top + window.scrollY - navHeight - 20;

                // Use instant scroll if user prefers reduced motion
                window.scrollTo({
                    top: targetPosition,
                    behavior: prefersReducedMotion ? 'auto' : 'smooth'
                });

                // Update focus for accessibility
                target.setAttribute('tabindex', '-1');
                target.focus({ preventScroll: true });
            });
        });
    }

    // =========================================================================
    // Scroll Reveal Animations (Intersection Observer)
    // =========================================================================

    function initRevealAnimations() {
        // Skip animations if user prefers reduced motion
        if (prefersReducedMotion) {
            document.querySelectorAll('.reveal, .reveal-stagger').forEach(el => {
                el.classList.add('revealed');
            });
            return;
        }

        // Elements to animate
        const animatableElements = [
            '.section-header',
            '.service-card',
            '.case-study-card',
            '.team-card',
            '.principle-card',
            '.testimonial-card',
            '.stat',
            '.stats-bar-item',
            '.module-pill',
            '.contact-option',
            '.expect-step',
            '.founder-card',
            '.location-card',
            '.pricing-card',
            '.differentiator',
            '.why-feature',
            '.ai-solution-category',
            '.methodology-step'
        ];

        // Add reveal class and stagger delay
        animatableElements.forEach(selector => {
            document.querySelectorAll(selector).forEach((el, index) => {
                el.classList.add('reveal');
                el.style.transitionDelay = `${(index % 4) * 0.1}s`;
            });
        });

        // Create observer
        const revealObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('revealed');
                    // Unobserve after reveal for performance
                    revealObserver.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });

        // Observe all reveal elements
        document.querySelectorAll('.reveal').forEach(el => {
            revealObserver.observe(el);
        });
    }

    // =========================================================================
    // Stats Counter Animation
    // =========================================================================

    function initStatsCounter() {
        // Skip animations if user prefers reduced motion
        if (prefersReducedMotion) return;

        const statsSelectors = [
            '.stats-bar-number',
            '.stat-number',
            '.featured-result-number',
            '.result-metric-number',
            '.case-study-stat-number',
            '.metric-number'
        ];

        const statsElements = document.querySelectorAll(statsSelectors.join(', '));
        if (!statsElements.length) return;

        function animateCounter(element) {
            const text = element.textContent.trim();

            // Check if already animated
            if (element.dataset.animated === 'true') return;

            // Extract number from text (handles "50+", "98%", "$2M", "24hr", "3x", etc.)
            const match = text.match(/^([^0-9]*)?([\d,.]+)(.*)$/);
            if (!match) return;

            const prefix = match[1] || '';
            const targetNumber = parseFloat(match[2].replace(/,/g, ''));
            const suffix = match[3] || '';
            const hasComma = match[2].includes(',');
            const hasDecimal = match[2].includes('.');

            const duration = CONFIG.animationDuration;
            const steps = 60;
            const stepDuration = duration / steps;
            const increment = targetNumber / steps;
            let currentNumber = 0;
            let step = 0;

            element.dataset.animated = 'true';

            const timer = setInterval(() => {
                step++;
                currentNumber = Math.min(targetNumber, increment * step);

                // Format number
                let displayNumber;
                if (hasDecimal) {
                    displayNumber = currentNumber.toFixed(1);
                } else if (hasComma) {
                    displayNumber = Math.round(currentNumber).toLocaleString();
                } else {
                    displayNumber = Math.round(currentNumber).toString();
                }

                element.textContent = prefix + displayNumber + suffix;

                if (step >= steps) {
                    clearInterval(timer);
                    element.textContent = text; // Ensure exact original text
                }
            }, stepDuration);
        }

        const statsObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateCounter(entry.target);
                    statsObserver.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.5
        });

        statsElements.forEach(el => statsObserver.observe(el));
    }

    // =========================================================================
    // Contact Form Handling
    // =========================================================================

    function initContactForm() {
        const contactForm = document.getElementById('contact-form');
        if (!contactForm) return;

        const submitBtn = document.getElementById('submit-btn');
        const formStatus = document.getElementById('form-status');
        const btnText = submitBtn?.querySelector('.btn-text');
        const btnLoading = submitBtn?.querySelector('.btn-loading');
        const btnSuccess = submitBtn?.querySelector('.btn-success');
        const btnArrow = submitBtn?.querySelector('.btn-arrow');

        // Check for success parameter in URL (redirect from Formspree)
        const urlParams = new URLSearchParams(window.location.search);
        if (urlParams.get('success') === 'true') {
            showSuccess('Thanks for reaching out! We received your message and will get back to you within 24 hours.');
            // Clean up URL
            window.history.replaceState({}, document.title, window.location.pathname);
        }

        // Field-specific error messages for better UX
        const fieldMessages = {
            name: {
                required: 'Please enter your name so we know who we\'re talking to',
                invalid: 'Please enter a valid name'
            },
            email: {
                required: 'We need your email to get back to you',
                invalid: 'That doesn\'t look like a valid email address (e.g., name@company.com)'
            },
            message: {
                required: 'Tell us a bit about what you\'re looking for — even a few words helps',
                tooShort: 'Could you share a bit more? A sentence or two is plenty.'
            }
        };

        // Form validation
        function validateForm(form) {
            const name = form.querySelector('#name');
            const email = form.querySelector('#email');
            const message = form.querySelector('#message');
            let isValid = true;

            // Clear previous errors
            form.querySelectorAll('.form-error').forEach(el => el.remove());
            form.querySelectorAll('.error').forEach(el => el.classList.remove('error'));
            clearStatus();

            // Validate name
            if (name && !name.value.trim()) {
                isValid = false;
                name.classList.add('error');
                showFieldError(name, fieldMessages.name.required);
            }

            // Validate email
            if (email) {
                if (!email.value.trim()) {
                    isValid = false;
                    email.classList.add('error');
                    showFieldError(email, fieldMessages.email.required);
                } else {
                    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                    if (!emailRegex.test(email.value)) {
                        isValid = false;
                        email.classList.add('error');
                        showFieldError(email, fieldMessages.email.invalid);
                    }
                }
            }

            // Validate message
            if (message) {
                if (!message.value.trim()) {
                    isValid = false;
                    message.classList.add('error');
                    showFieldError(message, fieldMessages.message.required);
                } else if (message.value.trim().length < 10) {
                    isValid = false;
                    message.classList.add('error');
                    showFieldError(message, fieldMessages.message.tooShort);
                }
            }

            return isValid;
        }

        function showFieldError(field, message) {
            const errorEl = document.createElement('div');
            errorEl.className = 'form-error';
            errorEl.textContent = message;
            field.parentNode.appendChild(errorEl);
        }

        function showLoading() {
            if (btnText) btnText.style.display = 'none';
            if (btnArrow) btnArrow.style.display = 'none';
            if (btnLoading) btnLoading.style.display = 'inline-flex';
            if (submitBtn) {
                submitBtn.disabled = true;
                submitBtn.classList.add('loading');
            }
        }

        function showSuccess(message) {
            if (btnText) btnText.style.display = 'none';
            if (btnArrow) btnArrow.style.display = 'none';
            if (btnLoading) btnLoading.style.display = 'none';
            if (btnSuccess) btnSuccess.style.display = 'inline-flex';
            if (submitBtn) {
                submitBtn.classList.remove('loading');
                submitBtn.classList.add('success');
            }
            if (formStatus) {
                formStatus.className = 'form-status form-success';
                formStatus.innerHTML = `<span>${message}</span>`;
            }
        }

        function showError(message) {
            resetButton();
            if (formStatus) {
                formStatus.className = 'form-status form-error';
                formStatus.innerHTML = `<span>${message}</span>`;
            }
        }

        function clearStatus() {
            if (formStatus) {
                formStatus.className = 'form-status';
                formStatus.innerHTML = '';
            }
        }

        function resetButton() {
            if (btnText) btnText.style.display = 'inline';
            if (btnArrow) btnArrow.style.display = 'inline';
            if (btnLoading) btnLoading.style.display = 'none';
            if (btnSuccess) btnSuccess.style.display = 'none';
            if (submitBtn) {
                submitBtn.disabled = false;
                submitBtn.classList.remove('loading', 'success');
            }
        }

        contactForm.addEventListener('submit', async function(e) {
            e.preventDefault();

            if (!validateForm(contactForm)) {
                const firstError = contactForm.querySelector('.error');
                if (firstError) firstError.focus();
                return;
            }

            showLoading();

            const formData = new FormData(contactForm);
            const formAction = contactForm.getAttribute('action');

            // Check if Formspree is configured
            if (formAction.includes('YOUR_FORM_ID')) {
                // Development mode - simulate submission
                if (IS_DEV) console.log('Form data:', Object.fromEntries(formData));
                setTimeout(() => {
                    showSuccess('Form submitted successfully! (Development mode - configure Formspree for production)');
                    contactForm.reset();
                    setTimeout(resetButton, 5000);
                }, 1000);
                return;
            }

            try {
                const response = await fetch(formAction, {
                    method: 'POST',
                    body: formData,
                    headers: {
                        'Accept': 'application/json'
                    }
                });

                if (response.ok) {
                    showSuccess('Message received! We\'ll get back to you within 24 hours. Check your inbox for a confirmation.');
                    contactForm.reset();

                    // Reset button after delay
                    setTimeout(() => {
                        resetButton();
                        clearStatus();
                    }, 5000);
                } else {
                    const data = await response.json();
                    if (data.errors) {
                        showError('There was an issue: ' + data.errors.map(err => err.message).join(', '));
                    } else {
                        showError('Something went wrong on our end. Please try again, or email us directly at hello@point6.io');
                    }
                }
            } catch (error) {
                if (IS_DEV) console.error('Form submission error:', error);
                showError('Couldn\'t connect to our server. Please check your connection and try again, or email us at hello@point6.io');
            }
        });

        // Remove error state on input
        contactForm.querySelectorAll('input, textarea, select').forEach(field => {
            field.addEventListener('input', () => {
                field.classList.remove('error');
                const errorEl = field.parentNode.querySelector('.form-error');
                if (errorEl) errorEl.remove();
            });
        });
    }

    // =========================================================================
    // Lazy Loading Images
    // =========================================================================

    function initLazyLoading() {
        const lazyImages = document.querySelectorAll('img[data-src]');
        if (!lazyImages.length) return;

        if ('loading' in HTMLImageElement.prototype) {
            // Browser supports native lazy loading
            lazyImages.forEach(img => {
                img.src = img.dataset.src;
                if (img.dataset.srcset) {
                    img.srcset = img.dataset.srcset;
                }
                img.removeAttribute('data-src');
                img.removeAttribute('data-srcset');
            });
        } else {
            // Fallback with Intersection Observer
            const imageObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        img.src = img.dataset.src;
                        if (img.dataset.srcset) {
                            img.srcset = img.dataset.srcset;
                        }
                        img.removeAttribute('data-src');
                        img.removeAttribute('data-srcset');
                        img.classList.add('loaded');
                        imageObserver.unobserve(img);
                    }
                });
            }, {
                rootMargin: '50px 0px'
            });

            lazyImages.forEach(img => imageObserver.observe(img));
        }
    }

    // =========================================================================
    // Theme Toggle
    // =========================================================================

    function initThemeToggle() {
        const STORAGE_KEY = 'point6-theme';
        const THEMES = { LIGHT: 'light', DARK: 'dark', SYSTEM: 'system' };

        // Get all theme toggle buttons
        const themeButtons = document.querySelectorAll('.theme-toggle-btn');

        if (!themeButtons.length) return;

        // Get system preference
        function getSystemTheme() {
            return window.matchMedia('(prefers-color-scheme: light)').matches ? THEMES.LIGHT : THEMES.DARK;
        }

        // Get stored preference or default
        function getStoredPreference() {
            try {
                return localStorage.getItem(STORAGE_KEY) || THEMES.DARK;
            } catch (e) {
                return THEMES.DARK;
            }
        }

        // Save preference
        function savePreference(theme) {
            try {
                localStorage.setItem(STORAGE_KEY, theme);
            } catch (e) {
                // localStorage not available
            }
        }

        // Apply theme to document
        function applyTheme(preference) {
            const effectiveTheme = preference === THEMES.SYSTEM ? getSystemTheme() : preference;

            if (effectiveTheme === THEMES.LIGHT) {
                document.documentElement.setAttribute('data-theme', 'light');
            } else {
                document.documentElement.removeAttribute('data-theme');
            }

            // Update active states on all toggle buttons
            themeButtons.forEach(btn => {
                const btnTheme = btn.dataset.theme;
                btn.classList.toggle('active', btnTheme === preference);
            });
        }

        // Handle button clicks
        themeButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                const theme = btn.dataset.theme;
                savePreference(theme);
                applyTheme(theme);
            });
        });

        // Listen for system theme changes
        window.matchMedia('(prefers-color-scheme: light)').addEventListener('change', () => {
            const preference = getStoredPreference();
            if (preference === THEMES.SYSTEM) {
                applyTheme(THEMES.SYSTEM);
            }
        });

        // Initialize on load
        const preference = getStoredPreference();
        applyTheme(preference);
    }

    // =========================================================================
    // Initialize Everything
    // =========================================================================

    function init() {
        initThemeToggle();
        initMobileMenu();
        initNavScroll();
        initActiveNavHighlight();
        initSmoothScroll();
        initRevealAnimations();
        initStatsCounter();
        initContactForm();
        initLazyLoading();
    }

    // Run on DOM ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

    // Listen for reduced motion preference changes
    window.matchMedia('(prefers-reduced-motion: reduce)').addEventListener('change', () => {
        window.location.reload();
    });

})();
