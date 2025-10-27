        document.addEventListener('DOMContentLoaded', function() {
            // نمایش پیام تخفیف پس از 3 ثانیه
            setTimeout(function() {
                const discountCode = generateDiscountCode();
                alert(`تبریک! شما 20% تخفیف گرفتید.\nکد تخفیف شما: ${discountCode}`);
            }, 3000);
            
            // تولید کد تخفیف تصادفی
            function generateDiscountCode() {
                let chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
                let code = '';
                for (let i = 0; i < 8; i++) {
                    code += chars.charAt(Math.floor(Math.random() * chars.length));
                }
                return code;
            }
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
// اسلایدر هیرو
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
const nextBtn = document.querySelector('.next-btn');
const prevBtn = document.querySelector('.prev-btn');
let slideInterval;
// شروع اسلایدر اتوماتیک
function startSlider() {
    slideInterval = setInterval(nextSlide, 5000); // هر 5 ثانیه
}

function showSlide(n) {
    // مخفی کردن همه اسلایدها
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    
    // چک کردن مرزهای اسلاید
    if (n >= slides.length) currentSlide = 0;
    if (n < 0) currentSlide = slides.length - 1;
    
    // نمایش اسلاید فعلی
    slides[currentSlide].classList.add('active');
    dots[currentSlide].classList.add('active');
}

function nextSlide() {
    currentSlide++;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide--;
    showSlide(currentSlide);
}

function goToSlide(n) {
    currentSlide = n;
    showSlide(currentSlide);
}

// شروع اسلایدر اتوماتیک
function startSlider() {
    slideInterval = setInterval(nextSlide, 10000); // هر 10 ثانیه
}

// توقف اسلایدر وقتی کاربر با اسلایدر تعامل داره
function pauseSlider() {
    clearInterval(slideInterval);
}

// ایونت لیستنرها
nextBtn.addEventListener('click', function() {
    pauseSlider();
    nextSlide();
    startSlider();
});

prevBtn.addEventListener('click', function() {
    pauseSlider();
    prevSlide();
    startSlider();
});

// کلیک روی دات‌ها
dots.forEach((dot, index) => {
    dot.addEventListener('click', function() {
        pauseSlider();
        goToSlide(index);
        startSlider();
    });
});

// شروع اسلایدر
startSlider();

// توقف اسلایدر وقتی موس روی اسلایدر هست
const heroSection = document.querySelector('.hero');
heroSection.addEventListener('mouseenter', pauseSlider);
heroSection.addEventListener('mouseleave', startSlider);
            
            // مدیریت ناوبری بین صفحات
            let navLinks = document.querySelectorAll('.nav-link');
            let pages = document.querySelectorAll('.page');
            
            navLinks.forEach(link => {
                link.addEventListener('click', function(e) {
                    e.preventDefault();
                    let targetPage = this.getAttribute('data-page');
                    
                    pages.forEach(page => {
                        page.classList.remove('active');
                        if (page.id === targetPage) {
                            page.classList.add('active');
                        }
                    });
                    
                    // مخفی کردن صفحه محصول در صورت کلیک روی منو
                    document.getElementById('product-detail').classList.remove('active');
                });
            });
            
            // مدیریت نمایش صفحه محصول
            let productCards = document.querySelectorAll('.product-card');
            let productDetail = document.getElementById('product-detail');
            
            productCards.forEach(card => {
                card.addEventListener('click', function(e) {
                    if (!e.target.classList.contains('add-to-cart')) {
                        let productId = this.getAttribute('data-id');
                        let productName = this.getAttribute('data-name');
                        let productPrice = this.getAttribute('data-price');
                        let productImage = this.querySelector('img').src;
                        
                        document.getElementById('detail-title').textContent = productName;
                        document.getElementById('detail-price').textContent = productPrice + ' تومان';
                        document.getElementById('detail-image').src = productImage;
                        document.getElementById('detail-description').textContent = this.querySelector('p').textContent;
                        
                      
                        pages.forEach(page => {
                            page.classList.remove('active');
                        });
                        productDetail.classList.add('active');
                    }
                });
            });
            
            // مدیریت تعداد محصول
            let decreaseBtn = document.getElementById('decrease');
            let increaseBtn = document.getElementById('increase');
            let quantityInput = document.getElementById('quantity');
            
            decreaseBtn.addEventListener('click', function() {
                let value = parseInt(quantityInput.value);
                if (value > 1) {
                    quantityInput.value = value - 1;
                }
            });
            
            increaseBtn.addEventListener('click', function() {
                let value = parseInt(quantityInput.value);
                quantityInput.value = value + 1;
            });
            
            // مدیریت  خرید
            let buyNowBtn = document.getElementById('buy-now');
            let checkoutModal = document.getElementById('checkout-modal');
            let closeModalBtn = document.querySelector('.close-modal');
            let applyDiscountBtn = document.getElementById('apply-discount');
            let confirmPurchaseBtn = document.getElementById('confirm-purchase');
            
            buyNowBtn.addEventListener('click', function() {
                let quantity = parseInt(quantityInput.value);
                let price = parseInt(document.getElementById('detail-price').textContent);
                let totalPrice = quantity * price;
                
                document.getElementById('modal-total-price').textContent = totalPrice.toLocaleString() + ' تومان';
                document.getElementById('modal-discount').textContent = '0 تومان';
                document.getElementById('modal-final-price').textContent = totalPrice.toLocaleString() + ' تومان';
                
                checkoutModal.classList.add('active');
            });
            
            closeModalBtn.addEventListener('click', function() {
                checkoutModal.classList.remove('active');
            });
            
            // کلیک خارج از مدال   
            window.addEventListener('click', function(e) {
                if (e.target == checkoutModal) {
                    checkoutModal.classList.remove('active');
                }
            });
            
            // اعمال کد تخفیف
            applyDiscountBtn.addEventListener('click', function() {
                let discountCode = document.getElementById('discount-code').value;
                let totalPrice = parseInt(document.getElementById('modal-total-price').textContent.replace(/,/g, ''));
                
                // بررسی صحت کد تخفیف 
                if (discountCode =='STARBUCKS20') {
                    let discount = totalPrice * 0.2;
                    let finalPrice = totalPrice - discount;
                    
                    document.getElementById('modal-discount').textContent = discount.toLocaleString() + ' تومان';
                    document.getElementById('modal-final-price').textContent = finalPrice.toLocaleString() + ' تومان';
                    
                    alert('کد تخفیف با موفقیت اعمال شد!');
                } else {
                    alert('کد تخفیف معتبر نیست!');
                }
            });
            
            // تأیید خرید
            confirmPurchaseBtn.addEventListener('click', function() {
                alert('خرید شما با موفقیت ثبت شد! از خرید شما متشکریم.');
                checkoutModal.classList.remove('active');
                
                // بازگشت به صفحه اصلی
                pages.forEach(page => {
                    page.classList.remove('active');
                });
                document.getElementById('home').classList.add('active');
                productDetail.classList.remove('active');
            });
            
            // مدیریت سبد خرید
            let addToCartButtons = document.querySelectorAll('.add-to-cart');
            let cartCount = document.querySelector('.cart-count');
            let cartItems = 0;
            
            addToCartButtons.forEach(button => {
                button.addEventListener('click', function(e) {
                    e.stopPropagation();
                    cartItems++;
                    cartCount.textContent = cartItems;
                    alert('محصول به سبد خرید اضافه شد!');
                });
            });
        });
                // مدیریت گزینه‌های دسترسی
        document.addEventListener('DOMContentLoaded', function() {
            let contrastToggle = document.getElementById('contrast-toggle');
            let fontIncrease = document.getElementById('font-increase');
            let fontDecrease = document.getElementById('font-decrease');
            let resetAccessibility = document.getElementById('reset-accessibility');
            let body = document.body;
            
            // بررسی وضعیت ذخیره شده در localStorage
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
                    // اگر در حال حاضر بزرگترین سایز است، کاری نکن
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
                    // اگر در حال حاضر کوچکترین سایز است، کاری نکن
                    return;
                }
            });
            
            // بازنشانی تنظیمات
            resetAccessibility.addEventListener('click', function() {
                body.classList.remove('high-contrast', 'large-text', 'larger-text');
                localStorage.setItem('highContrast', 'disabled');
                localStorage.setItem('fontSize', '');
            });
        });
    