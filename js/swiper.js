const exploreSwiper = new Swiper(".explore-swiper .swiper", {
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
const excursionsSwiper = new Swiper(".excursions__swiper .swiper", {
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

  breakpoints: {
    640: {},
    768: {
      centeredSlides: false,
      spaceBetween: 24,
      centerInsufficientSlides: true,
    },
  },
});

const reviewsSwiper = new Swiper(".reviews__swiper .swiper", {
  loop: true,
  speed: 2000,
  grabCursor: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },
  slidesPerView: "auto",
  spaceBetween: 16,
  centeredSlides: true,

  breakpoints: {
    640: {},
    768: {
      centeredSlides: false,
      spaceBetween: 24,
      centerInsufficientSlides: true,
    },
  },
});
