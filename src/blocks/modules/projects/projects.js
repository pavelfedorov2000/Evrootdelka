$('.projects-slider').slick({
    slidesToScroll: 1,
    prevArrow: '<button class="slider__btn projects-slider__btn projects-slider__btn--prev icon-arr-l"></button>',
    nextArrow: '<button class="slider__btn projects-slider__btn projects-slider__btn--next icon-arr-r"></button>',
    appendArrows: $('.projects__slider-arrows'),
    variableWidth: true,
    responsive: [
        {
            breakpoint: 767,
            settings: {
                variableWidth: false,
            }
        },
    ]
});

$('.project-item__gallery').each(function (index) {

    $(this).addClass('project-item__gallery-' + index);
    var indexClass = '.project-item__gallery-' + index;

    $(indexClass + ' .project-item__slider').slick({
        slidesToShow: 1,
        arrows: false,
        fade: true,
        asNavFor: indexClass + ' .project-item__nav-slider',
    });

    $(indexClass + ' .project-item__nav-slider').slick({
        slidesToShow: 4,
        arrows: false,
        asNavFor: indexClass + ' .project-item__slider',
        focusOnSelect: true,
    });
});

$('.popup-gallery').magnificPopup({
    delegate: 'a',
    type: 'image',
    tLoading: 'Loading image #%curr%...',
    mainClass: 'mfp-img-mobile',
    gallery: {
        enabled: true,
        navigateByImgClick: true,
        preload: [0, 1] // Will preload 0 - before current, and 1 after thecurrent image
    },
    image: {
        tError: '<a href="%url%">The image #%curr%</a> could not be loaded',
    }
});