// Product Data (40+ products)
const products = [
    { id: 1, name: "Men's Casual Shirt", price: 1599, category: "fashion", rating: 4.5, reviews: 128, image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80", badge: "New" },
    { id: 2, name: "Women's Summer Dress", price: 2499, category: "fashion", rating: 4.7, reviews: 96, image: "https://images.unsplash.com/photo-1529903384028-929ae4dcc8b3?q=80", badge: "Sale" },
    { id: 3, name: "Designer Jeans", price: 2299, category: "fashion", rating: 4.3, reviews: 245, image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80" },
    { id: 4, name: "Leather Jacket", price: 5999, category: "fashion", rating: 4.8, reviews: 87, image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?q=80", badge: "Premium" },
    { id: 5, name: "Women's Handbag", price: 3499, category: "fashion", rating: 4.6, reviews: 142, image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80" },
    { id: 6, name: "Men's Formal Suit", price: 8499, oldPrice: 10999, category: "fashion", rating: 4.9, reviews: 78, image: "https://images.unsplash.com/photo-1598808503746-f34cfb6c2524?q=80", badge: "-20%" },
    { id: 7, name: "Women's High Heels", price: 2799, category: "fashion", rating: 4.2, reviews: 201, image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80" },
    { id: 8, name: "Unisex Sneakers", price: 3299, category: "fashion", rating: 4.5, reviews: 112, image: "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?q=80" },
    { id: 9, name: "Designer Sunglasses", price: 1999, oldPrice: 2599, category: "fashion", rating: 4.4, reviews: 189, image: "https://images.unsplash.com/photo-1577803645773-f96470509666?q=80", badge: "Sale" },
    { id: 10, name: "Women's Winter Coat", price: 4999, category: "fashion", rating: 4.7, reviews: 94, image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80" },
    { id: 11, name: "Men's Sportswear Set", price: 2999, category: "fashion", rating: 4.3, reviews: 67, image: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80" },
    { id: 12, name: "Designer Watch", price: 8999, category: "fashion", rating: 4.9, reviews: 123, image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80", badge: "Luxury" },
    { id: 13, name: "Women's Jewelry Set", price: 4599, category: "fashion", rating: 4.8, reviews: 56, image: "https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?q=80" },
    { id: 14, name: "Men's Casual Shoes", price: 2499, oldPrice: 3299, category: "fashion", rating: 4.1, reviews: 88, image: "https://images.unsplash.com/photo-1605812860427-4024433a70fd?q=80", badge: "-25%" },
    { id: 15, name: "Kids T-Shirt Pack", price: 1499, category: "fashion", rating: 4.6, reviews: 45, image: "https://images.unsplash.com/photo-1609505848916-c9f6f4bd0b57?q=80" },
    { id: 16, name: "Designer Handbag", price: 6999, category: "fashion", rating: 4.9, reviews: 167, image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80" },
    { id: 17, name: "Women's Leggings", price: 1299, category: "fashion", rating: 4.4, reviews: 102, image: "https://images.unsplash.com/photo-1609505848916-c9f6f4bd0b57?q=80" },
    { id: 18, name: "Men's Wallet", price: 1799, category: "fashion", rating: 4.3, reviews: 73, image: "https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?q=80" },
    { id: 19, name: "Women's Scarf Set", price: 999, oldPrice: 1499, category: "fashion", rating: 4.5, reviews: 134, image: "https://images.unsplash.com/photo-1601924994987-69e26d50dc26?q=80", badge: "-33%" },
    { id: 20, name: "Designer Belt", price: 1999, category: "fashion", rating: 4.2, reviews: 89, image: "https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?q=80" }
];
// Shopping cart
let cart = [];
let wishlist = [];
let currentUser = null;
let orders = [];

// DOM elements
const productGrid = document.getElementById('productGrid');
const cartIcon = document.getElementById('cartIcon');
const cartSidebar = document.getElementById('cartSidebar');
const closeCart = document.getElementById('closeCart');
const overlay = document.getElementById('overlay');
const cartItems = document.getElementById('cartItems');
const cartTotal = document.getElementById('cartTotal');
const cartCount = document.querySelector('.cart-count');
const wishlistCount = document.querySelector('.wishlist-count');
const wishlistIcon = document.getElementById('wishlistIcon');
const filterBtns = document.querySelectorAll('.filter-btn');
const searchInput = document.getElementById('searchInput');
const toast = document.getElementById('toast');
const profileIcon = document.getElementById('profileIcon');
const authModal = document.getElementById('authModal');
const closeAuthModal = document.getElementById('closeAuthModal');
const loginTab = document.getElementById('loginTab');
const registerTab = document.getElementById('registerTab');
const loginForm = document.getElementById('loginForm');
const registerForm = document.getElementById('registerForm');
const loginBtn = document.getElementById('loginBtn');
const registerBtn = document.getElementById('registerBtn');
const checkoutBtn = document.getElementById('checkoutBtn');
const paymentModal = document.getElementById('paymentModal');
const closePaymentModal = document.getElementById('closePaymentModal');
const placeOrderBtn = document.getElementById('placeOrderBtn');
const profileSection = document.getElementById('profileSection');
const orderList = document.getElementById('orderList');
const userName = document.getElementById('userName');
const userEmail = document.getElementById('userEmail');

// Profile Sidebar Elements
const profileSidebar = document.getElementById('profileSidebar');
const closeProfileSidebar = document.getElementById('closeProfileSidebar');
const profileSidebarItems = document.querySelectorAll('.profile-sidebar-item');
const sidebarUserName = document.getElementById('sidebarUserName');
const sidebarUserEmail = document.getElementById('sidebarUserEmail');

// Profile Content Sections
const dashboardSection = document.getElementById('dashboardSection');
const passwordResetSection = document.getElementById('passwordResetSection');
const siteAnalyticsSection = document.getElementById('siteAnalyticsSection');
const addressValidationSection = document.getElementById('addressValidationSection');

// Settings Elements
const settingsTabs = document.querySelectorAll('.settings-tab');
const settingsTabContents = document.querySelectorAll('.settings-tab-content');

// Old profile elements (keeping for compatibility)
const profileNavItems = document.querySelectorAll('.profile-nav-item');
const orderHistorySection = document.getElementById('orderHistorySection');
const userProfileSection = document.getElementById('userProfileSection');
const wishlistSection = document.getElementById('wishlistSection');
const addressBookSection = document.getElementById('addressBookSection');
const accountSettingsSection = document.getElementById('accountSettingsSection');
const profileName = document.getElementById('profileName');
const profileEmail = document.getElementById('profileEmail');
const profileAddress = document.getElementById('profileAddress');
const profilePhone = document.getElementById('profilePhone');
const profileDOB = document.getElementById('profileDOB');
const saveProfileBtn = document.getElementById('saveProfileBtn');
const wishlistItems = document.getElementById('wishlistItems');
const addressList = document.getElementById('addressList');
const addAddressBtn = document.getElementById('addAddressBtn');
const changePasswordBtn = document.getElementById('changePasswordBtn');
const saveNotificationBtn = document.getElementById('saveNotificationBtn');
const downloadDataBtn = document.getElementById('downloadDataBtn');
const deleteAccountBtn = document.getElementById('deleteAccountBtn');

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    loadUserData();
    renderProducts(products);
    updateCartCount();
    updateWishlistCount();
    updateProfileUI();

    // Event listeners
    cartIcon.addEventListener('click', openCart);
    closeCart.addEventListener('click', closeCartHandler);
    overlay.addEventListener('click', () => {
        closeCartHandler();
        closeProfileSidebarHandler();
    });
    wishlistIcon.addEventListener('click', () => {
        showToast('Wishlist feature coming soon!');
    });

    // Filter buttons
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filter = btn.dataset.filter;
            filterProducts(filter);
        });
    });

    // Search functionality
    searchInput.addEventListener('input', handleSearch);

    // Auth functionality
    profileIcon.addEventListener('click', toggleAuthModal);
    closeAuthModal.addEventListener('click', closeAuthModalHandler);
    loginTab.addEventListener('click', () => switchAuthTab('login'));
    registerTab.addEventListener('click', () => switchAuthTab('register'));
    loginBtn.addEventListener('click', loginUser);
    registerBtn.addEventListener('click', registerUser);
    checkoutBtn.addEventListener('click', checkout);
    closePaymentModal.addEventListener('click', closePaymentModalHandler);
    placeOrderBtn.addEventListener('click', placeOrder);

    // Profile functionality
    profileNavItems.forEach(item => {
        item.addEventListener('click', () => {
            const section = item.dataset.section;
            profileNavItems.forEach(i => i.classList.remove('active'));
            item.classList.add('active');

            // Hide all sections
            const allSections = [orderHistorySection, userProfileSection, wishlistSection, addressBookSection, accountSettingsSection];
            allSections.forEach(sec => {
                if (sec) {
                    sec.style.display = 'none';
                    sec.classList.remove('active');
                }
            });

            // Show selected section
            switch(section) {
                case 'orderHistory':
                    orderHistorySection.style.display = 'block';
                    orderHistorySection.classList.add('active');
                    loadOrderHistory();
                    break;
                case 'userProfile':
                    userProfileSection.style.display = 'block';
                    userProfileSection.classList.add('active');
                    loadProfileData();
                    break;
                case 'wishlist':
                    wishlistSection.style.display = 'block';
                    wishlistSection.classList.add('active');
                    loadWishlistData();
                    break;
                case 'addressBook':
                    addressBookSection.style.display = 'block';
                    addressBookSection.classList.add('active');
                    loadAddressBook();
                    break;
                case 'accountSettings':
                    accountSettingsSection.style.display = 'block';
                    accountSettingsSection.classList.add('active');
                    loadAccountSettings();
                    break;
            }
        });
    });

    saveProfileBtn.addEventListener('click', saveProfile);
    
    // Additional profile functionality
    if (addAddressBtn) addAddressBtn.addEventListener('click', addNewAddress);
    if (changePasswordBtn) changePasswordBtn.addEventListener('click', changePassword);
    if (saveNotificationBtn) saveNotificationBtn.addEventListener('click', saveNotificationSettings);
    if (downloadDataBtn) downloadDataBtn.addEventListener('click', downloadUserData);
    if (deleteAccountBtn) deleteAccountBtn.addEventListener('click', deleteAccount);

    // Profile Sidebar functionality
    if (closeProfileSidebar) closeProfileSidebar.addEventListener('click', closeProfileSidebarHandler);
    
    // Profile sidebar navigation
    profileSidebarItems.forEach(item => {
        item.addEventListener('click', () => {
            if (item.id === 'logoutBtn') {
                logoutUser();
                return;
            }
            
            const section = item.dataset.section;
            if (section) {
                profileSidebarItems.forEach(i => i.classList.remove('active'));
                item.classList.add('active');
                showProfileSection(section);
            }
        });
    });

    // Settings tabs functionality
    settingsTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const tabName = tab.dataset.tab;
            settingsTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            
            settingsTabContents.forEach(content => {
                content.classList.remove('active');
                if (content.id === tabName + 'Tab') {
                    content.classList.add('active');
                }
            });
        });
    });
});

// Render products
function renderProducts(productsToRender) {
    productGrid.innerHTML = '';

    productsToRender.forEach(product => {
        const isInWishlist = wishlist.includes(product.id);

        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            ${product.badge ? `<div class="product-badge">${product.badge}</div>` : ''}
            <div class="product-img">
                <img src="${product.image}" alt="${product.name}">
            </div>
            <div class="product-info">
                <div class="product-category">${product.category.charAt(0).toUpperCase() + product.category.slice(1)}</div>
                <h3 class="product-title">${product.name}</h3>
                <div class="product-price">
                    ₹${product.price.toLocaleString()}
                    ${product.oldPrice ? `<span class="old-price">₹${product.oldPrice.toLocaleString()}</span>` : ''}
                </div>
                <div class="product-rating">
                    ${renderRating(product.rating)} (${product.reviews})
                </div>
                <div class="product-actions">
                    <button class="add-to-cart" data-id="${product.id}">Add to Cart</button>
                    <button class="wishlist" data-id="${product.id}">
                        <i class="${isInWishlist ? 'fas' : 'far'} fa-heart"></i>
                    </button>
                </div>
            </div>
        `;

        productGrid.appendChild(productCard);
    });

        productGrid.appendChild(productCard);
    };

    // Add event listeners to buttons
    document.querySelectorAll('.add-to-cart').forEach(btn => {
        btn.addEventListener('click', addToCart);
    });

    document.querySelectorAll('.wishlist').forEach(btn => {
        btn.addEventListener('click', toggleWishlist);
    });

    document.querySelectorAll('.product-title').forEach(title => {
        title.addEventListener('click', () => {
            const productId = title.closest('.product-card').querySelector('.add-to-cart').dataset.id;
            const product = products.find(p => p.id == productId);
            showProductDetails(product);
        });
    });


// Render rating stars
function renderRating(rating) {
    let stars = '';
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

    for (let i = 0; i < fullStars; i++) {
        stars += '<i class="fas fa-star"></i>';
    }

    if (halfStar) {
        stars += '<i class="fas fa-star-half-alt"></i>';
    }

    for (let i = 0; i < emptyStars; i++) {
        stars += '<i class="far fa-star"></i>';
    }

    return stars;
}

// Add to cart
function addToCart(e) {
    const productId = parseInt(e.target.dataset.id);
    const product = products.find(p => p.id === productId);

    // Check if product is already in cart
    const existingItem = cart.find(item => item.id === productId);

    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            quantity: 1,
            icon: product.icon
        });
    }

    updateCartCount();
    showToast('Item added to cart!');

    // If cart is open, update it
    if (cartSidebar.classList.contains('active')) {
        renderCartItems();
    }
}

// Toggle wishlist
function toggleWishlist(e) {
    const productId = parseInt(e.target.closest('.wishlist').dataset.id);
    const index = wishlist.indexOf(productId);

    if (index === -1) {
        wishlist.push(productId);
        e.target.innerHTML = '<i class="fas fa-heart"></i>';
        e.target.style.color = 'var(--accent)';
        showToast('Added to wishlist!');
    } else {
        wishlist.splice(index, 1);
        e.target.innerHTML = '<i class="far fa-heart"></i>';
        e.target.style.color = '';
        showToast('Removed from wishlist');
    }

    updateWishlistCount();
}

// Update cart count
function updateCartCount() {
    const count = cart.reduce((total, item) => total + item.quantity, 0);
    cartCount.textContent = count;
}

// Update wishlist count
function updateWishlistCount() {
    wishlistCount.textContent = wishlist.length;
}

// Open cart
function openCart() {
    cartSidebar.classList.add('active');
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
    renderCartItems();
}

// Close cart
function closeCartHandler() {
    cartSidebar.classList.remove('active');
    overlay.classList.remove('active');
    document.body.style.overflow = '';
}

// Render cart items
function renderCartItems() {
    if (cart.length === 0) {
        cartItems.innerHTML = '<p style="text-align: center; padding: 20px;">Your cart is empty</p>';
        cartTotal.textContent = '₹0.00';
        return;
    }

    cartItems.innerHTML = '';
    let total = 0;

    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;

        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
                    <div class="cart-item-img">
                        <i class="${item.icon}"></i>
                    </div>
                    <div class="cart-item-details">
                        <div class="cart-item-title">${item.name}</div>
                        <div class="cart-item-price">₹${item.price.toLocaleString()}</div>
                        <div class="cart-item-quantity">
                            <button class="quantity-btn minus" data-id="${item.id}">-</button>
                            <input type="number" class="quantity-input" value="${item.quantity}" min="1" data-id="${item.id}">
                            <button class="quantity-btn plus" data-id="${item.id}">+</button>
                            <button class="remove-item" data-id="${item.id}"><i class="fas fa-trash"></i></button>
                        </div>
                    </div>
                `;

        cartItems.appendChild(cartItem);
    });

    cartTotal.textContent = `₹${total.toLocaleString()}`;

    // Add event listeners to quantity controls
    document.querySelectorAll('.minus').forEach(btn => {
        btn.addEventListener('click', decreaseQuantity);
    });

    document.querySelectorAll('.plus').forEach(btn => {
        btn.addEventListener('click', increaseQuantity);
    });

    document.querySelectorAll('.quantity-input').forEach(input => {
        input.addEventListener('change', updateQuantity);
    });

    document.querySelectorAll('.remove-item').forEach(btn => {
        btn.addEventListener('click', removeItem);
    });
}

// Decrease quantity
function decreaseQuantity(e) {
    const productId = parseInt(e.target.dataset.id);
    const item = cart.find(item => item.id === productId);

    if (item.quantity > 1) {
        item.quantity--;
    } else {
        cart = cart.filter(item => item.id !== productId);
    }

    updateCartCount();
    renderCartItems();
}

// Increase quantity
function increaseQuantity(e) {
    const productId = parseInt(e.target.dataset.id);
    const item = cart.find(item => item.id === productId);
    item.quantity++;
    updateCartCount();
    renderCartItems();
}

// Update quantity
function updateQuantity(e) {
    const productId = parseInt(e.target.dataset.id);
    const item = cart.find(item => item.id === productId);
    const newQuantity = parseInt(e.target.value) || 1;

    if (newQuantity < 1) {
        item.quantity = 1;
        e.target.value = 1;
    } else {
        item.quantity = newQuantity;
    }

    updateCartCount();
    renderCartItems();
}

// Remove item
function removeItem(e) {
    const productId = parseInt(e.target.closest('.remove-item').dataset.id);
    cart = cart.filter(item => item.id !== productId);
    updateCartCount();
    renderCartItems();
    showToast('Item removed from cart');
}

// Filter products
function filterProducts(category) {
    if (category === 'all') {
        renderProducts(products);
        return;
    }

    const filteredProducts = products.filter(product => product.category === category);
    renderProducts(filteredProducts);
}

// Handle search
function handleSearch() {
    const searchTerm = searchInput.value.toLowerCase().trim();

    if (searchTerm === '') {
        const activeFilter = document.querySelector('.filter-btn.active').dataset.filter;
        filterProducts(activeFilter);
        return;
    }

    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(searchTerm) ||
        product.category.toLowerCase().includes(searchTerm)
    );

    renderProducts(filteredProducts);
}

// Show product details (simulated)
function showProductDetails(product) {
    showToast(`Viewing details for ${product.name}`);
    // In a real implementation, this would open a product detail page
}

// Show toast notification
function showToast(message) {
    toast.textContent = message;
    toast.classList.add('show');

    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// User Authentication Functions
function toggleAuthModal() {
    if (currentUser) {
        openProfileSidebar();
    } else {
        authModal.classList.add('active');
        overlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function closeAuthModalHandler() {
    authModal.classList.remove('active');
    overlay.classList.remove('active');
    document.body.style.overflow = '';
}

function closePaymentModalHandler() {
    paymentModal.classList.remove('active');
    overlay.classList.remove('active');
    document.body.style.overflow = '';
}

function switchAuthTab(tab) {
    loginTab.classList.toggle('active', tab === 'login');
    registerTab.classList.toggle('active', tab === 'register');
    loginForm.classList.toggle('active', tab === 'login');
    registerForm.classList.toggle('active', tab === 'register');
}

function loadUserData() {
    const storedUsers = localStorage.getItem('mm_users');
    const storedCurrentUser = localStorage.getItem('mm_currentUser');
    const storedOrders = localStorage.getItem('mm_orders');

    if (storedUsers) {
        users = JSON.parse(storedUsers);
    }

    if (storedCurrentUser) {
        currentUser = JSON.parse(storedCurrentUser);
    }

    if (storedOrders) {
        orders = JSON.parse(storedOrders);
    }
}

function saveUserData() {
    localStorage.setItem('mm_currentUser', JSON.stringify(currentUser));
    localStorage.setItem('mm_orders', JSON.stringify(orders));
}

function registerUser() {
    const name = document.getElementById('registerName').value;
    const email = document.getElementById('registerEmail').value;
    const password = document.getElementById('registerPassword').value;
    const address = document.getElementById('registerAddress').value;
    const phone = document.getElementById('registerPhone').value;

    // Simple validation
    if (!name || !email || !password || !address || !phone) {
        showToast('Please fill all fields');
        return;
    }

    // Check if user already exists
    const storedUsers = localStorage.getItem('mm_users');
    let users = storedUsers ? JSON.parse(storedUsers) : [];

    if (users.find(user => user.email === email)) {
        showToast('Email already registered');
        return;
    }

    // Create new user
    const newUser = {
        id: Date.now(),
        name,
        email,
        password,
        address,
        phone,
        createdAt: new Date().toISOString()
    };

    users.push(newUser);
    localStorage.setItem('mm_users', JSON.stringify(users));

    // Auto-login the new user
    currentUser = newUser;
    saveUserData();

    showToast('Registration successful!');
    closeAuthModalHandler();
    updateProfileUI();
}

function loginUser() {
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    const storedUsers = localStorage.getItem('mm_users');
    if (!storedUsers) {
        showToast('No users registered yet');
        return;
    }

    const users = JSON.parse(storedUsers);
    const user = users.find(u => u.email === email && u.password === password);

    if (user) {
        currentUser = user;
        saveUserData();
        showToast(`Welcome back, ${user.name.split(' ')[0]}!`);
        closeAuthModalHandler();
        updateProfileUI();
    } else {
        showToast('Invalid email or password');
    }
}

function logoutUser() {
    currentUser = null;
    saveUserData();
    showToast('Logged out successfully');
    updateProfileUI();
    profileSection.classList.remove('active');
}

function updateProfileUI() {
    if (currentUser) {
        userName.textContent = `Welcome, ${currentUser.name}`;
        userEmail.textContent = currentUser.email;
        profileSection.classList.add('active');
        loadOrderHistory();
    } else {
        profileSection.classList.remove('active');
    }
}

function loadProfileData() {
    if (currentUser) {
        profileName.value = currentUser.name;
        profileEmail.value = currentUser.email;
        profileAddress.value = currentUser.address;
        profilePhone.value = currentUser.phone;
        if (profileDOB) profileDOB.value = currentUser.dob || '';
    }
}

function saveProfile() {
    if (!currentUser) return;

    currentUser.name = profileName.value;
    currentUser.address = profileAddress.value;
    currentUser.phone = profilePhone.value;
    if (profileDOB) currentUser.dob = profileDOB.value;

    // Update in users array
    const storedUsers = localStorage.getItem('mm_users');
    if (storedUsers) {
        const users = JSON.parse(storedUsers);
        const userIndex = users.findIndex(u => u.id === currentUser.id);
        if (userIndex !== -1) {
            users[userIndex] = currentUser;
            localStorage.setItem('mm_users', JSON.stringify(users));
            saveUserData();
            updateProfileUI();
            showToast('Profile updated successfully');
        }
    }
}

// New Profile Tab Functions
function loadOrderHistory() {
    if (!currentUser || !orderList) return;
    
    const orders = JSON.parse(localStorage.getItem('mm_orders') || '[]');
    const userOrders = orders.filter(order => order.userId === currentUser.id);
    
    if (userOrders.length === 0) {
        orderList.innerHTML = '<div class="empty-state"><p>No orders found</p></div>';
        return;
    }
    
    orderList.innerHTML = userOrders.map(order => `
        <div class="order-item">
            <div class="order-header">
                <h4>Order #${order.id}</h4>
                <span class="order-status ${order.status}">${order.status}</span>
            </div>
            <div class="order-details">
                <p><strong>Date:</strong> ${new Date(order.date).toLocaleDateString()}</p>
                <p><strong>Total:</strong> ₹${order.total.toFixed(2)}</p>
                <p><strong>Items:</strong> ${order.items.length} item(s)</p>
            </div>
            <div class="order-items">
                ${order.items.map(item => `
                    <div class="order-product">
                        <span>${item.name} x ${item.quantity}</span>
                        <span>₹${(item.price * item.quantity).toFixed(2)}</span>
                    </div>
                `).join('')}
            </div>
        </div>
    `).join('');
}

function loadWishlistData() {
    if (!wishlistItems) return;
    
    if (wishlist.length === 0) {
        wishlistItems.innerHTML = '<div class="empty-state"><p>Your wishlist is empty</p></div>';
        return;
    }
    
    const wishlistProducts = products.filter(product => wishlist.includes(product.id));
    
    wishlistItems.innerHTML = wishlistProducts.map(product => `
        <div class="wishlist-item">
            <img src="${product.image}" alt="${product.name}">
            <h4>${product.name}</h4>
            <div class="price">₹${product.price.toFixed(2)}</div>
            <div class="wishlist-actions">
                <button class="btn btn-sm" onclick="addToCart(${product.id})">Add to Cart</button>
                <button class="btn btn-outline btn-sm" onclick="removeFromWishlist(${product.id})">Remove</button>
            </div>
        </div>
    `).join('');
}

function loadAddressBook() {
    if (!addressList) return;
    
    const addresses = JSON.parse(localStorage.getItem('mm_addresses') || '[]');
    const userAddresses = addresses.filter(addr => addr.userId === currentUser?.id);
    
    if (userAddresses.length === 0) {
        addressList.innerHTML = '<div class="empty-state"><p>No addresses saved</p></div>';
        return;
    }
    
    addressList.innerHTML = userAddresses.map(address => `
        <div class="address-item ${address.isDefault ? 'default' : ''}">
            <div class="address-actions-btn">
                <button onclick="editAddress(${address.id})" title="Edit">
                    <i class="fas fa-edit"></i>
                </button>
                <button onclick="deleteAddress(${address.id})" title="Delete">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
            <h4>${address.type} Address ${address.isDefault ? '(Default)' : ''}</h4>
            <p>${address.name}</p>
            <p>${address.address}</p>
            <p>${address.city}, ${address.state} - ${address.pincode}</p>
            <p>Phone: ${address.phone}</p>
        </div>
    `).join('');
}

function loadAccountSettings() {
    if (!currentUser) return;
    
    // Load notification preferences
    const notifications = JSON.parse(localStorage.getItem('mm_notifications') || '{}');
    const userNotifications = notifications[currentUser.id] || {
        email: true,
        sms: false,
        promotional: true
    };
    
    const emailNotifications = document.getElementById('emailNotifications');
    const smsNotifications = document.getElementById('smsNotifications');
    const promotionalEmails = document.getElementById('promotionalEmails');
    
    if (emailNotifications) emailNotifications.checked = userNotifications.email;
    if (smsNotifications) smsNotifications.checked = userNotifications.sms;
    if (promotionalEmails) promotionalEmails.checked = userNotifications.promotional;
}

function addNewAddress() {
    // Create a simple modal for adding address
    const addressModal = document.createElement('div');
    addressModal.className = 'address-modal';
    addressModal.innerHTML = `
        <div class="modal-content">
            <div class="modal-header">
                <h3>Add New Address</h3>
                <button class="close-modal" onclick="closeAddressModal()">×</button>
            </div>
            <div class="modal-body">
                <div class="form-group">
                    <label>Address Type</label>
                    <select id="addressType" class="form-control">
                        <option value="Home">Home</option>
                        <option value="Work">Work</option>
                        <option value="Other">Other</option>
                    </select>
                </div>
                <div class="form-group">
                    <label>Full Name</label>
                    <input type="text" id="addressName" class="form-control" required>
                </div>
                <div class="form-group">
                    <label>Address</label>
                    <textarea id="addressText" class="form-control" rows="3" required></textarea>
                </div>
                <div class="form-row">
                    <div class="form-group">
                        <label>City</label>
                        <input type="text" id="addressCity" class="form-control" required>
                    </div>
                    <div class="form-group">
                        <label>State</label>
                        <input type="text" id="addressState" class="form-control" required>
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group">
                        <label>Pincode</label>
                        <input type="text" id="addressPincode" class="form-control" required>
                    </div>
                    <div class="form-group">
                        <label>Phone</label>
                        <input type="tel" id="addressPhone" class="form-control" required>
                    </div>
                </div>
                <div class="form-group">
                    <label class="checkbox-label">
                        <input type="checkbox" id="setAsDefault">
                        Set as default address
                    </label>
                </div>
                <div class="modal-actions">
                    <button class="btn" onclick="saveNewAddress()">Save Address</button>
                    <button class="btn btn-outline" onclick="closeAddressModal()">Cancel</button>
                </div>
            </div>
        </div>
    `;
    
    document.body.appendChild(addressModal);
    addressModal.style.display = 'flex';
}

function saveNewAddress() {
    const addressType = document.getElementById('addressType').value;
    const addressName = document.getElementById('addressName').value;
    const addressText = document.getElementById('addressText').value;
    const addressCity = document.getElementById('addressCity').value;
    const addressState = document.getElementById('addressState').value;
    const addressPincode = document.getElementById('addressPincode').value;
    const addressPhone = document.getElementById('addressPhone').value;
    const setAsDefault = document.getElementById('setAsDefault').checked;
    
    if (!addressName || !addressText || !addressCity || !addressState || !addressPincode || !addressPhone) {
        showToast('Please fill all fields');
        return;
    }
    
    const addresses = JSON.parse(localStorage.getItem('mm_addresses') || '[]');
    const newAddress = {
        id: Date.now(),
        userId: currentUser.id,
        type: addressType,
        name: addressName,
        address: addressText,
        city: addressCity,
        state: addressState,
        pincode: addressPincode,
        phone: addressPhone,
        isDefault: setAsDefault
    };
    
    // If setting as default, remove default from other addresses
    if (setAsDefault) {
        addresses.forEach(addr => {
            if (addr.userId === currentUser.id) {
                addr.isDefault = false;
            }
        });
    }
    
    addresses.push(newAddress);
    localStorage.setItem('mm_addresses', JSON.stringify(addresses));
    
    closeAddressModal();
    loadAddressBook();
    showToast('Address added successfully');
}

function closeAddressModal() {
    const modal = document.querySelector('.address-modal');
    if (modal) {
        modal.remove();
    }
}

function editAddress(addressId) {
    showToast('Edit address feature coming soon!');
}

function deleteAddress(addressId) {
    if (confirm('Are you sure you want to delete this address?')) {
        const addresses = JSON.parse(localStorage.getItem('mm_addresses') || '[]');
        const updatedAddresses = addresses.filter(addr => addr.id !== addressId);
        localStorage.setItem('mm_addresses', JSON.stringify(updatedAddresses));
        loadAddressBook();
        showToast('Address deleted successfully');
    }
}

function changePassword() {
    const currentPassword = document.getElementById('currentPassword').value;
    const newPassword = document.getElementById('newPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    
    if (!currentPassword || !newPassword || !confirmPassword) {
        showToast('Please fill all password fields');
        return;
    }
    
    if (newPassword !== confirmPassword) {
        showToast('New passwords do not match');
        return;
    }
    
    if (newPassword.length < 6) {
        showToast('Password must be at least 6 characters long');
        return;
    }
    
    // In a real app, you would verify the current password
    // For demo purposes, we'll just update it
    if (currentUser) {
        currentUser.password = newPassword;
        const users = JSON.parse(localStorage.getItem('mm_users') || '[]');
        const userIndex = users.findIndex(u => u.id === currentUser.id);
        if (userIndex !== -1) {
            users[userIndex] = currentUser;
            localStorage.setItem('mm_users', JSON.stringify(users));
            
            // Clear password fields
            document.getElementById('currentPassword').value = '';
            document.getElementById('newPassword').value = '';
            document.getElementById('confirmPassword').value = '';
            
            showToast('Password changed successfully');
        }
    }
}

function saveNotificationSettings() {
    if (!currentUser) return;
    
    const emailNotifications = document.getElementById('emailNotifications').checked;
    const smsNotifications = document.getElementById('smsNotifications').checked;
    const promotionalEmails = document.getElementById('promotionalEmails').checked;
    
    const notifications = JSON.parse(localStorage.getItem('mm_notifications') || '{}');
    notifications[currentUser.id] = {
        email: emailNotifications,
        sms: smsNotifications,
        promotional: promotionalEmails
    };
    
    localStorage.setItem('mm_notifications', JSON.stringify(notifications));
    showToast('Notification preferences saved');
}

function downloadUserData() {
    if (!currentUser) return;
    
    const userData = {
        profile: currentUser,
        orders: JSON.parse(localStorage.getItem('mm_orders') || '[]').filter(order => order.userId === currentUser.id),
        addresses: JSON.parse(localStorage.getItem('mm_addresses') || '[]').filter(addr => addr.userId === currentUser.id),
        wishlist: wishlist,
        notifications: JSON.parse(localStorage.getItem('mm_notifications') || '{}')[currentUser.id] || {}
    };
    
    const dataStr = JSON.stringify(userData, null, 2);
    const dataBlob = new Blob([dataStr], {type: 'application/json'});
    const url = URL.createObjectURL(dataBlob);
    
    const link = document.createElement('a');
    link.href = url;
    link.download = `mighty-mahal-data-${currentUser.email}.json`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    
    showToast('Data download started');
}

function deleteAccount() {
    if (!currentUser) return;
    
    const confirmation = prompt('Type "DELETE" to confirm account deletion:');
    if (confirmation !== 'DELETE') {
        showToast('Account deletion cancelled');
        return;
    }
    
    // Remove user data
    const users = JSON.parse(localStorage.getItem('mm_users') || '[]');
    const updatedUsers = users.filter(u => u.id !== currentUser.id);
    localStorage.setItem('mm_users', JSON.stringify(updatedUsers));
    
    // Remove user orders
    const orders = JSON.parse(localStorage.getItem('mm_orders') || '[]');
    const updatedOrders = orders.filter(order => order.userId !== currentUser.id);
    localStorage.setItem('mm_orders', JSON.stringify(updatedOrders));
    
    // Remove user addresses
    const addresses = JSON.parse(localStorage.getItem('mm_addresses') || '[]');
    const updatedAddresses = addresses.filter(addr => addr.userId !== currentUser.id);
    localStorage.setItem('mm_addresses', JSON.stringify(updatedAddresses));
    
    // Clear current session
    localStorage.removeItem('mm_currentUser');
    currentUser = null;
    
    // Redirect to home and close profile
    profileSection.classList.remove('active');
    overlay.classList.remove('active');
    updateProfileUI();
    
    showToast('Account deleted successfully');
}

function removeFromWishlist(productId) {
    const index = wishlist.indexOf(productId);
    if (index > -1) {
        wishlist.splice(index, 1);
        localStorage.setItem('mm_wishlist', JSON.stringify(wishlist));
        updateWishlistCount();
        loadWishlistData();
        showToast('Removed from wishlist');
    }
}

// Profile Sidebar Functions
function openProfileSidebar() {
    if (!profileSidebar) return;
    
    profileSidebar.classList.add('active');
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    // Update user info in sidebar
    updateSidebarUserInfo();
    
    // Load dashboard by default
    showProfileSection('dashboard');
}

function closeProfileSidebarHandler() {
    if (!profileSidebar) return;
    
    profileSidebar.classList.remove('active');
    overlay.classList.remove('active');
    document.body.style.overflow = '';
}

function updateSidebarUserInfo() {
    if (currentUser && sidebarUserName && sidebarUserEmail) {
        sidebarUserName.textContent = `Welcome, ${currentUser.name}`;
        sidebarUserEmail.textContent = currentUser.email;
    }
}

function showProfileSection(sectionName) {
    // Hide all sections
    const allSections = document.querySelectorAll('.profile-content-section');
    allSections.forEach(section => {
        section.classList.remove('active');
    });
    
    // Show selected section
    const targetSection = document.getElementById(sectionName + 'Section');
    if (targetSection) {
        targetSection.classList.add('active');
        
        // Load section-specific data
        switch(sectionName) {
            case 'dashboard':
                loadDashboardData();
                break;
            case 'passwordReset':
                loadPasswordResetSection();
                break;
            case 'accountSettings':
                loadAccountSettingsData();
                break;
            case 'siteAnalytics':
                loadSiteAnalytics();
                break;
            case 'addressValidation':
                loadAddressValidation();
                break;
            case 'orderHistory':
                loadSidebarOrderHistory();
                break;
            case 'wishlist':
                loadSidebarWishlist();
                break;
        }
    }
}

function loadDashboardData() {
    if (!currentUser) return;
    
    // Load dashboard statistics
    const orders = JSON.parse(localStorage.getItem('mm_orders') || '[]');
    const userOrders = orders.filter(order => order.userId === currentUser.id);
    const totalSpent = userOrders.reduce((sum, order) => sum + order.total, 0);
    
    // Update stats
    const totalOrdersEl = document.getElementById('totalOrders');
    const totalWishlistEl = document.getElementById('totalWishlist');
    const totalSpentEl = document.getElementById('totalSpent');
    
    if (totalOrdersEl) totalOrdersEl.textContent = userOrders.length;
    if (totalWishlistEl) totalWishlistEl.textContent = wishlist.length;
    if (totalSpentEl) totalSpentEl.textContent = `₹${totalSpent.toFixed(2)}`;
    
    // Load recent activity
    loadRecentActivity();
}

function loadRecentActivity() {
    const recentActivityList = document.getElementById('recentActivityList');
    if (!recentActivityList || !currentUser) return;
    
    const orders = JSON.parse(localStorage.getItem('mm_orders') || '[]');
    const userOrders = orders.filter(order => order.userId === currentUser.id)
                           .sort((a, b) => new Date(b.date) - new Date(a.date))
                           .slice(0, 5);
    
    if (userOrders.length === 0) {
        recentActivityList.innerHTML = '<p>No recent activity</p>';
        return;
    }
    
    recentActivityList.innerHTML = userOrders.map(order => `
        <div class="activity-item">
            <div class="activity-icon">
                <i class="fas fa-shopping-bag"></i>
            </div>
            <div class="activity-details">
                <p><strong>Order #${order.id}</strong></p>
                <p>₹${order.total.toFixed(2)} • ${new Date(order.date).toLocaleDateString()}</p>
            </div>
            <div class="activity-status">
                <span class="status ${order.status}">${order.status}</span>
            </div>
        </div>
    `).join('');
}

function loadPasswordResetSection() {
    // Add password strength checking
    const newPasswordInput = document.getElementById('newPasswordReset');
    const passwordStrength = document.getElementById('passwordStrength');
    const requirements = {
        length: document.getElementById('req-length'),
        uppercase: document.getElementById('req-uppercase'),
        lowercase: document.getElementById('req-lowercase'),
        number: document.getElementById('req-number'),
        special: document.getElementById('req-special')
    };
    
    if (newPasswordInput && passwordStrength) {
        newPasswordInput.addEventListener('input', (e) => {
            const password = e.target.value;
            const strength = checkPasswordStrength(password);
            
            passwordStrength.className = `password-strength ${strength.level}`;
            
            // Update requirements
            if (requirements.length) {
                requirements.length.classList.toggle('valid', password.length >= 8);
            }
            if (requirements.uppercase) {
                requirements.uppercase.classList.toggle('valid', /[A-Z]/.test(password));
            }
            if (requirements.lowercase) {
                requirements.lowercase.classList.toggle('valid', /[a-z]/.test(password));
            }
            if (requirements.number) {
                requirements.number.classList.toggle('valid', /\d/.test(password));
            }
            if (requirements.special) {
                requirements.special.classList.toggle('valid', /[!@#$%^&*(),.?":{}|<>]/.test(password));
            }
        });
    }
    
    // Add reset password button handler
    const resetPasswordBtn = document.getElementById('resetPasswordBtn');
    if (resetPasswordBtn) {
        resetPasswordBtn.addEventListener('click', handlePasswordReset);
    }
}

function checkPasswordStrength(password) {
    let score = 0;
    
    if (password.length >= 8) score++;
    if (/[A-Z]/.test(password)) score++;
    if (/[a-z]/.test(password)) score++;
    if (/\d/.test(password)) score++;
    if (/[!@#$%^&*(),.?":{}|<>]/.test(password)) score++;
    
    if (score < 3) return { level: 'weak', score };
    if (score < 5) return { level: 'medium', score };
    return { level: 'strong', score };
}

function handlePasswordReset() {
    const currentPassword = document.getElementById('currentPasswordReset').value;
    const newPassword = document.getElementById('newPasswordReset').value;
    const confirmPassword = document.getElementById('confirmPasswordReset').value;
    
    if (!currentPassword || !newPassword || !confirmPassword) {
        showToast('Please fill all password fields');
        return;
    }
    
    if (newPassword !== confirmPassword) {
        showToast('New passwords do not match');
        return;
    }
    
    const strength = checkPasswordStrength(newPassword);
    if (strength.score < 3) {
        showToast('Password is too weak. Please meet all requirements.');
        return;
    }
    
    // In a real app, verify current password
    if (currentUser) {
        currentUser.password = newPassword;
        const users = JSON.parse(localStorage.getItem('mm_users') || '[]');
        const userIndex = users.findIndex(u => u.id === currentUser.id);
        if (userIndex !== -1) {
            users[userIndex] = currentUser;
            localStorage.setItem('mm_users', JSON.stringify(users));
            
            // Clear fields
            document.getElementById('currentPasswordReset').value = '';
            document.getElementById('newPasswordReset').value = '';
            document.getElementById('confirmPasswordReset').value = '';
            
            showToast('Password reset successfully');
        }
    }
}

function loadAccountSettingsData() {
    if (!currentUser) return;
    
    // Load personal info
    const settingsName = document.getElementById('settingsName');
    const settingsEmail = document.getElementById('settingsEmail');
    const settingsPhone = document.getElementById('settingsPhone');
    const settingsDOB = document.getElementById('settingsDOB');
    const settingsAddress = document.getElementById('settingsAddress');
    
    if (settingsName) settingsName.value = currentUser.name || '';
    if (settingsEmail) settingsEmail.value = currentUser.email || '';
    if (settingsPhone) settingsPhone.value = currentUser.phone || '';
    if (settingsDOB) settingsDOB.value = currentUser.dob || '';
    if (settingsAddress) settingsAddress.value = currentUser.address || '';
    
    // Load notification preferences
    const notifications = JSON.parse(localStorage.getItem('mm_notifications') || '{}');
    const userNotifications = notifications[currentUser.id] || {};
    
    const emailOrderUpdates = document.getElementById('emailOrderUpdates');
    const emailPromotions = document.getElementById('emailPromotions');
    const emailNewsletter = document.getElementById('emailNewsletter');
    const smsOrderUpdates = document.getElementById('smsOrderUpdates');
    const smsDelivery = document.getElementById('smsDelivery');
    
    if (emailOrderUpdates) emailOrderUpdates.checked = userNotifications.emailOrders !== false;
    if (emailPromotions) emailPromotions.checked = userNotifications.emailPromotions === true;
    if (emailNewsletter) emailNewsletter.checked = userNotifications.emailNewsletter !== false;
    if (smsOrderUpdates) smsOrderUpdates.checked = userNotifications.smsOrders === true;
    if (smsDelivery) smsDelivery.checked = userNotifications.smsDelivery !== false;
    
    // Add save handlers
    const savePersonalSettings = document.getElementById('savePersonalSettings');
    const saveNotificationSettings = document.getElementById('saveNotificationSettings');
    const savePrivacySettings = document.getElementById('savePrivacySettings');
    
    if (savePersonalSettings) {
        savePersonalSettings.addEventListener('click', handleSavePersonalSettings);
    }
    if (saveNotificationSettings) {
        saveNotificationSettings.addEventListener('click', handleSaveNotificationSettings);
    }
    if (savePrivacySettings) {
        savePrivacySettings.addEventListener('click', handleSavePrivacySettings);
    }
}

function handleSavePersonalSettings() {
    if (!currentUser) return;
    
    const settingsName = document.getElementById('settingsName');
    const settingsPhone = document.getElementById('settingsPhone');
    const settingsDOB = document.getElementById('settingsDOB');
    const settingsAddress = document.getElementById('settingsAddress');
    
    currentUser.name = settingsName?.value || currentUser.name;
    currentUser.phone = settingsPhone?.value || currentUser.phone;
    currentUser.dob = settingsDOB?.value || currentUser.dob;
    currentUser.address = settingsAddress?.value || currentUser.address;
    
    // Update in storage
    const users = JSON.parse(localStorage.getItem('mm_users') || '[]');
    const userIndex = users.findIndex(u => u.id === currentUser.id);
    if (userIndex !== -1) {
        users[userIndex] = currentUser;
        localStorage.setItem('mm_users', JSON.stringify(users));
        saveUserData();
        updateProfileUI();
        updateSidebarUserInfo();
        showToast('Personal settings saved successfully');
    }
}

function handleSaveNotificationSettings() {
    if (!currentUser) return;
    
    const notifications = JSON.parse(localStorage.getItem('mm_notifications') || '{}');
    
    notifications[currentUser.id] = {
        emailOrders: document.getElementById('emailOrderUpdates')?.checked || false,
        emailPromotions: document.getElementById('emailPromotions')?.checked || false,
        emailNewsletter: document.getElementById('emailNewsletter')?.checked || false,
        smsOrders: document.getElementById('smsOrderUpdates')?.checked || false,
        smsDelivery: document.getElementById('smsDelivery')?.checked || false
    };
    
    localStorage.setItem('mm_notifications', JSON.stringify(notifications));
    showToast('Notification preferences saved');
}

function handleSavePrivacySettings() {
    showToast('Privacy settings saved');
}

function loadSiteAnalytics() {
    // Load analytics data
    loadShoppingBehavior();
    loadUsageStatistics();
}

function loadShoppingBehavior() {
    if (!currentUser) return;
    
    const orders = JSON.parse(localStorage.getItem('mm_orders') || '[]');
    const userOrders = orders.filter(order => order.userId === currentUser.id);
    
    // Calculate category spending
    const categorySpending = {};
    userOrders.forEach(order => {
        order.items.forEach(item => {
            const product = products.find(p => p.id === item.id);
            if (product) {
                const category = product.category;
                categorySpending[category] = (categorySpending[category] || 0) + (item.price * item.quantity);
            }
        });
    });
    
    // Update chart (simplified version)
    const totalSpent = Object.values(categorySpending).reduce((sum, amount) => sum + amount, 0);
    if (totalSpent > 0) {
        Object.entries(categorySpending).forEach(([category, amount]) => {
            const percentage = Math.round((amount / totalSpent) * 100);
            // Update chart bars if they exist
        });
    }
}

function loadUsageStatistics() {
    // Load usage statistics from localStorage or generate mock data
    const stats = JSON.parse(localStorage.getItem('mm_user_stats') || '{}');
    const userStats = stats[currentUser?.id] || {
        totalVisits: Math.floor(Math.random() * 50) + 10,
        avgSessionTime: Math.floor(Math.random() * 30) + 5,
        pagesViewed: Math.floor(Math.random() * 200) + 50
    };
    
    const totalVisits = document.getElementById('totalVisits');
    const avgSessionTime = document.getElementById('avgSessionTime');
    const pagesViewed = document.getElementById('pagesViewed');
    
    if (totalVisits) totalVisits.textContent = userStats.totalVisits;
    if (avgSessionTime) avgSessionTime.textContent = `${userStats.avgSessionTime} min`;
    if (pagesViewed) pagesViewed.textContent = userStats.pagesViewed;
}

function loadAddressValidation() {
    const validateAddressBtn = document.getElementById('validateAddressBtn');
    const savedAddressList = document.getElementById('savedAddressList');
    const addNewAddressBtn = document.getElementById('addNewAddressBtn');
    
    if (validateAddressBtn) {
        validateAddressBtn.addEventListener('click', handleAddressValidation);
    }
    
    if (addNewAddressBtn) {
        addNewAddressBtn.addEventListener('click', addNewAddress);
    }
    
    // Load saved addresses
    loadSavedAddresses();
}

function handleAddressValidation() {
    const addressToValidate = document.getElementById('addressToValidate');
    const validationResult = document.getElementById('validationResult');
    const resultContent = document.getElementById('resultContent');
    
    if (!addressToValidate || !addressToValidate.value.trim()) {
        showToast('Please enter an address to validate');
        return;
    }
    
    // Mock validation (in real app, use a geocoding API)
    const address = addressToValidate.value.trim();
    const isValid = address.length > 10 && address.includes(',');
    
    if (validationResult && resultContent) {
        validationResult.style.display = 'block';
        validationResult.className = `validation-result ${isValid ? 'success' : 'error'}`;
        
        if (isValid) {
            resultContent.innerHTML = `
                <div class="validation-success">
                    <i class="fas fa-check-circle"></i>
                    <h4>Address Validated Successfully</h4>
                    <p><strong>Formatted Address:</strong></p>
                    <p>${address}</p>
                    <p><strong>Coordinates:</strong> ${(Math.random() * 90).toFixed(6)}, ${(Math.random() * 180).toFixed(6)}</p>
                    <button class="btn btn-sm" onclick="saveValidatedAddress('${address}')">Save This Address</button>
                </div>
            `;
        } else {
            resultContent.innerHTML = `
                <div class="validation-error">
                    <i class="fas fa-exclamation-triangle"></i>
                    <h4>Address Validation Failed</h4>
                    <p>The address could not be validated. Please check and try again.</p>
                    <ul>
                        <li>Ensure the address includes street, city, and state</li>
                        <li>Use proper formatting with commas</li>
                        <li>Check for spelling errors</li>
                    </ul>
                </div>
            `;
        }
    }
}

function saveValidatedAddress(address) {
    // Implementation for saving validated address
    showToast('Address saved successfully');
    loadSavedAddresses();
}

function loadSavedAddresses() {
    const savedAddressList = document.getElementById('savedAddressList');
    if (!savedAddressList || !currentUser) return;
    
    const addresses = JSON.parse(localStorage.getItem('mm_addresses') || '[]');
    const userAddresses = addresses.filter(addr => addr.userId === currentUser.id);
    
    if (userAddresses.length === 0) {
        savedAddressList.innerHTML = '<p>No saved addresses</p>';
        return;
    }
    
    savedAddressList.innerHTML = userAddresses.map(address => `
        <div class="address-item ${address.isDefault ? 'default' : ''}">
            <h4>${address.type} Address ${address.isDefault ? '(Default)' : ''}</h4>
            <p>${address.name}</p>
            <p>${address.address}</p>
            <p>${address.city}, ${address.state} - ${address.pincode}</p>
            <p>Phone: ${address.phone}</p>
            <div class="address-actions">
                <button class="btn btn-sm" onclick="validateExistingAddress(${address.id})">Validate</button>
                <button class="btn btn-outline btn-sm" onclick="editAddress(${address.id})">Edit</button>
                <button class="btn btn-danger btn-sm" onclick="deleteAddress(${address.id})">Delete</button>
            </div>
        </div>
    `).join('');
}

function validateExistingAddress(addressId) {
    showToast('Address validation in progress...');
    // Mock validation
    setTimeout(() => {
        showToast('Address validated successfully');
    }, 1000);
}

function loadSidebarOrderHistory() {
    const sidebarOrderList = document.getElementById('sidebarOrderList');
    if (!sidebarOrderList || !currentUser) return;
    
    const orders = JSON.parse(localStorage.getItem('mm_orders') || '[]');
    const userOrders = orders.filter(order => order.userId === currentUser.id);
    
    if (userOrders.length === 0) {
        sidebarOrderList.innerHTML = '<div class="empty-state"><p>No orders found</p></div>';
        return;
    }
    
    sidebarOrderList.innerHTML = userOrders.map(order => `
        <div class="order-item">
            <div class="order-header">
                <h4>Order #${order.id}</h4>
                <span class="order-status ${order.status}">${order.status}</span>
            </div>
            <div class="order-details">
                <p><strong>Date:</strong> ${new Date(order.date).toLocaleDateString()}</p>
                <p><strong>Total:</strong> ₹${order.total.toFixed(2)}</p>
                <p><strong>Items:</strong> ${order.items.length} item(s)</p>
            </div>
        </div>
    `).join('');
}

function loadSidebarWishlist() {
    const sidebarWishlistItems = document.getElementById('sidebarWishlistItems');
    if (!sidebarWishlistItems) return;
    
    if (wishlist.length === 0) {
        sidebarWishlistItems.innerHTML = '<div class="empty-state"><p>Your wishlist is empty</p></div>';
        return;
    }
    
    const wishlistProducts = products.filter(product => wishlist.includes(product.id));
    
    sidebarWishlistItems.innerHTML = wishlistProducts.map(product => `
        <div class="wishlist-item">
            <img src="${product.image}" alt="${product.name}">
            <h4>${product.name}</h4>
            <div class="price">₹${product.price.toFixed(2)}</div>
            <div class="wishlist-actions">
                <button class="btn btn-sm" onclick="addToCart(${product.id})">Add to Cart</button>
                <button class="btn btn-outline btn-sm" onclick="removeFromWishlist(${product.id})">Remove</button>
            </div>
        </div>
    `).join('');
}

function logoutUser() {
    localStorage.removeItem('mm_currentUser');
    currentUser = null;
    closeProfileSidebarHandler();
    updateProfileUI();
    showToast('Logged out successfully');
}

function checkout() {
    if (cart.length === 0) {
        showToast('Your cart is empty');
        return;
    }

    if (!currentUser) {
        showToast('Please login to checkout');
        switchAuthTab('login');
        authModal.classList.add('active');
        overlay.classList.add('active');
        return;
    }

    paymentModal.classList.add('active');
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function placeOrder() {
    if (cart.length === 0) {
        showToast('Your cart is empty');
        return;
    }

    if (!currentUser) {
        showToast('Please login to place order');
        return;
    }

    // Calculate total
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    // Create order
    const order = {
        id: Date.now(),
        userId: currentUser.id,
        items: [...cart],
        total,
        date: new Date().toISOString(),
        status: 'Processing',
        paymentMethod: 'Cash on Delivery'
    };

    // Save order
    orders.push(order);
    saveUserData();

    // Generate invoice
    generateInvoice(order);

    // Clear cart
    cart = [];
    updateCartCount();

    // Close modals
    paymentModal.classList.remove('active');
    cartSidebar.classList.remove('active');
    overlay.classList.remove('active');
    document.body.style.overflow = '';

    // Update order history
    loadOrderHistory();

    showToast('Order placed successfully!');
}

function generateInvoice(order) {
    // Create a new jsPDF instance
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    // Add logo and title
    doc.setFontSize(22);
    doc.text('Mighty Mahal', 105, 20, null, null, 'center');
    doc.setFontSize(16);
    doc.text('Order Invoice', 105, 30, null, null, 'center');
    doc.setFontSize(10);
    doc.text(`Invoice #: ${order.id}`, 105, 40, null, null, 'center');
    doc.text(`Date: ${new Date(order.date).toLocaleDateString()}`, 105, 45, null, null, 'center');

    // Customer information
    doc.setFontSize(12);
    doc.text('Customer Information:', 20, 60);
    doc.setFontSize(10);
    doc.text(`Name: ${currentUser.name}`, 20, 70);
    doc.text(`Email: ${currentUser.email}`, 20, 75);
    doc.text(`Address: ${currentUser.address}`, 20, 80);
    doc.text(`Phone: ${currentUser.phone}`, 20, 85);

    // Order details
    doc.setFontSize(12);
    doc.text('Order Details:', 20, 95);

    // Table header
    doc.setFillColor(44, 62, 80);
    doc.setTextColor(255, 255, 255);
    doc.rect(20, 100, 170, 10, 'F');
    doc.text('Product', 25, 106);
    doc.text('Price', 120, 106);
    doc.text('Qty', 150, 106);
    doc.text('Total', 170, 106);

    // Reset text color
    doc.setTextColor(0, 0, 0);

    // Order items
    let y = 115;
    order.items.forEach(item => {
        doc.text(item.name, 25, y);
        doc.text(`₹${item.price.toLocaleString()}`, 120, y);
        doc.text(item.quantity.toString(), 150, y);
        doc.text(`₹${(item.price * item.quantity).toLocaleString()}`, 170, y);
        y += 7;
    });

    // Order summary
    doc.setFontSize(12);
    doc.text(`Subtotal: ₹${order.total.toLocaleString()}`, 150, y + 10);
    doc.text(`Tax: ₹${(order.total * 0.18).toLocaleString()}`, 150, y + 20);
    doc.text(`Shipping: ₹0.00`, 150, y + 30);
    doc.text(`Grand Total: ₹${(order.total * 1.18).toLocaleString()}`, 150, y + 40);

    // Payment method
    doc.text(`Payment Method: ${order.paymentMethod}`, 20, y + 50);

    // Save the PDF
    doc.save(`invoice-${order.id}.pdf`);
}

function loadOrderHistory() {
    if (!currentUser) return;

    const userOrders = orders.filter(order => order.userId === currentUser.id);

    if (userOrders.length === 0) {
        orderList.innerHTML = '<p style="text-align:center; padding:30px;">You have no orders yet</p>';
        return;
    }

    orderList.innerHTML = '';

    userOrders.sort((a, b) => new Date(b.date) - new Date(a.date)).forEach(order => {
        const orderCard = document.createElement('div');
        orderCard.className = 'order-card';

        const orderDate = new Date(order.date).toLocaleDateString();
        const orderTime = new Date(order.date).toLocaleTimeString();

        orderCard.innerHTML = `
                    <div class="order-header">
                        <div>
                            <strong>Order #${order.id}</strong>
                            <div>${orderDate} at ${orderTime}</div>
                        </div>
                        <div>
                            <span class="order-status">${order.status}</span>
                        </div>
                    </div>
                    <div class="order-details">
                        <div class="order-items">
                            ${order.items.map(item => `
                                <div class="order-item">
                                    <div class="order-item-img">
                                        <i class="${item.icon}"></i>
                                    </div>
                                    <div>
                                        <div>${item.name}</div>
                                        <div>₹${item.price.toLocaleString()} × ${item.quantity}</div>
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                    <div class="order-summary">
                        <div>Total:</div>
                        <div>₹${order.total.toLocaleString()}</div>
                    </div>
                    <div class="order-actions">
                        <button class="invoice-btn" data-id="${order.id}">Download Invoice</button>
                    </div>
                `;

        orderList.appendChild(orderCard);
    });

    // Add event listeners to invoice buttons
    document.querySelectorAll('.invoice-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const orderId = parseInt(e.target.dataset.id);
            const order = orders.find(o => o.id === orderId);
            if (order) {
                generateInvoice(order);
            }
        });
    });
}


// Add these variables at the top with other DOM elements
const confirmationModal = document.getElementById('confirmationModal');
const closeConfirmationModal = document.getElementById('closeConfirmationModal');
const downloadInvoiceBtn = document.getElementById('downloadInvoiceBtn');
const continueShoppingBtn = document.getElementById('continueShoppingBtn');
const orderIdPlaceholder = document.getElementById('orderIdPlaceholder');

// Add these event listeners in the DOMContentLoaded event
closeConfirmationModal.addEventListener('click', closeConfirmationModalHandler);
downloadInvoiceBtn.addEventListener('click', downloadInvoiceHandler);
continueShoppingBtn.addEventListener('click', continueShoppingHandler);

// Add these new functions
function closeConfirmationModalHandler() {
    confirmationModal.classList.remove('active');
    overlay.classList.remove('active');
    document.body.style.overflow = '';
}

function downloadInvoiceHandler() {
    if (currentOrder) {
        generateInvoice(currentOrder);
    }
    closeConfirmationModalHandler();
}

function continueShoppingHandler() {
    closeConfirmationModalHandler();
    // Reset cart
    cart = [];
    updateCartCount();
    // Close any open modals
    cartSidebar.classList.remove('active');
    paymentModal.classList.remove('active');
    // Scroll to top
    window.scrollTo(0, 0);
}

// Modify the placeOrder function
let currentOrder = null; // Add this at the top with other variables

function placeOrder() {
    if (cart.length === 0) {
        showToast('Your cart is empty');
        return;
    }

    if (!currentUser) {
        showToast('Please login to place order');
        return;
    }

    // Calculate total
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    // Create order
    const order = {
        id: Date.now(),
        userId: currentUser.id,
        items: [...cart],
        total,
        date: new Date().toISOString(),
        status: 'Processing',
        paymentMethod: 'Cash on Delivery'
    };

    // Save order
    orders.push(order);
    saveUserData();
    currentOrder = order; // Store for later use

    // Show confirmation modal instead of downloading invoice
    orderIdPlaceholder.textContent = `#${order.id}`;
    paymentModal.classList.remove('active');
    confirmationModal.classList.add('active');

    // Clear cart but don't update UI yet (let user see confirmation)
    // cart = []; - We'll clear it when they continue shopping
    
    showToast('Order placed successfully!');
}
