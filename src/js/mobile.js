let call = document.querySelector('.modal-call');
let feedback = document.querySelector('.modal-feedback');

let mobileMenu = document.querySelector('.mobile');
let pageBlur = document.querySelector('.page');

let burgerOpen = document.querySelector('.button-burger');
let burgerClose = document.querySelector('.mobile--close');


const closeMenu = ['mousedown', 'touchend'];

//управлять открытием и закрытием окна Мобильное меню
function toggleMenuWindow() {

  for (let i in closeMenu) {
  openBurgerButton(closeMenu[i]);
  closeBurgerButton(closeMenu[i]);
  closeBurgerOnTouch(closeMenu[i]);
  }
}
toggleMenuWindow();


function openBurgerButton(object) {

  burgerOpen.addEventListener(object, function(evt) {
      evt.preventDefault();
      mobileMenu.classList.add('mobile--show');
      pageBlur.classList.add('page--blur');
    });
}

function closeBurgerButton(object) {
  burgerClose.addEventListener(object, function(evt) {
    evt.preventDefault();

    if (call.classList.contains('call--show') || feedback.classList.contains('feedback--show')) {
      mobileMenu.classList.remove('mobile--show');
    } else {
      mobileMenu.classList.remove('mobile--show');
      pageBlur.classList.remove('page--blur');
    }

  });
}

function closeBurgerOnTouch(object) {
  pageBlur.addEventListener(object, function(evt) {

    if (evt.target == pageBlur) {
      evt.preventDefault();

      if (call.classList.contains('call--show') || feedback.classList.contains('feedback--show')) {
        mobileMenu.classList.remove('mobile--show');
      } else {
        mobileMenu.classList.remove('mobile--show');
        pageBlur.classList.remove('page--blur');
      }
    }
});
}
