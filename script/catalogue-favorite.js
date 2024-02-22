// Hide menu elements on scroll

    let lastScrollTop = 0;
    let timeout;

        $(window).scroll(function() {
            const currentScroll = $(this).scrollTop();
            if (currentScroll > 100) {
                if (currentScroll != lastScrollTop) {

                    $('.menu-bottom').addClass('hidden-below');
                } else {

                    $('.menu-bottom').removeClass('hidden-below');
                }
                clearTimeout(timeout);
                timeout = setTimeout(function() {
                    $('.menu-bottom').removeClass('hidden-below');
                }, 600); //timeout to toggle view
            } else {
                $('.menu-bottom').removeClass('hidden-below');
            }

            lastScrollTop = currentScroll;
        });