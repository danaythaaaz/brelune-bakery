/* ==========================================================================
   Brelune Bakery & Coffee - Live Order Tracking & Order History Manager
   No-emoji, clean artisan aesthetic
   ========================================================================== */

const OrderTracker = {
  timerInterval: null,
  remainingSeconds: 900,

  init() {
    store.subscribe((event, payload) => {
      if (event === 'ORDER_CREATED') {
        OrderTracker.startTracking(payload);
      } else if (event === 'ORDER_STATUS_CHANGED') {
        OrderTracker.renderTrackingView();
        if (typeof UI !== 'undefined' && UI.renderMyOrdersHub) {
          UI.renderMyOrdersHub();
        }
      }
    });
  },

  startTracking(order) {
    OrderTracker.remainingSeconds = 900;
    if (OrderTracker.timerInterval) clearInterval(OrderTracker.timerInterval);

    OrderTracker.timerInterval = setInterval(() => {
      if (OrderTracker.remainingSeconds > 0) {
        OrderTracker.remainingSeconds--;
        OrderTracker.updateTimerDisplay();

        if (OrderTracker.remainingSeconds === 750 && order.stageProgress === 1) {
          store.updateOrderStatus(order.orderNumber, 'preparing', 2);
          UI.showToast('Update Dapur: Pesanan bakery & kopi Anda sedang dipanggang dan diseduh', 'info');
        } else if (OrderTracker.remainingSeconds === 400 && order.stageProgress === 2) {
          store.updateOrderStatus(order.orderNumber, 'ready', 3);
          UI.showToast('Update Pesanan: Pesanan Anda sudah siap diambil / diantar', 'success');
        }
      } else {
        clearInterval(OrderTracker.timerInterval);
        store.updateOrderStatus(order.orderNumber, 'completed', 4);
      }
    }, 1000);

    OrderTracker.renderTrackingView();
  },

  updateTimerDisplay() {
    const timerElem = document.getElementById('tracking-countdown-timer');
    if (!timerElem) return;

    const mins = Math.floor(OrderTracker.remainingSeconds / 60);
    const secs = OrderTracker.remainingSeconds % 60;
    timerElem.textContent = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  },

  renderTrackingView() {
    const order = store.getActiveOrder();
    const trackingSection = document.getElementById('order-tracking-page-view') || document.getElementById('tracking-page-view');
    if (!order || !trackingSection) return;

    // Order Info Header
    const orderNumEl = document.getElementById('track-order-number');
    const orderTimeEl = document.getElementById('track-order-time');
    const storeNameEl = document.getElementById('track-store-name');

    if (orderNumEl) orderNumEl.textContent = order.orderNumber;
    if (orderTimeEl) orderTimeEl.textContent = new Date(order.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    if (storeNameEl) storeNameEl.textContent = order.orderType.storeName;

    // Contextual Banner
    const bannerTitle = document.getElementById('track-banner-title');
    const bannerSub = document.getElementById('track-banner-sub');
    const bannerIcon = document.getElementById('track-banner-icon');

    const isDineIn = order.orderType.type === 'dine_in';
    const locationInfo = isDineIn ? (order.orderType.tableNumber || 'Meja') : (order.orderType.pickupTime || 'Pengiriman');

    if (order.stageProgress === 1) {
      if (bannerIcon) bannerIcon.innerHTML = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>`;
      if (bannerTitle) bannerTitle.textContent = isDineIn ? `Pesanan Diterima — ${locationInfo}` : 'Pesanan Take Away Dikonfirmasi';
      if (bannerSub) bannerSub.textContent = isDineIn ? `Pesanan Anda akan diantar langsung ke ${locationInfo}. Silakan duduk santai.` : `Pesanan sedang dipersiapkan untuk penjemputan / pengiriman.`;
    } else if (order.stageProgress === 2) {
      if (bannerIcon) bannerIcon.innerHTML = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>`;
      if (bannerTitle) bannerTitle.textContent = 'Sedang Dipanggang & Diseduh';
      if (bannerSub) bannerSub.textContent = 'Barista & baker Brelune sedang menyiapkan pesanan Anda dengan bahan baku artisan terbaik.';
    } else if (order.stageProgress === 3) {
      if (bannerIcon) bannerIcon.innerHTML = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 13l4 4L19 7"/></svg>`;
      if (bannerTitle) bannerTitle.textContent = isDineIn ? `Pesanan Diantar ke ${locationInfo}` : 'Pesanan Siap Diambil';
      if (bannerSub) bannerSub.textContent = isDineIn ? `Staf kami sedang mengantarkan pesanan ke ${locationInfo}.` : `Pesanan Anda sudah siap di konter ${order.orderType.storeName}.`;
    } else {
      if (bannerIcon) bannerIcon.innerHTML = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>`;
      if (bannerTitle) bannerTitle.textContent = 'Pesanan Selesai';
      if (bannerSub) bannerSub.textContent = 'Terima kasih telah menikmati sajian Brelune Bakery & Coffee.';
    }

    // 4 Timeline Nodes
    const progressFill = document.getElementById('track-progress-fill');
    const fillPercentages = ['0%', '33%', '66%', '100%'];
    if (progressFill) progressFill.style.width = fillPercentages[order.stageProgress - 1];

    for (let step = 1; step <= 4; step++) {
      const stepElem = document.getElementById(`track-step-${step}`);
      if (!stepElem) continue;

      stepElem.classList.remove('completed', 'active');
      if (step < order.stageProgress) {
        stepElem.classList.add('completed');
      } else if (step === order.stageProgress) {
        stepElem.classList.add('active');
      }
    }

    // Items list recap in tracking
    const itemsList = document.getElementById('track-items-summary-list');
    if (itemsList) {
      itemsList.innerHTML = order.items.map(item => `
        <div style="display:flex; justify-content:space-between; align-items:center; padding:0.5rem 0; font-size:0.9rem;">
          <span><strong>${item.quantity}x</strong> ${item.name}</span>
          <span style="font-weight:700; color:var(--color-dark-brown);">${UI.formatRupiah(item.price * item.quantity)}</span>
        </div>
      `).join('');
    }

    // Total & Payment method in tracking
    const totalElem = document.getElementById('track-total-payment');
    if (totalElem) totalElem.textContent = UI.formatRupiah(order.totals.total);

    const paymentInfoElem = document.getElementById('track-payment-method-info');
    if (paymentInfoElem) {
      if (order.paymentMethodId === 'cashier') {
        paymentInfoElem.innerHTML = `
          <div style="background:var(--color-warning-bg); border:1px solid #FCD34D; color:var(--color-warning); padding:0.75rem 1rem; border-radius:8px; font-size:0.85rem; margin-top:1rem;">
            <strong>Metode: Bayar di Kasir (Dine In)</strong><br/>
            Silakan menuju kasir ${order.orderType.storeName} dan tunjukkan nomor pesanan <strong>${order.orderNumber}</strong>.
          </div>
        `;
      } else {
        paymentInfoElem.innerHTML = `
          <div style="background:var(--color-success-bg); border:1px solid #A7F3D0; color:var(--color-success); padding:0.75rem 1rem; border-radius:8px; font-size:0.85rem; margin-top:1rem;">
            ✓ <strong>Pembayaran Lunas via ${order.paymentMethod}</strong>
          </div>
        `;
      }
    }
  },

  advanceOrderStage(stage) {
    const order = store.getActiveOrder();
    if (!order) return;

    const stages = ['confirmed', 'preparing', 'ready', 'completed'];
    store.updateOrderStatus(order.orderNumber, stages[stage - 1], stage);
    UI.showToast(`Status diperbarui: ${stages[stage - 1].toUpperCase()}`, 'info');
  }
};
