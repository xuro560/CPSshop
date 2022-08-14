let mobileMenu = document.querySelector('.mobile');

let feedbackOpen = document.querySelectorAll('.button-chat');
let feedback = document.querySelector('.modal-feedback');
let pageBlur = document.querySelector('.page');

let feedbackClose = document.querySelector('.feedback--close');

//открыть меню при клике
for ( feedbackOpenButton of feedbackOpen) {
  feedbackOpenButton.addEventListener( 'click', function() {
    feedback.classList.add('feedback--show');
    pageBlur.classList.add('page--blur');
  });
}

//закрыть меню при клике
feedbackClose.addEventListener( 'click', function() {

  feedback.classList.remove('feedback--show');
  if (!mobileMenu.classList.contains('mobile--show') && pageBlur.classList.contains('page--blur')) {
    pageBlur.classList.remove('page--blur');
  }

});
//открыть меню при таче по области
pageBlur.addEventListener( 'touchstart', function() {
  feedback.classList.remove('feedback--show');
  pageBlur.classList.remove('page--blur');
});

