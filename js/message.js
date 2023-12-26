import {isEscapeKey} from './utils.js';

const body = document.body;
const successMessageTemplate = document.querySelector('#success').content.querySelector('section');
const errorMessageTemplate = body.querySelector('#error').content.querySelector('section');

const hideMessage = () => {
  const message = document.querySelector('.success') || document.querySelector('.error');
  const messageCloseButton = document.querySelector('.success__button') || document.querySelector('.error__button');
  body.removeEventListener('keydown', closeMessageByEscape);
  body.removeEventListener('click', closeMessage);
  messageCloseButton.removeEventListener('click', hideMessage);
  message.remove();
};

const onDocumentKeydown = (evt) =>{
  if(isEscKey(evt) && !document.body.querySelector('.error')){
    evt.preventDefault();
    closeOverlay();
  }
};

function closeMessageByEscape(evt) {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    hideMessage();
  }
}

function closeMessage(evt) {
  if (!(evt.target.closest('.success__inner') || evt.target.closest('.error__inner'))) {
    hideMessage();
  }
}

const showMessage = (messageTemplate) => {
  const message = messageTemplate.cloneNode(1);
  message.style.zIndex = 100;

  body.addEventListener('keydown', closeMessageByEscape);
  body.addEventListener('click', closeMessage);
  document.removeEventListener('keydown', onDocumentKeydown);
  body.appendChild(message);
  const messageCloseButton = document.querySelector('.success__button') || document.querySelector('.error__button');
  messageCloseButton.addEventListener('click', hideMessage);
};

const onSuccess = () => {
  closeOverlay();
  showMessage(successMessageTemplate);
};

const onFail = () => {
  showMessage(errorMessageTemplate);
  body.querySelector('.error__button').addEventListener('click', () => { hideMessage })
};

export {onSuccess, onFail};