let mobileMenu = document.querySelector('.mobile');

let call = document.querySelector('.modal-call');
let pageBlur = document.querySelector('.page');

let callOpen = document.querySelectorAll('.button-callback');
let callClose = document.querySelector('.call--close');

const closeCall = ['mousedown', 'touchend'];

//управлять открытием и закрытием окна "Заказать звонок"
function toggleCallWindow() {

  for (let i in closeCall) {

    document.addEventListener(closeCall[i], function(evt) {
      evt.preventDefault();

      for (let callOpenButton of callOpen) {

        if (evt.target == callOpenButton) {
          call.classList.add('call--show');
          pageBlur.classList.add('page--blur');

        } else if (evt.target.classList.contains('page') || evt.target == callClose) {

          if( !mobileMenu.classList.contains('mobile--show') ) {
            call.classList.remove('call--show');
            pageBlur.classList.remove('page--blur');
          } else {
            call.classList.remove('call--show');
          }

        }
      }
  });
  }
}
toggleCallWindow();
