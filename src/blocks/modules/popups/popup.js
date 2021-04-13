$('.reviews-page__add-btn').on('click', function() {
    $('.overlay, #add-review').fadeIn('slow');
});

$('.review-card__btn').on('click', function() {
    $('.overlay, .review-popup').fadeIn('slow');
});

$('.popup__close').on('click', function() {
    $('.overlay, #add-review, .review-popup').fadeOut('slow');
});