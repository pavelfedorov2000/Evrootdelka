$('.hamburger-btn').on('click', function() {
    $(this).toggleClass('hamburger-btn--active');
    $('.mobile-menu').toggleClass('mobile-menu--active');
    $('body').toggleClass('_lock');
});