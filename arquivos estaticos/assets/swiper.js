console.log("init");

const swiper = new Swiper(".swiper", {
  spaceBetween: 100,
  autoplay: {
    delay: 2000,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
