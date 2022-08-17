let mobileMenu = document.querySelector('.mobile');

let feedbackOpen = document.querySelectorAll('.button-chat');
let feedback = document.querySelector('.modal-feedback');
let pageBlur = document.querySelector('.page');
let feedbackClose = document.querySelector('.feedback--close');

const closeFeedback = ['mousedown', 'touchend'];

//управлять открытием и закрытием окна "Обратная связь"
function toggleFeedbackWindow() {

  for (let i in closeFeedback) {

    document.addEventListener(closeFeedback[i], function(evt) {
      evt.preventDefault();

      for (let feedbackOpenButton of feedbackOpen) {

        if (evt.target == feedbackOpenButton) {

          feedback.classList.add('feedback--show');
          pageBlur.classList.add('page--blur');

        } else if (evt.target.classList.contains('page') || evt.target == feedbackClose) {
          if( !mobileMenu.classList.contains('mobile--show') ) {
            feedback.classList.remove('feedback--show');
            pageBlur.classList.remove('page--blur');
          } else {
            feedback.classList.remove('feedback--show');
          }
        }
      }
  });
  }
}
toggleFeedbackWindow();
