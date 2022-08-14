let mobileMenu = document.querySelector('.mobile');

let callOpen = document.querySelectorAll('.button-callback');
let call = document.querySelector('.modal-call');
let pageBlur = document.querySelector('.page');

let callClose = document.querySelector('.call--close');


//открыть обратный звонок при клике
for ( callOpenButton of callOpen) {
  callOpenButton.addEventListener( 'click', function() {
    call.classList.add('call--show');
    pageBlur.classList.add('page--blur');
  });
}

//закрыть обратный звонок при клике
callClose.addEventListener( 'click', function() {

  call.classList.remove('call--show');
  if (!mobileMenu.classList.contains('mobile--show') && pageBlur.classList.contains('page--blur')) {
    pageBlur.classList.remove('page--blur');
  }

});
//открыть обратный звонок при таче по области
pageBlur.addEventListener( 'touchstart', function() {
  call.classList.remove('call--show');
  pageBlur.classList.remove('page--blur');
});
