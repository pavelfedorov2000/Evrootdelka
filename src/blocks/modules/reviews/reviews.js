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