const swiper = new Swiper(".swiper", {
  loop: true,
  speed: 2000,
  grabCursor: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },
  slidesPerView: "auto",
  spaceBetween: 16,
  centeredSlides: true,

  navigation: {
    nextEl: ".button-next",
    prevEl: ".button-prev",
  },
  breakpoints: {
    320: {},
    992: {
      centeredSlides: false,
      spaceBetween: 24,
    },
  },
});
