$('.about-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    variableWidth: true,
    prevArrow: '<button class="slider__btn about-slider__btn about-slider__btn--prev icon-arr-l"></button>',
    nextArrow: '<button class="slider__btn about-slider__btn about-slider__btn--next icon-arr-r"></button>',
    responsive: [
        {
            breakpoint: 575,
            settings: "unslick",
        },
    ]
});