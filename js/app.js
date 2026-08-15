/* ==========================================================================
   TERRA VERDE / AURA ORGANICS - MAIN APPLICATION ENTRY POINT
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initNavigation();
  initProductEvents();
  renderProductsGrid();
  updateCartUI();
  renderOrderTrackingCard();
  animateCounters();
  initScrollHeader();
});

// Theme Toggle System (Dark / Light)
function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  setTheme(newTheme);
}

function setTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('gof-theme', theme);
  
  const icon = document.querySelector('.theme-toggle-icon');
  const text = document.querySelector('.theme-toggle-text');
  
  if (icon && text) {
    if (theme === 'light') {
      icon.textContent = '☀️';
      text.textContent = 'Light';
    } else {
      icon.textContent = '🌙';
      text.textContent = 'Dark';
    }
  }
}

function initTheme() {
  const savedTheme = localStorage.getItem('gof-theme') || 'dark';
  setTheme(savedTheme);
}

// Tab Switcher for 5 Pages
function switchTab(tabId) {
  // Update view visibility
  document.querySelectorAll('.page-view').forEach(view => {
    view.classList.remove('active');
  });

  const targetView = document.getElementById(`view-${tabId}`);
  if (targetView) {
    targetView.classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // Update Nav Link Active States
  document.querySelectorAll('.nav-item').forEach(navLink => {
    navLink.classList.toggle('active', navLink.dataset.tab === tabId);
  });

  // Re-trigger counter animations on Home or Our Farm if switched
  if (tabId === 'home' || tabId === 'farm') {
    animateCounters();
  }

  // Mobile Menu Close
  const navLinks = document.querySelector('.nav-links');
  if (navLinks) navLinks.classList.remove('mobile-open');
}

// Navigation & Mobile Menu Init
function initNavigation() {
  document.querySelectorAll('.nav-item[data-tab]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const tabId = btn.dataset.tab;
      switchTab(tabId);
    });
  });

  const mobileToggle = document.querySelector('.mobile-menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  if (mobileToggle && navLinks) {
    mobileToggle.addEventListener('click', () => {
      navLinks.classList.toggle('mobile-open');
    });
  }
}

// Header Scroll Effect
function initScrollHeader() {
  const header = document.querySelector('.header-nav');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
}

// Product Events (Category chips, Search, Sort)
function initProductEvents() {
  const searchInput = document.getElementById('product-search-input');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      currentSearchQuery = e.target.value;
      renderProductsGrid();
    });
  }

  const sortSelect = document.getElementById('product-sort-select');
  if (sortSelect) {
    sortSelect.addEventListener('change', (e) => {
      currentSort = e.target.value;
      renderProductsGrid();
    });
  }

  document.querySelectorAll('.category-chips .chip').forEach(chip => {
    chip.addEventListener('click', () => {
      document.querySelectorAll('.category-chips .chip').forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      currentCategory = chip.dataset.category;
      renderProductsGrid();
    });
  });
}
