$('.logo-header').ready( function () {
    $('#logo-text').css('opacity', 1);
});
$(window).scroll(function() {
    var windowHeight = $(window).height();
    var windowScroll = $(window).scrollTop();
    if (windowScroll > windowHeight - 80) {
        $('nav').css('margin-top', '0');
        $('nav').css('background-color', '#FFF');
        $('nav a').css('color', '#004852');
    } else {
        $('nav').css('margin-top', '25px');
        $('nav').css('background-color', 'rgba(255, 255, 255, 0)');
        $('nav a').css('color', '#FFF');
    }
    $('.welcome').css('opacity', 1 - windowScroll / (windowHeight / 2) );
});