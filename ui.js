/* ==========================================================================
   Brelune Bakery & Coffee - UI Controller & Renderer
   Revisi: No-emoji, Favorites, Auth Guard, Kasir Flow, My Orders
   ========================================================================== */

const UI = {
  currentModalProduct: null,
  modalSelectedOptions: {},
  modalQuantity: 1,

  init() {
    this.bindStoreEvents();
    this.renderHeaderUser();
    this.renderHighlights();
    this.renderMenuGrid('all');
    this.renderCartDrawer();
    this.renderPaymentMethodsSelection();
    this.renderStoreBranchesOptions();
    this.renderFavoritesPage();
    this.bindGlobalShortcuts();
    this.bindCardValidationEvents();
  },

  bindStoreEvents() {
    store.subscribe((event, payload) => {
      if (event === 'CART_UPDATED') {
        this.updateHeaderCartBadge();
        this.renderCartDrawer();
        this.renderCheckoutPage();
      } else if (event === 'AUTH_CHANGED') {
        this.renderHeaderUser();
        this.renderAccountSettings();
        this.renderFavoritesPage();
      } else if (event === 'ORDER_TYPE_CHANGED') {
        this.renderCheckoutPage();
        this.renderPaymentMethodsSelection();
      } else if (event === 'PAYMENT_METHOD_CHANGED') {
        this.updateActivePaymentMethodBox();
      } else if (event === 'ORDERS_FILTER_CHANGED') {
        this.renderMyOrdersHub();
      } else if (event === 'ADDRESSES_UPDATED') {
        this.renderAccountAddresses();
      } else if (event === 'FAVORITES_CHANGED') {
        this.renderFavoritesPage();
        // Refresh product cards to update love icon state
        const activeCategory = document.querySelector('.category-pill.active')?.dataset?.category || 'all';
        this.renderMenuGrid(activeCategory);
        this.renderHighlights();
      }
    });
  },

  formatRupiah(amount) {
    return 'Rp' + (amount || 0).toLocaleString('id-ID');
  },

  formatDate(isoString) {
    if (!isoString) return '-';
    const d = new Date(isoString);
    return d.toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' });
  },

  // --------------------------------------------------------------------------
  // Header & User Profile
  // --------------------------------------------------------------------------
  renderHeaderUser() {
    const userWrapper = document.getElementById('user-menu-wrapper');
    const userTrigger = document.getElementById('user-profile-trigger');
    const guestTrigger = document.getElementById('guest-login-trigger');
    const userNameElem = document.getElementById('header-user-name');
    const userAvatarElem = document.getElementById('header-user-avatar');
    const dropdownName = document.getElementById('dropdown-full-name');
    const dropdownEmail = document.getElementById('dropdown-email');

    if (store.isLoggedIn()) {
      if (userTrigger) userTrigger.style.display = 'flex';
      if (guestTrigger) guestTrigger.style.display = 'none';
      if (userNameElem) userNameElem.textContent = store.user.name.split(' ')[0];
      if (userAvatarElem) userAvatarElem.textContent = store.user.avatar || 'U';
      if (dropdownName) dropdownName.textContent = store.user.name;
      if (dropdownEmail) dropdownEmail.textContent = store.user.email;
    } else {
      if (userTrigger) userTrigger.style.display = 'none';
      if (guestTrigger) guestTrigger.style.display = 'inline-flex';
    }
  },

  toggleProfileDropdown(forceState) {
    const menu = document.getElementById('profile-dropdown-menu');
    if (!menu) return;
    if (typeof forceState === 'boolean') {
      menu.classList.toggle('show', forceState);
    } else {
      menu.classList.toggle('show');
    }
  },

  toggleNotificationsDropdown(forceState) {
    const menu = document.getElementById('notifications-dropdown-menu');
    if (!menu) return;
    if (typeof forceState === 'boolean') {
      menu.classList.toggle('show', forceState);
    } else {
      menu.classList.toggle('show');
    }
  },

  updateHeaderCartBadge() {
    const count = store.getCartCount();
    document.querySelectorAll('.cart-count-badge').forEach(badge => {
      badge.textContent = count;
      badge.classList.remove('animate-pop');
      void badge.offsetWidth;
      badge.classList.add('animate-pop');
    });
  },

  // --------------------------------------------------------------------------
  // Product Highlights (Home Page) — hanya 4 card
  // --------------------------------------------------------------------------
  renderHighlights() {
    const grid = document.getElementById('highlights-grid');
    if (!grid) return;

    const highlights = BRELUNE_DATA.products.filter(p => p.isHighlight).slice(0, 4);
    grid.innerHTML = highlights.map(product => this.createProductCardHTML(product)).join('');
  },

  // --------------------------------------------------------------------------
  // Menu Grid & Filter
  // --------------------------------------------------------------------------
  renderMenuGrid(category = 'all', searchQuery = '', sortOption = 'popular') {
    const grid = document.getElementById('menu-product-grid');
    const emptyNotice = document.getElementById('menu-empty-notice');
    if (!grid) return;

    let items = [...BRELUNE_DATA.products];

    if (category !== 'all') {
      items = items.filter(p => p.category === category);
    }

    if (searchQuery && searchQuery.trim() !== '') {
      const q = searchQuery.toLowerCase().trim();
      items = items.filter(p =>
        p.name.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q)
      );
    }

    if (sortOption === 'price-low') {
      items.sort((a, b) => a.price - b.price);
    } else if (sortOption === 'price-high') {
      items.sort((a, b) => b.price - a.price);
    } else if (sortOption === 'rating') {
      items.sort((a, b) => b.rating - a.rating);
    } else if (sortOption === 'name') {
      items.sort((a, b) => a.name.localeCompare(b.name));
    }

    if (items.length === 0) {
      grid.innerHTML = '';
      if (emptyNotice) emptyNotice.style.display = 'block';
    } else {
      if (emptyNotice) emptyNotice.style.display = 'none';
      grid.innerHTML = items.map(product => this.createProductCardHTML(product)).join('');
    }
  },

  createProductCardHTML(product) {
    const categoryName = BRELUNE_DATA.categories.find(c => c.id === product.category)?.name || product.category;
    const isFav = store.isFavorite(product.id);

    return `
      <div class="product-card" onclick="UI.openProductDetail('${product.id}')">
        <div class="product-image-box">
          <img src="${product.image}" alt="${product.name}" class="product-img" loading="lazy" />
          <span class="product-badge-float">${product.badge || '★ ' + product.rating}</span>
          <button class="favorite-btn ${isFav ? 'active' : ''}" title="Favorit"
            onclick="event.stopPropagation(); UI.handleFavoriteToggle('${product.id}', this)">
            ♥
          </button>
        </div>
        <div class="product-card-body">
          <span class="product-category-name">${categoryName}</span>
          <h3 class="product-title">${product.name}</h3>
          <p class="product-desc">${product.description}</p>
          <div class="product-card-footer">
            <span class="product-price">${this.formatRupiah(product.price)}</span>
            <button class="product-add-btn" title="Kustomisasi & Tambah" onclick="event.stopPropagation(); UI.openProductDetail('${product.id}')">
              +
            </button>
          </div>
        </div>
      </div>
    `;
  },

  // --------------------------------------------------------------------------
  // Favorites
  // --------------------------------------------------------------------------
  handleFavoriteToggle(productId, btn) {
    if (!store.isLoggedIn()) {
      this.showToast('Silakan login untuk menyimpan favorit', 'info');
      this.openAuthModal('login');
      return;
    }
    store.toggleFavorite(productId);
    const isFav = store.isFavorite(productId);
    if (btn) btn.classList.toggle('active', isFav);
    this.showToast(isFav ? 'Ditambahkan ke Favorit' : 'Dihapus dari Favorit', isFav ? 'success' : 'info');
  },

  renderFavoritesPage() {
    const grid = document.getElementById('favorites-grid');
    const emptyView = document.getElementById('favorites-empty-view');
    const countEl = document.getElementById('favorites-count');
    if (!grid) return;

    const favProducts = store.getFavoriteProducts();

    if (countEl) countEl.textContent = favProducts.length;

    if (favProducts.length === 0) {
      grid.innerHTML = '';
      if (emptyView) emptyView.style.display = 'flex';
    } else {
      if (emptyView) emptyView.style.display = 'none';
      grid.innerHTML = favProducts.map(product => this.createProductCardHTML(product)).join('');
    }
  },

  // --------------------------------------------------------------------------
  // Product Detail Customization Modal (Auth Guard)
  // --------------------------------------------------------------------------
  openProductDetail(productId) {
    if (!store.isLoggedIn()) {
      this.showToast('Silakan login terlebih dahulu untuk memesan', 'info');
      this.openAuthModal('login');
      return;
    }

    const product = BRELUNE_DATA.products.find(p => p.id === productId);
    if (!product) return;

    this.currentModalProduct = product;
    this.modalQuantity = 1;
    this.modalSelectedOptions = {};

    if (product.options) {
      if (product.options.sizes) this.modalSelectedOptions.size = product.options.sizes[0];
      if (product.options.temperature) this.modalSelectedOptions.temperature = product.options.temperature[0];
      if (product.options.milks) this.modalSelectedOptions.milk = product.options.milks[0];
      if (product.options.sweetness) this.modalSelectedOptions.sweetness = product.options.sweetness[0];
      if (product.options.warming) this.modalSelectedOptions.warming = product.options.warming[0];
    }

    const modal = document.getElementById('product-detail-modal');
    document.getElementById('modal-product-img').src = product.image;
    document.getElementById('modal-product-title').textContent = product.name;
    document.getElementById('modal-product-desc').textContent = product.description;
    document.getElementById('modal-product-price').textContent = this.formatRupiah(product.price);
    document.getElementById('modal-product-rating').innerHTML = `<span class="star-icons">★ ★ ★ ★ ★</span> ${product.rating} (${product.reviewsCount} ulasan)`;
    document.getElementById('modal-qty-display').value = 1;

    this.renderModalOptions(product);
    this.updateModalCalculatedPrice();

    modal.classList.add('show');
  },

  renderModalOptions(product) {
    const container = document.getElementById('modal-options-container');
    container.innerHTML = '';
    if (!product.options) return;

    if (product.options.sizes && product.options.sizes.length > 1) {
      container.appendChild(this.createOptionButtonGroup('Ukuran (Size)', product.options.sizes, 'size'));
    }

    if (product.options.temperature) {
      container.appendChild(this.createOptionButtonGroup('Suhu Penyajian', product.options.temperature, 'temperature'));
    }

    if (product.options.milks) {
      container.appendChild(this.createOptionButtonGroup('Pilihan Susu', product.options.milks, 'milk'));
    }

    if (product.options.sweetness) {
      container.appendChild(this.createOptionButtonGroup('Tingkat Kemanisan', product.options.sweetness, 'sweetness'));
    }

    if (product.options.warming) {
      container.appendChild(this.createOptionButtonGroup('Penyajian Roti', product.options.warming, 'warming'));
    }
  },

  createOptionButtonGroup(title, optionsList, groupKey) {
    const groupDiv = document.createElement('div');
    groupDiv.className = 'option-group';

    const titleDiv = document.createElement('div');
    titleDiv.className = 'option-group-title';
    titleDiv.textContent = title;
    groupDiv.appendChild(titleDiv);

    const pillsDiv = document.createElement('div');
    pillsDiv.className = 'option-pills';

    optionsList.forEach((opt, idx) => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'option-pill-btn' + (idx === 0 ? ' selected' : '');
      btn.textContent = opt.name;
      btn.onclick = () => {
        pillsDiv.querySelectorAll('.option-pill-btn').forEach(b => b.classList.remove('selected'));
        btn.classList.add('selected');
        this.modalSelectedOptions[groupKey] = opt;
        this.updateModalCalculatedPrice();
      };
      pillsDiv.appendChild(btn);
    });

    groupDiv.appendChild(pillsDiv);
    return groupDiv;
  },

  changeModalQuantity(delta) {
    this.modalQuantity = Math.max(1, this.modalQuantity + delta);
    document.getElementById('modal-qty-display').value = this.modalQuantity;
    this.updateModalCalculatedPrice();
  },

  updateModalCalculatedPrice() {
    if (!this.currentModalProduct) return;
    const extra = store.calculateOptionExtra(this.modalSelectedOptions);
    const unitPrice = this.currentModalProduct.price + extra;
    const total = unitPrice * this.modalQuantity;
    document.getElementById('modal-btn-total-price').textContent = this.formatRupiah(total);
  },

  submitModalAddToCart() {
    if (!this.currentModalProduct) return;
    store.addToCart(this.currentModalProduct, this.modalQuantity, this.modalSelectedOptions);
    this.closeProductModal();
    this.showToast(`${this.currentModalProduct.name} (${this.modalQuantity}x) dimasukkan ke keranjang!`, 'success');
  },

  closeProductModal() {
    const modal = document.getElementById('product-detail-modal');
    if (modal) modal.classList.remove('show');
    this.currentModalProduct = null;
  },

  // --------------------------------------------------------------------------
  // Cart Drawer (aktif +/- dan hapus)
  // --------------------------------------------------------------------------
  openCartDrawer() {
    const drawer = document.getElementById('cart-drawer-overlay');
    if (drawer) drawer.classList.add('show');
  },

  closeCartDrawer() {
    const drawer = document.getElementById('cart-drawer-overlay');
    if (drawer) drawer.classList.remove('show');
  },

  renderCartDrawer() {
    const container = document.getElementById('cart-items-container');
    const emptyView = document.getElementById('cart-empty-view');
    const footer = document.getElementById('cart-drawer-footer');
    if (!container) return;

    if (store.cart.length === 0) {
      container.innerHTML = '';
      if (emptyView) emptyView.style.display = 'flex';
      if (footer) footer.style.display = 'none';
      return;
    }

    if (emptyView) emptyView.style.display = 'none';
    if (footer) footer.style.display = 'block';

    container.innerHTML = store.cart.map((item, idx) => {
      const optionsText = Object.values(item.options).map(o => typeof o === 'object' ? o.name : o).join(', ');
      return `
        <div class="cart-item-row">
          <img src="${item.image}" alt="${item.name}" class="cart-item-thumb" />
          <div class="cart-item-info">
            <div class="cart-item-title">${item.name}</div>
            ${optionsText ? `<div class="cart-item-meta">${optionsText}</div>` : ''}
            <div class="cart-item-price">${this.formatRupiah(item.unitPrice)}</div>
            <div style="display:flex; align-items:center; justify-content:space-between; margin-top:0.5rem;">
              <div class="stepper-box" style="transform:scale(0.9); transform-origin:left;">
                <button class="stepper-btn" type="button" onclick="store.updateCartItemQtyByIndex(${idx}, -1)" title="Kurangi">−</button>
                <input type="text" class="stepper-input" value="${item.quantity}" readonly />
                <button class="stepper-btn" type="button" onclick="store.updateCartItemQtyByIndex(${idx}, 1)" title="Tambah">+</button>
              </div>
              <button class="cart-item-remove-btn" type="button" onclick="store.removeFromCartByIndex(${idx})" title="Hapus Produk">Hapus</button>
            </div>
          </div>
        </div>
      `;
    }).join('');

    const totals = store.getCartTotals();
    document.getElementById('cart-summary-subtotal').textContent = this.formatRupiah(totals.subtotal);
    document.getElementById('cart-summary-service').textContent = this.formatRupiah(totals.serviceCharge);
    document.getElementById('cart-summary-tax').textContent = this.formatRupiah(totals.taxPB1);
    document.getElementById('cart-summary-total').textContent = this.formatRupiah(totals.total);

    const discountRow = document.getElementById('cart-summary-discount-row');
    if (totals.discount > 0) {
      discountRow.style.display = 'flex';
      document.getElementById('cart-summary-discount').textContent = `-${this.formatRupiah(totals.discount)}`;
      document.getElementById('cart-summary-discount-label').textContent = `Diskon (${totals.appliedPromo.title})`;
    } else {
      discountRow.style.display = 'none';
    }
  },

  // --------------------------------------------------------------------------
  // Order Type Modal (Dine In / Take Away)
  // --------------------------------------------------------------------------
  openOrderTypeModal() {
    if (!store.isLoggedIn()) {
      this.showToast('Silakan login terlebih dahulu untuk memesan', 'info');
      this.openAuthModal('login');
      return;
    }
    this.closeCartDrawer();
    const modal = document.getElementById('order-type-modal');
    if (!modal) return;

    this.selectOrderTypeChoice(store.orderType.type);
    document.getElementById('order-store-select').value = store.orderType.storeId;
    document.getElementById('order-table-input').value = store.orderType.tableNumber || 'Table 12';

    const takeAwayName = document.getElementById('takeaway-cust-name');
    const takeAwayPhone = document.getElementById('takeaway-cust-phone');
    const takeAwayEmail = document.getElementById('takeaway-cust-email');
    const takeAwayAddr = document.getElementById('takeaway-delivery-addr');

    if (takeAwayName) takeAwayName.value = store.orderType.recipientName || store.user.name;
    if (takeAwayPhone) takeAwayPhone.value = store.orderType.recipientPhone || store.user.phone;
    if (takeAwayEmail) takeAwayEmail.value = store.orderType.recipientEmail || store.user.email;
    if (takeAwayAddr) takeAwayAddr.value = store.orderType.deliveryAddress || '';

    modal.classList.add('show');
  },

  renderStoreBranchesOptions() {
    const select = document.getElementById('order-store-select');
    if (!select) return;
    select.innerHTML = BRELUNE_DATA.stores.map(s => `
      <option value="${s.id}">${s.name} (${s.hours})</option>
    `).join('');
  },

  selectOrderTypeChoice(type) {
    const dineInCard = document.getElementById('order-type-card-dine-in');
    const takeAwayCard = document.getElementById('order-type-card-take-away');
    const dineInFields = document.getElementById('dine-in-fields-box');
    const takeAwayFields = document.getElementById('take-away-fields-box');

    if (type === 'dine_in') {
      dineInCard.classList.add('selected');
      takeAwayCard.classList.remove('selected');
      dineInFields.style.display = 'block';
      takeAwayFields.style.display = 'none';
    } else {
      dineInCard.classList.remove('selected');
      takeAwayCard.classList.add('selected');
      dineInFields.style.display = 'none';
      takeAwayFields.style.display = 'block';
    }
  },

  confirmOrderTypeAndProceed() {
    const isDineIn = document.getElementById('order-type-card-dine-in').classList.contains('selected');
    const storeId = document.getElementById('order-store-select').value;
    const storeObj = BRELUNE_DATA.stores.find(s => s.id === storeId);

    if (isDineIn) {
      const tableInput = document.getElementById('order-table-input').value.trim() || 'Table 12';
      store.setOrderType({
        type: 'dine_in',
        storeId,
        storeName: storeObj.name,
        tableNumber: tableInput
      });
    } else {
      const custName = document.getElementById('takeaway-cust-name').value.trim() || store.user.name;
      const custPhone = document.getElementById('takeaway-cust-phone').value.trim() || store.user.phone;
      const custEmail = document.getElementById('takeaway-cust-email').value.trim() || store.user.email;
      const deliveryAddr = document.getElementById('takeaway-delivery-addr').value.trim() || 'Ambil di Counter Cabang';
      const pickupTime = document.getElementById('order-pickup-select').value;

      store.setOrderType({
        type: 'take_away',
        storeId,
        storeName: storeObj.name,
        recipientName: custName,
        recipientPhone: custPhone,
        recipientEmail: custEmail,
        deliveryAddress: deliveryAddr,
        pickupTime: pickupTime
      });
    }

    document.getElementById('order-type-modal').classList.remove('show');
    window.location.hash = '#checkout';
  },

  // --------------------------------------------------------------------------
  // 6 Payment Methods Selection (With Official Logos)
  // --------------------------------------------------------------------------
  renderPaymentMethodsSelection() {
    const container = document.getElementById('payment-methods-tabs-container');
    if (!container) return;

    const isDineIn = store.orderType.type === 'dine_in';

    container.innerHTML = BRELUNE_DATA.paymentMethods.map(pm => {
      const isSelected = store.paymentMethod === pm.id;
      const isCashierDisabled = pm.dineInOnly && !isDineIn;

      let iconHtml = '';
      if (pm.logos && pm.logos.length > 0) {
        iconHtml = `
          <div class="payment-pill-logo-box">
            <img src="${pm.logos[0]}" alt="Visa" class="payment-brand-logo-img compact" />
            <img src="${pm.logos[1]}" alt="Mastercard" class="payment-brand-logo-img compact" />
          </div>
        `;
      } else if (pm.logo) {
        iconHtml = `
          <div class="payment-pill-logo-box">
            <img src="${pm.logo}" alt="${pm.name}" class="payment-brand-logo-img" />
          </div>
        `;
      } else {
        iconHtml = `<div class="payment-pill-icon">${pm.icon}</div>`;
      }

      return `
        <div class="payment-method-pill ${isSelected ? 'selected' : ''} ${isCashierDisabled ? 'disabled' : ''}"
             onclick="${isCashierDisabled ? `UI.showToast('Bayar di Kasir hanya untuk Dine In', 'error')` : `UI.selectPaymentMethod('${pm.id}')`}">
          ${iconHtml}
          <div class="payment-pill-name">${pm.name}</div>
          <div class="payment-pill-tag">${pm.tag}</div>
        </div>
      `;
    }).join('');

    this.updateActivePaymentMethodBox();
  },

  selectPaymentMethod(methodId) {
    const success = store.setPaymentMethod(methodId);
    if (!success) {
      this.showToast('Bayar di Kasir hanya dapat digunakan untuk Dine In', 'error');
      return;
    }
    this.renderPaymentMethodsSelection();
  },

  updateActivePaymentMethodBox() {
    const boxes = ['cashier', 'qris', 'gopay', 'shopeepay', 'card'];
    boxes.forEach(b => {
      const elem = document.getElementById(`payment-box-${b}`);
      if (elem) elem.style.display = 'none';
    });

    const active = store.paymentMethod;
    if (active === 'debit' || active === 'credit') {
      const cardBox = document.getElementById('payment-box-card');
      if (cardBox) {
        cardBox.style.display = 'block';
        const title = document.getElementById('card-method-type-title');
        if (title) title.textContent = active === 'debit' ? 'Debit Card (Visa / Mastercard)' : 'Credit Card (Visa / Mastercard)';
      }
    } else {
      const box = document.getElementById(`payment-box-${active}`);
      if (box) box.style.display = 'block';
    }

    const payBtnLabel = document.getElementById('checkout-pay-btn-label');
    if (payBtnLabel) {
      if (active === 'cashier') {
        payBtnLabel.textContent = 'Konfirmasi Pesanan ke Kasir';
      } else {
        payBtnLabel.textContent = 'Bayar Sekarang';
      }
    }
  },

  bindCardValidationEvents() {
    const numberInput = document.getElementById('card-number-input');
    const expiryInput = document.getElementById('card-expiry-input');

    if (numberInput) {
      numberInput.addEventListener('input', (e) => {
        let val = e.target.value.replace(/\D/g, '').substring(0, 16);
        val = val.replace(/(\d{4})(?=\d)/g, '$1 ');
        e.target.value = val;
        this.validateCardInputs();
      });
    }

    if (expiryInput) {
      expiryInput.addEventListener('input', (e) => {
        let val = e.target.value.replace(/\D/g, '').substring(0, 4);
        if (val.length >= 2) {
          val = val.substring(0, 2) + ' / ' + val.substring(2, 4);
        }
        e.target.value = val;
      });
    }
  },

  validateCardInputs() {
    const badge = document.getElementById('card-validity-status-badge');
    const numberInput = document.getElementById('card-number-input');
    if (!badge || !numberInput) return;

    const raw = numberInput.value.replace(/\s+/g, '');

    if (raw.length === 0) {
      badge.className = 'card-validity-status-badge idle';
      badge.textContent = 'Masukkan 16 digit nomor kartu debit/kredit';
    } else if (raw.length === 16) {
      if (raw.startsWith('4')) {
        badge.className = 'card-validity-status-badge valid';
        badge.textContent = 'Kartu Valid — Visa Gateway';
      } else if (raw.startsWith('5')) {
        badge.className = 'card-validity-status-badge valid';
        badge.textContent = 'Kartu Valid — Mastercard Gateway';
      } else {
        badge.className = 'card-validity-status-badge valid';
        badge.textContent = 'Kartu Valid';
      }
    } else {
      badge.className = 'card-validity-status-badge invalid';
      badge.textContent = `Format belum lengkap (${raw.length}/16 digit)`;
    }
  },

  fillTestCardData() {
    const num = document.getElementById('card-number-input');
    const name = document.getElementById('card-holder-input');
    const exp = document.getElementById('card-expiry-input');
    const cvv = document.getElementById('card-cvv-input');

    if (num) num.value = '4242 4242 4242 4242';
    if (name) name.value = store.user.name.toUpperCase();
    if (exp) exp.value = '08 / 28';
    if (cvv) cvv.value = '789';

    this.validateCardInputs();
    this.showToast('Data kartu uji coba Visa diisi otomatis', 'success');
  },

  // --------------------------------------------------------------------------
  // Checkout Page Rendering
  // --------------------------------------------------------------------------
  renderCheckoutPage() {
    const itemsContainer = document.getElementById('checkout-items-summary');
    if (!itemsContainer) return;

    const isDineIn = store.orderType.type === 'dine_in';

    const typeBadge = document.getElementById('checkout-order-type-badge');
    const locationDetail = document.getElementById('checkout-location-detail');
    const custName = document.getElementById('checkout-customer-name');
    const custPhone = document.getElementById('checkout-customer-phone');
    const storeName = document.getElementById('checkout-store-name');

    if (custName) custName.textContent = isDineIn ? store.user.name : store.orderType.recipientName;
    if (custPhone) custPhone.textContent = isDineIn ? store.user.phone : store.orderType.recipientPhone;
    if (storeName) storeName.textContent = store.orderType.storeName;

    if (typeBadge) {
      typeBadge.innerHTML = isDineIn
        ? `<span class="badge badge-gold">Dine In — Makan di Tempat</span>`
        : `<span class="badge badge-green">Take Away — Bawa Pulang</span>`;
    }

    if (locationDetail) {
      locationDetail.innerHTML = isDineIn
        ? `<div style="display:flex; align-items:center; gap:0.4rem; color:var(--color-dark-brown); font-weight:700; font-size:0.88rem;">
             Nomor Meja: <span style="background:#FFF; padding:2px 8px; border-radius:4px; border:1px solid var(--color-warm-brown);">${store.orderType.tableNumber || 'Table 12'}</span>
           </div>`
        : `<div>
             <div style="font-size:0.78rem; color:var(--color-charcoal-muted);">Alamat Pengiriman:</div>
             <div style="font-weight:600; color:var(--color-dark-brown); font-size:0.88rem; margin-top:1px;">${store.orderType.deliveryAddress || 'Ambil di Counter'}</div>
             <div style="font-size:0.8rem; color:var(--color-warm-brown); margin-top:2px;">Estimasi: ${store.orderType.pickupTime || 'ASAP'}</div>
           </div>`;
    }

    if (store.cart.length === 0) {
      itemsContainer.innerHTML = `
        <div style="text-align:center; padding:1.5rem; color:var(--color-charcoal-muted);">
          Keranjang kosong. <a href="#menu" style="color:var(--color-warm-brown); font-weight:700;">Pilih Menu</a>
        </div>
      `;
    } else {
      itemsContainer.innerHTML = store.cart.map(item => {
        const optionsList = Object.values(item.options).map(o => typeof o === 'object' ? o.name : o).join(', ');
        return `
          <div style="display:flex; justify-content:space-between; align-items:center; padding:0.85rem 0; border-bottom:1px solid var(--color-border-subtle);">
            <div style="display:flex; align-items:center; gap:0.75rem;">
              <img src="${item.image}" alt="${item.name}" style="width:48px; height:48px; border-radius:8px; object-fit:cover;" />
              <div>
                <strong style="color:var(--color-dark-brown); font-size:0.95rem;">${item.quantity}x ${item.name}</strong>
                ${optionsList ? `<div style="font-size:0.78rem; color:var(--color-charcoal-muted);">${optionsList}</div>` : ''}
              </div>
            </div>
            <span style="font-weight:700; color:var(--color-dark-brown);">${this.formatRupiah(item.subtotal)}</span>
          </div>
        `;
      }).join('');
    }

    const totals = store.getCartTotals();
    document.getElementById('checkout-subtotal').textContent = this.formatRupiah(totals.subtotal);
    document.getElementById('checkout-service').textContent = this.formatRupiah(totals.serviceCharge);
    document.getElementById('checkout-tax').textContent = this.formatRupiah(totals.taxPB1);
    document.getElementById('checkout-total').textContent = this.formatRupiah(totals.total);

    const discountRow = document.getElementById('checkout-discount-row');
    if (totals.discount > 0) {
      discountRow.style.display = 'flex';
      document.getElementById('checkout-discount-val').textContent = `-${this.formatRupiah(totals.discount)}`;
      document.getElementById('checkout-discount-label').textContent = `Diskon (${totals.appliedPromo.title})`;
    } else {
      discountRow.style.display = 'none';
    }

    const notesElem = document.getElementById('checkout-order-notes');
    if (notesElem) notesElem.textContent = store.orderNotes || 'Tidak ada catatan tambahan.';
  },

  processPayment() {
    if (store.cart.length === 0) {
      this.showToast('Keranjang Anda masih kosong!', 'error');
      return;
    }

    if (!store.isLoggedIn()) {
      this.showToast('Silakan login terlebih dahulu untuk checkout', 'info');
      this.openAuthModal('login');
      return;
    }

    const totals = store.getCartTotals();
    const modalTotal = document.getElementById('confirm-modal-total');
    if (modalTotal) modalTotal.textContent = this.formatRupiah(totals.total);

    const confirmModal = document.getElementById('payment-confirm-modal');
    if (confirmModal) confirmModal.classList.add('show');
  },

  confirmAndExecutePayment() {
    document.getElementById('payment-confirm-modal').classList.remove('show');

    // KASIR FLOW: langsung ke halaman tiket kasir tanpa processing modal
    if (store.paymentMethod === 'cashier') {
      const order = store.createOrder();
      this.renderCashierTicketScreen(order);
      window.location.hash = '#cashier-ticket';
      return;
    }

    // NON-KASIR: tampilkan processing modal lalu success screen
    const processingModal = document.getElementById('payment-processing-modal');
    const stepLabel = document.getElementById('processing-step-label');
    const bar = document.getElementById('processing-progress-bar');

    if (processingModal) processingModal.classList.add('show');

    setTimeout(() => {
      if (bar) bar.style.width = '65%';
      if (stepLabel) stepLabel.textContent = 'Memverifikasi Pembayaran...';
    }, 700);

    setTimeout(() => {
      if (bar) bar.style.width = '100%';
      if (stepLabel) stepLabel.textContent = 'Pembayaran Berhasil Dikonfirmasi!';
    }, 1400);

    setTimeout(() => {
      if (processingModal) processingModal.classList.remove('show');
      const order = store.createOrder();
      this.renderOrderSuccessScreen(order);
      window.location.hash = '#order-success';
    }, 1800);
  },

  // Halaman tiket kasir — bayar di kasir
  renderCashierTicketScreen(order) {
    const screen = document.getElementById('cashier-ticket-page-view') || document.getElementById('cashier-ticket-view');
    if (!screen) return;

    const isDineIn = order.orderType.type === 'dine_in';
    const itemsHtml = order.items.map(item => `
      <div style="display:flex; justify-content:space-between; align-items:center; padding:0.6rem 0; border-bottom:1px solid rgba(56,34,21,0.08); font-size:0.9rem;">
        <span style="color:var(--color-dark-brown);">${item.quantity}x ${item.name}</span>
        <span style="font-weight:700; color:var(--color-dark-brown);">${this.formatRupiah(item.subtotal)}</span>
      </div>
    `).join('');

    const content = document.getElementById('cashier-ticket-content');
    if (content) {
      content.innerHTML = `
        <div style="text-align:center; margin-bottom:2rem;">
          <div style="width:72px; height:72px; border-radius:50%; background:var(--color-beige-soft); border:3px solid var(--color-dark-brown); display:flex; align-items:center; justify-content:center; margin:0 auto 1rem auto;">
            <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" style="color:var(--color-dark-brown);">
              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
          </div>
          <h2 style="font-family:var(--font-heading); font-size:1.8rem; color:var(--color-dark-brown); margin-bottom:0.35rem;">Pesanan Dikonfirmasi!</h2>
          <p style="color:var(--color-charcoal-muted); font-size:0.95rem;">Tunjukkan tiket ini ke kasir untuk menyelesaikan pembayaran</p>
        </div>

        <div style="background:var(--color-dark-brown); color:#fff; border-radius:var(--radius-md); padding:1.5rem; margin-bottom:1.5rem; text-align:center;">
          <div style="font-size:0.78rem; text-transform:uppercase; letter-spacing:0.1em; opacity:0.7; margin-bottom:0.35rem;">Nomor Pesanan</div>
          <div style="font-size:2rem; font-weight:900; letter-spacing:0.05em; font-family:var(--font-heading);">${order.orderNumber}</div>
        </div>

        <div style="background:var(--color-cream); border-radius:var(--radius-md); padding:1.25rem; margin-bottom:1.25rem; border:1px solid var(--color-border);">
          <div style="display:flex; justify-content:space-between; margin-bottom:0.65rem;">
            <span style="font-size:0.82rem; color:var(--color-charcoal-muted);">Nama Pemesan</span>
            <strong style="font-size:0.9rem; color:var(--color-dark-brown);">${order.orderType.recipientName || store.user.name}</strong>
          </div>
          <div style="display:flex; justify-content:space-between; margin-bottom:0.65rem;">
            <span style="font-size:0.82rem; color:var(--color-charcoal-muted);">Cabang</span>
            <strong style="font-size:0.9rem; color:var(--color-dark-brown);">${order.orderType.storeName}</strong>
          </div>
          ${isDineIn ? `
          <div style="display:flex; justify-content:space-between;">
            <span style="font-size:0.82rem; color:var(--color-charcoal-muted);">Nomor Meja</span>
            <strong style="font-size:1.1rem; color:var(--color-warm-brown); font-weight:800;">${order.orderType.tableNumber || 'Table 12'}</strong>
          </div>
          ` : `
          <div style="display:flex; justify-content:space-between;">
            <span style="font-size:0.82rem; color:var(--color-charcoal-muted);">Mode</span>
            <strong style="font-size:0.9rem; color:var(--color-dark-brown);">Take Away</strong>
          </div>
          `}
        </div>

        <div style="border-radius:var(--radius-md); border:1px solid var(--color-border); overflow:hidden; margin-bottom:1.25rem;">
          <div style="background:var(--color-beige-soft); padding:0.85rem 1.25rem; border-bottom:1px solid var(--color-border);">
            <strong style="color:var(--color-dark-brown); font-size:0.9rem;">Rincian Pesanan</strong>
          </div>
          <div style="padding:0.5rem 1.25rem 0.25rem;">
            ${itemsHtml}
          </div>
          <div style="padding:1rem 1.25rem; border-top:2px solid var(--color-border);">
            <div style="display:flex; justify-content:space-between;">
              <strong style="font-size:1rem; color:var(--color-dark-brown);">Total yang Dibayarkan</strong>
              <strong style="font-size:1.15rem; color:var(--color-warm-brown);">${this.formatRupiah(order.totals.total)}</strong>
            </div>
            <div style="font-size:0.78rem; color:var(--color-charcoal-muted); margin-top:4px;">Sudah termasuk biaya layanan & pajak</div>
          </div>
        </div>

        <div style="background:#FFFBF6; border:1px dashed var(--color-warm-brown); border-radius:var(--radius-sm); padding:1rem 1.25rem; font-size:0.85rem; color:var(--color-charcoal-muted); margin-bottom:1.5rem;">
          Pergi ke kasir Brelune dan tunjukkan nomor pesanan <strong>${order.orderNumber}</strong> untuk menyelesaikan pembayaran tunai atau EDC.
        </div>

        <div style="display:flex; gap:0.75rem; flex-wrap:wrap;">
          <button class="btn btn-primary" style="flex:1;" onclick="window.location.hash='#my-orders'">
            Pantau Pesanan
          </button>
          <a href="#menu" class="btn btn-outline" style="flex:1; text-align:center;">
            Pesan Lagi
          </a>
        </div>
      `;
    }
  },

  // Halaman sukses pembayaran non-kasir
  renderOrderSuccessScreen(order) {
    // Update existing success screen fields
    const snEl = document.getElementById('success-order-number');
    const cnEl = document.getElementById('success-customer-name');
    const stEl = document.getElementById('success-store-name');
    const tpEl = document.getElementById('success-total-payment');
    const otEl = document.getElementById('success-order-type');
    const pmEl = document.getElementById('success-payment-method');

    if (snEl) snEl.textContent = order.orderNumber;
    if (cnEl) cnEl.textContent = order.orderType.recipientName || store.user.name;
    if (stEl) stEl.textContent = order.orderType.storeName;
    if (tpEl) tpEl.textContent = this.formatRupiah(order.totals.total);
    if (otEl) otEl.textContent = order.orderType.type === 'dine_in'
      ? `Dine In — ${order.orderType.tableNumber}`
      : `Take Away (${order.orderType.pickupTime})`;
    if (pmEl) pmEl.textContent = order.paymentMethod;
  },

  // --------------------------------------------------------------------------
  // My Orders Hub — Riwayat & Pesanan Aktif
  // --------------------------------------------------------------------------
  setMyOrdersFilter(filter) {
    store.setMyOrdersFilter(filter);
    document.querySelectorAll('.order-tab-pill').forEach(pill => {
      pill.classList.toggle('active', pill.dataset.filter === filter);
    });
    this.renderMyOrdersHub();
  },

  renderMyOrdersHub() {
    const container = document.getElementById('my-orders-list-container');
    if (!container) return;

    const orders = store.getFilteredOrders();

    if (orders.length === 0) {
      container.innerHTML = `
        <div style="text-align:center; padding:3rem 1rem; color:var(--color-charcoal-muted);">
          <div style="font-size:2.5rem; margin-bottom:1rem; opacity:0.4;">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" style="margin:0 auto; display:block; color:var(--color-beige);">
              <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"/>
            </svg>
          </div>
          <div style="font-weight:700; color:var(--color-dark-brown); margin-bottom:0.35rem;">Belum ada pesanan</div>
          <div style="font-size:0.88rem;">Mulai pesan menu favorit Anda!</div>
          <a href="#menu" class="btn btn-primary btn-sm" style="margin-top:1rem; display:inline-block;">Lihat Menu</a>
        </div>
      `;
      return;
    }

    const statusLabel = {
      confirmed: 'Sedang Disiapkan',
      preparing: 'Sedang Disiapkan',
      delivering: 'Pengantaran',
      ready: 'Pengantaran',
      completed: 'Selesai'
    };
    const statusColor = {
      confirmed: '#D97706',
      preparing: '#D97706',
      delivering: '#2563EB',
      ready: '#2563EB',
      completed: '#2B7A4B'
    };

    container.innerHTML = orders.map(order => {
      const isTakeAway = order.orderType.type === 'take_away';
      const itemsPreview = order.items.slice(0, 2).map(i => `${i.quantity}x ${i.name}`).join(', ');
      const moreItems = order.items.length > 2 ? ` +${order.items.length - 2} lainnya` : '';
      const statusText = statusLabel[order.status] || 'Sedang Disiapkan';
      const statusClr = statusColor[order.status] || '#D97706';
      const orderMode = isTakeAway
        ? `Take Away — ${order.orderType.storeName}`
        : `Dine In — ${order.orderType.tableNumber || 'Meja'}`;

      // Step indexing: 1: Sedang Disiapkan, 2: Pengantaran, 3: Selesai
      let currentStep = 1;
      let progressFill = '0%';
      let stepStatusMsg = 'Baker & barista sedang memanggang dan meracik pesanan Anda di dapur.';

      if (order.status === 'delivering' || order.status === 'ready') {
        currentStep = 2;
        progressFill = '50%';
        stepStatusMsg = 'Pesanan sudah selesai dikemas dan dalam perjalanan menuju alamat Anda.';
      } else if (order.status === 'completed') {
        currentStep = 3;
        progressFill = '100%';
        stepStatusMsg = 'Pesanan telah sampai dan selesai diterima. Selamat menikmati!';
      }

      return `
        <div style="background:var(--color-white); border-radius:var(--radius-md); border:1px solid var(--color-border); padding:1.25rem 1.5rem; margin-bottom:1.25rem; transition:box-shadow 0.2s; box-shadow:var(--shadow-xs);">
          <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:0.85rem; flex-wrap:wrap; gap:0.5rem;">
            <div>
              <div style="font-weight:800; font-size:1rem; color:var(--color-dark-brown);">${order.orderNumber}</div>
              <div style="font-size:0.78rem; color:var(--color-charcoal-muted); margin-top:2px;">${this.formatDate(order.createdAt)} · ${orderMode}</div>
            </div>
            <span style="background:${statusClr}18; color:${statusClr}; font-size:0.75rem; font-weight:700; padding:3px 10px; border-radius:var(--radius-full); border:1px solid ${statusClr}40; white-space:nowrap;">${statusText}</span>
          </div>

          <div style="font-size:0.88rem; color:var(--color-charcoal-muted); margin-bottom:1rem; line-height:1.5;">
            ${itemsPreview}${moreItems}
          </div>

          <div style="display:flex; justify-content:space-between; align-items:center; padding-top:0.85rem; border-top:1px solid var(--color-border-subtle);">
            <div>
              <div style="font-size:0.75rem; color:var(--color-charcoal-light);">Total Pembayaran</div>
              <div style="font-weight:800; font-size:1.1rem; color:var(--color-dark-brown);">${this.formatRupiah(order.totals.total)}</div>
            </div>
            <div style="display:flex; gap:0.5rem; align-items:center;">
              ${isTakeAway
                ? `<button class="btn btn-outline btn-sm" id="btn-track-${order.orderNumber}" onclick="UI.toggleInlineTracking('${order.orderNumber}')">Lacak Pesanan ▾</button>`
                : `<span style="font-size:0.75rem; color:var(--color-warm-brown); font-weight:600; padding:5px 10px; background:var(--color-cream); border-radius:var(--radius-sm); border:1px solid var(--color-border);">Dine In · ${order.orderType.tableNumber || 'Meja'}</span>`
              }
              <button class="btn btn-soft btn-sm" onclick="UI.showOrderDetailModal('${order.orderNumber}')">Rincian</button>
            </div>
          </div>

          <!-- INLINE TRACKING PANEL (Hanya Muncul Langsung di Bawah Pesanan Take Away) -->
          ${isTakeAway ? `
          <div id="inline-track-${order.orderNumber}" class="inline-tracking-wrapper" style="display:none;">
            <div class="inline-tracking-box">
              <div class="inline-tracking-header">
                <div>
                  <div style="font-size:0.8rem; font-weight:700; color:var(--color-dark-brown); text-transform:uppercase; letter-spacing:0.05em;">
                    Status Pengiriman Take Away
                  </div>
                  <div style="font-size:0.75rem; color:var(--color-charcoal-muted); margin-top:2px;">
                    Estimasi Tiba: <strong style="color:var(--color-warm-brown);">${order.orderType.pickupTime || '15-20 Menit'}</strong>
                  </div>
                </div>
                <div style="display:flex; gap:0.35rem;">
                  <button class="btn btn-soft btn-xs" style="font-size:0.7rem; padding:2px 8px;" onclick="UI.advanceOrderStep('${order.orderNumber}', 1)">1. Disiapkan</button>
                  <button class="btn btn-soft btn-xs" style="font-size:0.7rem; padding:2px 8px;" onclick="UI.advanceOrderStep('${order.orderNumber}', 2)">2. Pengantaran</button>
                  <button class="btn btn-soft btn-xs" style="font-size:0.7rem; padding:2px 8px;" onclick="UI.advanceOrderStep('${order.orderNumber}', 3)">3. Selesai</button>
                </div>
              </div>

              <!-- 3-Step Nodes -->
              <div class="inline-steps-container">
                <div class="inline-steps-line-bg">
                  <div class="inline-steps-line-fill" style="width:${progressFill};"></div>
                </div>

                <!-- Step 1: Sedang Disiapkan -->
                <div class="inline-step-node ${currentStep === 1 ? 'active' : (currentStep > 1 ? 'completed' : '')}">
                  <div class="node-circle">${currentStep > 1 ? '✓' : '1'}</div>
                  <div class="node-label">Sedang Disiapkan</div>
                  <div class="node-desc">Dapur & Oven Brelune</div>
                </div>

                <!-- Step 2: Pengantaran -->
                <div class="inline-step-node ${currentStep === 2 ? 'active' : (currentStep > 2 ? 'completed' : '')}">
                  <div class="node-circle">${currentStep > 2 ? '✓' : '2'}</div>
                  <div class="node-label">Pengantaran</div>
                  <div class="node-desc">Kurir Menuju Lokasi</div>
                </div>

                <!-- Step 3: Selesai -->
                <div class="inline-step-node ${currentStep === 3 ? 'completed active' : ''}">
                  <div class="node-circle">${currentStep === 3 ? '✓' : '3'}</div>
                  <div class="node-label">Selesai</div>
                  <div class="node-desc">Pesanan Diterima</div>
                </div>
              </div>

              <!-- Status Text Banner -->
              <div class="inline-tracking-status-badge">
                <div style="font-weight:700; color:var(--color-dark-brown); margin-bottom:2px;">Keterangan:</div>
                <div>${stepStatusMsg}</div>
              </div>

              <!-- Destination & Contact -->
              <div class="inline-tracking-dest-info">
                <div>
                  <span style="font-size:0.72rem; color:var(--color-charcoal-light); text-transform:uppercase;">Alamat Pengiriman:</span>
                  <div style="font-weight:600; color:var(--color-dark-brown); margin-top:2px;">${order.orderType.deliveryAddress || 'Ambil di Outlet ' + order.orderType.storeName}</div>
                </div>
                <div>
                  <span style="font-size:0.72rem; color:var(--color-charcoal-light); text-transform:uppercase;">Penerima:</span>
                  <div style="font-weight:600; color:var(--color-dark-brown); margin-top:2px;">${order.orderType.recipientName || store.user.name} · ${order.orderType.recipientPhone || store.user.phone}</div>
                </div>
              </div>

            </div>
          </div>
          ` : ''}

        </div>
      `;
    }).join('');
  },

  toggleInlineTracking(orderNumber) {
    const el = document.getElementById(`inline-track-${orderNumber}`);
    const btn = document.getElementById(`btn-track-${orderNumber}`);
    if (!el) return;

    const isHidden = el.style.display === 'none' || !el.style.display;
    el.style.display = isHidden ? 'block' : 'none';
    if (btn) {
      btn.innerHTML = isHidden ? 'Tutup Lacak ▴' : 'Lacak Pesanan ▾';
    }
  },

  advanceOrderStep(orderNumber, step) {
    const order = store.orders.find(o => o.orderNumber === orderNumber);
    if (!order) return;

    if (step === 1) {
      order.status = 'preparing';
    } else if (step === 2) {
      order.status = 'delivering';
    } else if (step === 3) {
      order.status = 'completed';
    }

    this.renderMyOrdersHub();
    // Reopen the tracking panel after re-render
    const el = document.getElementById(`inline-track-${orderNumber}`);
    const btn = document.getElementById(`btn-track-${orderNumber}`);
    if (el) el.style.display = 'block';
    if (btn) btn.innerHTML = 'Tutup Lacak ▴';
    
    const stepNames = { 1: 'Sedang Disiapkan', 2: 'Pengantaran', 3: 'Selesai' };
    this.showToast(`Status pesanan ${orderNumber} diubah ke: ${stepNames[step]}`, 'success');
  },

  showOrderDetailModal(orderNumber) {
    const order = store.orders.find(o => o.orderNumber === orderNumber);
    if (!order) return;
    const itemsText = order.items.map(i => `${i.quantity}x ${i.name} (${this.formatRupiah(i.subtotal)})`).join('\n');
    alert(`Rincian Pesanan: ${order.orderNumber}\nMode: ${order.orderType.type === 'dine_in' ? 'Dine In' : 'Take Away'}\nCabang: ${order.orderType.storeName}\n\nItem:\n${itemsText}\n\nTotal: ${this.formatRupiah(order.totals.total)}`);
  },

  // --------------------------------------------------------------------------
  // Account Settings Section
  // --------------------------------------------------------------------------
  renderAccountSettings() {
    this.renderAccountProfileForm();
    this.renderAccountAddresses();
    this.renderAccountVouchers();
  },

  switchAccountTab(tabName) {
    document.querySelectorAll('.account-nav-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.tab === tabName);
    });

    const panels = ['profile', 'addresses', 'vouchers', 'security'];
    panels.forEach(p => {
      const panelElem = document.getElementById(`account-panel-${p}`);
      if (panelElem) panelElem.style.display = (p === tabName) ? 'block' : 'none';
    });
  },

  renderAccountProfileForm() {
    const nameInput = document.getElementById('account-name-input');
    const emailInput = document.getElementById('account-email-input');
    const phoneInput = document.getElementById('account-phone-input');
    const tierName = document.getElementById('account-tier-name');
    const tierPoints = document.getElementById('account-tier-points');

    if (nameInput) nameInput.value = store.user.name;
    if (emailInput) emailInput.value = store.user.email;
    if (phoneInput) phoneInput.value = store.user.phone;
    if (tierName) tierName.textContent = store.user.tier;
    if (tierPoints) tierPoints.textContent = `${store.user.tierPoints} / ${store.user.nextTierTarget} Poin Artisan`;
  },

  handleSaveProfileSubmit(e) {
    e.preventDefault();
    const name = document.getElementById('account-name-input').value.trim();
    const email = document.getElementById('account-email-input').value.trim();
    const phone = document.getElementById('account-phone-input').value.trim();

    if (!name || !email || !phone) {
      this.showToast('Mohon isi semua data profil', 'error');
      return;
    }

    store.updateUserProfile(name, email, phone);
    this.showToast('Profil akun berhasil diperbarui!', 'success');
  },

  renderAccountAddresses() {
    const container = document.getElementById('account-saved-addresses-list');
    if (!container) return;

    if (!store.user.savedAddresses || store.user.savedAddresses.length === 0) {
      container.innerHTML = `<div style="color:var(--color-charcoal-muted); padding:1rem 0;">Belum ada alamat tersimpan.</div>`;
      return;
    }

    container.innerHTML = store.user.savedAddresses.map(addr => `
      <div class="address-item-card ${addr.isDefault ? 'default' : ''}">
        <div>
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.4rem;">
            <strong style="color:var(--color-dark-brown); font-size:1rem;">${addr.label}</strong>
            ${addr.isDefault ? `<span class="badge badge-gold" style="font-size:0.75rem;">Utama</span>` : ''}
          </div>
          <div style="font-size:0.85rem; font-weight:600; color:var(--color-charcoal);">${addr.recipientName} · ${addr.phone}</div>
          <div style="font-size:0.82rem; color:var(--color-charcoal-muted); margin-top:2px;">${addr.street}</div>
          <div style="font-size:0.82rem; color:var(--color-charcoal-muted);">${addr.city}</div>
          ${addr.notes ? `<div style="font-size:0.78rem; color:var(--color-warm-brown); margin-top:4px; font-style:italic;">Catatan: ${addr.notes}</div>` : ''}
        </div>
        <div style="display:flex; gap:0.5rem; margin-top:1rem; border-top:1px solid var(--color-border-subtle); padding-top:0.75rem;">
          ${!addr.isDefault ? `<button class="btn btn-outline btn-sm" onclick="store.setDefaultAddress('${addr.id}'); UI.showToast('Alamat utama diubah!', 'success');">Jadikan Utama</button>` : ''}
          <button class="btn btn-soft btn-sm" style="color:var(--color-danger);" onclick="store.deleteSavedAddress('${addr.id}'); UI.showToast('Alamat dihapus!', 'info');">Hapus</button>
        </div>
      </div>
    `).join('');
  },

  openAddAddressModal() {
    const modal = document.getElementById('add-address-modal');
    if (modal) modal.classList.add('show');
  },

  handleAddAddressSubmit(e) {
    e.preventDefault();
    const label = document.getElementById('new-addr-label').value.trim();
    const recipientName = document.getElementById('new-addr-name').value.trim();
    const phone = document.getElementById('new-addr-phone').value.trim();
    const street = document.getElementById('new-addr-street').value.trim();
    const city = document.getElementById('new-addr-city').value.trim();
    const notes = document.getElementById('new-addr-notes').value.trim();
    const isDefault = document.getElementById('new-addr-default-chk').checked;

    if (!label || !recipientName || !street) {
      this.showToast('Mohon lengkapi label dan alamat', 'error');
      return;
    }

    store.addSavedAddress({ label, recipientName, phone, street, city, notes, isDefault });
    document.getElementById('add-address-modal').classList.remove('show');
    this.showToast('Alamat baru berhasil ditambahkan!', 'success');
  },

  renderAccountVouchers() {
    const container = document.getElementById('account-vouchers-list');
    if (!container) return;

    if (!store.isLoggedIn()) {
      container.innerHTML = `<div style="color:var(--color-charcoal-muted); padding:1rem 0;">Login untuk melihat voucher Anda.</div>`;
      return;
    }

    const promos = Object.values(BRELUNE_DATA.promos);
    container.innerHTML = promos.map(p => `
      <div class="voucher-card" style="margin-bottom:1rem;">
        <div class="voucher-left">
          <div class="voucher-icon-circle">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M20 12v10H4V12M22 7H2v5h20V7zM12 22V7M12 7H7.5a2.5 2.5 0 010-5C11 2 12 7 12 7zM12 7h4.5a2.5 2.5 0 000-5C13 2 12 7 12 7z"/>
            </svg>
          </div>
          <div>
            <div class="voucher-title">${p.title}</div>
            <div class="voucher-subtitle">${p.description}</div>
          </div>
        </div>
        <button class="voucher-code-btn" onclick="UI.applyVoucherFromWallet('${p.code}')">
          <span>${p.code}</span> Gunakan
        </button>
      </div>
    `).join('');
  },

  applyVoucherFromWallet(code) {
    if (!store.isLoggedIn()) {
      this.showToast('Silakan login untuk menggunakan voucher', 'info');
      return;
    }
    const res = store.applyPromo(code);
    this.showToast(res.message, res.success ? 'success' : 'error');
  },

  handleChangePasswordSubmit(e) {
    e.preventDefault();
    const oldPass = document.getElementById('sec-old-pass').value;
    const newPass = document.getElementById('sec-new-pass').value;
    const confirmPass = document.getElementById('sec-confirm-pass').value;

    if (!oldPass) {
      this.showToast('Masukkan password saat ini', 'error');
      return;
    }

    if (newPass !== confirmPass) {
      this.showToast('Konfirmasi password baru tidak cocok', 'error');
      return;
    }

    if (newPass.length < 6) {
      this.showToast('Password baru minimal 6 karakter', 'error');
      return;
    }

    this.showToast('Password akun Anda berhasil diperbarui!', 'success');
    e.target.reset();
  },

  // --------------------------------------------------------------------------
  // OTP Registration Wizard
  // --------------------------------------------------------------------------
  openAuthModal(defaultTab = 'login') {
    const modal = document.getElementById('auth-modal');
    if (modal) modal.classList.add('show');
    this.switchAuthTab(defaultTab);
  },

  closeAuthModal() {
    const modal = document.getElementById('auth-modal');
    if (modal) modal.classList.remove('show');
  },

  switchAuthTab(tab) {
    const loginTab = document.getElementById('tab-login-btn');
    const regTab = document.getElementById('tab-register-btn');
    const loginForm = document.getElementById('auth-login-form');
    const regForm = document.getElementById('auth-register-form');

    if (tab === 'login') {
      loginTab.classList.add('active');
      regTab.classList.remove('active');
      loginForm.classList.add('active');
      regForm.classList.remove('active');
    } else {
      regTab.classList.add('active');
      loginTab.classList.remove('active');
      regForm.classList.add('active');
      loginForm.classList.remove('active');
      this.setOtpStep(1);
    }
  },

  setOtpStep(step) {
    store.otpState.step = step;

    for (let s = 1; s <= 3; s++) {
      const bubble = document.getElementById(`otp-bubble-${s}`);
      const view = document.getElementById(`reg-step-${s}-view`);
      if (bubble) bubble.classList.toggle('active', s <= step);
      if (view) view.style.display = (s === step) ? 'flex' : 'none';
    }
  },

  handleRegisterStep1(e) {
    if (e) e.preventDefault();
    const name = document.getElementById('reg-name-input').value.trim();
    const email = document.getElementById('reg-email-input').value.trim();
    const phone = document.getElementById('reg-phone-input').value.trim();

    if (!name || !email) {
      this.showToast('Mohon lengkapi nama dan email Anda.', 'error');
      return;
    }

    store.startOtpRegistration({ name, email, phone });
    document.getElementById('otp-email-target').textContent = email;
    document.getElementById('simulated-otp-code-notice').innerHTML = `<strong>Kode OTP dikirim ke ${email}:</strong> <strong>${store.otpState.generatedOtp}</strong>`;

    this.setOtpStep(2);
    this.showToast(`Kode OTP 6-digit dikirim ke ${email}`, 'info');
  },

  handleVerifyOtpSubmit(e) {
    e.preventDefault();
    const inputs = document.querySelectorAll('.otp-digit-input');
    const otpCode = Array.from(inputs).map(i => i.value).join('');

    if (otpCode.length < 6) {
      this.showToast('Mohon masukkan 6 digit kode OTP secara lengkap.', 'error');
      return;
    }

    const isValid = store.verifyOtp(otpCode);

    if (isValid) {
      this.showToast('Kode OTP valid! Silakan tentukan password baru.', 'success');
      this.setOtpStep(3);
    } else {
      this.showToast('Kode OTP salah! Pendaftaran tidak dapat dilanjutkan.', 'error');
      const step2View = document.getElementById('reg-step-2-view');
      step2View.classList.remove('shake');
      void step2View.offsetWidth;
      step2View.classList.add('shake');
    }
  },

  handleRegisterStep3(e) {
    e.preventDefault();
    const pass = document.getElementById('reg-pass-input').value;
    const confirmPass = document.getElementById('reg-confirm-pass-input').value;

    if (pass !== confirmPass) {
      this.showToast('Konfirmasi password tidak sesuai.', 'error');
      return;
    }

    if (pass.length < 6) {
      this.showToast('Password minimal 6 karakter.', 'error');
      return;
    }

    store.completeRegistration(pass);
    this.closeAuthModal();
    this.showToast(`Selamat datang, ${store.user.name}! Akun berhasil dibuat.`, 'success');
  },

  handleDemoLogin() {
    store.login();
    this.closeAuthModal();
    this.showToast('Berhasil masuk sebagai Danaytha Ayuningtyas', 'success');
  },

  handleLoginSubmit(e) {
    e.preventDefault();
    store.login();
    this.closeAuthModal();
    this.showToast('Berhasil masuk!', 'success');
  },

  handleLogout() {
    store.logout();
    this.toggleProfileDropdown(false);
    this.showToast('Anda telah keluar dari akun.', 'info');
  },

  // --------------------------------------------------------------------------
  // Search Overlay
  // --------------------------------------------------------------------------
  openSearchOverlay() {
    const overlay = document.getElementById('search-modal-overlay');
    if (overlay) {
      overlay.classList.add('show');
      const input = document.getElementById('search-live-input');
      if (input) {
        input.value = '';
        input.focus();
      }
      this.renderSearchResults('');
    }
  },

  closeSearchOverlay() {
    const overlay = document.getElementById('search-modal-overlay');
    if (overlay) overlay.classList.remove('show');
  },

  renderSearchResults(query) {
    const container = document.getElementById('search-results-list');
    if (!container) return;

    let results = BRELUNE_DATA.products;
    if (query && query.trim() !== '') {
      const q = query.toLowerCase().trim();
      results = results.filter(p => p.name.toLowerCase().includes(q) || p.description.toLowerCase().includes(q));
    }

    container.innerHTML = results.slice(0, 6).map(p => `
      <div class="search-item-row" onclick="UI.closeSearchOverlay(); UI.openProductDetail('${p.id}')">
        <img src="${p.image}" alt="${p.name}" class="search-item-thumb" />
        <div style="flex-grow:1;">
          <div style="font-weight:700; color:var(--color-dark-brown); font-size:0.95rem;">${p.name}</div>
          <div style="font-size:0.8rem; color:var(--color-charcoal-muted);">${p.category.toUpperCase()} · ${this.formatRupiah(p.price)}</div>
        </div>
        <span style="font-size:0.85rem; color:var(--color-warm-brown); font-weight:700;">Lihat</span>
      </div>
    `).join('');
  },

  showToast(message, type = 'info') {
    const container = document.getElementById('toast-container');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = `toast-message ${type}`;

    let icon = '·';
    if (type === 'success') icon = '✓';
    if (type === 'error') icon = '✕';

    toast.innerHTML = `<span style="font-weight:bold;">${icon}</span><span>${message}</span>`;
    container.appendChild(toast);

    setTimeout(() => {
      toast.style.animation = 'toastSlideOut 0.3s ease-in forwards';
      setTimeout(() => toast.remove(), 300);
    }, 3800);
  },

  bindGlobalShortcuts() {
    window.addEventListener('keydown', (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        this.openSearchOverlay();
      }
      if (e.key === 'Escape') {
        this.closeProductModal();
        this.closeCartDrawer();
        this.closeSearchOverlay();
        this.toggleProfileDropdown(false);
        this.toggleNotificationsDropdown(false);
      }
    });

    document.addEventListener('click', (e) => {
      const userMenu = document.getElementById('user-menu-wrapper');
      if (userMenu && !userMenu.contains(e.target)) {
        this.toggleProfileDropdown(false);
      }
      const notifMenu = document.getElementById('header-notif-btn');
      const notifDropdown = document.getElementById('notifications-dropdown-menu');
      if (notifMenu && notifDropdown && !notifMenu.contains(e.target) && !notifDropdown.contains(e.target)) {
        this.toggleNotificationsDropdown(false);
      }
    });
  }
};
