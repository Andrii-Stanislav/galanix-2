import defaultImages from './defaultImages';

const state = {
  _images: [],

  getState() {
    return this._images;
  },

  deleteImg(id) {
    this._images = this._images.filter(img => {
      return img.id != id;
    });

    this.seveImages();
  },

  setDefaultImages() {
    this._images = [...defaultImages];

    this.seveImages();
  },

  seveImages() {
    localStorage.setItem('imagesArr', JSON.stringify(this._images));
  },

  getSevedImages() {
    const savedImages = JSON.parse(localStorage.getItem('imagesArr'));
    if (savedImages) {
      this._images = Array.from(savedImages);
    } else {
      this._images = Array.from(defaultImages);
    }
  },
};

export default state;

// https://drive.google.com/drive/folders/1ybcFfYc8GG6m-spK4cIHjONDHlMU4PQC?usp=sharing
// https://drive.google.com/file/d/1MHFDe9hzPohdOmQ5GXnn6eSHNnFWQglc/view?usp=sharing
// https://drive.google.com/drive/folders/1ybcFfYc8GG6m-spK4cIHjONDHlMU4PQC?usp=sharing
