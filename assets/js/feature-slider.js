var swiper = new Swiper(".feature__slider", {
   loop: true,
   slidesPerView: 3,
   spaceBetween: 20,
      autoplay: {
        delay: 2500,
        disableOnInteraction: true,
      },
   breakpoints: {
    1200: {
        slidesPerView: 5,
        spaceBetween: 30
    },
    1028: {
        slidesPerView: 4,
        spaceBetween: 30
    },
    990: {
        slidesPerView: 3,
        spaceBetween: 0
    }
  }
 });