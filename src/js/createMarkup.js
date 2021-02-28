import photoItemTemplate from '../templates/photo-item.hbs';

const createMarkup = {
  imagesBox: document.querySelector('#images-box'),

  allImages(imgArr) {
    const marcup = imgArr.reduce((acc, img) => {
      acc += photoItemTemplate(img);
      return acc;
    }, '');

    this.imagesBox.innerHTML = marcup;
  },
};

export default createMarkup;
