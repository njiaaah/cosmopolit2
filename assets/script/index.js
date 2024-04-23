var $targetElement = $('.main__hero');
var $content = $('.header-index');
var $checkbox = $('#body__is-nav-menu-visible-checkbox');

// Function to check if element is out of viewport
function isElementOutOfViewport(el) {
  var rect = el[0].getBoundingClientRect();
  return rect.bottom < 150 || rect.top > $(window).height();
}

// Function to toggle class based on checkbox state
function toggleClassBasedOnCheckbox() {
  if ($checkbox.prop('checked')) {
    $content.removeClass('header_dark-green');
  } else {
    if (!isElementOutOfViewport($targetElement)) {
      $content.addClass('header_dark-green');
    }
  }
}


// Check on scroll
$(window).on('scroll', function() {
  if (!($checkbox.prop('checked'))) {
    if (isElementOutOfViewport($targetElement)) {
      $content.removeClass('header_dark-green');
    } else {
      $content.addClass('header_dark-green');
    }
  }
});

// Initial check on scroll
$(window).scroll();

// Toggle class on checkbox change
$checkbox.on('change', function() {
  toggleClassBasedOnCheckbox();
});



// nav bar active class

$(window).scroll(function() {
  var scrollPosition = $(this).scrollTop();

  $('section').each(function() {
      var top = $(this).offset().top;
      var bottom = top + $(this).outerHeight();

      if (scrollPosition >= top - 300 && scrollPosition + 300 <= bottom) {
          var sectionId = $(this).attr('id');
          $('nav a').removeClass('header-desktop__list-item_active');
          $('nav a[href="#' + sectionId + '"]').addClass('header-desktop__list-item_active');
      }
  });
});

