let mobileMenu = document.querySelector('.mobile');
let call = document.querySelector('.modal-call');

let feedbackOpen = document.querySelectorAll('.button-chat');
let feedback = document.querySelector('.modal-feedback');
let pageBlur = document.querySelector('.page');
let feedbackClose = document.querySelector('.feedback--close');

const closeFeedback = ['mousedown', 'touchend'];

//управлять открытием и закрытием окна "Обратная связь"
function toggleFeedbackWindow() {

  for (let i in closeFeedback) {
    openFeedbackButton(closeFeedback[i]);
    closeFeedbackButton(closeFeedback[i]);
    closeFeedbackOnTouch(closeFeedback[i]);

  }
}
toggleFeedbackWindow();

function openFeedbackButton(object) {

  for (let feedbackOpenButton of feedbackOpen) {
    feedbackOpenButton.addEventListener(object, function(evt) {
      evt.preventDefault();
      feedback.classList.add('feedback--show');
      pageBlur.classList.add('page--blur');
    });

  }
}


function closeFeedbackButton(object) {
  feedbackClose.addEventListener(object, function(evt) {
    evt.preventDefault();

    if( mobileMenu.classList.contains('mobile--show') || call.classList.contains('call--show') ) {
      feedback.classList.remove('feedback--show');
    } else {
      feedback.classList.remove('feedback--show');
      pageBlur.classList.remove('page--blur');
    }
  });
}


function closeFeedbackOnTouch(object) {
  pageBlur.addEventListener(object, function(evt) {

    if (evt.target == pageBlur) {
      evt.preventDefault();

      if( mobileMenu.classList.contains('mobile--show') || call.classList.contains('call--show') ) {
        feedback.classList.remove('feedback--show');
      } else {
        feedback.classList.remove('feedback--show');
        pageBlur.classList.remove('page--blur');
      }
    }
});
}
