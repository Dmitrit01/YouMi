$(document).ready(function() {
    //Бургер
    $('.menu__burger').click(function() {
        $('.menu__burger,.menu__wrapper').toggleClass('active');
        $('body').toggleClass('lock');
    });
    //Слайдер-online
    $('.online__slider').slick({
        dots:true,
        arrows:false,
        slidesToShow: 2,
        responsive: [
            {
                breakpoint: 640,
                settings: {
                   slidesToShow: 1,
                   dots:true,
                }
            },
        ]
    });
    //Слайдер-together
    $('.slider-together').slick({
        dots:false,
        arrows:false,
        slidesToShow: 1,
        infinite: true,
        variableWidth: true,
        rows:2,
        autoplay:true,
        autoplaySpeed:500,
    });
});