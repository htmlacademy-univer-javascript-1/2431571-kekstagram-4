import { closeOnEscKeyDown } from './util.js';

const bigPicture = document.querySelector('.big-picture');
const bigPictureImage = bigPicture.querySelector('.big-picture__img');
const pictureCloseButton = bigPicture.querySelector('.big-picture__cancel');
const likesCount = bigPicture.querySelector('.likes-count');
const commentsCount = bigPicture.querySelector('.comments-count');
const socialComments = bigPicture.querySelector('.social__comments');
const pictureCaption = bigPicture.querySelector('.social__caption');
const socialCommentsCount = bigPicture.querySelector('.social__comment-count');
const loadComments = bigPicture.querySelector('.comments-loader');

const closeBigPicture = () => {
  bigPicture.classList.add('hidden');
  document.body.classList.remove('modal-open');
};

const onBigPictureEscKeyDown = (evt) => {
  closeOnEscKeyDown(evt, () => {
    closeBigPicture();

    document.removeEventListener('keydown', onBigPictureEscKeyDown);

  });
};

const onCloseBigPictureClick = () => {
  closeBigPicture();

  document.removeEventListener('keydown', onBigPictureEscKeyDown);
  pictureCloseButton.removeEventListener('click', onCloseBigPictureClick);
};

const showBigPicture = (picture) => {
  const {url, description, likes} = picture;

  bigPicture.classList.remove('hidden');
  document.body.classList.add('modal-open');

  bigPictureImage.src = url;
  pictureCaption.textContent = description;
  likesCount.textContent = likes;
  commentsCount.classList.add('hidden');
  socialComments.classList.add('hidden');
  socialCommentsCount.classList.add('hidden');
  loadComments.classList.add('hidden');

  document.addEventListener('keydown', onBigPictureEscKeyDown);
  pictureCloseButton.addEventListener('click', onCloseBigPictureClick);
};

export {showBigPicture};
