export default function setSlider() {
    const slider = document.querySelector('.info .slider');
    const sliderButtons = document.querySelectorAll('.slider__button');
    const slides = document.querySelectorAll('.slider__tabcontent');

    function onSliderClick(evt) {
        if (evt.target.classList.contains("slider__button")) {
            sliderButtons.forEach((button, index) => {
                if (evt.target === button) {
                    showSlide(index);
                }
            })
        }
    }
    
    function showSlide(slideIndex) {
        hideSlides();
        sliderButtons[slideIndex].classList.add('slider__button--active');
        slides[slideIndex].classList.remove('hide');
        slides[slideIndex].classList.add('fade');
    }

    function hideSlides() {
        sliderButtons.forEach(button => {
            button.classList.remove('slider__button--active');
        });

        slides.forEach(slide => {
            slide.classList.add('hide');
            slide.classList.remove('fade');
        });
    }

    hideSlides();
    showSlide(0);
    slider.addEventListener(`click`, onSliderClick);
}