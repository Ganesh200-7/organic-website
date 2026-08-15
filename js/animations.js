/* ==========================================================================
   TERRA VERDE / AURA ORGANICS - ANIMATIONS, TOASTS & TOUR BOOKING ENGINE
   ========================================================================== */

// Toast Notifications
function showToast(message) {
  let container = document.getElementById('toast-container');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toast-container';
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `
    <div class="toast-icon">✓</div>
    <div class="toast-message">${message}</div>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(20px)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}

// Counter Animations
function animateCounters() {
  const counters = document.querySelectorAll('.stat-number[data-target]');
  counters.forEach(counter => {
    const target = parseFloat(counter.getAttribute('data-target'));
    const suffix = counter.getAttribute('data-suffix') || '';
    const prefix = counter.getAttribute('data-prefix') || '';
    const duration = 1500; // ms
    const stepTime = 30;
    const steps = duration / stepTime;
    const increment = target / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }
      const formatted = Number.isInteger(target) ? Math.floor(current).toLocaleString() : current.toFixed(1);
      counter.textContent = `${prefix}${formatted}${suffix}`;
    }, stepTime);
  });
}

// Farm Tour Booking Form Handler
function handleTourBooking(event) {
  event.preventDefault();
  const date = document.getElementById('tour-date')?.value || 'Next Saturday';
  const tourType = document.getElementById('tour-type')?.value || 'Agronomy & Tasting';

  showToast(`Tour requested for ${date} (${tourType}). Our concierge will confirm via email.`);
  
  closeTourModal();
  event.target.reset();
}

function openTourModal() {
  const modal = document.getElementById('tour-modal-backdrop');
  if (modal) modal.classList.add('active');
}

function closeTourModal() {
  const modal = document.getElementById('tour-modal-backdrop');
  if (modal) modal.classList.remove('active');
}

// Contact Form Submission
function handleContactSubmit(event) {
  event.preventDefault();
  const name = document.getElementById('contact-name')?.value || 'Valued Guest';
  showToast(`Thank you, ${name}! Your inquiry has been sent to our farm operations team.`);
  event.target.reset();
}

/* ==========================================================================
   LUXURY SLIDER CONTROLLER (2 exact images & 2 dots)
   ========================================================================== */
let currentLuxurySlide = 0;
let luxurySlideTimer = null;

function setLuxurySlide(index) {
  currentLuxurySlide = index;
  const track = document.getElementById('luxury-slides-track');
  if (track) {
    track.style.transform = `translateX(-${index * 100}%)`;
  }

  // Update dots
  const dots = document.querySelectorAll('#view-home .luxury-dot');
  dots.forEach((dot, idx) => {
    dot.classList.toggle('active', idx === index);
  });
}

function setLuxurySlideFarm(index) {
  const track = document.getElementById('luxury-slides-track-farm');
  if (track) {
    track.style.transform = `translateX(-${index * 100}%)`;
  }

  const dots = document.querySelectorAll('#view-farm .luxury-dot');
  dots.forEach((dot, idx) => {
    dot.classList.toggle('active', idx === index);
  });
}

function startLuxurySliderAuto() {
  if (luxurySlideTimer) clearInterval(luxurySlideTimer);
  luxurySlideTimer = setInterval(() => {
    const nextIndex = (currentLuxurySlide + 1) % 2;
    setLuxurySlide(nextIndex);
    setLuxurySlideFarm(nextIndex);
  }, 5000);
}

document.addEventListener('DOMContentLoaded', () => {
  startLuxurySliderAuto();
});

