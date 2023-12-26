import {isEscapeKey} from './utils.js';
import {sendData} from './api.js';
import {onSuccess, onFail} from './message.js';
import {pristine} from './validation.js';

const FILE_TYPES = ['jpg', 'jpeg', 'png'];

const body = document.body;
const uploadForm = document.querySelector('.img-upload__form');
const pictureUploadInput = uploadForm.querySelector('.img-upload__input');
const closeButton = uploadForm.querySelector('.img-upload__cancel');
const pictureOverlay = uploadForm.querySelector('.img-upload__overlay');
const picturePreview = document.querySelector('.img-upload__preview img');
const submitButton = uploadForm.querySelector('.img-upload__submit');
const commentField = uploadForm.querySelector('.text__description');
const hashtagsField = uploadForm.querySelector('.text__hashtags');
const pictureFile = document.querySelector('.img-upload__start input[type=file]');
const effectsPreviews = document.querySelectorAll('.effects__list .effects__preview');

const isTextFieldFocused = () =>
  document.activeElement === hashtagsField || document.activeElement === commentField;

const closeForm = () => {
    body.classList.remove('modal-open');
    pictureOverlay.classList.add('hidden');
    closeButton.removeEventListener('click', closeForm);
    document.removeEventListener('keydown', closeFormByEscape);
    pictureUploadInput.value = '';
    pristine.reset();
    uploadForm.reset();
    hashtagsField.textContent = '';
    commentField.textContent = '';
    submitButton.removeAttribute('disabled');
};

function closeFormByEscape(evt) {
  const errorMessage = document.querySelector('.error');
  if (isEscapeKey(evt) && !isTextFieldFocused() && !errorMessage) {
    evt.preventDefault();
    closeForm();
  }
}

pictureUploadInput.addEventListener('change', () => {
  pictureOverlay.classList.remove('hidden');
  document.body.classList.add('modal-open');
  document.querySelector('.effect-level__slider').parentNode.classList.add('hidden');
  document.querySelector('.scale__control--value').value = '100%';
  picturePreview.removeAttribute('style');
  closeButton.addEventListener('click', closeForm);
  document.addEventListener('keydown', closeFormByEscape);
});

const isValidType = (file) => FILE_TYPES.some((it) => file.name.toLowerCase().endsWith(it));

pictureFile.addEventListener('change', () => {
  const file = pictureFile.files[0];
  if (file && isValidType(file)) {
    picturePreview.src = URL.createObjectURL(file);
    effectsPreviews.forEach((element) => {
      element.style.backgroundImage = `url(${picturePreview.src})`;
    });
  }
});

uploadForm.addEventListener('submit', async (evt) => {
  evt.preventDefault();
  if (pristine.validate()) {
    submitButton.disabled = true;
    await sendData(new FormData(uploadForm))
      .then(() => {
        onSuccess();
      })
      .catch(() => {
        onFail();
      });
    submitButton.disabled = false;
  }
});
