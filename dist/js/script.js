$(function () {

    $('.hamburger-btn').on('click', function() {
    $(this).toggleClass('hamburger-btn--active');
    $('.mobile-menu').toggleClass('mobile-menu--active');
});

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

    $('.projects-slider').slick({
    slidesToScroll: 1,
    prevArrow: '<button class="slider__btn projects-slider__btn projects-slider__btn--prev icon-arr-l"></button>',
    nextArrow: '<button class="slider__btn projects-slider__btn projects-slider__btn--next icon-arr-r"></button>',
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

    $('.service-categories__item').on('mouseover', function (e) {
    e.preventDefault();

    $(this).siblings().removeClass('service-categories__item--active');
    $('.service-categories__img').removeClass('service-categories__img--active');

    $(this).addClass('service-categories__item--active');
    $($(this).attr('href')).addClass('service-categories__img--active');
});

    $('.masters-slider').slick({
    prevArrow: '<button class="slider__btn masters-slider__btn masters-slider__btn--prev icon-arr-l"></button>',
    nextArrow: '<button class="slider__btn masters-slider__btn masters-slider__btn--next icon-arr-r"></button>',
});

$('.reviews-masters__slider').slick({
    prevArrow: '<button class="slider__btn reviews-masters__slider-btn reviews-masters__slider-btn--prev icon-arr-l"></button>',
    nextArrow: '<button class="slider__btn reviews-masters__slider-btn reviews-masters__slider-btn--next icon-arr-r"></button>',
    appendArrows: $('.reviews-masters__arrows'),
});

    new Swiper('.works-slider', {
	//direction: 'horizontal',
	slidesPerView: 1,
	loop: true,
	pagination: {
		el: '.swiper-pagination',
		type: 'fraction',
	},
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	scrollbar: {
		el: '.swiper-scrollbar',
		draggable: true,
	},
});

    $('.accordeon__item-header').on('click', function () {
    $(this).siblings().slideToggle('500');
    $(this).parent().toggleClass('accordeon__item--active');
});

    /* new Swiper('.works-examples__slider', {
	//direction: 'horizontal',
	slidesPerView: 2,
	loop: true,
	navigation: {
		nextEl: '.works-examples__slider-btn--next',
		prevEl: '.works-examples__slider-btn--prev',
	},
	scrollbar: {
		el: '.works-examples__slider-scrollbar',
		draggable: true,
		dragSize: Number,
	},
}); */

$('.work-examples__slider').slick({
    slidesToShow: 2,
    prevArrow: '<button class="slider__btn work-examples__slider-btn work-examples__slider-btn--prev"><svg width="32" height="20" viewBox="0 0 32 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M11.4105 19.1886C11.2828 19.3167 11.131 19.4183 10.964 19.4876C10.7969 19.5569 10.6179 19.5926 10.437 19.5926C10.2561 19.5926 10.0771 19.5569 9.91001 19.4876C9.74296 19.4183 9.59122 19.3167 9.4635 19.1886L1.2135 10.9386C1.08545 10.8109 0.983859 10.6592 0.914541 10.4921C0.845224 10.3251 0.809544 10.146 0.809544 9.96513C0.809544 9.78427 0.845224 9.60519 0.914541 9.43814C0.983859 9.27109 1.08545 9.11936 1.2135 8.99163L9.4635 0.741634C9.72168 0.483446 10.0719 0.338398 10.437 0.338398C10.8021 0.338398 11.1523 0.483446 11.4105 0.741634C11.6687 0.999823 11.8137 1.35 11.8137 1.71513C11.8137 2.08027 11.6687 2.43045 11.4105 2.68863L4.13125 9.96513L11.4105 17.2416C11.5385 17.3694 11.6401 17.5211 11.7095 17.6881C11.7788 17.8552 11.8145 18.0343 11.8145 18.2151C11.8145 18.396 11.7788 18.5751 11.7095 18.7421C11.6401 18.9092 11.5385 19.0609 11.4105 19.1886Z" fill="#FFD600"/><path d="M31 9.81483C31 9.89524 30.961 10.036 30.7758 10.1823C30.5847 10.3331 30.2846 10.4445 29.9358 10.4445L3.10123 10.4445C2.75243 10.4445 2.45237 10.3331 2.26127 10.1823C2.07601 10.036 2.03704 9.89524 2.03704 9.81483C2.03704 9.73442 2.07602 9.59364 2.26127 9.44739C2.45237 9.29652 2.75243 9.1852 3.10123 9.1852L29.9358 9.1852C30.2846 9.1852 30.5847 9.29652 30.7758 9.44739C30.961 9.59364 31 9.73442 31 9.81483Z" fill="#FFD600" stroke="#FFD600" stroke-width="2"/></svg></button>',
    nextArrow: '<button class="slider__btn work-examples__slider-btn work-examples__slider-btn--next"><svg width="33" height="20" viewBox="0 0 33 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M21.5895 0.811367C21.7172 0.683318 21.869 0.581725 22.036 0.512407C22.2031 0.443089 22.3821 0.40741 22.563 0.40741C22.7439 0.40741 22.9229 0.443089 23.09 0.512407C23.257 0.581725 23.4088 0.683318 23.5365 0.811367L31.7865 9.06137C31.9145 9.18909 32.0161 9.34082 32.0855 9.50787C32.1548 9.67492 32.1905 9.85401 32.1905 10.0349C32.1905 10.2157 32.1548 10.3948 32.0855 10.5619C32.0161 10.7289 31.9145 10.8806 31.7865 11.0084L23.5365 19.2584C23.2783 19.5166 22.9281 19.6616 22.563 19.6616C22.1979 19.6616 21.8477 19.5166 21.5895 19.2584C21.3313 19.0002 21.1863 18.65 21.1863 18.2849C21.1863 17.9197 21.3313 17.5696 21.5895 17.3114L28.8688 10.0349L21.5895 2.75837C21.4615 2.63064 21.3599 2.47891 21.2905 2.31186C21.2212 2.14481 21.1855 1.96573 21.1855 1.78487C21.1855 1.60401 21.2212 1.42492 21.2905 1.25787C21.3599 1.09083 21.4615 0.939092 21.5895 0.811367Z" fill="#FFD600"/><path d="M1 10.1852C1 10.1048 1.03898 9.964 1.22423 9.81775C1.41534 9.66688 1.71539 9.55556 2.0642 9.55556H28.8988C29.2476 9.55556 29.5476 9.66688 29.7387 9.81775C29.924 9.964 29.963 10.1048 29.963 10.1852C29.963 10.2656 29.924 10.4064 29.7387 10.5526C29.5476 10.7035 29.2476 10.8148 28.8988 10.8148H2.0642C1.71539 10.8148 1.41533 10.7035 1.22423 10.5526C1.03898 10.4064 1 10.2656 1 10.1852Z" fill="#FFD600" stroke="#FFD600" stroke-width="2"/></svg></button>',
    variableWidth: true,
    responsive: [
        {
            //breakpoint: ,
            settings: {
                
            }
        },
    ]
});

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

    $('.more-reviews').on('click', function () {
    $('.reviews-page__more-cards').slideToggle('300');
    $(this).toggleClass('more-reviews--hide');
});

/* new Swiper('.reviews-page__slider', {
    //direction: 'horizontal',
    slidesPerView: 3,
    slidesPerColumn: 3,
    spaceBetween: 20,
    navigation: {
        nextEl: '.reviews-page__slider-btn--next',
        prevEl: '.reviews-page__slider-btn--prev',
    },
    scrollbar: {
        el: '.reviews-page__slider-scrollbar',
        draggable: true,
        dragSize: Number,
    },
}); */

    $('.reviews-page__add-btn').on('click', function() {
    $('.overlay, #add-review').fadeIn('slow');
});

$('.review-card__btn').on('click', function() {
    $('.overlay, .review-popup').fadeIn('slow');
});

$('.popup__close').on('click', function() {
    $('.overlay, #add-review, .review-popup').fadeOut('slow');
});

    $('.tab').on('click', function (e) {
    e.preventDefault();

    $($(this).siblings()).removeClass('tab--active');
    $($(this).parent().siblings().children()).removeClass('tab--active');
    $('.tabs__content').removeClass('tabs__content--active');

    $(this).addClass('tab--active');
    $($(this).attr('href')).addClass('tabs__content--active');

    $('.masters-slider').slick('setPosition');
});

    $('.open-video').magnificPopup({
        type: 'iframe',
        preloader: false,
    });
});



