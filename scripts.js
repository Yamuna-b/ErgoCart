// Carousel functionality
let currentIndex = 0;
const images = document.querySelectorAll('.carousel-image');

function showImage(index) {
    images.forEach((img, i) => {
        img.classList.remove('active');
        if (i === index) img.classList.add('active');
    });
}

document.querySelector('.next').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
});

document.querySelector('.prev').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
});

// Show popup
const popup = document.getElementById('popup');
const closePopup = document.getElementById('close-popup');

setTimeout(() => {
    popup.style.display = 'flex';
}, 5000);

closePopup.addEventListener('click', () => {
    popup.style.display = 'none';
});
// Carousel functionality
let currentIndex = 0;
const images = document.querySelectorAll('.carousel-image');

function showImage(index) {
    images.forEach((img, i) => {
        img.classList.remove('active');
        if (i === index) img.classList.add('active');
    });
}

document.querySelector('.next').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
});

document.querySelector('.prev').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
});

// Show popup
const popup = document.getElementById('popup');
const closePopup = document.getElementById('close-popup');

setTimeout(() => {
    popup.style.display = 'flex';
}, 5000);

closePopup.addEventListener('click', () => {
    popup.style.display = 'none';
});
