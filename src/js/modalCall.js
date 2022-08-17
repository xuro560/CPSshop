let mobileMenu = document.querySelector('.mobile');
let feedback = document.querySelector('.modal-feedback');


let call = document.querySelector('.modal-call');
let pageBlur = document.querySelector('.page');

let callOpen = document.querySelectorAll('.button-callback');
let callClose = document.querySelector('.call--close');

const closeCall = ['mousedown', 'touchend'];

//управлять открытием и закрытием окна "Заказать звонок"
function toggleCallWindow() {

  for (let i in closeCall) {
  openCallButton(closeCall[i]);
  closeCallButton(closeCall[i]);
  closeCallOnTouch(closeCall[i]);
  }
}
toggleCallWindow();


function openCallButton(object) {

  for (let callOpenButton of callOpen) {
    callOpenButton.addEventListener(object, function(evt) {
      evt.preventDefault();
      call.classList.add('call--show');
      pageBlur.classList.add('page--blur');
    });

  }
}

function closeCallButton(object) {
  callClose.addEventListener(object, function(evt) {
    evt.preventDefault();

    if( mobileMenu.classList.contains('mobile--show') || feedback.classList.contains('feedback--show') ) {
      call.classList.remove('call--show');
    } else {
      call.classList.remove('call--show');
      pageBlur.classList.remove('page--blur');
    }
  });
}

function closeCallOnTouch(object) {
  pageBlur.addEventListener(object, function(evt) {

    if (evt.target == pageBlur) {
      evt.preventDefault();

      if( mobileMenu.classList.contains('mobile--show') || feedback.classList.contains('feedback--show') ) {
        call.classList.remove('call--show');
      } else {
        call.classList.remove('call--show');
        pageBlur.classList.remove('page--blur');
      }
    }

});
}
