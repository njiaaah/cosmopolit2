const otherProgressSwiper = new Swiper('.progress__other-articles-container', {
    direction: 'horizontal',
    slidesPerView: 'auto',
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
      },
      spaceBetween: '8'
  });


const ProgressArticleSwiper = new Swiper('.progress__article-opened-container', {
    direction: 'horizontal',
    slidesPerView: '1',
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
      },
      spaceBetween: '8'
  });