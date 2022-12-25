$(document).ready(function() {
    //Бургер
    $('.menu__burger').click(function() {
        $('.menu__burger,.menu__wrapper').toggleClass('active');
        $('body').toggleClass('lock');
    });
    //Акардеон
    $('.item-ask__icon_1').click(function() {
        $('.item-ask__icon_1,.item-ask__text_1').toggleClass('open');
        
    });
    $('.item-ask__icon_2').click(function() {
        $('.item-ask__icon_2,.item-ask__text_2').toggleClass('open');
        
    });
    $('.item-ask__icon_3').click(function() {
        $('.item-ask__icon_3,.item-ask__text_3').toggleClass('open');
        
    });
    $('.item-ask__icon_4').click(function() {
        $('.item-ask__icon_4,.item-ask__text_4').toggleClass('open');
        
    });
    $('.item-ask__icon_5').click(function() {
        $('.item-ask__icon_5,.item-ask__text_5').toggleClass('open');
        
    });
    $('.item-ask__icon_6').click(function() {
        $('.item-ask__icon_6,.item-ask__text_6').toggleClass('open');
        
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
        //autoplay:true,
        autoplaySpeed:500,
    });
    //Слайдер-specialist
    $('.slider-specialist').slick({
        dots:true,
        arrows:false,
        slidesToShow: 1,
        rows:1,
       
    });

});