let mobileMenu = document.querySelector('.mobile');
let pageBlur = document.querySelector('.page');

let burgerOpen = document.querySelector('.button-burger');
let burgerClose = document.querySelector('.mobile--close');


const closeMenu = ['mousedown', 'touchend'];

//управлять открытием и закрытием окна Мобильное меню
function toggleMenuWindow() {

  for (let i in closeMenu) {

    document.addEventListener(closeMenu[i], function(evt) {
      evt.preventDefault();

        if (evt.target == burgerOpen) {

          mobileMenu.classList.add('mobile--show');
          pageBlur.classList.add('page--blur');

        } else if (evt.target.classList.contains('page') || evt.target == burgerClose) {

          mobileMenu.classList.remove('mobile--show');
          pageBlur.classList.remove('page--blur');
        }
  });
  }
}
toggleMenuWindow();


