/* ==========================================================================
   Brelune Bakery & Coffee - State Management (Store)
   ========================================================================== */

class BreluneStore {
  constructor() {
    this.cart = [];
    this.appliedPromo = null;
    this.favorites = []; // array of productId strings
    this.orderType = {
      type: 'dine_in', // 'dine_in' | 'take_away'
      storeId: 'store_cp',
      storeName: 'Brelune Central Park',
      tableNumber: 'Table 12',
      pickupTime: 'ASAP (15-20 min)',
      deliveryAddress: 'Jl. Letjen S. Parman No. 28, Jakarta Barat',
      recipientName: 'Danaytha Ayuningtyas',
      recipientPhone: '+62 812-3456-7890',
      recipientEmail: 'danaytha@email.com',
      deliveryNotes: ''
    };
    this.paymentMethod = 'qris'; // 'cashier' | 'qris' | 'gopay' | 'shopeepay' | 'debit' | 'credit'
    this.orderNotes = '';
    this.user = { ...BRELUNE_DATA.demoUser };
    this.orders = [];
    this.activeOrder = null;
    this.listeners = [];
    this.myOrdersFilter = 'all'; // 'all' | 'active' | 'completed'

    // OTP Registration Workflow State
    this.otpState = {
      step: 1, // 1: input info, 2: verify otp, 3: create password
      pendingUser: null,
      generatedOtp: '842109',
      isVerified: false
    };

    this.initMockOrders();
  }

  initMockOrders() {
    // Initial active mock order (Take Away)
    this.activeOrder = {
      orderNumber: '#BRL-20260820-00125',
      createdAt: new Date(Date.now() - 5 * 60 * 1000).toISOString(),
      orderType: {
        type: 'take_away',
        storeId: 'store_cp',
        storeName: 'Brelune Central Park',
        pickupTime: '15–20 Menit',
        deliveryAddress: 'Jl. Senopati Raya No. 18, Kebayoran Baru, Jakarta Selatan',
        recipientName: 'Danaytha Ayuningtyas',
        recipientPhone: '+62 812-3456-7890'
      },
      items: [
        {
          productId: 'prod_butter_croissant',
          name: 'Butter Croissant',
          price: 25000,
          quantity: 2,
          image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=800&q=80',
          options: { warming: 'Warmed' },
          subtotal: 50000
        },
        {
          productId: 'prod_iced_latte',
          name: 'Iced Latte',
          price: 32000,
          quantity: 1,
          image: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=800&q=80',
          options: { size: 'Regular', milk: 'Fresh Milk', sweetness: 'Normal Sugar' },
          subtotal: 32000
        }
      ],
      paymentMethod: 'QR Code (QRIS)',
      paymentMethodId: 'qris',
      totals: {
        subtotal: 82000,
        discount: 10000,
        service: 3600,
        tax: 7560,
        total: 83160
      },
      status: 'preparing', // 'confirmed' | 'preparing' | 'ready' | 'completed'
      stageProgress: 2
    };

    this.orders.push(this.activeOrder);

    // Completed past order #1
    this.orders.push({
      orderNumber: '#BRL-20260818-00089',
      createdAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
      orderType: {
        type: 'take_away',
        storeId: 'store_senopati',
        storeName: 'Brelune Senopati',
        pickupTime: '02:30 PM',
        deliveryAddress: 'Jl. Senopati Raya No. 18, Lantai 3',
        recipientName: 'Danaytha Ayuningtyas',
        recipientPhone: '+62 812-3456-7890'
      },
      items: [
        {
          productId: 'prod_almond_croissant',
          name: 'Almond Croissant',
          price: 32000,
          quantity: 2,
          image: 'https://images.unsplash.com/photo-1530610476181-d83430b64dcd?auto=format&fit=crop&w=800&q=80',
          options: { warming: 'Warmed' },
          subtotal: 64000
        },
        {
          productId: 'prod_cinnamon_roll',
          name: 'Cinnamon Roll',
          price: 36000,
          quantity: 1,
          image: 'https://images.unsplash.com/photo-1509365465985-25d11c17e812?auto=format&fit=crop&w=800&q=80',
          options: {},
          subtotal: 36000
        }
      ],
      paymentMethod: 'Credit Card (Visa)',
      paymentMethodId: 'credit',
      totals: { subtotal: 100000, discount: 0, service: 5000, tax: 10500, total: 115500 },
      status: 'completed',
      stageProgress: 4
    });

    // Completed past order #2
    this.orders.push({
      orderNumber: '#BRL-20260815-00071',
      createdAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(),
      orderType: {
        type: 'dine_in',
        storeId: 'store_cp',
        storeName: 'Brelune Central Park',
        tableNumber: 'Table 8'
      },
      items: [
        {
          productId: 'prod_butter_croissant',
          name: 'Butter Croissant',
          price: 25000,
          quantity: 1,
          image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=800&q=80',
          options: { warming: 'Warmed' },
          subtotal: 25000
        },
        {
          productId: 'prod_iced_latte',
          name: 'Iced Latte',
          price: 32000,
          quantity: 2,
          image: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=800&q=80',
          options: { size: 'Large', sweetness: 'Less Sugar' },
          subtotal: 64000
        }
      ],
      paymentMethod: 'QR Code (QRIS)',
      paymentMethodId: 'qris',
      totals: { subtotal: 89000, discount: 0, service: 4450, tax: 9345, total: 102795 },
      status: 'completed',
      stageProgress: 4
    });
  }

  // Subscribe to state updates
  subscribe(callback) {
    this.listeners.push(callback);
  }

  notify(event, payload) {
    this.listeners.forEach(cb => cb(event, payload));
  }

  // Cart Operations
  addToCart(product, quantity = 1, selectedOptions = {}, notes = '') {
    const optionExtra = this.calculateOptionExtra(selectedOptions);
    const unitPrice = product.price + optionExtra;
    const itemKey = this.generateItemKey(product.id, selectedOptions);

    const existingIndex = this.cart.findIndex(i => i.itemKey === itemKey);

    if (existingIndex > -1) {
      this.cart[existingIndex].quantity += quantity;
      this.cart[existingIndex].subtotal = this.cart[existingIndex].quantity * this.cart[existingIndex].unitPrice;
    } else {
      this.cart.push({
        itemKey,
        productId: product.id,
        name: product.name,
        category: product.category,
        isFood: product.isFood,
        basePrice: product.price,
        unitPrice: unitPrice,
        price: unitPrice,
        quantity: quantity,
        image: product.image,
        options: selectedOptions,
        notes: notes,
        subtotal: unitPrice * quantity
      });
    }

    this.notify('CART_UPDATED', this.getCartTotals());
  }

  updateCartItemQty(itemKey, delta) {
    const index = this.cart.findIndex(i => i.itemKey === itemKey);
    if (index === -1) return;

    this.cart[index].quantity += delta;
    if (this.cart[index].quantity <= 0) {
      this.cart.splice(index, 1);
    } else {
      this.cart[index].subtotal = this.cart[index].quantity * this.cart[index].unitPrice;
    }

    this.notify('CART_UPDATED', this.getCartTotals());
  }

  updateCartItemQtyByIndex(index, delta) {
    if (index < 0 || index >= this.cart.length) return;
    this.cart[index].quantity += delta;
    if (this.cart[index].quantity <= 0) {
      this.cart.splice(index, 1);
    } else {
      this.cart[index].subtotal = this.cart[index].quantity * this.cart[index].unitPrice;
    }
    this.notify('CART_UPDATED', this.getCartTotals());
  }

  removeFromCart(itemKey) {
    this.cart = this.cart.filter(i => i.itemKey !== itemKey);
    this.notify('CART_UPDATED', this.getCartTotals());
  }

  removeFromCartByIndex(index) {
    if (index < 0 || index >= this.cart.length) return;
    this.cart.splice(index, 1);
    this.notify('CART_UPDATED', this.getCartTotals());
  }

  clearCart() {
    this.cart = [];
    this.appliedPromo = null;
    this.notify('CART_UPDATED', this.getCartTotals());
  }

  getCartCount() {
    return this.cart.reduce((acc, item) => acc + item.quantity, 0);
  }

  getCartTotals() {
    const subtotal = this.cart.reduce((acc, item) => acc + item.subtotal, 0);
    let discount = 0;

    if (this.appliedPromo) {
      if (this.appliedPromo.type === 'all') {
        discount = Math.round(subtotal * (this.appliedPromo.discountPercentage / 100));
      } else if (this.appliedPromo.type === 'food_dine_in') {
        if (this.orderType.type === 'dine_in') {
          const foodSubtotal = this.cart
            .filter(item => item.isFood)
            .reduce((acc, item) => acc + item.subtotal, 0);
          discount = Math.round(foodSubtotal * (this.appliedPromo.discountPercentage / 100));
        }
      }
    }

    const discountedSubtotal = Math.max(0, subtotal - discount);
    const serviceCharge = Math.round(discountedSubtotal * 0.05);
    const taxPB1 = Math.round((discountedSubtotal + serviceCharge) * 0.10);
    const total = discountedSubtotal + serviceCharge + taxPB1;

    return {
      subtotal,
      discount,
      discountedSubtotal,
      serviceCharge,
      taxPB1,
      total,
      appliedPromo: this.appliedPromo,
      itemsCount: this.getCartCount()
    };
  }

  applyPromo(promoCode) {
    const code = promoCode.trim().toUpperCase();
    const promo = BRELUNE_DATA.promos[code];

    if (!promo) {
      return { success: false, message: 'Kode promo tidak valid atau telah kedaluwarsa.' };
    }

    if (promo.type === 'food_dine_in' && this.orderType.type !== 'dine_in') {
      return {
        success: false,
        message: 'Kode promo DINEIN15 hanya berlaku untuk pesanan Dine In (Makan di Tempat).'
      };
    }

    this.appliedPromo = promo;
    this.notify('CART_UPDATED', this.getCartTotals());
    return {
      success: true,
      message: `Voucher ${promo.title} berhasil digunakan!`,
      promo
    };
  }

  removePromo() {
    this.appliedPromo = null;
    this.notify('CART_UPDATED', this.getCartTotals());
  }

  setOrderType(orderTypeData) {
    this.orderType = { ...this.orderType, ...orderTypeData };
    
    // If switched to take_away and cashier is selected, reset payment method
    if (this.orderType.type === 'take_away' && this.paymentMethod === 'cashier') {
      this.paymentMethod = 'qris';
    }

    this.notify('ORDER_TYPE_CHANGED', this.orderType);
    this.notify('CART_UPDATED', this.getCartTotals());
  }

  setPaymentMethod(methodId) {
    if (methodId === 'cashier' && this.orderType.type === 'take_away') {
      return false; // Cashier not allowed for take_away
    }
    this.paymentMethod = methodId;
    this.notify('PAYMENT_METHOD_CHANGED', this.paymentMethod);
    return true;
  }

  setOrderNotes(notes) {
    this.orderNotes = notes;
    this.notify('NOTES_UPDATED', this.orderNotes);
  }

  // Account & Profile Management
  updateUserProfile(name, email, phone) {
    this.user.name = name;
    this.user.email = email;
    this.user.phone = phone;
    this.user.avatar = name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase();
    
    // Also sync with order recipient
    this.orderType.recipientName = name;
    this.orderType.recipientEmail = email;
    this.orderType.recipientPhone = phone;

    this.notify('AUTH_CHANGED', this.user);
  }

  addSavedAddress(newAddress) {
    const id = 'addr_' + Date.now();
    const addr = { id, ...newAddress };
    if (addr.isDefault) {
      this.user.savedAddresses.forEach(a => a.isDefault = false);
    }
    this.user.savedAddresses.push(addr);
    this.notify('ADDRESSES_UPDATED', this.user.savedAddresses);
  }

  deleteSavedAddress(addressId) {
    this.user.savedAddresses = this.user.savedAddresses.filter(a => a.id !== addressId);
    this.notify('ADDRESSES_UPDATED', this.user.savedAddresses);
  }

  setDefaultAddress(addressId) {
    this.user.savedAddresses.forEach(a => {
      a.isDefault = (a.id === addressId);
    });
    const defaultAddr = this.user.savedAddresses.find(a => a.isDefault);
    if (defaultAddr) {
      this.orderType.deliveryAddress = `${defaultAddr.street}, ${defaultAddr.city}`;
    }
    this.notify('ADDRESSES_UPDATED', this.user.savedAddresses);
  }

  setMyOrdersFilter(filter) {
    this.myOrdersFilter = filter;
    this.notify('ORDERS_FILTER_CHANGED', this.myOrdersFilter);
  }

  getFilteredOrders() {
    if (this.myOrdersFilter === 'active') {
      return this.orders.filter(o => o.status !== 'completed');
    } else if (this.myOrdersFilter === 'completed') {
      return this.orders.filter(o => o.status === 'completed');
    }
    return this.orders;
  }

  // OTP Registration
  startOtpRegistration(userData) {
    this.otpState.step = 2;
    this.otpState.pendingUser = userData;
    this.otpState.generatedOtp = '842109';
    this.otpState.isVerified = false;
    this.notify('OTP_SENT', { email: userData.email, otp: this.otpState.generatedOtp });
  }

  verifyOtp(inputCode) {
    if (inputCode.trim() === this.otpState.generatedOtp) {
      this.otpState.isVerified = true;
      this.otpState.step = 3;
      this.notify('OTP_VERIFIED', true);
      return true;
    }
    return false;
  }

  completeRegistration(password) {
    if (!this.otpState.isVerified || !this.otpState.pendingUser) return false;

    this.user = {
      id: 'user_' + Date.now(),
      name: this.otpState.pendingUser.name,
      email: this.otpState.pendingUser.email,
      phone: this.otpState.pendingUser.phone,
      tier: 'Silver Member',
      tierPoints: 100,
      nextTierTarget: 500,
      avatar: this.otpState.pendingUser.name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase(),
      isLoggedIn: true,
      savedAddresses: [
        {
          id: 'addr_reg_1',
          label: 'Alamat Utama',
          recipientName: this.otpState.pendingUser.name,
          phone: this.otpState.pendingUser.phone,
          street: 'Alamat Baru Terdaftar',
          city: 'Jakarta',
          notes: '',
          isDefault: true
        }
      ]
    };

    this.appliedPromo = BRELUNE_DATA.promos['NEWBRELUNE10'];
    this.otpState = { step: 1, pendingUser: null, generatedOtp: '842109', isVerified: false };
    this.notify('AUTH_CHANGED', this.user);
    return true;
  }

  // Favorites
  toggleFavorite(productId) {
    const idx = this.favorites.indexOf(productId);
    if (idx > -1) {
      this.favorites.splice(idx, 1);
    } else {
      this.favorites.push(productId);
    }
    this.notify('FAVORITES_CHANGED', this.favorites);
  }

  isFavorite(productId) {
    return this.favorites.includes(productId);
  }

  getFavoriteProducts() {
    return BRELUNE_DATA.products.filter(p => this.favorites.includes(p.id));
  }

  login(email, password) {
    this.user = { ...BRELUNE_DATA.demoUser, isLoggedIn: true };
    this.notify('AUTH_CHANGED', this.user);
  }

  logout() {
    this.user = { isLoggedIn: false, name: 'Guest', email: '', avatar: 'G', savedAddresses: [] };
    this.favorites = [];
    this.notify('AUTH_CHANGED', this.user);
    this.notify('FAVORITES_CHANGED', this.favorites);
  }

  isLoggedIn() {
    return this.user && this.user.isLoggedIn;
  }

  createOrder() {
    const totals = this.getCartTotals();
    const orderNumber = `#BRL-${new Date().toISOString().slice(0, 10).replace(/-/g, '')}-${String(Math.floor(Math.random() * 900) + 100)}`;

    const paymentMethodObj = BRELUNE_DATA.paymentMethods.find(p => p.id === this.paymentMethod);

    const newOrder = {
      orderNumber,
      createdAt: new Date().toISOString(),
      orderType: { ...this.orderType },
      items: [...this.cart],
      notes: this.orderNotes,
      paymentMethod: paymentMethodObj ? paymentMethodObj.name : 'QRIS',
      paymentMethodId: this.paymentMethod,
      totals: { ...totals },
      status: 'confirmed',
      stageProgress: 1
    };

    this.orders.unshift(newOrder);
    this.activeOrder = newOrder;
    this.clearCart();

    this.notify('ORDER_CREATED', newOrder);
    return newOrder;
  }

  getActiveOrder() {
    return this.activeOrder || (this.orders.length > 0 ? this.orders[0] : null);
  }

  updateOrderStatus(orderNumber, status, stageProgress) {
    const order = this.orders.find(o => o.orderNumber === orderNumber);
    if (order) {
      order.status = status;
      order.stageProgress = stageProgress;
      this.notify('ORDER_STATUS_CHANGED', order);
    }
  }

  calculateOptionExtra(selectedOptions) {
    let extra = 0;
    if (selectedOptions.size && selectedOptions.size.extraPrice) extra += selectedOptions.size.extraPrice;
    if (selectedOptions.milk && selectedOptions.milk.extraPrice) extra += selectedOptions.milk.extraPrice;
    return extra;
  }

  generateItemKey(productId, options) {
    return `${productId}_${JSON.stringify(options)}`;
  }
}

// Global Store Singleton
window.store = new BreluneStore();
