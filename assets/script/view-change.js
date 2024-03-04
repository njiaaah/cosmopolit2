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

// Hide menu elements on scroll

let lastScrollTop = 0;
let timeout;

$(window).scroll(function() {
    const currentScroll = $(this).scrollTop();

    // always visible if not scrolled 160px from top
    // 160px - sticky header height + its distance from top
    if (currentScroll > 160) {
        if (currentScroll != lastScrollTop) {
            $('.section-filter-result__header-sticky').addClass('hidden-above');
            $('.menu-bottom').addClass('hidden-below');
        } else {
            $('.section-filter-result__header-sticky').removeClass('hidden-above');
            $('.menu-bottom').removeClass('hidden-below');
        }
        clearTimeout(timeout);
        timeout = setTimeout(function() {
            $('.section-filter-result__header-sticky').removeClass('hidden-above');
            $('.menu-bottom').removeClass('hidden-below');
        }, 1000); //timeout to toggle view
    } else {
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