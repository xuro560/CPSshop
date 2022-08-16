let mobileMenu = document.querySelector('.mobile');

let pageBlur = document.querySelector('.page');
let burgerOpen = document.querySelector('.button-burger');
let burgerClose = document.querySelector('.mobile--close');

//открыть меню при клике
burgerOpen.addEventListener( 'click', function(evt) {
  evt.preventDefault();
  mobileMenu.classList.add('mobile--show');
  pageBlur.classList.add('page--blur');
});
//закрыть меню при клике
burgerClose.addEventListener( 'click', function(evt) {
  evt.preventDefault();
  mobileMenu.classList.remove('mobile--show');
  pageBlur.classList.remove('page--blur');
});
//закрыть меню при таче по области

pageBlur.addEventListener( 'touchend', function() {
  if (mobileMenu.classList.contains('mobile--show')) {
    mobileMenu.classList.remove('mobile--show');
    pageBlur.classList.remove('page--blur');
  }
});
