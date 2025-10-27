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
            
            // مدیریت سوالات متداول
            const faqQuestions = document.querySelectorAll('.faq-question');
            
            faqQuestions.forEach(question => {
                question.addEventListener('click', function() {
                    const answer = this.nextElementSibling;
                    const icon = this.querySelector('i');
                    
                    answer.classList.toggle('active');
                    
                    if (answer.classList.contains('active')) {
                        icon.classList.remove('fa-chevron-down');
                        icon.classList.add('fa-chevron-up');
                    } else {
                        icon.classList.remove('fa-chevron-up');
                        icon.classList.add('fa-chevron-down');
                    }
                });
            });
            
            // مدیریت فرم تماس
            const contactForm = document.querySelector('.contact-form');
            
            contactForm.addEventListener('submit', function(e) {
                e.preventDefault();
                alert('پیام شما با موفقیت ارسال شد! در اسرع وقت با شما تماس خواهیم گرفت.');
                contactForm.reset();
            });
        });
    