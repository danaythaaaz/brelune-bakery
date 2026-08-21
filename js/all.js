/* --- js/data.js --- */
/* ==========================================================================
   Brelune Bakery & Coffee - Products & Application Data
   ========================================================================== */

const BRELUNE_DATA = {
  categories: [
    { id: 'all', name: 'All Menu', icon: '' },
    { id: 'bakery', name: 'Bakery', icon: '' },
    { id: 'pastry', name: 'Pastry', icon: '' },
    { id: 'cake', name: 'Cake', icon: '' },
    { id: 'coffee', name: 'Coffee', icon: '' },
    { id: 'chocolate', name: 'Chocolate & Others', icon: '' }
  ],

  products: [
    // Bakery
    {
      id: 'prod_butter_croissant',
      name: 'Butter Croissant',
      category: 'bakery',
      price: 25000,
      image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=800&q=80',
      description: 'Classic French butter croissant with flaky golden-brown layers and rich Normandy butter aroma.',
      badge: 'Bestseller',
      rating: 4.9,
      reviewsCount: 312,
      isFood: true,
      isHighlight: true,
      options: {
        sizes: [
          { id: 'regular', name: 'Regular', extraPrice: 0 }
        ],
        warming: [
          { id: 'warm', name: 'Warmed / Heated', extraPrice: 0 },
          { id: 'room', name: 'Room Temperature', extraPrice: 0 }
        ]
      },
      ingredients: ['French Wheat Flour', 'AOP Normandy Butter', 'Fresh Milk', 'Sea Salt', 'Yeast'],
      allergens: ['Gluten', 'Dairy']
    },
    {
      id: 'prod_baguette',
      name: 'Artisan Baguette',
      category: 'bakery',
      price: 25000,
      image: 'https://images.unsplash.com/photo-1589367920969-ab8e050bbb04?auto=format&fit=crop&w=800&q=80',
      description: 'Traditional 24-hour slow-fermented crusty baguette with open crumb and mild sourdough note.',
      badge: 'Artisan',
      rating: 4.8,
      reviewsCount: 148,
      isFood: true,
      isHighlight: false,
      options: {
        sizes: [{ id: 'regular', name: 'Regular (40cm)', extraPrice: 0 }],
        warming: [{ id: 'sliced', name: 'Sliced & Warmed', extraPrice: 0 }, { id: 'whole', name: 'Whole Loaf', extraPrice: 0 }]
      },
      ingredients: ['Organic French Flour', 'Filtered Water', 'Levain', 'Guerande Grey Salt'],
      allergens: ['Gluten']
    },
    {
      id: 'prod_cheese_bread',
      name: 'Cheese Bread',
      category: 'bakery',
      price: 30000,
      image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80',
      description: 'Soft brioche bun stuffed generously with aged red cheddar, mozzarella, and Parmesan crust.',
      badge: 'Popular',
      rating: 4.8,
      reviewsCount: 184,
      isFood: true,
      isHighlight: false,
      options: {
        sizes: [{ id: 'regular', name: 'Regular', extraPrice: 0 }],
        warming: [{ id: 'warm', name: 'Extra Melted & Warm', extraPrice: 0 }, { id: 'room', name: 'Room Temp', extraPrice: 0 }]
      },
      ingredients: ['Brioche Dough', 'Aged Cheddar', 'Mozzarella', 'Parmigiano-Reggiano'],
      allergens: ['Gluten', 'Dairy']
    },

    // Pastry
    {
      id: 'prod_almond_croissant',
      name: 'Almond Croissant',
      category: 'pastry',
      price: 32000,
      image: 'https://images.unsplash.com/photo-1530610476181-d83430b64dcd?auto=format&fit=crop&w=800&q=80',
      description: 'Twice-baked butter croissant loaded with luscious almond frangipane cream and toasted sliced almonds.',
      badge: 'Chef’s Pick',
      rating: 4.9,
      reviewsCount: 420,
      isFood: true,
      isHighlight: true,
      options: {
        sizes: [{ id: 'regular', name: 'Regular', extraPrice: 0 }],
        warming: [{ id: 'warm', name: 'Warmed', extraPrice: 0 }, { id: 'room', name: 'Room Temp', extraPrice: 0 }]
      },
      ingredients: ['French Butter Croissant', 'California Almond Frangipane', 'Vanilla Syrup', 'Powdered Sugar'],
      allergens: ['Gluten', 'Dairy', 'Tree Nuts']
    },
    {
      id: 'prod_pain_au_chocolat',
      name: 'Pain au Chocolat',
      category: 'pastry',
      price: 34000,
      image: 'https://images.unsplash.com/photo-1608198093002-ad4e005484ec?auto=format&fit=crop&w=800&q=80',
      description: 'Laminated flaky pastry filled with two batons of premium 64% Belgian dark chocolate.',
      badge: 'Signature',
      rating: 4.9,
      reviewsCount: 290,
      isFood: true,
      isHighlight: false,
      options: {
        sizes: [{ id: 'regular', name: 'Regular', extraPrice: 0 }],
        warming: [{ id: 'warm', name: 'Warmed (Melty Chocolate)', extraPrice: 0 }, { id: 'room', name: 'Room Temp', extraPrice: 0 }]
      },
      ingredients: ['French Butter Dough', '64% Dark Chocolate Batons', 'Egg Wash'],
      allergens: ['Gluten', 'Dairy', 'Soy']
    },
    {
      id: 'prod_blueberry_danish',
      name: 'Blueberry Danish',
      category: 'pastry',
      price: 36000,
      image: 'https://images.unsplash.com/photo-1549903072-7e6e0bedb7fb?auto=format&fit=crop&w=800&q=80',
      description: 'Flaky pastry crown filled with Madagascar vanilla custard and wild Canadian blueberries.',
      badge: 'Fresh Daily',
      rating: 4.8,
      reviewsCount: 195,
      isFood: true,
      isHighlight: false,
      options: {
        sizes: [{ id: 'regular', name: 'Regular', extraPrice: 0 }]
      },
      ingredients: ['Danish Pastry', 'Vanilla Bean Custard', 'Wild Blueberries Compote'],
      allergens: ['Gluten', 'Dairy', 'Eggs']
    },
    {
      id: 'prod_cinnamon_roll',
      name: 'Cinnamon Roll',
      category: 'pastry',
      price: 36000,
      image: 'https://images.unsplash.com/photo-1509365465985-25d11c17e812?auto=format&fit=crop&w=800&q=80',
      description: 'Soft, fluffy swirl filled with aromatic Ceylon cinnamon sugar and frosted with cream cheese glaze.',
      badge: 'Bestseller',
      rating: 4.9,
      reviewsCount: 388,
      isFood: true,
      isHighlight: true,
      options: {
        sizes: [{ id: 'regular', name: 'Regular', extraPrice: 0 }],
        warming: [{ id: 'warm', name: 'Warm & Gooey', extraPrice: 0 }, { id: 'room', name: 'Room Temp', extraPrice: 0 }]
      },
      ingredients: ['Brioche Swirl', 'Ceylon Cinnamon', 'Brown Sugar', 'Cream Cheese Icing'],
      allergens: ['Gluten', 'Dairy']
    },

    // Cake
    {
      id: 'prod_chocolate_cake',
      name: 'Chocolate Cake',
      category: 'cake',
      price: 40000,
      image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80',
      description: 'Decadent moist dark chocolate sponge layered with silky Valrhona chocolate ganache.',
      badge: 'Must Try',
      rating: 4.9,
      reviewsCount: 310,
      isFood: true,
      isHighlight: true,
      options: {
        sizes: [{ id: 'slice', name: 'Slice', extraPrice: 0 }]
      },
      ingredients: ['Valrhona 70% Dark Chocolate', 'Cocoa Butter', 'Espresso Infusion', 'Heavy Cream'],
      allergens: ['Gluten', 'Dairy', 'Eggs']
    },
    {
      id: 'prod_tiramisu',
      name: 'Classic Tiramisu',
      category: 'cake',
      price: 38000,
      image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=800&q=80',
      description: 'Espresso-dipped ladyfingers layered with whipped mascarpone cream and dusted with raw cacao.',
      badge: 'Italian Classic',
      rating: 4.8,
      reviewsCount: 245,
      isFood: true,
      isHighlight: false,
      options: {
        sizes: [{ id: 'cup', name: 'Glass Cup', extraPrice: 0 }]
      },
      ingredients: ['Italian Mascarpone', 'Savoiardi Ladyfingers', 'Brelune Signature Espresso', 'Dark Cocoa'],
      allergens: ['Gluten', 'Dairy', 'Eggs']
    },
    {
      id: 'prod_carrot_cake',
      name: 'Carrot Cake',
      category: 'cake',
      price: 38000,
      image: 'https://images.unsplash.com/photo-1621303837174-89787a7d4729?auto=format&fit=crop&w=800&q=80',
      description: 'Spiced carrot cake packed with toasted walnuts and topped with zesty citrus cream cheese.',
      badge: 'Nutty & Spiced',
      rating: 4.7,
      reviewsCount: 162,
      isFood: true,
      isHighlight: false,
      options: {
        sizes: [{ id: 'slice', name: 'Slice', extraPrice: 0 }]
      },
      ingredients: ['Fresh Carrots', 'California Walnuts', 'Nutmeg & Cinnamon', 'Citrus Cream Cheese'],
      allergens: ['Gluten', 'Dairy', 'Tree Nuts', 'Eggs']
    },

    // Coffee
    {
      id: 'prod_iced_latte',
      name: 'Iced Latte',
      category: 'coffee',
      price: 32000,
      image: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=800&q=80',
      description: 'Rich double espresso blended with fresh farm milk, served chilled over crystalline ice.',
      badge: 'Signature',
      rating: 4.9,
      reviewsCount: 520,
      isFood: false,
      isHighlight: true,
      options: {
        sizes: [
          { id: 'regular', name: 'Regular', extraPrice: 0 },
          { id: 'large', name: 'Large (+Rp5.000)', extraPrice: 5000 }
        ],
        temperature: [
          { id: 'iced', name: 'Iced', extraPrice: 0 },
          { id: 'hot', name: 'Hot', extraPrice: 0 }
        ],
        milks: [
          { id: 'fresh', name: 'Fresh Milk', extraPrice: 0 },
          { id: 'oat', name: 'Oat Milk (+Rp6.000)', extraPrice: 6000 },
          { id: 'almond', name: 'Almond Milk (+Rp6.000)', extraPrice: 6000 }
        ],
        sweetness: [
          { id: 'normal', name: 'Normal Sugar (100%)', extraPrice: 0 },
          { id: 'less', name: 'Less Sugar (50%)', extraPrice: 0 },
          { id: 'no', name: 'No Sugar (0%)', extraPrice: 0 }
        ]
      },
      ingredients: ['Single Origin Arabica Beans', 'Fresh Dairy Milk', 'Ice'],
      allergens: ['Dairy']
    },
    {
      id: 'prod_flat_white',
      name: 'Flat White',
      category: 'coffee',
      price: 30000,
      image: 'https://images.unsplash.com/photo-1577968897966-3d4325b36b61?auto=format&fit=crop&w=800&q=80',
      description: 'Smooth ristretto shots blended with velvety microfoam milk for a strong yet balanced cup.',
      badge: 'Barista Pick',
      rating: 4.8,
      reviewsCount: 230,
      isFood: false,
      isHighlight: false,
      options: {
        sizes: [
          { id: 'regular', name: 'Regular', extraPrice: 0 },
          { id: 'large', name: 'Large (+Rp5.000)', extraPrice: 5000 }
        ],
        temperature: [
          { id: 'hot', name: 'Hot', extraPrice: 0 },
          { id: 'iced', name: 'Iced', extraPrice: 0 }
        ],
        milks: [
          { id: 'fresh', name: 'Fresh Milk', extraPrice: 0 },
          { id: 'oat', name: 'Oat Milk (+Rp6.000)', extraPrice: 6000 }
        ]
      },
      ingredients: ['Arabica Espresso Blend', 'Steamed Whole Milk'],
      allergens: ['Dairy']
    },
    {
      id: 'prod_cappuccino',
      name: 'Cappuccino',
      category: 'coffee',
      price: 30000,
      image: 'https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&w=800&q=80',
      description: 'Equal parts espresso, steamed milk, and dense airy foam, dusted with French cocoa powder.',
      badge: 'Classic',
      rating: 4.8,
      reviewsCount: 280,
      isFood: false,
      isHighlight: false,
      options: {
        sizes: [{ id: 'regular', name: 'Regular', extraPrice: 0 }, { id: 'large', name: 'Large (+Rp5.000)', extraPrice: 5000 }],
        temperature: [{ id: 'hot', name: 'Hot', extraPrice: 0 }, { id: 'iced', name: 'Iced', extraPrice: 0 }],
        milks: [{ id: 'fresh', name: 'Fresh Milk', extraPrice: 0 }, { id: 'oat', name: 'Oat Milk (+Rp6.000)', extraPrice: 6000 }]
      },
      ingredients: ['Double Espresso', 'Frother Milk', 'Cocoa Powder'],
      allergens: ['Dairy']
    },
    {
      id: 'prod_americano',
      name: 'Americano',
      category: 'coffee',
      price: 25000,
      image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80',
      description: 'Clean and crisp double shot of espresso diluted with hot or iced purified water.',
      badge: 'Zero Calorie',
      rating: 4.7,
      reviewsCount: 190,
      isFood: false,
      isHighlight: false,
      options: {
        sizes: [{ id: 'regular', name: 'Regular', extraPrice: 0 }, { id: 'large', name: 'Large (+Rp5.000)', extraPrice: 5000 }],
        temperature: [{ id: 'iced', name: 'Iced', extraPrice: 0 }, { id: 'hot', name: 'Hot', extraPrice: 0 }]
      },
      ingredients: ['Brelune Espresso Blend', 'Purified Water'],
      allergens: []
    },
    {
      id: 'prod_espresso',
      name: 'Espresso Single / Double',
      category: 'coffee',
      price: 22000,
      image: 'https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?auto=format&fit=crop&w=800&q=80',
      description: 'Intense, concentrated shot with thick golden crema from our signature house blend.',
      badge: 'Pure Coffee',
      rating: 4.8,
      reviewsCount: 110,
      isFood: false,
      isHighlight: false,
      options: {
        sizes: [{ id: 'double', name: 'Double Shot', extraPrice: 0 }],
        temperature: [{ id: 'hot', name: 'Hot', extraPrice: 0 }]
      },
      ingredients: ['100% Specialty Arabica Beans'],
      allergens: []
    },

    // Chocolate & Others
    {
      id: 'prod_hot_chocolate',
      name: 'Signature Hot Chocolate',
      category: 'chocolate',
      price: 28000,
      image: 'https://images.unsplash.com/photo-1542990253-0d0f5be5f0ed?auto=format&fit=crop&w=800&q=80',
      description: 'Melted Belgian milk and dark chocolate infused with steamed fresh milk and toasted marshmallow.',
      badge: 'Comforting',
      rating: 4.9,
      reviewsCount: 340,
      isFood: false,
      isHighlight: false,
      options: {
        sizes: [{ id: 'regular', name: 'Regular', extraPrice: 0 }, { id: 'large', name: 'Large (+Rp5.000)', extraPrice: 5000 }],
        temperature: [{ id: 'hot', name: 'Hot', extraPrice: 0 }, { id: 'iced', name: 'Iced', extraPrice: 0 }],
        milks: [{ id: 'fresh', name: 'Fresh Milk', extraPrice: 0 }, { id: 'oat', name: 'Oat Milk (+Rp6.000)', extraPrice: 6000 }]
      },
      ingredients: ['Belgian Couverture Chocolate', 'Fresh Dairy Milk', 'Mini Marshmallow'],
      allergens: ['Dairy']
    },
    {
      id: 'prod_iced_chocolate',
      name: 'Iced Dark Chocolate',
      category: 'chocolate',
      price: 30000,
      image: 'https://images.unsplash.com/photo-1517578239113-b03992dcdd25?auto=format&fit=crop&w=800&q=80',
      description: 'Rich 70% dark chocolate shake served over crushed ice and topped with chocolate shavings.',
      badge: 'Decadent',
      rating: 4.8,
      reviewsCount: 275,
      isFood: false,
      isHighlight: false,
      options: {
        sizes: [{ id: 'regular', name: 'Regular', extraPrice: 0 }, { id: 'large', name: 'Large (+Rp5.000)', extraPrice: 5000 }],
        temperature: [{ id: 'iced', name: 'Iced', extraPrice: 0 }, { id: 'hot', name: 'Hot', extraPrice: 0 }],
        milks: [{ id: 'fresh', name: 'Fresh Milk', extraPrice: 0 }, { id: 'oat', name: 'Oat Milk (+Rp6.000)', extraPrice: 6000 }]
      },
      ingredients: ['70% Dark Chocolate Ganache', 'Fresh Milk', 'Dark Shavings'],
      allergens: ['Dairy']
    },
    {
      id: 'prod_matcha_latte',
      name: 'Uji Matcha Latte',
      category: 'chocolate',
      price: 35000,
      image: 'https://images.unsplash.com/photo-1536256263959-770b48d82b0a?auto=format&fit=crop&w=800&q=80',
      description: 'Ceremonial grade Uji green tea whisked with silky milk for an earthy and creamy refreshment.',
      badge: 'Japanese Origin',
      rating: 4.9,
      reviewsCount: 390,
      isFood: false,
      isHighlight: false,
      options: {
        sizes: [{ id: 'regular', name: 'Regular', extraPrice: 0 }, { id: 'large', name: 'Large (+Rp5.000)', extraPrice: 5000 }],
        temperature: [{ id: 'iced', name: 'Iced', extraPrice: 0 }, { id: 'hot', name: 'Hot', extraPrice: 0 }],
        milks: [{ id: 'fresh', name: 'Fresh Milk', extraPrice: 0 }, { id: 'oat', name: 'Oat Milk (+Rp6.000)', extraPrice: 6000 }]
      },
      ingredients: ['Kyoto Uji Ceremonial Matcha', 'Fresh Milk', 'Organic Cane Syrup'],
      allergens: ['Dairy']
    }
  ],

  // Store Branches & Tables
  stores: [
    {
      id: 'store_cp',
      name: 'Brelune Central Park',
      address: 'Ground Floor (Tribeca Park), Jl. Letjen S. Parman, Jakarta Barat',
      hours: '07:30 AM - 10:00 PM',
      phone: '+62 21 5698 8801',
      tables: ['Table 01', 'Table 04', 'Table 08', 'Table 12', 'Table 15', 'Outdoor 02']
    },
    {
      id: 'store_senopati',
      name: 'Brelune Senopati',
      address: 'Jl. Senopati No. 42, Kebayoran Baru, Jakarta Selatan',
      hours: '07:00 AM - 10:30 PM',
      phone: '+62 21 7200 4512',
      tables: ['Table 02', 'Table 05', 'Table 09', 'Table 12', 'Table 18', 'Garden 01']
    },
    {
      id: 'store_gi',
      name: 'Brelune Grand Indonesia',
      address: 'East Mall, Level 3A, Jl. M.H. Thamrin, Jakarta Pusat',
      hours: '10:00 AM - 10:00 PM',
      phone: '+62 21 2358 1900',
      tables: ['Table 03', 'Table 07', 'Table 11', 'Table 14', 'Table 20']
    },
    {
      id: 'store_pik',
      name: 'Brelune PIK Avenue',
      address: 'Ground Floor (Food Promenade), Pantai Indah Kapuk, Jakarta Utara',
      hours: '08:00 AM - 10:00 PM',
      phone: '+62 21 2257 0888',
      tables: ['Table 01', 'Table 06', 'Table 10', 'Table 12', 'Sea Breeze 04']
    }
  ],

  // Payment Methods (With Official Logos)
  paymentMethods: [
    { 
      id: 'cashier', 
      name: 'Bayar di Kasir', 
      icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="20" height="14" x="2" y="5" rx="2"/><line x1="2" x2="22" y1="10" y2="10"/></svg>', 
      tag: 'Dine In Only', 
      dineInOnly: true,
      logo: null 
    },
    { 
      id: 'qris', 
      name: 'QR Code (QRIS)', 
      icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="5" height="5" x="3" y="3"/><rect width="5" height="5" x="16" y="3"/><rect width="5" height="5" x="3" y="16"/><path d="M21 16h-3a2 2 0 0 0-2 2v3"/><path d="M21 21v.01"/><path d="M12 7v3a2 2 0 0 1-2 2H7"/><path d="M3 12h.01"/><path d="M12 3h.01"/><path d="M12 16v.01"/><path d="M16 12h1"/><path d="M21 12v.01"/><path d="M12 21v-1"/></svg>', 
      tag: 'Scan Otomatis', 
      dineInOnly: false,
      logo: null 
    },
    { 
      id: 'gopay', 
      name: 'GoPay', 
      icon: null, 
      tag: 'E-Wallet', 
      dineInOnly: false,
      logo: 'assets/logos/gopay.png' 
    },
    { 
      id: 'shopeepay', 
      name: 'ShopeePay', 
      icon: null, 
      tag: 'E-Wallet', 
      dineInOnly: false,
      logo: 'assets/logos/shopeepay.png' 
    },
    { 
      id: 'debit', 
      name: 'Debit Card', 
      icon: null, 
      tag: 'Debit Online', 
      dineInOnly: false,
      logos: ['assets/logos/visa.png', 'assets/logos/mastercard.png'] 
    },
    { 
      id: 'credit', 
      name: 'Credit Card', 
      icon: null, 
      tag: 'Cicilan / Full', 
      dineInOnly: false,
      logos: ['assets/logos/visa.png', 'assets/logos/mastercard.png'] 
    }
  ],

  // Promotional Codes
  promos: {
    'NEWBRELUNE10': {
      code: 'NEWBRELUNE10',
      title: 'New Member 10% OFF',
      discountPercentage: 10,
      type: 'all',
      description: 'Diskon 10% untuk total keranjang pesanan pertama Anda!'
    },
    'DINEIN15': {
      code: 'DINEIN15',
      title: 'Dine In 15% Food Promo',
      discountPercentage: 15,
      type: 'food_dine_in',
      description: 'Diskon 15% untuk produk Bakery, Pastry & Cake saat Dine In.'
    }
  },

  // Default Demo User & Saved Addresses
  demoUser: {
    id: 'user_danaytha_01',
    name: 'Danaytha Ayuningtyas',
    email: 'danaytha@email.com',
    phone: '+62 812-3456-7890',
    tier: 'Gold Artisan Member',
    tierPoints: 720,
    nextTierTarget: 1000,
    avatar: 'DA',
    isLoggedIn: true,
    savedAddresses: [
      {
        id: 'addr_1',
        label: 'Apartemen Utama (Rumah)',
        recipientName: 'Danaytha Ayuningtyas',
        phone: '+62 812-3456-7890',
        street: 'Jl. Letjen S. Parman No. 28, Medit 2 Tower Orchid Lt. 12 No. 1205',
        city: 'Jakarta Barat, DKI Jakarta 11470',
        notes: 'Titip di resepsionis lobby tower Orchid jika sedang tidak di tempat.',
        isDefault: true
      },
      {
        id: 'addr_2',
        label: 'Kantor / Studio',
        recipientName: 'Danaytha A.',
        phone: '+62 812-3456-7890',
        street: 'Jl. Senopati Raya No. 18, Lantai 3',
        city: 'Kebayoran Baru, Jakarta Selatan 12190',
        notes: 'Hubungi saat kurir tiba di lobby utama.',
        isDefault: false
      }
    ]
  }
};


/* --- js/store.js --- */
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


/* --- js/ui.js --- */
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


/* --- js/tracking.js --- */
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


/* --- js/app.js --- */
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


