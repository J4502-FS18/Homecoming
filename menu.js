$(document).ready(function () {
    $('.menu-trigger').click(function () {
        $('nav #nav').slideToggle(500);
    });

    $(window).resize(function () {
        if ($(window).width() > 700){
        $('nav #nav').removeAttr('index');
    }
    });
});

