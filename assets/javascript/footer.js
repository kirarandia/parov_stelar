$(function () {
    $(window).on('scroll', function () {
        if ( $(window).scrollTop() > 10 ) {
            $('.footer').addClass('active');
        } else {
            $('.footer').removeClass('active');
        }
    });
});
