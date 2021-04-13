$('.service-categories__item').on('mouseover', function (e) {
    e.preventDefault();

    $(this).siblings().removeClass('service-categories__item--active');
    $('.service-categories__img').removeClass('service-categories__img--active');

    $(this).addClass('service-categories__item--active');
    $($(this).attr('href')).addClass('service-categories__img--active');
});