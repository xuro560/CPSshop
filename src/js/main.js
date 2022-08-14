//скрытие текста "Читать далее"

let expandTextButton = document.querySelector('.section__button');
let description = document.querySelector('.section__description');

expandTextButton.addEventListener( 'click', function() {

    description.classList.toggle('hide');
    description.classList.toggle('description-size');

    const initialText = 'Читать далее';
    if (expandTextButton.textContent.includes(initialText)) {
        expandTextButton.textContent = 'Скрыть';
        expandTextButton.classList.toggle('rotate');
    } else {
        expandTextButton.textContent = initialText;
        expandTextButton.classList.toggle('rotate');
    }
} );
