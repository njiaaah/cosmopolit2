// changing view via bottom menu / filter menu on catalogue.html etc


// checkboxes that prevent scroll on html
const scrollDisableChb = [
    // '.body__is-filter-visible-label',
    // '.sort-checkbox',
    '#catalogue-filter__sort-checkbox',
    '#catalogue-result__sort-checkbox',
    '#body__is-nav-menu-visible-checkbox',
    '#body__is-filter-visible-checkbox',
];


scrollDisableChb.forEach(function(selector) {
    $(selector).change(function() {
        if($(window).width() < 950){
            disableScroll($(this).prop('checked'))
        }
       
    });
  });


// disable scroll on these chb state change
function disableScroll(param) {
    if(param) {
        $("html").css("overflow-y", "hidden")
    } else {
        $("html").css("overflow-y", "auto")
    }
};

//   hide sort on filter popup if opt out of filter page without closing it, enable scroll also
$('#body__is-filter-visible-checkbox').change(function(){
    if(!$(this).prop('checked')) {
           $('#catalogue-filter__sort-checkbox').prop('checked', false)
           disableScroll($('#catalogue-filter__sort-checkbox').prop('checked'))
    }
});


// uncheck on reaching desktop view

$(window).resize(handleViewportChange);

function handleViewportChange() { 
    if ($(window).width() > 950) {
        scrollDisableChb.forEach(function(selector) {
            $(selector).prop('checked', false)
        })
        $("html").css("overflow-y", "auto")
    }
};

// hide menu elements on scroll

let lastScrollTop = 0;
let timeout;

$(window).scroll(function() {
    const currentScroll = $(this).scrollTop();
    const windowHeight = $(this).height();
    const documentHeight = $(document).height();
    if($('.main__filter-result-wrapper')) {
        var sectionTop = $('.main__filter-result-wrapper').offset().top;
    }


    // distance from the top where the elements should be visible
    const threshold = 160;

    if (currentScroll + windowHeight >= documentHeight) {
        // scrolled to the bottom of the page
        $('.section-filter-result__header-sticky').removeClass('hidden-above');
        $('.menu-bottom').removeClass('hidden-below');
    } else if (currentScroll > threshold) {
        // scrolled past the threshold
        if (currentScroll != lastScrollTop) {
            // hide only if scrolled past element containing it
            if(sectionTop && currentScroll > sectionTop) {
                $('.section-filter-result__header-sticky').addClass('hidden-above');
            } else {
                $('.section-filter-result__header-sticky').removeClass('hidden-above');
            }
            $('.menu-bottom').addClass('hidden-below');
        } else {
            $('.section-filter-result__header-sticky').removeClass('hidden-above');
            $('.menu-bottom').removeClass('hidden-below');
        }
        clearTimeout(timeout);
        timeout = setTimeout(function() {
            $('.section-filter-result__header-sticky').removeClass('hidden-above');
            $('.menu-bottom').removeClass('hidden-below');
        }, 800); // Timeout to toggle view
    } else {
        // Not scrolled past the threshold, keep elements visible
        $('.section-filter-result__header-sticky').removeClass('hidden-above');
        $('.menu-bottom').removeClass('hidden-below');
    }

    lastScrollTop = currentScroll;

    if(currentScroll == 0) {
        $('.header_slide-down-anim').removeClass('header_slide-down-anim')
    } else {
        $('.header').addClass('header_slide-down-anim')
        $('.header__cosmetic-gradient').addClass('header_slide-down-anim')
    }
});
