$('.accordeon__item-header').on('click', function () {
    $(this).siblings().slideToggle('500');
    $(this).parent().toggleClass('accordeon__item--active');
});