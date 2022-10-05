
let currentSlide = 0;
let arrayOfDots = Array.from(document.querySelectorAll('div.slider__dot'));
let slideArrows = Array.from(document.querySelectorAll('div.slider__arrow'));
let arrayOfSlides = Array.from(document.querySelectorAll('div.slider__item'));

function setSlidesDotsInactive(slidesArray, dotsArray, index)  {
    slidesArray[index].classList.remove('slider__item_active');
    dotsArray[index].classList.remove('slider__dot_active');
};

function setNextSlide(prevPage=false, nextPage=false, lengthOfArrayOfSlides, currentSlide) {
        arrow.onclick = function () {
            let nextPage = arrow.classList.contains('slider__arrow_next')
            let prevPage = arrow.classList.contains('slider__arrow_prev')
            currentSlide = arrayOfSlides.findIndex(isSlide);
        setSlidesDotsInactive(arrayOfSlides, arrayOfDots, currentSlide);
        let nextSlide = setNextSlide(prevPage, nextPage, lengthOfArrayOfSlides, currentSlide);
        setCurrentSlideAndDot(arrayOfSlides, arrayOfDots, nextSlide)
    };
};

for (let dot in arrayOfDots) {
    arrayOfDots[dot].onclick = function () {
        currentSlide = arrayOfSlides.findIndex(isSlide);
        setSlidesDotsInactive(arrayOfSlides, arrayOfDots, currentSlide);
        setCurrentSlideAndDot(arrayOfSlides, arrayOfDots, parseInt(dot));
    };
};
