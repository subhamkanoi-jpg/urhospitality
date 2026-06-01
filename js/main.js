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
    
    if (form) form.classList.remove('hidden');
    if (success) success.classList.add('hidden');

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
    const meals = formData.get('meals') || '';
    const message = formData.get('message') || '';

    let text = `Hello UR Hospitality,%0A%0A`;
    text += `I'm interested in corporate catering.%0A%0A`;
    text += `*Name:* ${name}%0A`;
    text += `*Phone:* ${phone}%0A`;
    text += `*Email:* ${email}%0A`;
    text += `*Company:* ${company}%0A`;

    if (meals) text += `*Daily Meals:* ${meals}%0A`;
    if (message) text += `*Requirements:* ${message}%0A`;

    text += `%0AThank you!`;

    const whatsappNumber = "919830715557"; // +91 98307 15557
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${text}`;

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
        if (menuBtn) menuBtn.innerHTML = '<i class="fa-solid fa-times text-xl"></i>';
    } else {
        mobileMenu.classList.add('hidden');
        if (menuBtn) menuBtn.innerHTML = '<i class="fa-solid fa-bars text-xl"></i>';
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
            if (menuBtn) menuBtn.innerHTML = '<i class="fa-solid fa-bars text-xl"></i>';
        });
    });
    
    // Close when clicking outside
    document.addEventListener('click', function(e) {
        if (!mobileMenu.classList.contains('hidden') &&
            !mobileMenu.contains(e.target) &&
            menuBtn && !menuBtn.contains(e.target)) {
            mobileMenu.classList.add('hidden');
            if (menuBtn) menuBtn.innerHTML = '<i class="fa-solid fa-bars text-xl"></i>';
        }
    });
    
    // Close on Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && !mobileMenu.classList.contains('hidden')) {
            mobileMenu.classList.add('hidden');
            if (menuBtn) menuBtn.innerHTML = '<i class="fa-solid fa-bars text-xl"></i>';
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
function updateCalculator() {
    const dailyUsers = parseFloat(document.getElementById('daily-users').value) || 0;
    const mealCost = parseFloat(document.getElementById('meal-cost').value) || 0;
    const queueTime = parseFloat(document.getElementById('queue-time').value) || 0;
    const wastePercent = parseFloat(document.getElementById('waste-percent').value) || 0;
    const complaints = parseFloat(document.getElementById('complaints').value) || 0;

    // Update value displays
    document.getElementById('daily-users-value').textContent = dailyUsers;
    document.getElementById('meal-cost-value').textContent = '₹ ' + mealCost;
    document.getElementById('queue-time-value').textContent = queueTime;
    document.getElementById('waste-value').textContent = wastePercent + '%';
    document.getElementById('complaints-value').textContent = complaints;

    // Conservative assumptions
    const workingDays = 22;
    const employeeHourlyCost = 450;
    const adminHourlyCost = 800;
    const hoursPerComplaint = 1.5;

    // Calculations
    const queueCost = dailyUsers * queueTime * workingDays * (employeeHourlyCost / 60);
    const wasteCost = dailyUsers * mealCost * (wastePercent / 100) * workingDays;
    const adminCost = complaints * hoursPerComplaint * adminHourlyCost;

    const totalMonthly = Math.round(queueCost + wasteCost + adminCost);
    const totalAnnual = totalMonthly * 12;
    const savings = Math.round(totalAnnual * 0.45);

    // Update results
    document.getElementById('monthly-loss').textContent = '₹ ' + totalMonthly.toLocaleString('en-IN');
    document.getElementById('annual-loss').textContent = '₹ ' + totalAnnual.toLocaleString('en-IN');
    document.getElementById('queue-cost').textContent = '₹ ' + Math.round(queueCost).toLocaleString('en-IN');
    document.getElementById('waste-cost').textContent = '₹ ' + Math.round(wasteCost).toLocaleString('en-IN');
    document.getElementById('admin-cost').textContent = '₹ ' + Math.round(adminCost).toLocaleString('en-IN');
    document.getElementById('savings').textContent = '₹ ' + savings.toLocaleString('en-IN');
}

// Pre-fill quote form from calculator
function openQuoteWithCalculatorData() {
    const annualLoss = document.getElementById('annual-loss').textContent;

    showQuoteModal();

    setTimeout(() => {
        const messageField = document.querySelector('#quote-form textarea[name="message"]');
        if (messageField) {
            messageField.value = `I used your Catering Cost Calculator and it shows our current vendor may be costing us around ${annualLoss} per year in hidden inefficiencies. I'd like to explore how UR Hospitality can help reduce this.`;
        }
    }, 350);
}

// Initialize calculator
function initCalculator() {
    const dailyUsers = document.getElementById('daily-users');
    if (!dailyUsers) return;

    // Sync value displays on load + input
    const inputs = ['daily-users', 'meal-cost', 'queue-time', 'waste-percent', 'complaints'];
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

// Auto init on load
document.addEventListener('DOMContentLoaded', () => {
    initMobileCarousels();
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
    document.getElementById('admin-cost-rate').value = 800;
    document.getElementById('working-days').value = 22;

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