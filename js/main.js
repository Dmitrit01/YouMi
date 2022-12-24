$(document).ready(function() {
    //Бургер
    $('.menu__burger').click(function() {
        $('.menu__burger,.menu__wrapper').toggleClass('active');
        $('body').toggleClass('lock');
    });
    
   
});