var swiper = new Swiper(".feature__slider", {
   loop: true,
   slidesPerView: 1,
   spaceBetween: 20,
      autoplay: {
        delay: 2500,
        disableOnInteraction: true,
      },
   breakpoints: {
    1440: {
        slidesPerView: 5,
        spaceBetween: 30
    },
    1028: {
        slidesPerView: 4,
        spaceBetween: 30
    },
    768: {
        slidesPerView: 3,
        spaceBetween: 0
    },
    430: {
        slidesPerView: 2,
        spaceBetween: 0
    }    
  }
 });