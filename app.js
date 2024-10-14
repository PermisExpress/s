document.addEventListener("DOMContentLoaded", function() {
    function initializeSlider(sliderClass, navButtonClass, nextButtonClass, prevButtonClass) {
        let currentSlide = 0;
        const slides = document.querySelectorAll(sliderClass);
        const navButtons = document.querySelectorAll(navButtonClass);
        const nextButton = document.querySelector(nextButtonClass);
        const prevButton = document.querySelector(prevButtonClass);

        // Check if elements exist before proceeding
        if (!slides.length || !navButtons.length || !nextButton || !prevButton) {
            console.error('Slider initialization failed: missing elements.');
            return;
        }

        function showSlide(index) {
            slides.forEach((slide, i) => {
                slide.classList.remove('active');
                navButtons[i].classList.remove('active');
            });
            slides[index].classList.add('active');
            navButtons[index].classList.add('active');
        }

        navButtons.forEach((button, index) => {
            button.addEventListener('click', () => {
                currentSlide = index;
                showSlide(index);
            });
        });

        nextButton.addEventListener('click', () => {
            currentSlide = (currentSlide + 1) % slides.length;
            showSlide(currentSlide);
        });

        prevButton.addEventListener('click', () => {
            currentSlide = (currentSlide - 1 + slides.length) % slides.length;
            showSlide(currentSlide);
        });

        showSlide(currentSlide);
    }

    // Initialize the sliders
    initializeSlider('.slide', '.nav-button', '.next-button', '.prev-button')
});