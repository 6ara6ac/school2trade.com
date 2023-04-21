const checkbox = document.querySelector('.checkbox__input')
const modalButton = document.querySelector ('.modal__button')


checkbox.addEventListener('change', checkCheckbox);


function checkCheckbox() {
    if (checkbox.checked) {
        modalButton.removeAttribute('disabled');

    } else {
        modalButton.setAttribute('disabled',true);
    }
  }

  