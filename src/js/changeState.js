import state from '../state/state';
import createMarkup from './createMarkup';

const imagesBox = document.querySelector('#images-box');
const resetImgBtn = document.querySelector('#restore-img');

state.getSevedImages();
createMarkup.allImages(state.getState());

imagesBox.addEventListener('click', deleteImg);
resetImgBtn.addEventListener('click', restoreToDefaultImg);

function deleteImg(event) {
  const { id, type } = event.target.dataset;
  if (type !== 'delete') {
    return;
  }
  const imgForDelete = imagesBox.querySelector(`div[id="${id}"]`);
  imagesBox.removeChild(imgForDelete);
  state.deleteImg(id);
}

function restoreToDefaultImg() {
  state.setDefaultImages();
  createMarkup.allImages(state.getState());
}
