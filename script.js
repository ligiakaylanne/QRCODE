let slideIndex = 0;
const slides = document.querySelectorAll('.carousel-slide');

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.transform = `translateX(-${index * 100}%)`;
    });
}

function nextSlide() {
    slideIndex = (slideIndex + 1) % slides.length;
    showSlide(slideIndex);
}

function prevSlide() {
    slideIndex = (slideIndex - 1 + slides.length) % slides.length;
    showSlide(slideIndex);
}

// Iniciar o carrossel
document.addEventListener('DOMContentLoaded', () => {
    showSlide(slideIndex);
});
