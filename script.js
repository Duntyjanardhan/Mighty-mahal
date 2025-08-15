// Product Data (40+ products with sizes added)
const products = [
    { id: 1, name: "Men's Casual Shirt", price: 1599, category: "fashion", rating: 4.5, reviews: 128, image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80", badge: "New", sizes: ['S', 'M', 'L', 'XL'] },
    { id: 2, name: "Women's Summer Dress", price: 2499, category: "fashion", rating: 4.7, reviews: 96, image: "https://images.unsplash.com/photo-1529903384028-929ae4dcc8b3?q=80", badge: "Sale", sizes: ['S', 'M', 'L'] },
    { id: 3, name: "Designer Jeans", price: 2299, category: "fashion", rating: 4.3, reviews: 245, image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80", sizes: ['28', '30', '32', '34'] },
    { id: 4, name: "Leather Jacket", price: 5999, category: "fashion", rating: 4.8, reviews: 87, image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?q=80", badge: "Premium", sizes: ['S', 'M', 'L', 'XL'] },
    { id: 5, name: "Women's Handbag", price: 3499, category: "fashion", rating: 4.6, reviews: 142, image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80" },
    { id: 6, name: "Men's Formal Suit", price: 8499, oldPrice: 10999, category: "fashion", rating: 4.9, reviews: 78, image: "https://images.unsplash.com/photo-1598808503746-f34cfb6c2524?q=80", badge: "-20%", sizes: ['38', '40', '42', '44'] },
    { id: 7, name: "Women's High Heels", price: 2799, category: "fashion", rating: 4.2, reviews: 201, image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80", sizes: ['6', '7', '8', '9'] },
    { id: 8, name: "Unisex Sneakers", price: 3299, category: "fashion", rating: 4.5, reviews: 112, image: "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?q=80", sizes: ['6', '7', '8', '9', '10'] },
    { id: 9, name: "Designer Sunglasses", price: 1999, oldPrice: 2599, category: "fashion", rating: 4.4, reviews: 189, image: "https://images.unsplash.com/photo-1577803645773-f96470509666?q=80", badge: "Sale" },
    { id: 10, name: "Women's Winter Coat", price: 4999, category: "fashion", rating: 4.7, reviews: 94, image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80", sizes: ['S', 'M', 'L'] },
    { id: 11, name: "Men's Sportswear Set", price: 2999, category: "fashion", rating: 4.3, reviews: 67, image: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80", sizes: ['S', 'M', 'L', 'XL'] },
    { id: 12, name: "Designer Watch", price: 8999, category: "fashion", rating: 4.9, reviews: 123, image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80", badge: "Luxury" },
    { id: 13, name: "Women's Jewelry Set", price: 4599, category: "fashion", rating: 4.8, reviews: 56, image: "https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?q=80" },
    { id: 14, name: "Men's Casual Shoes", price: 2499, oldPrice: 3299, category: "fashion", rating: 4.1, reviews: 88, image: "https://images.unsplash.com/photo-1605812860427-4024433a70fd?q=80", badge: "-25%", sizes: ['8', '9', '10', '11'] },
    { id: 15, name: "Kids T-Shirt Pack", price: 1499, category: "fashion", rating: 4.6, reviews: 45, image: "https://images.unsplash.com/photo-1609505848916-c9f6f4bd0b57?q=80", sizes: ['3-4', '5-6', '7-8'] },
    { id: 16, name: "Designer Handbag", price: 6999, category: "fashion", rating: 4.9, reviews: 167, image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80" },
    { id: 17, name: "Women's Leggings", price: 1299, category: "fashion", rating: 4.4, reviews: 102, image: "https://images.unsplash.com/photo-1609505848916-c9f6f4bd0b57?q=80", sizes: ['S', 'M', 'L'] },
    { id: 18, name: "Men's Wallet", price: 1799, category: "fashion", rating: 4.3, reviews: 73, image: "https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?q=80" },
    { id: 19, name: "Women's Scarf Set", price: 999, oldPrice: 1499, category: "fashion", rating: 4.5, reviews: 134, image: "https://images.unsplash.com/photo-1601924994987-69e26d50dc26?q=80", badge: "-33%" },
    { id: 20, name: "Designer Belt", price: 1999, category: "fashion", rating: 4.2, reviews: 89, image: "https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?q=80", sizes: ['30', '32', '34', '36'] }
];

// Shopping cart
let cart = [];
let wishlist = [];
let currentUser = null;
let orders = [];
let currentOrder = null;

// DOM elements
const productGrid = document.getElementById('productGrid');
const cartIcon = document.getElementById('cartIcon');
const cartSidebar = document.getElementById('cartSidebar');
const closeCart = document.getElementById('closeCart');
const cartBackBtn = document.getElementById('cartBackBtn');
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
const addressModal = document.getElementById('addressModal');
const closeAddressModal = document.getElementById('closeAddressModal');
const validateAddressContinueBtn = document.getElementById('validateAddressContinueBtn');
const paymentModal = document.getElementById('paymentModal');
const closePaymentModal = document.getElementById('closePaymentModal');
const placeOrderBtn = document.getElementById('placeOrderBtn');
const confirmationModal = document.getElementById('confirmationModal');
const closeConfirmationModal = document.getElementById('closeConfirmationModal');
const downloadInvoiceBtn = document.getElementById('downloadInvoiceBtn');
const continueShoppingBtn = document.getElementById('continueShoppingBtn');
const orderIdPlaceholder = document.getElementById('orderIdPlaceholder');

// Profile Sidebar Elements
const profileSidebar = document.getElementById('profileSidebar');
const closeProfileSidebar = document.getElementById('closeProfileSidebar');
const profileSidebarItems = document.querySelectorAll('.profile-sidebar-item');
const sidebarUserName = document.getElementById('sidebarUserName');
const sidebarUserEmail = document.getElementById('sidebarUserEmail');

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    loadUserData();
    renderProducts(products);
    updateCartCount();
    updateWishlistCount();

    // Event listeners
    cartIcon.addEventListener('click', openCart);
    closeCart.addEventListener('click', closeCartHandler);
    if (cartBackBtn) {
        cartBackBtn.addEventListener('click', closeCartHandler);
    }
    overlay.addEventListener('click', () => {
        closeCartHandler();
        closeProfileSidebarHandler();
        closeAuthModalHandler();
        closePaymentModalHandler();
        closeConfirmationModalHandler();
        // Ensure address modal is also closed if overlay is clicked
        addressModal.classList.remove('active');
    });
    
    wishlistIcon.addEventListener('click', () => {
        if (currentUser) {
            openProfileSidebar();
            showProfileSection('wishlist');
        } else {
            showToast('Please login to view your wishlist');
            toggleAuthModal();
        }
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
    profileIcon.addEventListener('click', () => {
        if (currentUser) {
            openProfileSidebar();
        } else {
            toggleAuthModal();
        }
    });
    
    closeAuthModal.addEventListener('click', closeAuthModalHandler);
    loginTab.addEventListener('click', () => switchAuthTab('login'));
    registerTab.addEventListener('click', () => switchAuthTab('register'));
    loginBtn.addEventListener('click', loginUser);
    registerBtn.addEventListener('click', registerUser);
    
    // Modified checkout button listener to use enhancedCheckout
    checkoutBtn.removeEventListener('click', checkout); // Remove the old listener if it exists
    checkoutBtn.addEventListener('click', enhancedCheckout); // Add the new enhanced listener

    closePaymentModal.addEventListener('click', closePaymentModalHandler);
    placeOrderBtn.addEventListener('click', placeOrder);
    
    // Close address modal listener
    closeAddressModal.addEventListener('click', () => {
        addressModal.classList.remove('active');
        overlay.classList.remove('active');
        document.body.style.overflow = '';
    });

    document.getElementById('sameAsShipping').addEventListener('change', (e) => {
        document.getElementById('billingSection').style.display = e.target.checked ? 'none' : 'block';
    });

    // **Crucial Change Here:**
    // This event listener now handles the transition from address validation to payment.
    validateAddressContinueBtn.addEventListener('click', () => {
        const shippingName = document.getElementById('shippingName').value.trim();
        const shippingPhone = document.getElementById('shippingPhone').value.trim();
        const shippingAddress1 = document.getElementById('shippingAddress1').value.trim();
        const shippingCity = document.getElementById('shippingCity').value.trim();
        const shippingState = document.getElementById('shippingState').value;
        const shippingZip = document.getElementById('shippingZip').value.trim();
    
        if (!shippingName || !shippingPhone || !shippingAddress1 || !shippingCity || !shippingState || !shippingZip) {
            showToast('Please complete all required shipping details');
            return;
        }
    
        if (!document.getElementById('sameAsShipping').checked) {
            const billingName = document.getElementById('billingName').value.trim();
            const billingPhone = document.getElementById('billingPhone').value.trim();
            const billingAddress1 = document.getElementById('billingAddress1').value.trim();
            const billingCity = document.getElementById('billingCity').value.trim();
            const billingState = document.getElementById('billingState').value;
            const billingZip = document.getElementById('billingZip').value.trim();
    
            if (!billingName || !billingPhone || !billingAddress1 || !billingCity || !billingState || !billingZip) {
                showToast('Please complete all required billing details');
                return;
            }
        }
        
        // Save address information
        currentUser.shipping = { 
            shippingName, 
            shippingPhone, 
            shippingAddress1, 
            shippingCity, 
            shippingState, 
            shippingZip 
        };
            
        if (!document.getElementById('sameAsShipping').checked) {
            currentUser.billing = {
                billingName: document.getElementById('billingName').value.trim(),
                billingPhone: document.getElementById('billingPhone').value.trim(),
                billingAddress1: document.getElementById('billingAddress1').value.trim(),
                billingCity: document.getElementById('billingCity').value.trim(),
                billingState: document.getElementById('billingState').value,
                billingZip: document.getElementById('billingZip').value.trim()
            };
        } else {
            currentUser.billing = currentUser.shipping;
        }
        saveUserData();
        
        // Close address modal and open payment modal after successful validation
        addressModal.classList.remove('active');
        // A small timeout can help with smooth transitions, though not strictly necessary
        setTimeout(() => {
            paymentModal.classList.add('active');
            overlay.classList.add('active'); // Ensure overlay is active for payment modal
            document.body.style.overflow = 'hidden'; // Keep body scroll locked
        }, 300);
    });
    

    // Order confirmation modal
    closeConfirmationModal.addEventListener('click', closeConfirmationModalHandler);
    downloadInvoiceBtn.addEventListener('click', downloadInvoiceHandler);
    continueShoppingBtn.addEventListener('click', continueShoppingHandler);

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
}); // End of DOMContentLoaded

// Render products with size selection
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
                ${product.sizes ? `
                <div class="product-sizes">
                    <select class="size-select" data-id="${product.id}">
                        ${product.sizes.map(size => `<option value="${size}">${size}</option>`).join('')}
                    </select>
                </div>
                ` : ''}
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
}

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

// Add to cart with size selection
function addToCart(e) {
    const productId = parseInt(e.target.dataset.id);
    const product = products.find(p => p.id === productId);
    const sizeSelect = e.target.closest('.product-card').querySelector('.size-select');
    const size = sizeSelect ? sizeSelect.value : null;

    // Check if product is already in cart with same size
    const existingItem = cart.find(item => item.id === productId && (!size || item.size === size));

    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            quantity: 1,
            image: product.image,
            size: size
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
    if (!currentUser) {
        showToast('Please login to add items to wishlist');
        toggleAuthModal();
        return;
    }

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
    localStorage.setItem('mm_cart', JSON.stringify(cart));
}

// Update wishlist count
function updateWishlistCount() {
    wishlistCount.textContent = wishlist.length;
    localStorage.setItem('mm_wishlist', JSON.stringify(wishlist));
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

// Render cart items with size information
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
                <img src="${item.image}" alt="${item.name}">
            </div>
            <div class="cart-item-details">
                <div class="cart-item-title">${item.name}</div>
                ${item.size ? `<div class="cart-item-size">Size: ${item.size}</div>` : ''}
                <div class="cart-item-price">₹${item.price.toLocaleString()}</div>
                <div class="cart-item-actions">
                    <div class="cart-item-quantity">
                        <button class="quantity-btn minus" data-id="${item.id}" data-size="${item.size || ''}">-</button>
                        <input type="number" class="quantity-input" value="${item.quantity}" min="1" data-id="${item.id}" data-size="${item.size || ''}">
                        <button class="quantity-btn plus" data-id="${item.id}" data-size="${item.size || ''}">+</button>
                    </div>
                    <button class="remove-item" data-id="${item.id}" data-size="${item.size || ''}" title="Remove item">
                        <i class="fas fa-times"></i>
                    </button>
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
    const size = e.target.dataset.size;
    const item = cart.find(item => item.id === productId && (!size || item.size === size));

    if (item.quantity > 1) {
        item.quantity--;
    } else {
        cart = cart.filter(item => !(item.id === productId && (!size || item.size === size)));
        showToast('Item removed from cart');
    }

    updateCartCount();
    renderCartItems();
}

// Increase quantity
function increaseQuantity(e) {
    const productId = parseInt(e.target.dataset.id);
    const size = e.target.dataset.size;
    const item = cart.find(item => item.id === productId && (!size || item.size === size));
    item.quantity++;
    updateCartCount();
    renderCartItems();
}

// Update quantity
function updateQuantity(e) {
    const productId = parseInt(e.target.dataset.id);
    const size = e.target.dataset.size;
    const item = cart.find(item => item.id === productId && (!size || item.size === size));
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
    const size = e.target.closest('.remove-item').dataset.size;
    cart = cart.filter(item => !(item.id === productId && (!size || item.size === size)));
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
    authModal.classList.add('active');
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
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

function closeConfirmationModalHandler() {
    confirmationModal.classList.remove('active');
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
    const storedCart = localStorage.getItem('mm_cart');
    const storedWishlist = localStorage.getItem('mm_wishlist');

    if (storedUsers) {
        users = JSON.parse(storedUsers);
    }

    if (storedCurrentUser) {
        currentUser = JSON.parse(storedCurrentUser);
        updateSidebarUserInfo();
    }

    if (storedOrders) {
        orders = JSON.parse(storedOrders);
    }

    if (storedCart) {
        cart = JSON.parse(storedCart);
        updateCartCount();
    }

    if (storedWishlist) {
        wishlist = JSON.parse(storedWishlist);
        updateWishlistCount();
    }
}

function saveUserData() {
    localStorage.setItem('mm_currentUser', JSON.stringify(currentUser));
    localStorage.setItem('mm_orders', JSON.stringify(orders));
    localStorage.setItem('mm_cart', JSON.stringify(cart));
    localStorage.setItem('mm_wishlist', JSON.stringify(wishlist));
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
    updateSidebarUserInfo();

    showToast('Registration successful!');
    closeAuthModalHandler();
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
        updateSidebarUserInfo();
        showToast(`Welcome back, ${user.name.split(' ')[0]}!`);
        closeAuthModalHandler();
    } else {
        showToast('Invalid email or password');
    }
}

function logoutUser() {
    currentUser = null;
    saveUserData();
    showToast('Logged out successfully');
    closeProfileSidebarHandler();
}

// Open profile sidebar
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

// Close profile sidebar
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
                <button class="btn btn-sm" onclick="addToCartFromWishlist(${product.id})">Add to Cart</button>
                <button class="btn btn-outline btn-sm" onclick="removeFromWishlist(${product.id})">Remove</button>
            </div>
        </div>
    `).join('');
}

function addToCartFromWishlist(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        const existingItem = cart.find(item => item.id === productId);
        
        if (existingItem) {
            existingItem.quantity++;
        } else {
            cart.push({
                id: product.id,
                name: product.name,
                price: product.price,
                quantity: 1,
                image: product.image,
                size: product.sizes ? product.sizes[0] : null
            });
        }
        
        updateCartCount();
        showToast('Item added to cart!');
        
        if (cartSidebar.classList.contains('active')) {
            renderCartItems();
        }
    }
}

function removeFromWishlist(productId) {
    const index = wishlist.indexOf(productId);
    if (index > -1) {
        wishlist.splice(index, 1);
        updateWishlistCount();
        loadSidebarWishlist();
        showToast('Removed from wishlist');
    }
}

// Original checkout function (now replaced by enhancedCheckout)
function checkout() {
    if (!currentUser) {
        showToast('Please login to proceed with checkout');
        toggleAuthModal();
        return;
    }
    if (cart.length === 0) {
        showToast('Your cart is empty');
        return;
    }

  // Close cart sidebar if open
  cartSidebar.classList.remove('active');
    
  // Open address modal
  addressModal.classList.add('active');
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
    currentOrder = order;

    // Show confirmation modal
    orderIdPlaceholder.textContent = `#${order.id}`;
    paymentModal.classList.remove('active');
    confirmationModal.classList.add('active');

    showToast('Order placed successfully!');
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
    doc.text('Size', 80, 106);
    doc.text('Price', 120, 106);
    doc.text('Qty', 150, 106);
    doc.text('Total', 170, 106);

    // Reset text color
    doc.setTextColor(0, 0, 0);

    // Order items
    let y = 115;
    order.items.forEach(item => {
        doc.text(item.name, 25, y);
        doc.text(item.size || '-', 80, y);
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

function loadSidebarOrderHistory() {
    if (!currentUser) return;

    const userOrders = orders.filter(order => order.userId === currentUser.id);
    const orderList = document.getElementById('sidebarOrderList');

    if (userOrders.length === 0) {
        orderList.innerHTML = '<p style="text-align:center; padding:30px;">You have no orders yet</p>';
        return;
    }

    orderList.innerHTML = '';
    userOrders.sort((a, b) => new Date(b.date) - new Date(a.date)).forEach(order => {
        const orderCard = document.createElement('div');
        orderCard.className = 'order-card';
        orderCard.innerHTML = `
            <div class="order-header">
                <div>
                    <strong>Order #${order.id}</strong>
                    <div>${new Date(order.date).toLocaleDateString()}</div>
                </div>
                <div>
                    <span class="order-status">${order.status}</span>
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

// Helper functions for other sections (simplified implementations)
function loadPasswordResetSection() {
    // Implementation for password reset section
}

function loadAccountSettingsData() {
    // Implementation for account settings
}

function loadSiteAnalytics() {
    // Implementation for site analytics
}

function loadAddressValidation() {
    // Implementation for address validation
}
// Password Reset Section Implementation
function loadPasswordResetSection() {
    const currentPasswordReset = document.getElementById('currentPasswordReset');
    const newPasswordReset = document.getElementById('newPasswordReset');
    const confirmPasswordReset = document.getElementById('confirmPasswordReset');
    const resetPasswordBtn = document.getElementById('resetPasswordBtn');
    const passwordStrength = document.getElementById('passwordStrength');
    const reqLength = document.getElementById('req-length');
    const reqUppercase = document.getElementById('req-uppercase');
    const reqLowercase = document.getElementById('req-lowercase');
    const reqNumber = document.getElementById('req-number');
    const reqSpecial = document.getElementById('req-special');

    // Password strength checker
    newPasswordReset.addEventListener('input', () => {
        const password = newPasswordReset.value;
        let strength = 0;
        
        // Check length
        if (password.length >= 8) {
            strength++;
            reqLength.classList.add('valid');
        } else {
            reqLength.classList.remove('valid');
        }
        
        // Check uppercase
        if (/[A-Z]/.test(password)) {
            strength++;
            reqUppercase.classList.add('valid');
        } else {
            reqUppercase.classList.remove('valid');
        }
        
        // Check lowercase
        if (/[a-z]/.test(password)) {
            strength++;
            reqLowercase.classList.add('valid');
        } else {
            reqLowercase.classList.remove('valid');
        }
        
        // Check number
        if (/\d/.test(password)) {
            strength++;
            reqNumber.classList.add('valid');
        } else {
            reqNumber.classList.remove('valid');
        }
        
        // Check special character
        if (/[^A-Za-z0-9]/.test(password)) {
            strength++;
            reqSpecial.classList.add('valid');
        } else {
            reqSpecial.classList.remove('valid');
        }
        
        // Update strength meter
        passwordStrength.className = 'password-strength';
        if (password.length > 0) {
            if (strength < 3) {
                passwordStrength.classList.add('weak');
            } else if (strength < 5) {
                passwordStrength.classList.add('medium');
            } else {
                passwordStrength.classList.add('strong');
            }
        }
    });

    resetPasswordBtn.addEventListener('click', () => {
        if (!currentUser) {
            showToast('Please login to change password');
            return;
        }

        if (!currentPasswordReset.value || !newPasswordReset.value || !confirmPasswordReset.value) {
            showToast('Please fill all fields');
            return;
        }

        if (currentPasswordReset.value !== currentUser.password) {
            showToast('Current password is incorrect');
            return;
        }

        if (newPasswordReset.value !== confirmPasswordReset.value) {
            showToast('New passwords do not match');
            return;
        }

        // Check password strength
        const password = newPasswordReset.value;
        if (password.length < 8 || !/[A-Z]/.test(password) || 
            !/[a-z]/.test(password) || !/\d/.test(password) || 
            !/[^A-Za-z0-9]/.test(password)) {
            showToast('Password does not meet requirements');
            return;
        }

        // Update password
        currentUser.password = newPasswordReset.value;
        
        // Update in users array
        const storedUsers = localStorage.getItem('mm_users');
        if (storedUsers) {
            const users = JSON.parse(storedUsers);
            const userIndex = users.findIndex(u => u.id === currentUser.id);
            if (userIndex !== -1) {
                users[userIndex] = currentUser;
                localStorage.setItem('mm_users', JSON.stringify(users));
                saveUserData();
                
                // Clear fields
                currentPasswordReset.value = '';
                newPasswordReset.value = '';
                confirmPasswordReset.value = '';
                passwordStrength.className = 'password-strength';
                
                showToast('Password changed successfully');
            }
        }
    });
}

// Account Settings Implementation
function loadAccountSettingsData() {
    if (!currentUser) return;

    // Personal Info Tab
    const settingsName = document.getElementById('settingsName');
    const settingsEmail = document.getElementById('settingsEmail');
    const settingsPhone = document.getElementById('settingsPhone');
    const settingsDOB = document.getElementById('settingsDOB');
    const settingsAddress = document.getElementById('settingsAddress');
    const savePersonalSettings = document.getElementById('savePersonalSettings');

    // Set current values
    settingsName.value = currentUser.name;
    settingsEmail.value = currentUser.email;
    settingsPhone.value = currentUser.phone || '';
    settingsDOB.value = currentUser.dob || '';
    settingsAddress.value = currentUser.address || '';

    savePersonalSettings.addEventListener('click', () => {
        if (!settingsName.value || !settingsPhone.value || !settingsAddress.value) {
            showToast('Please fill all required fields');
            return;
        }

        currentUser.name = settingsName.value;
        currentUser.phone = settingsPhone.value;
        currentUser.dob = settingsDOB.value;
        currentUser.address = settingsAddress.value;

        // Update in users array
        const storedUsers = localStorage.getItem('mm_users');
        if (storedUsers) {
            const users = JSON.parse(storedUsers);
            const userIndex = users.findIndex(u => u.id === currentUser.id);
            if (userIndex !== -1) {
                users[userIndex] = currentUser;
                localStorage.setItem('mm_users', JSON.stringify(users));
                saveUserData();
                updateSidebarUserInfo();
                showToast('Profile updated successfully');
            }
        }
    });

    // Notifications Tab
    const saveNotificationBtn = document.getElementById('saveNotificationBtn');
    saveNotificationBtn.addEventListener('click', () => {
        const emailOrderUpdates = document.getElementById('emailOrderUpdates').checked;
        const emailPromotions = document.getElementById('emailPromotions').checked;
        const emailNewsletter = document.getElementById('emailNewsletter').checked;
        const smsOrderUpdates = document.getElementById('smsOrderUpdates').checked;
        const smsDelivery = document.getElementById('smsDelivery').checked;

        // Save notification preferences
        currentUser.notifications = {
            emailOrderUpdates,
            emailPromotions,
            emailNewsletter,
            smsOrderUpdates,
            smsDelivery
        };

        saveUserData();
        showToast('Notification preferences saved');
    });

    // Privacy Tab
    const savePrivacySettings = document.getElementById('savePrivacySettings');
    savePrivacySettings.addEventListener('click', () => {
        const profileVisibility = document.getElementById('profileVisibility').value;
        const allowDataCollection = document.getElementById('allowDataCollection').checked;
        const allowMarketing = document.getElementById('allowMarketing').checked;

        // Save privacy settings
        currentUser.privacy = {
            profileVisibility,
            allowDataCollection,
            allowMarketing
        };

        saveUserData();
        showToast('Privacy settings saved');
    });

    // Security Tab
    const enable2FA = document.getElementById('enable2FA');
    const viewSessions = document.getElementById('viewSessions');
    const deleteAccountSidebar = document.getElementById('deleteAccountSidebar');

    enable2FA.addEventListener('click', () => {
        showToast('Two-factor authentication setup will be sent to your email');
    });

    viewSessions.addEventListener('click', () => {
        showToast('Active sessions will be displayed here');
    });

    deleteAccountSidebar.addEventListener('click', () => {
        if (confirm('Are you sure you want to delete your account? This action cannot be undone.')) {
            // Remove user from users array
            const storedUsers = localStorage.getItem('mm_users');
            if (storedUsers) {
                const users = JSON.parse(storedUsers);
                const updatedUsers = users.filter(u => u.id !== currentUser.id);
                localStorage.setItem('mm_users', JSON.stringify(updatedUsers));
                
                // Clear user data
                currentUser = null;
                cart = [];
                wishlist = [];
                saveUserData();
                updateCartCount();
                updateWishlistCount();
                closeProfileSidebarHandler();
                showToast('Account deleted successfully');
            }
        }
    });
}

// Site Analytics Implementation
function loadSiteAnalytics() {
    if (!currentUser) return;

    // Simulate analytics data
    const totalVisits = document.getElementById('totalVisits');
    const avgSessionTime = document.getElementById('avgSessionTime');
    const pagesViewed = document.getElementById('pagesViewed');

    // Generate random data for demo purposes
    totalVisits.textContent = Math.floor(Math.random() * 100) + 20;
    avgSessionTime.textContent = Math.floor(Math.random() * 10) + 2 + ' min';
    pagesViewed.textContent = Math.floor(Math.random() * 30) + 5;

    // Update shopping chart data
    const shoppingChart = document.getElementById('shoppingChart');
    const categories = ['Electronics', 'Fashion', 'Home & Kitchen', 'Beauty', 'Books'];
    shoppingChart.innerHTML = '';

    categories.forEach(category => {
        const percentage = Math.floor(Math.random() * 60) + 10;
        const chartItem = document.createElement('div');
        chartItem.className = 'chart-item';
        chartItem.innerHTML = `
            <span class="chart-label">${category}</span>
            <div class="chart-bar">
                <div class="chart-fill" style="width: ${percentage}%"></div>
            </div>
            <span class="chart-value">${percentage}%</span>
        `;
        shoppingChart.appendChild(chartItem);
    });
}

// Address Validation Implementation
function loadAddressValidation() {
    const addressToValidate = document.getElementById('addressToValidate');
    const validateAddressBtn = document.getElementById('validateAddressBtn');
    const validationResult = document.getElementById('validationResult');
    const resultContent = document.getElementById('resultContent');
    const savedAddressList = document.getElementById('savedAddressList');
    const addNewAddressBtn = document.getElementById('addNewAddressBtn');

    // Initialize saved addresses
    if (currentUser && currentUser.addresses) {
        renderSavedAddresses(currentUser.addresses);
    } else if (currentUser) {
        currentUser.addresses = [];
    }

    validateAddressBtn.addEventListener('click', () => {
        const address = addressToValidate.value.trim();
        
        if (!address) {
            showToast('Please enter an address to validate');
            return;
        }

        // Simulate address validation
        validationResult.style.display = 'block';
        validationResult.className = 'validation-result';
        
        // Random success/failure for demo
        const isValid = Math.random() > 0.3;
        
        if (isValid) {
            validationResult.classList.add('success');
            resultContent.innerHTML = `
                <div class="validation-success">
                    <i class="fas fa-check-circle"></i>
                    <h4>Address is valid</h4>
                    <p>We can deliver to this address</p>
                    <button class="btn" id="saveValidatedAddress">Save Address</button>
                </div>
            `;
            
            document.getElementById('saveValidatedAddress')?.addEventListener('click', () => {
                saveAddress(address);
            });
        } else {
            validationResult.classList.add('error');
            resultContent.innerHTML = `
                <div class="validation-error">
                    <i class="fas fa-times-circle"></i>
                    <h4>Address could not be verified</h4>
                    <p>Please check the address and try again</p>
                    <ul>
                        <li>Make sure the street name is correct</li>
                        <li>Include city and postal code</li>
                        <li>Check for typos</li>
                    </ul>
                </div>
            `;
        }
    });

    addNewAddressBtn.addEventListener('click', () => {
        const newAddress = prompt('Enter new address:');
        if (newAddress && newAddress.trim()) {
            saveAddress(newAddress.trim());
        }
    });

    function saveAddress(address) {
        if (!currentUser) return;
        
        if (!currentUser.addresses) {
            currentUser.addresses = [];
        }
        
        if (!currentUser.addresses.includes(address)) {
            currentUser.addresses.push(address);
            saveUserData();
            renderSavedAddresses(currentUser.addresses);
            showToast('Address saved successfully');
            validationResult.style.display = 'none';
        } else {
            showToast('Address already exists');
        }
    }

    function renderSavedAddresses(addresses) {
        if (!savedAddressList) return;
        
        if (addresses.length === 0) {
            savedAddressList.innerHTML = '<p>No saved addresses</p>';
            return;
        }
        
        savedAddressList.innerHTML = addresses.map((address, index) => `
            <div class="address-item">
                <p>${address}</p>
                <div class="address-actions">
                    <button class="btn btn-sm" onclick="setDefaultAddress(${index})">Set Default</button>
                    <button class="btn btn-outline btn-sm" onclick="removeAddress(${index})">Remove</button>
                </div>
            </div>
        `).join('');
    }
}

// Address management functions
function setDefaultAddress(index) {
    if (!currentUser || !currentUser.addresses || index >= currentUser.addresses.length) return;
    
    const address = currentUser.addresses[index];
    currentUser.address = address; // Set as primary address
    saveUserData();
    showToast('Default address updated');
    loadAddressValidation(); // Refresh the view
}

function removeAddress(index) {
    if (!currentUser || !currentUser.addresses || index >= currentUser.addresses.length) return;
    
    if (confirm('Are you sure you want to remove this address?')) {
        currentUser.addresses.splice(index, 1);
        saveUserData();
        showToast('Address removed');
        loadAddressValidation(); // Refresh the view
    }
}

// Initialize all sections when profile sidebar is opened
function initializeProfileSections() {
    loadDashboardData();
    loadPasswordResetSection();
    loadAccountSettingsData();
    loadSiteAnalytics();
    loadAddressValidation();
}

// Add to global scope for HTML onclick handlers
window.addToCartFromWishlist = addToCartFromWishlist;
window.removeFromWishlist = removeFromWishlist;
window.setDefaultAddress = setDefaultAddress;
window.removeAddress = removeAddress;

// Initialize the application
window.onload = function() {
    loadUserData();
    renderProducts(products);
    updateCartCount();
    updateWishlistCount();
};
// Additional Utility Functions

// Format currency
function formatCurrency(amount) {
    return new Intl.NumberFormat('en-IN', { 
        style: 'currency', 
        currency: 'INR',
        maximumFractionDigits: 0
    }).format(amount);
}

// Generate random ID
function generateId() {
    return Math.floor(Math.random() * 1000000) + 100000;
}

// Validate email format
function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// Validate phone number
function isValidPhone(phone) {
    return /^[0-9]{10}$/.test(phone);
}

// Enhanced Product Filtering
function enhancedFilterProducts(category, searchTerm = '') {
    let filteredProducts = products;
    
    if (category !== 'all') {
        filteredProducts = filteredProducts.filter(product => product.category === category);
    }
    
    if (searchTerm) {
        const term = searchTerm.toLowerCase();
        filteredProducts = filteredProducts.filter(product =>
            product.name.toLowerCase().includes(term) ||
            product.category.toLowerCase().includes(term) ||
            (product.description && product.description.toLowerCase().includes(term))
        );
    }
    
    return filteredProducts;
}

// Product Detail Modal
function showProductDetails(product) {
    // Create modal elements
    const modal = document.createElement('div');
    modal.className = 'product-modal';
    modal.innerHTML = `
        <div class="product-modal-content">
            <span class="close-modal">&times;</span>
            <div class="product-modal-body">
                <div class="product-modal-images">
                    <div class="main-image">
                        <img src="${product.image}" alt="${product.name}">
                    </div>
                </div>
                <div class="product-modal-info">
                    <h2>${product.name}</h2>
                    <div class="product-modal-price">
                        ${formatCurrency(product.price)}
                        ${product.oldPrice ? `<span class="old-price">${formatCurrency(product.oldPrice)}</span>` : ''}
                    </div>
                    <div class="product-modal-rating">
                        ${renderRating(product.rating)} (${product.reviews} reviews)
                    </div>
                    ${product.sizes ? `
                    <div class="product-modal-sizes">
                        <h4>Size:</h4>
                        <div class="size-options">
                            ${product.sizes.map(size => `
                                <button class="size-option" data-size="${size}">${size}</button>
                            `).join('')}
                        </div>
                    </div>
                    ` : ''}
                    <div class="product-modal-actions">
                        <button class="btn add-to-cart-modal" data-id="${product.id}">Add to Cart</button>
                        <button class="btn btn-outline wishlist-modal" data-id="${product.id}">
                            <i class="${wishlist.includes(product.id) ? 'fas' : 'far'} fa-heart"></i> Wishlist
                        </button>
                    </div>
                    <div class="product-modal-description">
                        <h4>Description</h4>
                        <p>${product.description || 'No description available'}</p>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    document.body.style.overflow = 'hidden';
    
    // Add event listeners
    modal.querySelector('.close-modal').addEventListener('click', () => {
        document.body.removeChild(modal);
        document.body.style.overflow = '';
    });
    
    modal.querySelector('.add-to-cart-modal').addEventListener('click', (e) => {
        const productId = parseInt(e.target.dataset.id);
        const size = modal.querySelector('.size-option.selected')?.dataset.size || null;
        addToCart({ target: { dataset: { id: productId }, closest: () => modal } }, size);
        showToast('Added to cart!');
    });
    
    modal.querySelector('.wishlist-modal').addEventListener('click', (e) => {
        const productId = parseInt(e.target.closest('button').dataset.id);
        toggleWishlist({ target: e.target.closest('button') });
    });
    
    // Size selection
    modal.querySelectorAll('.size-option').forEach(option => {
        option.addEventListener('click', () => {
            modal.querySelectorAll('.size-option').forEach(opt => opt.classList.remove('selected'));
            option.classList.add('selected');
        });
    });
    
    // Close when clicking outside
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            document.body.removeChild(modal);
            document.body.style.overflow = '';
        }
    });
}

// Enhanced Search with Debounce
let searchTimeout;
function enhancedHandleSearch() {
    clearTimeout(searchTimeout);
    searchTimeout = setTimeout(() => {
        const searchTerm = searchInput.value.trim().toLowerCase();
        const activeFilter = document.querySelector('.filter-btn.active')?.dataset.filter || 'all';
        
        if (searchTerm.length >= 2 || searchTerm.length === 0) {
            const filteredProducts = enhancedFilterProducts(activeFilter, searchTerm);
            renderProducts(filteredProducts);
        }
    }, 300);
}

// Update event listener for enhanced search
searchInput.addEventListener('input', enhancedHandleSearch);

// Order Status Tracking
function trackOrder(orderId) {
    const order = orders.find(o => o.id === orderId);
    if (!order) return null;
    
    const statusStages = [
        { status: 'Processing', description: 'Order received', time: order.date },
        { status: 'Confirmed', description: 'Payment confirmed', time: addTime(order.date, 1) },
        { status: 'Shipped', description: 'Shipped with tracking', time: addTime(order.date, 2) },
        { status: 'Out for Delivery', description: 'With delivery agent', time: addTime(order.date, 3) },
        { status: 'Delivered', description: 'Order delivered', time: addTime(order.date, 4) }
    ];
    
    // Simulate current status based on order date
    const now = new Date();
    const orderDate = new Date(order.date);
    const hoursSinceOrder = (now - orderDate) / (1000 * 60 * 60);
    
    let currentStage = Math.floor(hoursSinceOrder / 24);
    if (currentStage >= statusStages.length) currentStage = statusStages.length - 1;
    
    return {
        currentStatus: statusStages[currentStage].status,
        stages: statusStages,
        currentStage
    };
}

function addTime(dateString, daysToAdd) {
    const date = new Date(dateString);
    date.setDate(date.getDate() + daysToAdd);
    return date.toISOString();
}

// Order Tracking Modal
function showOrderTracking(orderId) {
    const trackingInfo = trackOrder(orderId);
    if (!trackingInfo) {
        showToast('Order not found');
        return;
    }
    
    const modal = document.createElement('div');
    modal.className = 'tracking-modal';
    modal.innerHTML = `
        <div class="tracking-modal-content">
            <span class="close-modal">&times;</span>
            <h2>Order #${orderId} Tracking</h2>
            <div class="tracking-status">
                <div class="status-badge ${trackingInfo.currentStatus.toLowerCase().replace(' ', '-')}">
                    ${trackingInfo.currentStatus}
                </div>
            </div>
            <div class="tracking-timeline">
                ${trackingInfo.stages.map((stage, index) => `
                    <div class="timeline-step ${index <= trackingInfo.currentStage ? 'completed' : ''}">
                        <div class="timeline-marker"></div>
                        <div class="timeline-content">
                            <h4>${stage.status}</h4>
                            <p>${stage.description}</p>
                            <small>${new Date(stage.time).toLocaleString()}</small>
                        </div>
                    </div>
                `).join('')}
            </div>
            <div class="tracking-actions">
                <button class="btn">Contact Support</button>
                <button class="btn btn-outline">View Order Details</button>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    document.body.style.overflow = 'hidden';
    
    // Add event listeners
    modal.querySelector('.close-modal').addEventListener('click', () => {
        document.body.removeChild(modal);
        document.body.style.overflow = '';
    });
    
    // Close when clicking outside
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            document.body.removeChild(modal);
            document.body.style.overflow = '';
        }
    });
}

// Enhanced Checkout Process
function enhancedCheckout() {
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

    // Check if default address is set (this is a good check, but the address modal handles input)
    // if (!currentUser.address) {
    //     showToast('Please set a delivery address first');
    //     openProfileSidebar();
    //     showProfileSection('addressValidation');
    //     return;
    // }

    // Only open the address modal here. The address modal's continue button will open payment.
    addressModal.classList.add('active');
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Update checkout button event listener
// This line is already present in the DOMContentLoaded, ensuring the correct function is used.
// checkoutBtn.removeEventListener('click', checkout);
// checkoutBtn.addEventListener('click', enhancedCheckout);

// Order History with Tracking
function loadEnhancedOrderHistory() {
    if (!currentUser) return;

    const userOrders = orders.filter(order => order.userId === currentUser.id);
    const orderList = document.getElementById('sidebarOrderList');

    if (userOrders.length === 0) {
        orderList.innerHTML = '<div class="empty-state"><p>You have no orders yet</p></div>';
        return;
    }

    orderList.innerHTML = userOrders.sort((a, b) => new Date(b.date) - new Date(a.date)).map(order => `
        <div class="order-card">
            <div class="order-header">
                <div>
                    <strong>Order #${order.id}</strong>
                    <div>${new Date(order.date).toLocaleDateString()}</div>
                </div>
                <div>
                    <span class="order-status ${order.status.toLowerCase().replace(' ', '-')}">${order.status}</span>
                </div>
            </div>
            <div class="order-summary">
                <div>Total:</div>
                <div>${formatCurrency(order.total)}</div>
            </div>
            <div class="order-actions">
                <button class="btn btn-sm track-order" data-id="${order.id}">Track Order</button>
                <button class="btn btn-outline btn-sm invoice-btn" data-id="${order.id}">Invoice</button>
            </div>
        </div>
    `).join('');

    // Add event listeners
    document.querySelectorAll('.track-order').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const orderId = parseInt(e.target.dataset.id);
            showOrderTracking(orderId);
        });
    });

    document.querySelectorAll('.invoice-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const orderId = parseInt(e.target.dataset.id);
            const order = orders.find(o => o.id === orderId);
            if (order) generateInvoice(order);
        });
    });
}

// Replace original order history loader
function loadSidebarOrderHistory() {
    loadEnhancedOrderHistory();
}

// Product Review System
function submitProductReview(productId, rating, comment) {
    const product = products.find(p => p.id === productId);
    if (!product) return false;
    
    if (!product.reviewsData) {
        product.reviewsData = [];
    }
    
    const review = {
        id: generateId(),
        userId: currentUser?.id || null,
        userName: currentUser?.name || 'Anonymous',
        rating,
        comment,
        date: new Date().toISOString()
    };
    
    product.reviewsData.push(review);
    
    // Update average rating
    const totalRatings = product.reviewsData.reduce((sum, r) => sum + r.rating, 0);
    product.rating = parseFloat((totalRatings / product.reviewsData.length).toFixed(1));
    product.reviews = product.reviewsData.length;
    
    return true;
}

// Review Modal
function showReviewModal(productId) {
    if (!currentUser) {
        showToast('Please login to leave a review');
        toggleAuthModal();
        return;
    }
    
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    const modal = document.createElement('div');
    modal.className = 'review-modal';
    modal.innerHTML = `
        <div class="review-modal-content">
            <span class="close-modal">&times;</span>
            <h2>Review ${product.name}</h2>
            <div class="review-rating">
                <div class="rating-stars">
                    ${[1, 2, 3, 4, 5].map(i => `
                        <i class="far fa-star" data-rating="${i}"></i>
                    `).join('')}
                </div>
                <div class="rating-text">Select rating</div>
            </div>
            <div class="review-comment">
                <textarea placeholder="Share your experience with this product..." rows="5"></textarea>
            </div>
            <button class="btn submit-review">Submit Review</button>
        </div>
    `;
    
    document.body.appendChild(modal);
    document.body.style.overflow = 'hidden';
    
    let selectedRating = 0;
    const stars = modal.querySelectorAll('.rating-stars i');
    const ratingText = modal.querySelector('.rating-text');
    
    stars.forEach(star => {
        star.addEventListener('click', () => {
            const rating = parseInt(star.dataset.rating);
            selectedRating = rating;
            
            stars.forEach((s, i) => {
                if (i < rating) {
                    s.classList.remove('far');
                    s.classList.add('fas');
                } else {
                    s.classList.remove('fas');
                    s.classList.add('far');
                }
            });
            
            const ratingTexts = [
                'Poor',
                'Fair',
                'Good',
                'Very Good',
                'Excellent'
            ];
            
            ratingText.textContent = ratingTexts[rating - 1];
        });
        
        star.addEventListener('mouseover', () => {
            const rating = parseInt(star.dataset.rating);
            
            stars.forEach((s, i) => {
                if (i < rating) {
                    s.classList.add('hover');
                } else {
                    s.classList.remove('hover');
                }
            });
        });
        
        star.addEventListener('mouseout', () => {
            stars.forEach(s => s.classList.remove('hover'));
        });
    });
    
    modal.querySelector('.submit-review').addEventListener('click', () => {
        const comment = modal.querySelector('textarea').value.trim();
        
        if (selectedRating === 0) {
            showToast('Please select a rating');
            return;
        }
        
        if (submitProductReview(productId, selectedRating, comment)) {
            showToast('Thank you for your review!');
            document.body.removeChild(modal);
            document.body.style.overflow = '';
            
            // Refresh product display if needed
            const activeFilter = document.querySelector('.filter-btn.active')?.dataset.filter || 'all';
            const filteredProducts = enhancedFilterProducts(activeFilter, searchInput.value.trim());
            renderProducts(filteredProducts);
        } else {
            showToast('Failed to submit review');
        }
    });
    
    modal.querySelector('.close-modal').addEventListener('click', () => {
        document.body.removeChild(modal);
        document.body.style.overflow = '';
    });
    
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            document.body.removeChild(modal);
            document.body.style.overflow = '';
        }
    });
}

// Add review button to product details
function addReviewButton(productId) {
    const reviewBtn = document.createElement('button');
    reviewBtn.className = 'btn btn-outline btn-sm review-btn';
    reviewBtn.textContent = 'Write a Review';
    reviewBtn.addEventListener('click', () => showReviewModal(productId));
    return reviewBtn;
}

// Initialize all components
function initializeAll() {
    loadUserData();
    renderProducts(products);
    updateCartCount();
    updateWishlistCount();
    
    // Add any additional initialization needed
    if (currentUser) {
        updateSidebarUserInfo();
    }
}

// Final initialization
document.addEventListener('DOMContentLoaded', initializeAll);
// Service page navigation
function showServicePage(pageId) {
    document.getElementById('main-content').style.display = 'none';
    document.getElementById('service-pages').style.display = 'block';
    
    // Hide all service pages
    document.querySelectorAll('.service-page').forEach(page => {
        page.style.display = 'none';
    });
    
    // Show the requested page
    document.getElementById(pageId).style.display = 'block';
    
    // Scroll to top
    window.scrollTo(0, 0);
}

function showMainContent() {
    document.getElementById('main-content').style.display = 'block';
    document.getElementById('service-pages').style.display = 'none';
    window.scrollTo(0, 0);
}

// FAQ accordion functionality
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('faq-question') || 
        e.target.parentElement.classList.contains('faq-question')) {
        const question = e.target.classList.contains('faq-question') 
            ? e.target 
            : e.target.parentElement;
        const answer = question.nextElementSibling;
        
        question.classList.toggle('active');
        answer.classList.toggle('active');
    }
});
