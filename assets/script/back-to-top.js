$(document).ready(function() {
    var lastScrollTop = 0;

    $(window).scroll(function() {
        var currentScroll = $(this).scrollTop();
        if (currentScroll > lastScrollTop) {
            // hide btn on scrolling down
            $('.back-to-top-button').removeClass('back-to-top-button_visible');
        } else {
            // show on scrolling upwards
            // hide if scrolled to top
            if (currentScroll < 100 ) {
                $('.back-to-top-button').removeClass('back-to-top-button_visible');
            } else {
                $('.back-to-top-button').addClass('back-to-top-button_visible');
            }
        }
        lastScrollTop = currentScroll;
    });

    $('.back-to-top-button').click(function() {
        $('html, body').animate({scrollTop: 0}, 'fast');
        return false;
    });
});
