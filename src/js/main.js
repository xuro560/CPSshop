//скрытие текста "Читать далее"

let expandTextButton = document.querySelector('.section__button');
let description = document.querySelector('.section__description');

const expandText = ['mousedown', 'touchend'];

for (let i in expandText) {
  expandTextButton.addEventListener( expandText[i], function() {

    description.classList.toggle('hide');
    description.classList.toggle('description-size');

    const initialText = 'Читать далее';
    if (!description.classList.contains('description-size')) {
      expandTextButton.textContent = 'Скрыть';
      expandTextButton.classList.toggle('rotate');
    } else {
      expandTextButton.textContent = initialText;
      expandTextButton.classList.toggle('rotate');
    }
} );
}

