const partnersSwiper = new Swiper('.section-partners__partners-container', {
  direction: 'horizontal',
  slidesPerView: 'auto',
  pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    spaceBetween: '3'
});
const achivementsSwiper = new Swiper('.section-achivements__achivements-container', {
  direction: 'horizontal',
  slidesPerView: 'auto',
  pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    spaceBetween: '24'
});