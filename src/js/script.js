$(function () {

    @@include('../blocks/modules/hamburger/hamburger.js')

    @@include('../blocks/modules/promo/promo.js')

    @@include('../blocks/modules/projects/projects.js')

    @@include('../blocks/modules/service-categories/service-categories.js')

    @@include('../blocks/modules/three-parts-section/masters/masters.js')

    @@include('../blocks/modules/works/works.js')

    @@include('../blocks/modules/prices/price-list.js')

    @@include('../blocks/modules/work-examples/work-examples.js')

    @@include('../blocks/modules/about/about.js')

    @@include('../blocks/modules/reviews/reviews.js')

    @@include('../blocks/modules/popups/popup.js')

    @@include('tabs.js')

    $('.open-video').magnificPopup({
        type: 'iframe',
        preloader: false,
    });
});



