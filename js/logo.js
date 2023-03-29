$('.logo-header').ready( function () {
    $('#logo-text').css('opacity', 1);
});
$(window).scroll(function() {
    $(this).unbind("mouseenter mouseleave");
    var windowHeight = $(window).height();
    var windowScroll = $(window).scrollTop();
    if (windowScroll > windowHeight - 80) {
        $('nav').css('padding-top', '30px');
        $('nav').css('background-color', '#FFF');
        $('nav .menu').css('color', '#004852');
        $('nav .desktop').css('opacity', '1');
    } else {
        $('nav').css('padding-top', '55px');
        $('nav').css('background-color', 'rgba(255, 255, 255, 0)');
        $('nav .menu').css('color', '#FFF');
        $('nav .desktop').css('opacity', '0');
    }
    $('.welcome').css('opacity', 1 - windowScroll / (windowHeight / 2) );
});