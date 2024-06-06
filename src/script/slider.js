import banner1 from '../img/banner.jpg';
import banner2 from '../img/banner-2.jpg';
import banner3 from '../img/banner-3.jpg';

// Список изображений для слайдера
const slides = [
    banner1,
    banner2,
    banner3
];

// Получаем элемент слайдера
const sliderImg = document.querySelector('.slider-img');
const dots = document.querySelectorAll('.slider-img__dots .dot');
let currentSlide = 0; 

// Функция для обновления
const updateSlide = (index) => {
    sliderImg.style.backgroundImage = `url(${slides[index]})`;
    
    // Перебираем точки
    dots.forEach((dot, i) => {
        if (i === index) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
    });
};

// Функция для перехода к следующему слайду
const nextSlide = () => {
    currentSlide = (currentSlide + 1) % slides.length;
    updateSlide(currentSlide);
};

// Добавляем обработчики событий
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentSlide = index;
        updateSlide(currentSlide);
    });
});

// Обновляем слайд
updateSlide(currentSlide);

// Автоматическое переключение слайдов
setInterval(nextSlide, 5000);