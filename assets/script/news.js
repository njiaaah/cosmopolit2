const lotSwiper = new Swiper('.news__other-news-container', {
    direction: 'horizontal',
    slidesPerView: 'auto',
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
      },
      spaceBetween: '8'
  });