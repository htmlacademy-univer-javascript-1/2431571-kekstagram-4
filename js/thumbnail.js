const thumbnailTemplate = document.querySelector('#picture')
  .content.querySelector('.picture');

const container = document.querySelector('.pictures');

const createThumbnail = (picture) => {
  const {url, description, comments, likes} = picture;
  const thumbnail = thumbnailTemplate.cloneNode(true);

  thumbnail.querySelector('.picture__img').src = url;
  thumbnail.querySelector('.picture__img').alt = description ;
  thumbnail.querySelector('.picture__likes').textContent = likes;
  thumbnail.querySelector('.picture__comments').textContent = comments.length;

  return thumbnail;
};

const fragment = document.createDocumentFragment();

const renderThumbnails = (pictures) => {
  pictures.forEach((picture) => {
    const thumbnail = createThumbnail(picture);
    fragment.append(thumbnail);
  });

  container.appendChild(fragment);
};

export {renderThumbnails};
