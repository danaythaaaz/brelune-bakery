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
