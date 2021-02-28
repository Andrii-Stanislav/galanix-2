const imagesBox = document.querySelector('#images-box');
const modalBackdrop = document.querySelector('#modal-backdrop');
const modalContainer = document.querySelector('#modal-container');
const modalCloseBtn = document.querySelector('#modal-close_btn');

imagesBox.addEventListener('click', openModal);
modalCloseBtn.addEventListener('click', closeModal);

function openModal(event) {
  const { localName, src } = event.target;
  if (localName !== 'img') {
    return;
  }

  modalBackdrop.classList.add('open');
  modalContainer.innerHTML = `<img class="modal-img" src="${src}" alt="photo">`;

  window.addEventListener('keydown', escapeCloseModal);
  modalBackdrop.addEventListener('click', backdropCloseModal);
}

function closeModal() {
  modalBackdrop.classList.remove('open');
  modalBackdrop.removeEventListener('click', backdropCloseModal);
  window.removeEventListener('keydown', escapeCloseModal);
  modalContainer.innerHTML = '';
}

function backdropCloseModal(event) {
  if (event.target !== event.currentTarget) {
    return;
  }
  closeModal();
}

function escapeCloseModal(event) {
  if (event.code !== 'Escape') {
    return;
  }
  closeModal();
}
