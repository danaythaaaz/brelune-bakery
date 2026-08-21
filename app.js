/* ==========================================================================
   Brelune Bakery & Coffee - SPA Router & App Bootstrap
   ========================================================================== */

const App = {
  routes: [
    'home',
    'menu',
    'favorites',
    'checkout',
    'cashier-ticket',
    'order-success',
    'order-tracking',
    'my-orders',
    'account-settings',
    'about',
    'stores'
  ],

  init() {
    UI.init();
    OrderTracker.init();

    window.addEventListener('hashchange', () => this.handleRouting());
    this.handleRouting();

    // Sticky Header Scroll effect
    window.addEventListener('scroll', () => {
      const header = document.getElementById('site-header');
      if (header) {
        header.classList.toggle('scrolled', window.scrollY > 20);
      }
    });
  },

  handleRouting() {
    let hash = window.location.hash.replace('#', '').trim();
    if (!hash || !this.routes.includes(hash)) {
      hash = 'home';
    }

    // Hide all views
    document.querySelectorAll('.page-view-section').forEach(view => {
      view.style.display = 'none';
    });

    // Show active view
    let activeView = document.getElementById(`${hash}-page-view`) || document.getElementById(`${hash}-view`);
    if (activeView) {
      activeView.style.display = 'block';
    }

    // Update active nav links
    document.querySelectorAll('.nav-link').forEach(link => {
      const targetHash = link.getAttribute('href')?.replace('#', '');
      link.classList.toggle('active', targetHash === hash);
    });

    document.querySelectorAll('.mobile-nav-item').forEach(item => {
      const targetHash = item.getAttribute('href')?.replace('#', '');
      item.classList.toggle('active', targetHash === hash);
    });

    // Trigger view-specific render logic
    if (hash === 'menu') {
      UI.renderMenuGrid(window.activeMenuCategory || 'all');
    } else if (hash === 'favorites') {
      UI.renderFavoritesPage();
    } else if (hash === 'checkout') {
      UI.renderCheckoutPage();
      UI.renderPaymentMethodsSelection();
    } else if (hash === 'cashier-ticket') {
      const activeOrder = store.getActiveOrder() || store.orders[0];
      if (activeOrder) UI.renderCashierTicketScreen(activeOrder);
    } else if (hash === 'order-success') {
      const activeOrder = store.getActiveOrder() || store.orders[0];
      if (activeOrder) UI.renderOrderSuccessScreen(activeOrder);
    } else if (hash === 'my-orders') {
      UI.renderMyOrdersHub();
    } else if (hash === 'order-tracking') {
      OrderTracker.renderTrackingView();
    } else if (hash === 'account-settings') {
      UI.renderAccountSettings();
    }

    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
  },

  navigateTo(route) {
    if (window.location.hash === `#${route}`) {
      this.handleRouting();
    } else {
      window.location.hash = `#${route}`;
    }
  }
};

window.App = App;

document.addEventListener('DOMContentLoaded', () => {
  App.init();
});
