const lotSwiper = new Swiper('.swiper', {
    direction: 'horizontal',
    slidesPerView: 'auto',
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
      },
  });

// change pagination link with with active class on swiping
lotSwiper.on('slideChange', function () {
var activeIndex = lotSwiper.realIndex; 
document.querySelectorAll('.card__swiper-wrapper__pagination .swiper__pagination__link').forEach(function (child) {
    child.classList.remove('pagination__link_active');
});
var visibleChildIndex = 0;
document.querySelectorAll('.card__swiper-wrapper__pagination .swiper__pagination__link').forEach(function (child, index) {
if (child.offsetParent !== null) {
    if (visibleChildIndex === activeIndex) {
    child.classList.add('pagination__link_active');
    }
    visibleChildIndex++;
}
});
});


// handle resizing as there are diff amount of elements in swiper
handleViewportWidth();
window.addEventListener('resize', handleViewportWidth);

function handleViewportWidth() {
    // on mobile slide to 2nd
    if (window.innerWidth < 600) {
      var firstPaginationLink = document.querySelector('.card__swiper-wrapper__pagination .swiper__pagination__link:first-child');
      if (firstPaginationLink.classList.contains('pagination__link_active')) {
        var secondPaginationLink = document.querySelector('.card__swiper-wrapper__pagination .swiper__pagination__link:nth-child(2)');
        firstPaginationLink.classList.remove('pagination__link_active');
        secondPaginationLink.classList.add('pagination__link_active');
      }
    } else {
        // on tablet scroll to 1st and change pagination element
      var activePaginationLink = document.querySelector('.card__swiper-wrapper__pagination .pagination__link_active');
      if (activePaginationLink) {
        
        activePaginationLink.classList.remove('pagination__link_active');
        document.querySelector('.card__swiper-wrapper__pagination .swiper__pagination__link:first-child').classList.add('pagination__link_active');
      }
      lotSwiper.slideTo(0);
    }
  }


  
function handleSlideLinkClick(event) {
  event.preventDefault();
  var siblings = event.target.parentElement.children;
  var targetSlide = Array.from(siblings).indexOf(event.target);
  //  black magic to find element indexes if some r hidden
  if (targetSlide !== -1) {
    var firstVisibleIndex = Array.from(siblings).findIndex(child => child.offsetParent !== null);
    if (firstVisibleIndex !== 0) { 
      targetSlide = targetSlide - firstVisibleIndex;
    }
    lotSwiper.slideTo(targetSlide);
  }
}

document.querySelectorAll('[data-slide]').forEach(function(link) {
  link.addEventListener('click', handleSlideLinkClick);
});
