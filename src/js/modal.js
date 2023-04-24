
(() => {
  const refs = {
    openModalBtn: document.querySelectorAll('[data-modal-open]'),
    closeModalBtn: document.querySelectorAll('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
    
  };

  refs.openModalBtn.forEach(data =>data.addEventListener('click', toggleModal));
  refs.closeModalBtn.forEach (data => data.addEventListener('click', toggleModal));

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();







