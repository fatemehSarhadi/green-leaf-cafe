          // مدیریت مودال عضویت
let registerBtn = document.getElementById('register-btn');
let registerModal = document.getElementById('register-modal');
let closeModalBtns = document.querySelectorAll('.close-modal');
let registerForm = document.getElementById('register-form');

// باز کردن مودال عضویت
registerBtn.addEventListener('click', function(e) {
    e.preventDefault();
    registerModal.style.display = 'block';
});

// بستن مودال
closeModalBtns.forEach(btn => {
    btn.addEventListener('click', function() {
        let modalId = this.getAttribute('data-modal');
        document.getElementById(modalId).style.display = 'none';
    });
});

// بستن مودال با کلیک خارج از آن
window.addEventListener('click', function(e) {
    if (e.target == registerModal) {
        registerModal.style.display = 'none';
    }
});

// مدیریت ارسال فرم عضویت
registerForm.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('عضویت شما با موفقیت ثبت شد!');
    registerModal.style.display = 'none';
});
// مدیریت مودال ورود
let loginBtn = document.getElementById('login-btn');
let loginModal = document.getElementById('login-modal');
let goToRegisterBtn = document.getElementById('go-to-register');
let loginForm = document.getElementById('login-form');

// باز کردن مودال ورود
loginBtn.addEventListener('click', function(e) {
    e.preventDefault();
    loginModal.style.display = 'block';
});

// سوئیچ از ورود به عضویت
goToRegisterBtn.addEventListener('click', function() {
    loginModal.style.display = 'none';
    registerModal.style.display = 'block';
});

// بستن مودال ورود با کلیک خارج از آن
window.addEventListener('click', function(e) {
    if (e.target == loginModal) {
        loginModal.style.display = 'none';
    }
});

// مدیریت ارسال فرم ورود
loginForm.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('ورود موفقیت‌آمیز بود!');
    loginModal.style.display = 'none';
});
// مدیریت گزینه‌های دسترسی
        document.addEventListener('DOMContentLoaded', function() {
            const contrastToggle = document.getElementById('contrast-toggle');
            const fontIncrease = document.getElementById('font-increase');
            const fontDecrease = document.getElementById('font-decrease');
            const resetAccessibility = document.getElementById('reset-accessibility');
            const body = document.body;
            
            // بررسی وضعیت ذخیره شده  
            if (localStorage.getItem('highContrast') === 'enabled') {
                body.classList.add('high-contrast');
            }
            
            if (localStorage.getItem('fontSize')) {
                body.classList.add(localStorage.getItem('fontSize'));
            }
            
            // تغییر کنتراست
            contrastToggle.addEventListener('click', function() {
                body.classList.toggle('high-contrast');
                
                if (body.classList.contains('high-contrast')) {
                    localStorage.setItem('highContrast', 'enabled');
                } else {
                    localStorage.setItem('highContrast', 'disabled');
                }
            });
            
            // افزایش اندازه فونت
            fontIncrease.addEventListener('click', function() {
                if (body.classList.contains('large-text')) {
                    body.classList.remove('large-text');
                    body.classList.add('larger-text');
                    localStorage.setItem('fontSize', 'larger-text');
                } else if (body.classList.contains('larger-text')) {
                    
                    return;
                } else {
                    body.classList.add('large-text');
                    localStorage.setItem('fontSize', 'large-text');
                }
            });
            
            // کاهش اندازه فونت
            fontDecrease.addEventListener('click', function() {
                if (body.classList.contains('larger-text')) {
                    body.classList.remove('larger-text');
                    body.classList.add('large-text');
                    localStorage.setItem('fontSize', 'large-text');
                } else if (body.classList.contains('large-text')) {
                    body.classList.remove('large-text');
                    localStorage.setItem('fontSize', '');
                } else {
                     
                    return;
                }
            });
            
            // بازنشانی تنظیمات
            resetAccessibility.addEventListener('click', function() {
                body.classList.remove('high-contrast', 'large-text', 'larger-text');
                localStorage.setItem('highContrast', 'disabled');
                localStorage.setItem('fontSize', '');
            });
            
            // فیلتر کردن منو بر اساس دسته‌بندی
            const categoryButtons = document.querySelectorAll('.category-btn');
            const menuItems = document.querySelectorAll('.menu-item');
            
            categoryButtons.forEach(button => {
                button.addEventListener('click', function() {
                  
                    categoryButtons.forEach(btn => btn.classList.remove('active'));
                    
                  
                    this.classList.add('active');
                    
                    const category = this.getAttribute('data-category');
                    
                
                    menuItems.forEach(item => {
                        if (category === 'all' || item.getAttribute('data-category') === category) {
                            item.style.display = 'block';
                        } else {
                            item.style.display = 'none';
                        }
                    });
                });
            });
            
            // مدیریت مودال محصول
            const productModal = document.getElementById('product-modal');
            const modalImage = document.getElementById('modal-img');
            const modalTitle = document.getElementById('modal-title');
            const modalDescription = document.getElementById('modal-description');
            const modalPrice = document.getElementById('modal-price');
            const quantityElement = document.getElementById('quantity');
            const decreaseBtn = document.getElementById('decrease');
            const increaseBtn = document.getElementById('increase');
            const addToCartModalBtn = document.getElementById('add-to-cart-modal');
            const buyNowBtn = document.getElementById('buy-now');
            const closeModalBtn = document.querySelector('.close-modal');
            
            let currentProduct = null;
            let currentQuantity = 1;
            let currentPrice = 0;
            
            // باز کردن مودال محصول با کلیک روی آیتم منو
            menuItems.forEach(item => {
                item.addEventListener('click', function(e) {
                    if (!e.target.classList.contains('add-to-cart')) {
                        currentProduct = this;
                        currentQuantity = 1;
                        
                        const name = this.getAttribute('data-name');
                        const price = this.getAttribute('data-price');
                        const image = this.getAttribute('data-image');
                        const description = this.getAttribute('data-description');
                        
                        modalImage.src = image;
                        modalTitle.textContent = name;
                        modalDescription.textContent = description;
                        modalPrice.textContent = `${parseInt(price).toLocaleString()} تومان`;
                        quantityElement.textContent = currentQuantity;
                        
                        currentPrice = parseInt(price);
                        
                        productModal.style.display = 'flex';
                    }
                });
            });
            
            // بستن مودال
            closeModalBtn.addEventListener('click', function() {
                productModal.style.display = 'none';
            });
            
            // کلیک خارج از مودال برای بستن آن
            window.addEventListener('click', function(e) {
                if (e.target === productModal) {
                    productModal.style.display = 'none';
                }
            });
            
            // کاهش تعداد
            decreaseBtn.addEventListener('click', function() {
                if (currentQuantity > 1) {
                    currentQuantity--;
                    quantityElement.textContent = currentQuantity;
                }
            });
            
            // افزایش تعداد
            increaseBtn.addEventListener('click', function() {
                currentQuantity++;
                quantityElement.textContent = currentQuantity;
            });
            
            // افزودن به سبد خرید از مودال
            addToCartModalBtn.addEventListener('click', function() {
                alert(`"${currentProduct.getAttribute('data-name')}" به تعداد ${currentQuantity} به سبد خرید اضافه شد!`);
                productModal.style.display = 'none';
            });
            
            // مدیریت مودال پرداخت
            const checkoutModal = document.getElementById('checkout-modal');
            const checkoutBasePrice = document.getElementById('checkout-base-price');
            const checkoutDiscount = document.getElementById('checkout-discount');
            const checkoutTotalPrice = document.getElementById('checkout-total-price');
            const discountCodeInput = document.getElementById('discount-code');
            const applyDiscountBtn = document.getElementById('apply-discount');
            const discountError = document.getElementById('discount-error');
            const cancelCheckoutBtn = document.getElementById('cancel-checkout');
            const confirmPurchaseBtn = document.getElementById('confirm-purchase');
            const closeCheckoutModalBtn = document.querySelectorAll('.close-modal')[1];
            
            let discountApplied = false;
            let discountAmount = 0;
            
            // باز کردن مودال پرداخت
            buyNowBtn.addEventListener('click', function() {
                const totalPrice = currentPrice * currentQuantity;
                checkoutBasePrice.textContent = `${totalPrice.toLocaleString()} تومان`;
                checkoutDiscount.textContent = '0 تومان';
                checkoutTotalPrice.textContent = `${totalPrice.toLocaleString()} تومان`;
                
                discountCodeInput.value = '';
                discountError.style.display = 'none';
                discountApplied = false;
                discountAmount = 0;
                
                checkoutModal.style.display = 'flex';
                productModal.style.display = 'none';
            });
            
            // بستن مودال پرداخت
            closeCheckoutModalBtn.addEventListener('click', function() {
                checkoutModal.style.display = 'none';
            });
            
            cancelCheckoutBtn.addEventListener('click', function() {
                checkoutModal.style.display = 'none';
            });
            
            // کلیک خارج از مودال پرداخت برای بستن آن
            window.addEventListener('click', function(e) {
                if (e.target === checkoutModal) {
                    checkoutModal.style.display = 'none';
                }
            });
            
            // اعمال کد تخفیف
            applyDiscountBtn.addEventListener('click', function() {
                const code = discountCodeInput.value.trim();
                const basePrice = currentPrice * currentQuantity;
                
                // کدهای تخفیف معتبر
                const validCodes = {
                    'STARBUCKS20': 0.2, // 20% تخفیف
                    'WELCOME10': 0.1,   // 10% تخفیف
                    'SUMMER15': 0.15    // 15% تخفیف
                };
                
                if (validCodes[code]) {
                    discountApplied = true;
                    discountAmount = basePrice * validCodes[code];
                    const finalPrice = basePrice - discountAmount;
                    
                    checkoutDiscount.textContent = `-${discountAmount.toLocaleString()} تومان`;
                    checkoutTotalPrice.textContent = `${finalPrice.toLocaleString()} تومان`;
                    
                    discountError.style.display = 'none';
                } else {
                    discountError.style.display = 'block';
                }
            });
            
            // تأیید خرید
            confirmPurchaseBtn.addEventListener('click', function() {
                const finalPrice = (currentPrice * currentQuantity) - discountAmount;
                alert(`خرید شما با مبلغ ${finalPrice.toLocaleString()} تومان با موفقیت ثبت شد!`);
                checkoutModal.style.display = 'none';
            });
            
            // افزودن به سبد خرید از صفحه اصلی
            const addToCartButtons = document.querySelectorAll('.add-to-cart');
            
            addToCartButtons.forEach(button => {
                button.addEventListener('click', function(e) {
                    e.stopPropagation();
                    const item = this.closest('.menu-item');
                    const itemName = item.getAttribute('data-name');
                    alert(`"${itemName}" به سبد خرید اضافه شد!`);
                });
            });
        })