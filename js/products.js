/* ==========================================================================
   TERRA VERDE / AURA ORGANICS - PRODUCTS & CATALOG ENGINE
   ========================================================================== */

const PRODUCTS_DATA = [
  // --- VEGETABLES (assests/vege) ---
  {
    id: 'prod-vege-1',
    name: 'Volcanic Bio-Dynamic Carrots',
    category: 'vegetables',
    categoryName: 'Organic Vegetables',
    price: 5.80,
    unit: 'per 500g bunch',
    rating: 4.9,
    image: 'assests/vege/congerdesign-carrots-2387394_1920.jpg',
    badge: '100% Bio-Dynamic',
    lotId: 'LOT-2026-V01',
    soilPh: '6.8 pH',
    moisture: '28%',
    harvestDate: 'Today 05:30 AM',
    description: 'Sweet heirloom orange carrots grown in deep volcanic mineral soil. Rich in Beta-Carotene with crisp natural sweetness.',
    nutrition: 'Loaded with Vitamin A, Beta-Carotene, Fiber & Potassium.'
  },
  {
    id: 'prod-vege-2',
    name: 'Sun-Ripened Vine Tomatoes',
    category: 'vegetables',
    categoryName: 'Organic Vegetables',
    price: 7.20,
    unit: 'per 600g basket',
    rating: 4.95,
    image: 'assests/vege/couleur-tomatoes-1280859_1920.jpg',
    badge: 'Zero Pesticides',
    lotId: 'LOT-2026-V02',
    soilPh: '6.7 pH',
    moisture: '31%',
    harvestDate: 'Today 05:45 AM',
    description: 'Cluster vine-ripened tomatoes grown under solar drip irrigation. Exceptionally sweet flavor profile and high lycopene.',
    nutrition: 'High in Lycopene, Vitamin C, Folate & Antioxidants.'
  },
  {
    id: 'prod-vege-3',
    name: 'Crisp Savoy Organic Cabbage',
    category: 'vegetables',
    categoryName: 'Organic Vegetables',
    price: 6.40,
    unit: 'per head (800g)',
    rating: 4.88,
    image: 'assests/vege/ulleo-cabbage-3722498_1920.jpg',
    badge: 'Solar Drip Grown',
    lotId: 'LOT-2026-V03',
    soilPh: '6.9 pH',
    moisture: '29%',
    harvestDate: 'Yesterday 04:30 PM',
    description: 'Crinkled tender green leaves packed with minerals. Grown with 0% synthetic chemicals in living mycorrhizal soil.',
    nutrition: 'Rich in Vitamin K, Vitamin C, Glucosinolates & Fiber.'
  },
  {
    id: 'prod-vege-4',
    name: 'Bio-Dynamic Heritage Gourds',
    category: 'vegetables',
    categoryName: 'Organic Vegetables',
    price: 6.90,
    unit: 'per 500g lot',
    rating: 4.85,
    image: 'assests/vege/vishnu-vasu-bitter-gourd-4345074_1920.jpg',
    badge: 'Heritage Species',
    lotId: 'LOT-2026-V04',
    soilPh: '6.6 pH',
    moisture: '27%',
    harvestDate: 'Today 06:00 AM',
    description: 'Traditional bitter gourd varieties nurtured for intense phytonutrient purity and blood-sugar balancing properties.',
    nutrition: 'High Charantin, Polypeptide-p, Vitamin C & Iron.'
  },
  {
    id: 'prod-vege-5',
    name: 'IoT Monitored Tuscan Kale',
    category: 'vegetables',
    categoryName: 'Organic Vegetables',
    price: 6.20,
    unit: 'per bunch (350g)',
    rating: 4.9,
    image: 'assests/dan-meyers-IQVFVH0ajag-unsplash.jpg',
    badge: 'IoT Verified',
    lotId: 'LOT-2026-V05',
    soilPh: '6.7 pH',
    moisture: '30%',
    harvestDate: 'Today 06:00 AM',
    description: 'Crisp dinosaur kale cultivated under solar-drip irrigation. Tested 0% chemical residues.',
    nutrition: 'Loaded with Vitamin K, Iron, Fiber & Antioxidants.'
  },

  // --- FRUITS (assests/fruits) ---
  {
    id: 'prod-fruit-1',
    name: 'Solar Orchard Sweet Oranges',
    category: 'fruits',
    categoryName: 'Orchard Fruits',
    price: 8.90,
    unit: 'per 1kg basket',
    rating: 4.92,
    image: 'assests/fruits/fahd-khan-mrFdBdTlElk-unsplash.jpg',
    badge: 'Sun-Ripened',
    lotId: 'LOT-2026-F01',
    soilPh: '6.5 pH',
    moisture: '26%',
    harvestDate: 'Today 05:15 AM',
    description: 'Hand-picked from solar-drip orchards. Unwaxed, juicy Valencia citrus bursting with fresh natural sugars.',
    nutrition: 'High Vitamin C, Citrus Bioflavonoids & Potassium.'
  },
  {
    id: 'prod-fruit-2',
    name: 'Bio-Dynamic Vineyard Grapes',
    category: 'fruits',
    categoryName: 'Orchard Fruits',
    price: 9.80,
    unit: 'per 500g bunch',
    rating: 4.96,
    image: 'assests/fruits/jhenning-grapes-8306833_1920.jpg',
    badge: 'Resveratrol Rich',
    lotId: 'LOT-2026-F02',
    soilPh: '6.8 pH',
    moisture: '24%',
    harvestDate: 'Yesterday 05:00 PM',
    description: 'Cluster-harvested black grapes from non-tilled estate vineyards. Deep skin polyphenols and sweet nectar.',
    nutrition: 'Loaded with Resveratrol, Polyphenols & Vitamin C.'
  },
  {
    id: 'prod-fruit-3',
    name: 'Sun-Ripened Organic Strawberries',
    category: 'fruits',
    categoryName: 'Orchard Fruits',
    price: 8.50,
    unit: 'per 400g tub',
    rating: 5.0,
    image: 'assests/fruits/kathas_fotos-strawberries-7323943_1920.jpg',
    badge: 'Peak Dew Picked',
    lotId: 'LOT-2026-F03',
    soilPh: '6.4 pH',
    moisture: '30%',
    harvestDate: 'Today 05:00 AM',
    description: 'Fragrant crimson strawberries picked at early morning dew. Exceptionally sweet without synthetic sprays.',
    nutrition: 'Rich in Ellagic Acid, Vitamin C & Manganese.'
  },
  {
    id: 'prod-fruit-4',
    name: 'Heritage Honeycrisp Apples',
    category: 'fruits',
    categoryName: 'Orchard Fruits',
    price: 7.90,
    unit: 'per 1kg crate',
    rating: 4.91,
    image: 'assests/farm curated/lumix2004-apples-1873078_1920.jpg',
    badge: 'Cold-Stored Fresh',
    lotId: 'LOT-2026-F04',
    soilPh: '6.6 pH',
    moisture: '25%',
    harvestDate: 'Aug 13, 2026',
    description: 'Ultra-crisp heirloom apples cultivated in high-altitude volcanic orchards. Balanced acidity and natural sweetness.',
    nutrition: 'Pectin Fiber, Quercetin, Vitamin C & Minerals.'
  },
  {
    id: 'prod-fruit-5',
    name: 'Solar Citrus & Orchard Figs',
    category: 'fruits',
    categoryName: 'Orchard Fruits',
    price: 12.50,
    unit: 'per basket (800g)',
    rating: 4.9,
    image: 'assests/mansado-louis-fxFtQhYeBcg-unsplash.jpg',
    badge: 'Tree-Ripened',
    lotId: 'LOT-2026-F05',
    soilPh: '6.5 pH',
    moisture: '25%',
    harvestDate: 'Yesterday 04:45 PM',
    description: 'Unwaxed, unfiltered pure citrus and sweet tree-ripened figs from solar-drip orchards.',
    nutrition: 'Vitamin C, Bioflavonoids, Natural Enzymes.'
  },

  // --- GRAINS (assests/grains) ---
  {
    id: 'prod-grain-1',
    name: 'Ancient Heritage Seeds & Grains',
    category: 'grains',
    categoryName: 'Ancient Grains',
    price: 11.50,
    unit: 'per 750g jar',
    rating: 4.94,
    image: 'assests/grains/grai.webp',
    badge: 'Regenerative Certified',
    lotId: 'LOT-2026-G01',
    soilPh: '7.1 pH',
    moisture: '13%',
    harvestDate: 'Aug 10, 2026',
    description: 'Blend of ancient chia, amaranth, and heritage grain seeds harvested from no-till bio-dynamic soil.',
    nutrition: 'Plant Protein, Omega-3 Fatty Acids, High Fiber.'
  },
  {
    id: 'prod-grain-2',
    name: 'Golden Organic Flax Seeds',
    category: 'grains',
    categoryName: 'Ancient Grains',
    price: 8.80,
    unit: 'per 500g pouch',
    rating: 4.97,
    image: 'assests/grains/pezibear-flax-seed-1274944_1920.jpg',
    badge: 'Cold-Pressed Quality',
    lotId: 'LOT-2026-G02',
    soilPh: '7.0 pH',
    moisture: '12%',
    harvestDate: 'Aug 11, 2026',
    description: 'Nutrient-dense golden flax seeds rich in ALA omega-3 and lignans. Grown without synthetic pesticides.',
    nutrition: 'Alpha-Linolenic Acid (ALA), Lignans, Fiber.'
  },
  {
    id: 'prod-grain-3',
    name: 'Stone-Milled Organic Oats & Flour',
    category: 'grains',
    categoryName: 'Ancient Grains',
    price: 13.20,
    unit: 'per 1kg sack',
    rating: 4.9,
    image: 'assests/grains/premium_photo-1705146640695-cab3aa2005f4.avif',
    badge: 'Stone Ground',
    lotId: 'LOT-2026-G03',
    soilPh: '6.9 pH',
    moisture: '14%',
    harvestDate: 'Aug 09, 2026',
    description: 'Heritage grain flour stone-milled at low temperatures to preserve natural germ oils and B-complex vitamins.',
    nutrition: 'Beta-Glucan Fiber, B Vitamins, Magnesium & Zinc.'
  },
  {
    id: 'prod-grain-4',
    name: 'Golden Bio-Dynamic Wheat Grain',
    category: 'grains',
    categoryName: 'Ancient Grains',
    price: 12.00,
    unit: 'per 1kg jar',
    rating: 4.95,
    image: 'assests/farm curated/johnnaturephotos-wheat-6329586_1920.jpg',
    badge: 'Heritage Strain',
    lotId: 'LOT-2026-G04',
    soilPh: '7.1 pH',
    moisture: '13%',
    harvestDate: 'Aug 12, 2026',
    description: 'Sun-gold bio-dynamic wheat berries grown in organic living soil. Ideal for sprouting or artisanal breadmaking.',
    nutrition: 'High Fiber, Protein, Iron & Phosphorus.'
  },

  // --- HERBS (assests/herbs) ---
  {
    id: 'prod-herb-1',
    name: 'Fresh Flat-Leaf Italian Parsley',
    category: 'herbs',
    categoryName: 'Organic Herbs',
    price: 4.50,
    unit: 'per bunch (200g)',
    rating: 4.89,
    image: 'assests/herbs/artactiveart-parsley-261039_1920.jpg',
    badge: 'Spring Hydrated',
    lotId: 'LOT-2026-H01',
    soilPh: '6.9 pH',
    moisture: '28%',
    harvestDate: 'Today 05:15 AM',
    description: 'Aromatic flat-leaf parsley grown in rich organic compost. Packed with chlorophyll and natural essential oils.',
    nutrition: 'Rich in Chlorophyll, Vitamin K, Vitamin C & Apiol.'
  },
  {
    id: 'prod-herb-2',
    name: 'Artisanal Botanical Basil & Pesto',
    category: 'herbs',
    categoryName: 'Organic Herbs',
    price: 8.90,
    unit: 'per 250g jar',
    rating: 4.98,
    image: 'assests/herbs/ekologiskt_skafferi-pesto-1556974_1920.jpg',
    badge: 'Cold-Extracted',
    lotId: 'LOT-2026-H02',
    soilPh: '6.8 pH',
    moisture: '25%',
    harvestDate: 'Yesterday 03:00 PM',
    description: 'Fresh Genovese basil crushed with organic extra virgin olive oil and pine nuts. Unpasteurized live flavor.',
    nutrition: 'Essential Oils, Antioxidants, Healthy Monounsaturated Fats.'
  },
  {
    id: 'prod-herb-3',
    name: 'Wild Mountain Rosemary',
    category: 'herbs',
    categoryName: 'Organic Herbs',
    price: 5.60,
    unit: 'per bundle (150g)',
    rating: 4.95,
    image: 'assests/herbs/sergei_spas-wild-rosemary-7395542_1920.jpg',
    badge: 'Aromatic Reserve',
    lotId: 'LOT-2026-H03',
    soilPh: '7.0 pH',
    moisture: '20%',
    harvestDate: 'Today 05:30 AM',
    description: 'Woody, highly fragrant rosemary sprigs harvested from high-elevation rocky terrace soil.',
    nutrition: 'Rosmarinic Acid, Carnosic Acid, Essential Terpenes.'
  },

  // --- FARM CURATED (assests/farm curated) ---
  {
    id: 'prod-curated-1',
    name: 'Artisanal Farm Preserve & Oil Crate',
    category: 'farm-products',
    categoryName: 'Farm Curated',
    price: 38.00,
    unit: 'Deluxe Tasting Box',
    rating: 5.0,
    image: 'assests/farm curated/gabriel-jimenez-jin4W1HqgL4-unsplash.jpg',
    badge: 'Agronomist Selection',
    lotId: 'LOT-2026-C01',
    soilPh: '6.8 pH avg',
    moisture: '25%',
    harvestDate: 'Aug 14, 2026',
    description: 'Hand-crafted collection of cold-pressed virgin olive oil, wildflower preserves, and bio-dynamic condiments.',
    nutrition: 'Polyphenols, Healthy Fatty Acids, Natural Enzymes.'
  },
  {
    id: 'prod-curated-2',
    name: 'Raw Wildflower Honey & Fresh Dairy',
    category: 'farm-products',
    categoryName: 'Farm Curated',
    price: 24.00,
    unit: 'Estate Dairy Basket',
    rating: 4.97,
    image: 'assests/farm curated/megan-thomas-xMh_ww8HN_Q-unsplash.jpg',
    badge: 'Raw & Unfiltered',
    lotId: 'LOT-2026-C02',
    soilPh: '7.0 pH',
    moisture: '18%',
    harvestDate: 'Today 06:30 AM',
    description: 'Unfiltered raw wildflower honey paired with pasture-raised organic cultured butter and cream.',
    nutrition: 'Probiotics, Natural Enzymes, Bio-Active Honey Compounds.'
  },
  {
    id: 'prod-curated-3',
    name: 'Bio-Dynamic Master Harvest Crate',
    category: 'farm-products',
    categoryName: 'Farm Curated',
    price: 34.00,
    unit: '5kg Master Crate',
    rating: 5.0,
    image: 'assests/tim-mossholder-DoAvIcs1mdU-unsplash.jpg',
    badge: 'Master Crate',
    lotId: 'LOT-2026-C03',
    soilPh: '6.8 pH avg',
    moisture: '27%',
    harvestDate: 'Today 05:15 AM',
    description: 'Our chief agronomist’s morning selection of pristine vegetables, herbs, and fruits delivered directly from soil to table.',
    nutrition: 'Complete daily plant-based nutrition matrix.'
  }
];

// Product State
let currentCategory = 'all';
let currentSearchQuery = '';
let currentSort = 'default';

// Render Product Grid
function renderProductsGrid() {
  const gridContainer = document.getElementById('products-grid-container');
  if (!gridContainer) return;

  let filtered = PRODUCTS_DATA.filter(p => {
    const matchesCategory = currentCategory === 'all' || p.category === currentCategory;
    const query = currentSearchQuery.toLowerCase().trim();
    const matchesSearch = !query || 
      p.name.toLowerCase().includes(query) ||
      p.description.toLowerCase().includes(query) ||
      p.categoryName.toLowerCase().includes(query) ||
      p.badge.toLowerCase().includes(query) ||
      p.lotId.toLowerCase().includes(query);
    return matchesCategory && matchesSearch;
  });

  // Sort
  if (currentSort === 'price-low') {
    filtered.sort((a, b) => a.price - b.price);
  } else if (currentSort === 'price-high') {
    filtered.sort((a, b) => b.price - a.price);
  } else if (currentSort === 'rating') {
    filtered.sort((a, b) => b.rating - a.rating);
  }

  if (filtered.length === 0) {
    gridContainer.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 4rem 1rem;" class="glass-panel">
        <p style="font-size: 1.2rem; color: var(--text-secondary); margin-bottom: 1rem;">No organic products match your criteria.</p>
        <button class="btn btn-secondary" onclick="resetFilters()">Reset Filters</button>
      </div>
    `;
    return;
  }

  gridContainer.innerHTML = filtered.map(product => `
    <div class="card product-card">
      <div class="product-img-wrapper">
        <img src="${product.image}" alt="${product.name}" loading="lazy">
        <div class="product-badge-overlay">
          <span class="gold-badge">${product.badge}</span>
        </div>
        <div class="product-lot-tag">${product.lotId}</div>
      </div>
      <div class="product-info">
        <div class="product-category">${product.categoryName}</div>
        <h3 class="product-title">${product.name}</h3>
        <p style="font-size: 0.85rem; color: var(--text-secondary); line-height: 1.5; margin-bottom: 1rem;">
          ${product.description}
        </p>
        <div class="product-price-wrap">
          <div class="product-price">$${product.price.toFixed(2)}</div>
          <div class="product-unit">${product.unit}</div>
        </div>
        <div class="product-card-actions">
          <button class="btn btn-secondary btn-icon-sm" style="width: 44px; height: 44px;" onclick="openProductQuickView('${product.id}')" title="Quick View & Telemetry">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
          </button>
          <button class="btn btn-primary" style="flex: 1;" onclick="addToCart('${product.id}')">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  `).join('');
}

// Reset Filters
function resetFilters() {
  currentCategory = 'all';
  currentSearchQuery = '';
  currentSort = 'default';
  const searchInput = document.getElementById('product-search-input');
  if (searchInput) searchInput.value = '';
  const sortSelect = document.getElementById('product-sort-select');
  if (sortSelect) sortSelect.value = 'default';
  
  document.querySelectorAll('.category-chips .chip').forEach(c => {
    c.classList.toggle('active', c.dataset.category === 'all');
  });
  
  renderProductsGrid();
}

// Quick View Modal
function openProductQuickView(productId) {
  const product = PRODUCTS_DATA.find(p => p.id === productId);
  if (!product) return;

  const modalContainer = document.getElementById('quickview-modal-content');
  if (!modalContainer) return;

  modalContainer.innerHTML = `
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; align-items: center;">
      <div style="position: relative; border-radius: var(--radius-md); overflow: hidden; height: 320px; border: 1px solid var(--glass-border);">
        <img src="${product.image}" alt="${product.name}" style="width: 100%; height: 100%; object-fit: cover;">
        <span class="gold-badge" style="position: absolute; top: 1rem; left: 1rem;">${product.badge}</span>
      </div>
      <div>
        <span style="font-size: 0.78rem; text-transform: uppercase; letter-spacing: 0.1em; color: var(--gold-primary); font-weight: 600;">${product.categoryName}</span>
        <h2 style="font-size: 2rem; margin: 0.25rem 0 0.75rem;">${product.name}</h2>
        <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 1rem;">
          <span style="font-size: 1.6rem; font-weight: 700; color: var(--gold-primary);">$${product.price.toFixed(2)}</span>
          <span style="color: var(--text-muted); font-size: 0.9rem;">${product.unit}</span>
        </div>
        <p style="color: var(--text-secondary); font-size: 0.95rem; margin-bottom: 1.5rem; line-height: 1.6;">${product.description}</p>
        
        <!-- Agri-Tech Lot Telemetry -->
        <div style="background: rgba(10, 22, 18, 0.8); padding: 1rem; border-radius: var(--radius-sm); border: 1px solid var(--glass-border); margin-bottom: 1.5rem;">
          <div style="font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.08em; color: var(--gold-muted); margin-bottom: 0.5rem; font-weight: 600;">IoT Soil & Harvest Telemetry</div>
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.75rem; font-size: 0.82rem; color: var(--text-secondary);">
            <div>🌱 <strong>Lot Code:</strong> ${product.lotId}</div>
            <div>🧪 <strong>Soil pH:</strong> ${product.soilPh}</div>
            <div>💧 <strong>Hydration:</strong> ${product.moisture}</div>
            <div>⏱️ <strong>Harvested:</strong> ${product.harvestDate}</div>
          </div>
        </div>

        <button class="btn btn-primary" style="width: 100%;" onclick="addToCart('${product.id}'); closeQuickViewModal();">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>
          Add to Cart - $${product.price.toFixed(2)}
        </button>
      </div>
    </div>
  `;

  document.getElementById('quickview-backdrop').classList.add('active');
}

function closeQuickViewModal() {
  const backdrop = document.getElementById('quickview-backdrop');
  if (backdrop) backdrop.classList.remove('active');
}
