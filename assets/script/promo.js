const promoSwiper = new Swiper('.promo__swiper', {
    direction: 'horizontal',
    slidesPerView: 'auto',
    breakpoints: {
        1: {
            spaceBetween: 12
        },
        600: {
            spaceBetween: 32,
            slidesPerView: 3,
        }
    },
    pagination: {
        el: '.gallery__swiper-pagination_promo',
        type: 'bullets',
        clickable: true
      },
      
  });