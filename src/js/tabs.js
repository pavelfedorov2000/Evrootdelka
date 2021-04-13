$('.tab').on('click', function (e) {
    e.preventDefault(); // отмена стандартного поведения браузера

    $($(this).siblings()).removeClass('tab--active');
    $($(this).parent().siblings().children()).removeClass('tab--active');
    $('.tabs__content').removeClass('tabs__content--active');

    $(this).addClass('tab--active');
    $($(this).attr('href')).addClass('tabs__content--active');

    $('.masters-slider').slick('setPosition'); // Инициализация слайдера
});