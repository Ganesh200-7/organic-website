/* ==========================================================================
   TERRA VERDE / AURA ORGANICS - E-COMMERCE CART & TRACKING ENGINE
   ========================================================================== */

// Initial Cart State (Pre-populated with 2 items for rich demo state)
let cartState = [
  { id: 'prod-1', qty: 2 },
  { id: 'prod-3', qty: 1 }
];

let activeOrderTracking = {
  orderId: 'GOF-2026-89412',
  status: 'In Transit',
  dispatchTime: '07:15 AM Today',
  estimatedDelivery: '10:30 AM Today (Eco Refrigerated Van)',
  driver: 'Marcus Vance (Temperature Managed Delivery)',
  tempLog: '3.8°C (Optimal Harvest Preservation)'
};

// Add to Cart
function addToCart(productId) {
  const existing = cartState.find(item => item.id === productId);
  if (existing) {
    existing.qty += 1;
  } else {
    cartState.push({ id: productId, qty: 1 });
  }
  updateCartUI();
  
  const product = PRODUCTS_DATA.find(p => p.id === productId);
  showToast(`Added ${product ? product.name : 'Item'} to your cart`);
}

// Update Cart Quantity
function updateCartQty(productId, delta) {
  const item = cartState.find(i => i.id === productId);
  if (!item) return;

  item.qty += delta;
  if (item.qty <= 0) {
    cartState = cartState.filter(i => i.id !== productId);
  }
  updateCartUI();
}

// Remove from Cart
function removeFromCart(productId) {
  cartState = cartState.filter(i => i.id !== productId);
  updateCartUI();
  showToast('Item removed from cart');
}

// Update Cart UI Across Nav & Shop View
function updateCartUI() {
  // Update badge count
  const totalCount = cartState.reduce((sum, item) => sum + item.qty, 0);
  const badgeElements = document.querySelectorAll('.cart-badge');
  badgeElements.forEach(el => el.textContent = totalCount);

  // Render Shop Page Cart Items
  renderCartView();
}

// Render Shop View Items
function renderCartView() {
  const cartContainer = document.getElementById('shop-cart-items-list');
  const summaryContainer = document.getElementById('shop-cart-summary');
  if (!cartContainer) return;

  if (cartState.length === 0) {
    cartContainer.innerHTML = `
      <div class="glass-panel" style="text-align: center; padding: 4rem 1.5rem;">
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--gold-muted)" stroke-width="1.5" style="margin-bottom: 1rem;"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>
        <h3 style="font-family: var(--font-serif); margin-bottom: 0.5rem;">Your Cart is Empty</h3>
        <p style="color: var(--text-secondary); font-size: 0.95rem; margin-bottom: 1.5rem;">Discover our fresh bio-dynamic harvest from the organic farm.</p>
        <button class="btn btn-primary" onclick="switchTab('products')">Browse Products</button>
      </div>
    `;

    if (summaryContainer) {
      summaryContainer.innerHTML = `
        <div class="glass-card-elevated" style="padding: 2rem;">
          <h3 style="font-family: var(--font-serif); margin-bottom: 1.5rem;">Order Summary</h3>
          <p style="color: var(--text-muted); font-size: 0.9rem;">Add items to your cart to calculate delivery costs & eco packaging options.</p>
        </div>
      `;
    }
    return;
  }

  let subtotal = 0;

  cartContainer.innerHTML = cartState.map(cartItem => {
    const product = PRODUCTS_DATA.find(p => p.id === cartItem.id);
    if (!product) return '';
    const itemTotal = product.price * cartItem.qty;
    subtotal += itemTotal;

    return `
      <div class="glass-panel cart-item">
        <img src="${product.image}" alt="${product.name}" class="cart-item-img">
        <div>
          <span style="font-size: 0.75rem; text-transform: uppercase; color: #FFE699; font-weight: 700; letter-spacing: 0.05em;">${product.categoryName}</span>
          <h4 style="font-family: var(--font-serif); font-size: 1.25rem; margin: 0.1rem 0; color: #FFFFFF;">${product.name}</h4>
          <span style="font-size: 0.88rem; color: #E2ECE7;">${product.unit} • $${product.price.toFixed(2)}</span>
        </div>
        <div class="qty-control">
          <button class="qty-btn" onclick="updateCartQty('${product.id}', -1)">-</button>
          <span class="qty-number">${cartItem.qty}</span>
          <button class="qty-btn" onclick="updateCartQty('${product.id}', 1)">+</button>
        </div>
        <div style="text-align: right;">
          <div style="font-weight: 700; color: #FFE699; font-size: 1.2rem; text-shadow: 0 1px 3px rgba(0,0,0,0.5);">$${itemTotal.toFixed(2)}</div>
          <button onclick="removeFromCart('${product.id}')" style="color: #FFB3B3; font-size: 0.78rem; text-decoration: underline; margin-top: 0.25rem; font-weight: 600;">Remove</button>
        </div>
      </div>
    `;
  }).join('');

  // Shipping logic
  const freeShippingThreshold = 50.0;
  const shippingFee = subtotal >= freeShippingThreshold ? 0.0 : 6.50;
  const grandTotal = subtotal + shippingFee;
  const progressPercent = Math.min(100, (subtotal / freeShippingThreshold) * 100);

  if (summaryContainer) {
    summaryContainer.innerHTML = `
      <div class="order-summary-card">
        <h3 style="font-family: var(--font-serif); font-size: 1.8rem; margin-bottom: 1.5rem; color: #FFFFFF; text-shadow: 0 2px 8px rgba(0,0,0,0.5);">Order Summary</h3>
        
        <!-- Free Shipping Progress -->
        <div class="summary-progress-box">
          <div style="display: flex; justify-content: space-between; font-size: 0.88rem; font-weight: 700; color: #FFFFFF; margin-bottom: 0.6rem;">
            <span>${subtotal >= freeShippingThreshold ? '🎉 Free Refrigerated Delivery Unlocked!' : `Add $${(freeShippingThreshold - subtotal).toFixed(2)} for Free Shipping`}</span>
          </div>
          <div style="width: 100%; height: 8px; background: rgba(0, 0, 0, 0.4); border-radius: 4px; overflow: hidden; border: 1px solid rgba(212, 175, 55, 0.3);">
            <div style="width: ${progressPercent}%; height: 100%; background: var(--gold-gradient); transition: width 0.3s ease;"></div>
          </div>
        </div>

        <div style="display: flex; flex-direction: column; gap: 0.5rem; margin-bottom: 1.5rem;">
          <div class="summary-row">
            <span style="color: #E2ECE7;">Subtotal</span>
            <span style="font-weight: 700; color: #FFFFFF;">$${subtotal.toFixed(2)}</span>
          </div>
          <div class="summary-row">
            <span style="color: #E2ECE7;">Temperature-Controlled Dispatch</span>
            <span>${shippingFee === 0 ? '<strong style="color: #FFE699; font-weight: 700;">FREE</strong>' : '<span style="color: #FFFFFF; font-weight: 600;">$' + shippingFee.toFixed(2) + '</span>'}</span>
          </div>
          <div class="summary-row">
            <span style="color: #E2ECE7;">Eco Bio-Degradable Packaging</span>
            <span style="color: #FFE699; font-weight: 700;">Included</span>
          </div>
          <div class="summary-divider" style="height: 1px; background: rgba(212, 175, 55, 0.3); margin: 0.5rem 0;"></div>
          <div class="summary-grand-total" style="display: flex; justify-content: space-between; font-size: 1.2rem; font-weight: 700; color: #FFFFFF; padding-top: 0.5rem;">
            <span>Grand Total</span>
            <span style="color: #FFE699; font-size: 1.4rem; font-weight: 800; text-shadow: 0 1px 4px rgba(0,0,0,0.5);">$${grandTotal.toFixed(2)}</span>
          </div>
        </div>

        <button class="btn btn-primary" style="width: 100%; padding: 1.1rem; font-size: 1rem;" onclick="handleCheckout()">
          Proceed to Eco-Checkout
        </button>
      </div>
    `;
  }
}

// Handle Checkout Process
function handleCheckout() {
  if (cartState.length === 0) return;

  const newOrderId = 'GOF-2026-' + Math.floor(10000 + Math.random() * 90000);
  activeOrderTracking = {
    orderId: newOrderId,
    status: 'Order Confirmed',
    dispatchTime: 'Just Now',
    estimatedDelivery: 'Today by 11:30 AM (Cold-Chain Van)',
    driver: 'Elena Rostova (Eco Fleet)',
    tempLog: '3.4°C (Optimal Soil-Freshness Preserved)'
  };

  showToast('Order placed successfully! Tracking ID: ' + newOrderId);
  
  // Clear Cart
  cartState = [];
  updateCartUI();

  // Scroll to Tracking Section
  const trackSection = document.getElementById('order-tracking-card-section');
  if (trackSection) {
    trackSection.scrollIntoView({ behavior: 'smooth' });
    renderOrderTrackingCard();
  }
}

// Render Order Tracking Status Card
function renderOrderTrackingCard() {
  const container = document.getElementById('order-tracking-card-section');
  if (!container) return;

  container.innerHTML = `
    <div class="order-tracking-card" style="margin-top: 3rem;">
      <div class="order-tracker-header">
        <div>
          <span class="gold-badge" style="margin-bottom: 0.6rem; background: rgba(255, 230, 153, 0.18); border: 1px solid rgba(255, 230, 153, 0.6); color: #FFE699; font-weight: 700;">Live IoT Order Tracker</span>
          <div class="order-id-badge" style="color: #FFFFFF;">
            Order <span class="order-id-highlight" style="color: #FFE699; background: rgba(255, 230, 153, 0.16); border-color: rgba(255, 230, 153, 0.7);">#${activeOrderTracking.orderId}</span>
          </div>
        </div>
        <div style="text-align: right;">
          <div style="font-size: 0.75rem; color: #FFE699; text-transform: uppercase; letter-spacing: 0.1em; font-weight: 700; margin-bottom: 0.2rem;">ESTIMATED DELIVERY</div>
          <div style="font-size: 1.15rem; font-weight: 700; color: #FFFFFF; text-shadow: 0 1px 4px rgba(0,0,0,0.5);">${activeOrderTracking.estimatedDelivery}</div>
        </div>
      </div>

      <!-- Telemetry Info Grid -->
      <div class="telemetry-grid">
        <div class="telemetry-box">
          <div class="telemetry-label" style="color: #FFE699;">COLD CHAIN TEMP LOG</div>
          <div class="telemetry-value" style="color: #FFFFFF;">❄️ ${activeOrderTracking.tempLog}</div>
        </div>
        <div class="telemetry-box">
          <div class="telemetry-label" style="color: #FFE699;">ASSIGNED ECO DRIVER</div>
          <div class="telemetry-value" style="color: #FFFFFF;">🚚 ${activeOrderTracking.driver}</div>
        </div>
        <div class="telemetry-box">
          <div class="telemetry-label" style="color: #FFE699;">DISPATCH TIMESTAMP</div>
          <div class="telemetry-value" style="color: #FFFFFF;">🕒 ${activeOrderTracking.dispatchTime}</div>
        </div>
      </div>

      <!-- Tracker Timeline -->
      <div class="tracking-timeline-v2">
        <div class="track-step-v2 completed">
          <div class="track-step-icon">✓</div>
          <div>
            <div class="track-step-title" style="color: #FFFFFF;">1. Harvested at Bio-Dynamic Soil Lot #4</div>
            <div class="track-step-desc" style="color: #E2ECE7;">Harvested fresh at 05:30 AM with zero synthetic pesticides.</div>
          </div>
        </div>
        
        <div class="track-step-v2 completed">
          <div class="track-step-icon">✓</div>
          <div>
            <div class="track-step-title" style="color: #FFFFFF;">2. Eco-Cleaned & Quality Telemetry Verified</div>
            <div class="track-step-desc" style="color: #E2ECE7;">Cleaned using spring-water misting & packed in 100% bio-degradable crates.</div>
          </div>
        </div>

        <div class="track-step-v2 active">
          <div class="track-step-icon">🚚</div>
          <div>
            <div class="track-step-title" style="color: #FFE699;">3. In Transit via Refrigerated Electric Van</div>
            <div class="track-step-desc" style="color: #FFFFFF;">GPS telemetry active. Temperature maintained at 3.4°C.</div>
          </div>
        </div>

        <div class="track-step-v2">
          <div class="track-step-icon">🏡</div>
          <div>
            <div class="track-step-title" style="color: #FFFFFF; opacity: 0.9;">4. Temperature-Guarded Doorstep Delivery</div>
            <div class="track-step-desc" style="color: #E2ECE7; opacity: 0.9;">Estimated arrival in 45 minutes.</div>
          </div>
        </div>
      </div>
    </div>
  `;
}
