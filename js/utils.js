const ERROR_Z_POSITION = 100;
const ERROR_FONT_SIZE = 20;
const ERROR_VERTICAL_PADDING = 10;
const ERROR_HORIZONTAL_PADDING = 50;

/*const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

const getRandomIdFromRange = (min, max) => {
  const previousValues = [];

  return function () {
    let currentValue = getRandomInt(min, max);
    if (previousValues.length >= (max - min + 1)) {
      return null;
    }
    while (previousValues.includes(currentValue)) {
      currentValue = getRandomInt(min, max);
    }
    previousValues.push(currentValue);
    return currentValue;
  };
};*/

const isEscapeKey = (evt) => evt.key === 'Esc' || evt.key === 'Escape';

const showUnloadingErrorMessage = (errorText) => {
  const errorMessage = document.createElement('div');

  errorMessage.style.zIndex = ERROR_Z_POSITION;
  errorMessage.style.color = 'white';
  errorMessage.style.backgroundColor = '#9C281B';
  errorMessage.style.fontSize = `${ERROR_FONT_SIZE}px`;
  errorMessage.style.textAlign = 'center';
  errorMessage.style.padding = `${ERROR_VERTICAL_PADDING}px ${ERROR_HORIZONTAL_PADDING}px`;
  errorMessage.style.position = 'absolute';
  errorMessage.style.left = 0;
  errorMessage.style.right = 0;
  errorMessage.style.top = 0;

  errorMessage.textContent = errorText;

  document.body.append(errorMessage);
};

export {isEscapeKey, showUnloadingErrorMessage};

