
    let swiper = document.querySelector('.swiper');
    let tabsWidth = swiper.offsetWidth;

    let swiperSlide = document.querySelectorAll('.swiper-slide');

    let brands = document.querySelectorAll('.tabs__slide.brand');
    let softwares = document.querySelectorAll('.tabs__slide.software');
    let brandsButton = document.querySelector('.tabs__button.brand');
    let softwaresButton = document.querySelector('.tabs__button.software');

    let tabCounter, tabsButton, tabAmount;

    //меняем разрешение секции "Бренды"
    function resizeBrands() {
      expandTabs(brands);
      buttonSwitcher(brands, brandsButton);
    }
    resizeBrands();
    //меняем разрешение секции "Ремонт"
      function resizeSoftwares() {
        expandTabs(softwares);
        buttonSwitcher(softwares, softwaresButton);
    }
    resizeSoftwares();

    swiper.addEventListener( 'resize', () => {
      resizeBrands();
    });
    swiper.addEventListener( 'resize', () => {
      resizeSoftwares();
    });

    //прячем карточки
    function expandTabs(tabCounter) {

      if ( window.innerWidth >= 768 ) {

        for (let i = 0; i < tabCounter.length; i++) {
            tabAmount = Math.floor( tabsWidth / tabCounter[i].offsetWidth );
        }

        if (tabCounter === softwares) {
          for (let i = tabAmount; i < tabCounter.length; i++ ) {
            tabCounter[i].classList.add('tab-hide');
          }
        }
        for (let i = tabAmount * 2; i < tabCounter.length; i++ ) {
          tabCounter[i].classList.add('tab-hide');
        }

    }
    }

    //кнопка "Показать все"
    function buttonSwitcher (tabCounter, tabsButton) {
      tabsButton.addEventListener( 'click', function() {

        if (tabCounter === softwares) {
          for (let i = tabAmount; i < tabCounter.length; i++ ) {
            tabCounter[i].classList.toggle('tab-hide');
          }
        } else {
          for (let i = tabAmount * 2; i < tabCounter.length; i++ ) {
              tabCounter[i].classList.toggle('tab-hide');
          }
        }

        const showAll = 'Показать все';

        if (tabsButton.textContent.includes(showAll)) {
            tabsButton.textContent = 'Скрыть';
            tabsButton.classList.toggle('rotate');
        } else {
            tabsButton.textContent = showAll;
            tabsButton.classList.toggle('rotate');
        }
    });
    }
