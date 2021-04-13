$('.promo-slider').slick({
    slidesToScroll: 1,
    prevArrow: '<button class="slider__btn promo-slider__btn promo-slider__btn--prev"></button>',
    nextArrow: '<button class="slider__btn promo-slider__btn promo-slider__btn--next icon-arr-r-mini"></button>',
    variableWidth: true,
    responsive: [
        {
            breakpoint: 375,
            settings: {
                //variableWidth: false,
            }
        },
    ]
});