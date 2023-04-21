
(() => {
  const refs = {
    openModalBtn: document.querySelectorAll('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
    
  };

  refs.openModalBtn.forEach(data=>data.addEventListener('click', toggleModal));
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();


(() => {
  const refs = {
    openModalBtn: document.querySelectorAll('[data-modal-open1]'),
    closeModalBtn: document.querySelector('[data-modal-close1]'),
    modal: document.querySelector('[data-modal1]'),
    
  };

  refs.openModalBtn.forEach(data=>data.addEventListener('click', toggleModal));
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();





