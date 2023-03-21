import Swiper from "../../node_modules/swiper/swiper-bundle";

import '../../node_modules/swiper/swiper-bundle.css';


const swiper = new Swiper('.mySwiper', {
    
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 3,
    initialSlide: 0,
    rewind: true,
    watchOverflow: true,
    keyboard: true,


    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
      },
      // // when window width is >= 480px
      768: {
        slidesPerView: 2,
      },
      // // when window width is >= 640px
      1200: {
        slidesPerView: 4,
      }
    },
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    autoplay: {
      delay: 12000,
    },
  });