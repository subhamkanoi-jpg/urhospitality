// ========================================
// UR Hospitality - Main JavaScript
// ========================================

// ======================
// FORMSPREE CONFIGURATION (LIVE)
// ======================
const FORMSPREE_ENDPOINT = "https://formspree.io/f/maqkzvvp";

// ======================
// QUOTE MODAL
// ======================
function showQuoteModal() {
    const modal = document.getElementById('quote-modal');
    if (modal) {
        // Reset to form view every time we open
        resetFormState();
        modal.classList.remove('hidden');
        modal.classList.add('flex');
        document.body.style.overflow = 'hidden';
    }
}

function hideQuoteModal() {
    const modal = document.getElementById('quote-modal');
    if (modal) {
        modal.classList.remove('flex');
        modal.classList.add('hidden');
        document.body.style.overflow = '';
    }
}

function resetFormState() {
    // Show form, hide success
    const form = document.getElementById('quote-form');
    const success = document.getElementById('form-success');
    const existingError = document.getElementById('form-error-message');
    
    if (form) form.classList.remove('hidden');
    if (success) success.classList.add('hidden');
    if (existingError) existingError.remove();

    // Reset button state
    resetSubmitButton();
}

function resetAndCloseModal() {
    const form = document.getElementById('quote-form');
    if (form) form.reset();
    resetFormState();
    hideQuoteModal();
}

// ======================
// FORM SUBMISSION (Formspree)
// ======================
async function submitQuoteForm(e) {
    e.preventDefault();

    const form = e.target;
    const submitBtn = document.getElementById('submit-btn');
    const submitText = document.getElementById('submit-text');
    const submitIcon = document.getElementById('submit-icon');

    if (!submitBtn || !submitText || !submitIcon) return;

    // Loading state
    submitBtn.disabled = true;
    submitText.textContent = 'Sending...';
    submitIcon.className = 'fa-solid fa-spinner fa-spin ml-2';

    try {
        const formData = new FormData(form);

        // Add some useful metadata
        formData.append('_subject', 'New Corporate Catering Inquiry - UR Hospitality');
        formData.append('source', 'Website Quote Modal');

        const response = await fetch(FORMSPREE_ENDPOINT, {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        });

        if (response.ok) {
            // Success → show thank you screen
            form.classList.add('hidden');
            document.getElementById('form-success').classList.remove('hidden');
            
            // Optional: still send to WhatsApp in background if user wants
            console.log('%c[UR Hospitality] Form successfully sent to Formspree.', 'color:#16a34a');
        } else {
            // Formspree returned error
            throw new Error('Form submission failed');
        }

    } catch (error) {
        console.error('Form submission error:', error);

        // Show a friendly error message instead of alert
        const formContainer = document.getElementById('quote-form');
        
        if (formContainer) {
            // Remove any existing error message
            const existingError = document.getElementById('form-error-message');
            if (existingError) existingError.remove();

            // Create error message
            const errorDiv = document.createElement('div');
            errorDiv.id = 'form-error-message';
            errorDiv.className = 'bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-2xl text-sm';
            errorDiv.innerHTML = `
                <strong>Something went wrong.</strong> Please try the WhatsApp option below or contact us directly at +91 98307 15557.
            `;
            formContainer.prepend(errorDiv);
        }

        // Re-enable the submit button
        resetSubmitButton();
    }
}

function resetSubmitButton() {
    const submitBtn = document.getElementById('submit-btn');
    const submitText = document.getElementById('submit-text');
    const submitIcon = document.getElementById('submit-icon');

    if (submitBtn) submitBtn.disabled = false;
    if (submitText) submitText.textContent = 'Submit Request';
    if (submitIcon) submitIcon.className = 'fa-solid fa-paper-plane ml-1';
}

// ======================
// WHATSAPP FALLBACK (Very effective for this business)
// ======================
function sendViaWhatsApp() {
    const form = document.getElementById('quote-form');
    if (!form) return;

    const formData = new FormData(form);

    const name = formData.get('name') || '';
    const phone = formData.get('phone') || '';
    const email = formData.get('email') || '';
    const company = formData.get('company') || '';
    const designation = formData.get('designation') || '';
    const location = formData.get('location') || '';
    const service = formData.get('service') || '';
    const meals = formData.get('meals') || '';
    const message = formData.get('message') || '';

    let text = `Hello UR Hospitality,\n\n`;
    text += `I'm interested in corporate catering.\n\n`;
    text += `*Name:* ${name}\n`;
    text += `*Phone:* ${phone}\n`;
    text += `*Email:* ${email}\n`;
    text += `*Company:* ${company}\n`;
    if (designation) text += `*Designation:* ${designation}\n`;
    if (location) text += `*Location:* ${location}\n`;
    if (service) text += `*Service:* ${service}\n`;

    if (meals) text += `*Daily Meals:* ${meals}\n`;
    if (message) text += `*Requirements:* ${message}\n`;

    text += `\nThank you!`;

    const whatsappNumber = "919830715557"; // +91 98307 15557
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;

    // Open WhatsApp
    window.open(whatsappURL, '_blank');

    // Optional: close modal after opening WhatsApp
    setTimeout(() => {
        hideQuoteModal();
    }, 600);
}

// Video player
function playVideo() {
    const video = document.getElementById('ur-video');
    const overlay = document.getElementById('video-overlay');
    
    if (overlay) overlay.style.display = 'none';
    if (video) {
        video.play().catch(err => {
            console.log('Video autoplay prevented:', err);
        });
    }
}

// Mobile Menu
function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobile-menu');
    const menuBtn = document.getElementById('mobile-menu-btn');
    
    if (!mobileMenu) return;
    
    const isHidden = mobileMenu.classList.contains('hidden');
    
    if (isHidden) {
        mobileMenu.classList.remove('hidden');
        if (menuBtn) {
            menuBtn.innerHTML = '<i class="fa-solid fa-times text-xl"></i>';
            menuBtn.setAttribute('aria-expanded', 'true');
            menuBtn.setAttribute('aria-label', 'Close navigation menu');
        }
    } else {
        mobileMenu.classList.add('hidden');
        if (menuBtn) {
            menuBtn.innerHTML = '<i class="fa-solid fa-bars text-xl"></i>';
            menuBtn.setAttribute('aria-expanded', 'false');
            menuBtn.setAttribute('aria-label', 'Open navigation menu');
        }
    }
}

// Close mobile menu when clicking a link
function initMobileMenu() {
    const mobileMenu = document.getElementById('mobile-menu');
    const menuBtn = document.getElementById('mobile-menu-btn');
    
    if (!mobileMenu) return;
    
    // Close when clicking nav links
    mobileMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
            if (menuBtn) {
                menuBtn.innerHTML = '<i class="fa-solid fa-bars text-xl"></i>';
                menuBtn.setAttribute('aria-expanded', 'false');
                menuBtn.setAttribute('aria-label', 'Open navigation menu');
            }
        });
    });
    
    // Close when clicking outside
    document.addEventListener('click', function(e) {
        if (!mobileMenu.classList.contains('hidden') &&
            !mobileMenu.contains(e.target) &&
            menuBtn && !menuBtn.contains(e.target)) {
            mobileMenu.classList.add('hidden');
            if (menuBtn) {
                menuBtn.innerHTML = '<i class="fa-solid fa-bars text-xl"></i>';
                menuBtn.setAttribute('aria-expanded', 'false');
                menuBtn.setAttribute('aria-label', 'Open navigation menu');
            }
        }
    });
    
    // Close on Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && !mobileMenu.classList.contains('hidden')) {
            mobileMenu.classList.add('hidden');
            if (menuBtn) {
                menuBtn.innerHTML = '<i class="fa-solid fa-bars text-xl"></i>';
                menuBtn.setAttribute('aria-expanded', 'false');
                menuBtn.setAttribute('aria-label', 'Open navigation menu');
            }
        }
    });
}

// Keyboard support for modal
function initKeyboardHandlers() {
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            const modal = document.getElementById('quote-modal');
            if (modal && modal.classList.contains('flex')) {
                hideQuoteModal();
            }
        }
    });
}

// ======================
// CATERING INEFFICIENCY COST CALCULATOR
// ======================
function formatINR(value) {
    return '₹ ' + Math.round(value).toLocaleString('en-IN');
}

function updateCalculator() {
    const dailyUsers = parseFloat(document.getElementById('daily-users').value) || 0;
    const mealCost = parseFloat(document.getElementById('meal-cost').value) || 0;
    const queueTime = parseFloat(document.getElementById('queue-time').value) || 0;
    const wastePercent = parseFloat(document.getElementById('waste-percent').value) || 0;
    const complaints = parseFloat(document.getElementById('complaints').value) || 0;
    const workingDays = parseFloat(document.getElementById('working-days').value) || 22;
    const employeeHourlyCost = parseFloat(document.getElementById('employee-cost').value) || 450;
    const adminHourlyCost = parseFloat(document.getElementById('admin-cost-rate').value) || 350;
    const hoursPerDay = parseFloat(document.getElementById('hours-per-day').value) || 10;

    // Update value displays
    document.getElementById('daily-users-value').textContent = dailyUsers;
    document.getElementById('meal-cost-value').textContent = '₹ ' + mealCost;
    document.getElementById('queue-time-value').textContent = queueTime;
    document.getElementById('waste-value').textContent = wastePercent + '%';
    document.getElementById('complaints-value').textContent = complaints;

    // ============================================================
    // ROBUST HIDDEN COST MODEL (designed for HR / Admin decision makers)
    // ============================================================
    // Transparent and defensible. Built to survive scrutiny.
    //
    // Queue: Only the time *above a normal acceptable wait* (7 min) is counted as friction.
    //        We further discount because lunch/break time has lower opportunity cost than core work hours.
    // Waste: Straight cash cost the company pays for meals that go uneaten.
    // Admin: Complaint handling + the real extra coordination load of a weak vendor.
    //
    // Savings = difference between your current performance and what good professional corporate catering routinely delivers.

    // 1. Employee time lost in queues (excess only + canteen discount)
    const acceptableQueueMin = 7;
    const excessQueueMinutes = Math.max(queueTime - acceptableQueueMin, 0);
    const canteenOpportunityFactor = 0.60; // Lunch/break time valued at ~60% of full productive rate
    const queueCost = dailyUsers * excessQueueMinutes * workingDays * (employeeHourlyCost / 60) * canteenOpportunityFactor;

    // 2. Direct food waste cost (cash out the door)
    const mealsPerMonth = dailyUsers * workingDays;
    const wasteCost = mealsPerMonth * mealCost * (wastePercent / 100);

    // 3. Admin & vendor management overhead
    const hoursPerComplaint = 0.75; // 45 minutes of HR/Admin time
    const complaintHandling = complaints * hoursPerComplaint * adminHourlyCost;

    // Weak vendors create ongoing extra work (chasing, quality checks, emergency fixes, meetings, disputes).
    const extraVendorCoordinationHours = 5;
    const extraCoordinationCost = extraVendorCoordinationHours * adminHourlyCost;

    const adminCost = complaintHandling + extraCoordinationCost;

    const totalMonthly = Math.round(queueCost + wasteCost + adminCost);
    const totalAnnual = totalMonthly * 12;

    // --- Optimized professional operations (achievable targets) ---
    const targetQueueMin = 6;
    const targetWastePercent = 6.5;
    const targetComplaints = Math.max(2, Math.round(dailyUsers / 90));

    const optQueueCost = dailyUsers * Math.max(0, targetQueueMin - acceptableQueueMin) * workingDays * (employeeHourlyCost / 60) * canteenOpportunityFactor;
    const optWasteCost = mealsPerMonth * mealCost * (targetWastePercent / 100);

    const optComplaintHandling = targetComplaints * hoursPerComplaint * adminHourlyCost;
    const optExtraCoord = extraVendorCoordinationHours * 0.2 * adminHourlyCost;
    const optAdminCost = optComplaintHandling + optExtraCoord;

    const optMonthly = Math.round(optQueueCost + optWasteCost + optAdminCost);
    const optAnnual = optMonthly * 12;

    const potentialSavings = Math.max(0, totalAnnual - optAnnual);

    // --- HR-friendly decision metrics ---
    const annualQueueHours = dailyUsers * (queueTime / 60) * workingDays * 12;
    const annualHoursPerFTE = workingDays * 12 * hoursPerDay;
    const fteLostToQueues = annualQueueHours / annualHoursPerFTE;
    const costPerEmployeeMonthly = totalMonthly / Math.max(1, dailyUsers);

    // Expose for debugging / future use
    // console.log({queueCost, wasteCost, adminCost, totalMonthly, fteLostToQueues});

    // Update results
    document.getElementById('monthly-loss').textContent = formatINR(totalMonthly);
    document.getElementById('annual-loss').textContent = formatINR(totalAnnual);
    document.getElementById('queue-cost').textContent = formatINR(queueCost);
    document.getElementById('waste-cost').textContent = formatINR(wasteCost);
    document.getElementById('admin-cost').textContent = formatINR(adminCost);
    document.getElementById('savings').textContent = formatINR(potentialSavings) + ' / year';

    // Optional additional insight metrics (if elements exist)
    const perEmpEl = document.getElementById('per-employee-cost');
    if (perEmpEl) perEmpEl.textContent = formatINR(Math.round(costPerEmployeeMonthly));

    const fteEl = document.getElementById('fte-lost');
    if (fteEl) fteEl.textContent = fteLostToQueues.toFixed(1) + ' FTE';
}

function toggleCalculator() {
    const panel = document.getElementById('calculator-panel');
    const toggleButton = document.getElementById('calculator-reveal');
    const toggleLabel = document.getElementById('calculator-toggle-label');
    const toggleIcon = document.getElementById('calculator-toggle-icon');

    if (!panel) return;

    const isOpening = panel.classList.contains('hidden');
    panel.classList.toggle('hidden', !isOpening);

    if (toggleButton) {
        toggleButton.setAttribute('aria-expanded', String(isOpening));
    }

    if (toggleLabel) {
        toggleLabel.textContent = isOpening ? 'Hide Calculator' : 'Reveal Calculator';
    }

    if (toggleIcon) {
        toggleIcon.className = isOpening ? 'fa-solid fa-chevron-up' : 'fa-solid fa-arrow-right';
    }

    if (isOpening) {
        updateCalculator();

        setTimeout(() => {
            panel.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 50);
    }
}

function revealCalculator() {
    toggleCalculator();
}

// Pre-fill quote form from calculator
function openQuoteWithCalculatorData() {
    const annualLoss = document.getElementById('annual-loss').textContent;
    const savings = document.getElementById('savings').textContent;

    showQuoteModal();

    setTimeout(() => {
        const messageField = document.querySelector('#quote-form textarea[name="message"]');
        if (messageField) {
            messageField.value = `I used your Catering Cost Calculator. It estimates around ${annualLoss} per year in avoidable cafeteria leakage, with a practical reduction target of ${savings}. I'd like to explore how UR Hospitality can validate this for our site.`;
        }
    }, 350);
}

// Initialize calculator
function initCalculator() {
    const dailyUsers = document.getElementById('daily-users');
    if (!dailyUsers) return;

    // Sync value displays on load + input
    const inputs = ['daily-users', 'meal-cost', 'queue-time', 'waste-percent', 'complaints', 'employee-cost', 'admin-cost-rate', 'working-days', 'hours-per-day'];
    inputs.forEach(id => {
        const el = document.getElementById(id);
        if (el) {
            el.addEventListener('input', updateCalculator);
        }
    });

    // Initial calculation
    setTimeout(() => {
        updateCalculator();
    }, 200);
}

// Toggle Advanced Assumptions panel
function toggleAssumptions() {
    const panel = document.getElementById('assumptions-panel');
    const chevron = document.getElementById('assumptions-chevron');
    
    if (!panel || !chevron) return;

    if (panel.classList.contains('hidden')) {
        panel.classList.remove('hidden');
        chevron.style.transform = 'rotate(180deg)';
    } else {
        panel.classList.add('hidden');
        chevron.style.transform = 'rotate(0deg)';
    }
}

// ======================
// MOBILE AUTO CAROUSELS
// ======================

// Founders Auto Carousel (2 slides)
function initFoundersCarousel() {
    const track = document.getElementById('founders-track');
    if (!track) return;

    const dots = document.querySelectorAll('.founders-dot');
    let currentIndex = 0;
    let interval = null;

    function goToSlide(index) {
        currentIndex = index;
        track.style.transform = `translateX(-${index * 100}%)`;

        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === index);
        });
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % 2;
        goToSlide(currentIndex);
    }

    // Auto advance every 3.8 seconds
    function startAuto() {
        if (interval) clearInterval(interval);
        interval = setInterval(nextSlide, 3800);
    }

    function stopAuto() {
        if (interval) clearInterval(interval);
    }

    // Click dots
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            goToSlide(index);
            stopAuto();
            setTimeout(startAuto, 4000); // resume after manual interaction
        });
    });

    // Pause on touch (good for mobile)
    track.addEventListener('touchstart', stopAuto, { passive: true });
    track.addEventListener('touchend', () => {
        setTimeout(startAuto, 3000);
    });

    // Start
    goToSlide(0);
    startAuto();
}

// Initialize all mobile carousels
function initMobileCarousels() {
    initFoundersCarousel();
    // Services and Why UR use pure CSS marquee (defined in style.css)
}

// Hero Image Carousel
function initHeroCarousel() {
    const slides = document.querySelectorAll('.hero-slide');
    if (!slides.length) return;
    
    let currentSlide = 0;
    setInterval(() => {
        slides[currentSlide].classList.remove('opacity-100');
        slides[currentSlide].classList.add('opacity-0');
        
        currentSlide = (currentSlide + 1) % slides.length;
        
        slides[currentSlide].classList.remove('opacity-0');
        slides[currentSlide].classList.add('opacity-100');
    }, 4500); // 4.5 seconds per slide
}

// Auto init on load
document.addEventListener('DOMContentLoaded', () => {
    initMobileCarousels();
    initHeroCarousel();
});

// Reset calculator to defaults
function resetCalculator() {
    document.getElementById('daily-users').value = 300;
    document.getElementById('meal-cost').value = 140;
    document.getElementById('queue-time').value = 15;
    document.getElementById('waste-percent').value = 15;
    document.getElementById('complaints').value = 12;

    // Reset advanced assumptions
    document.getElementById('employee-cost').value = 450;
    document.getElementById('admin-cost-rate').value = 350;
    document.getElementById('working-days').value = 22;
    document.getElementById('hours-per-day').value = 10;

    updateCalculator();
}

// ======================
// INITIALIZATION
// ======================
function initWebsite() {
    initMobileMenu();
    initKeyboardHandlers();
    initCalculator(); // New calculator

    console.log('%c[UR Hospitality] Multi-file website initialized.', 'color:#64748b');
}

// Boot on DOM ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initWebsite);
} else {
    initWebsite();
}

