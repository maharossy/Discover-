$(function () {
    $('.mini-menu').click(function () {
        if ($('nav ul').css('display') == 'none') {
           $('nav ul').slideDown();
        } else {
            $('nav ul').slideUp();
        }
    });

$('.service-slider').slick({
    arrows: false,
    dots: true,
    responsive: [{
        breakpoint: 600,
        settings: {
            dots: false,
            centerMode: true,
            centerPadding: '40px',
        }
    }]
})
AOS.init();
});