
  const swipers = document.querySelectorAll('.swiper');
  let swiperWrapper = document.querySelector('.swiper-wrapper');
  let swiperSlide = document.querySelectorAll('.swiper-slide');

  let windowSize = window.innerWidth;
  let mySwiper;

  function setSlider() {
    if (window.innerWidth <= 767 ) {

      for (let swiper of swipers) {
        swiper.dataset.mobile = 'true';

        mySwiper = new Swiper(swiper, {
          slidesPerView: 'auto',
          spaceBetween: 16,

          pagination: {
              el: '.swiper-pagination',
              clickable: true,
          },
        });
      }

    }
     if( window.innerWidth > 767 ) {
      for (swiper of swipers) {
        swiper.dataset.mobile = 'false';
        if (swiper.classList.contains('swiper-initialized')) {
          mySwiper.destroy();
        }
      }
    }
  }

  setSlider();

  window.addEventListener('resize', () => {
    setSlider();
  });

