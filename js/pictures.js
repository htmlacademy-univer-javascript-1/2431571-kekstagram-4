import { showBigPicture } from './bigPicture.js';

const pictureTemplate = document.querySelector('#picture')
  .content.querySelector('.picture');

const container = document.querySelector('.pictures');

const createPhoto = (picture) => {
  const {url, description, comments, likes} = picture;
  const newPhoto = pictureTemplate.cloneNode(true);

  newPhoto.querySelector('.picture__img').src = url;
  newPhoto.querySelector('.picture__img').alt = description ;
  newPhoto.querySelector('.picture__likes').textContent = likes;
  newPhoto.querySelector('.picture__comments').textContent = comments.length;

  const onNewPhotoClick = (evt) => {
    evt.preventDefault();
    showBigPicture(picture);
  };

  newPhoto.addEventListener('click', onNewPhotoClick);

  return newPhoto;
};

const fragment = document.createDocumentFragment();

const renderPhotos = (pictures) => {
  pictures.forEach((picture) => {
    fragment.append(createPhoto(picture));
  });

  container.appendChild(fragment);
};

export {renderPhotos};
