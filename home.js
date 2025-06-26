const sidebar = document.querySelector('.sidebar');
const toggleBtn = document.querySelector('#btn');
const mainContent = document.getElementById('main-content');

toggleBtn.addEventListener('click', () => {
    sidebar.classList.toggle('open');
    mainContent.classList.toggle('sidebar-open');
    menuBtnChange();
});


function menuBtnChange() {
    if (sidebar.classList.contains("open")) {
        toggleBtn.classList.replace("bx-menu", "bx-menu-alt-right");
    } else {
        toggleBtn.classList.replace("bx-menu-alt-right", "bx-menu");
    }
}

const bestsellerSwiper = new Swiper('.bestseller-swiper', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        640: { slidesPerView: 2 },
        1024: { slidesPerView: 3 }
    }
});

document.getElementById('shop-now-btn').addEventListener('click', () => {
    document.getElementById('product-categories').scrollIntoView({ behavior: "smooth" });
});

document.querySelectorAll('.product-card .cta, .combo-card .cta').forEach(btn => {
    btn.addEventListener('click', function(e) {
        const card = e.target.closest('.product-card, .combo-card');
        const productName = card.querySelector('h3').textContent;
        const notification = document.createElement('div');
        notification.className = 'cart-notification';
        notification.textContent = `${productName} added to cart!`;
        document.body.appendChild(notification);
        const cartIcon = document.querySelector('.nav-right a i.bx-cart');
        if (cartIcon) cartIcon.classList.add('cart-bounce');
        setTimeout(() => {
            notification.classList.add('fade-out');
            setTimeout(() => notification.remove(), 300);
        }, 1800);
        setTimeout(() => {
            if (cartIcon) cartIcon.classList.remove('cart-bounce');
        }, 900);
    });
});
