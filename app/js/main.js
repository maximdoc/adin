$(function () {

    $('.testimonials__inner').slick({
        dots: true,
        arrows: false,
        infinite: true,
        speed: 300,
        slidesToShow: 2,
        variableWidth: true,
        responsive: [
            {
                breakpoint: 890,
                settings: {
                    slidesToShow: 1,
                    variableWidth: false,
                }
            }
        ]
    });

    $('.menu_btn').on('click', function () {
        $('.menu_btn').toggleClass('menu_btn--active');
        $('.header_menu-item').toggleClass('header_menu-item--active');
    });

    $('.header_menu-link').on('click', function () {
        $('.menu_btn').removeClass('menu_btn--active');
        $('.header_menu-item').removeClass('menu_list--active');
    });

});