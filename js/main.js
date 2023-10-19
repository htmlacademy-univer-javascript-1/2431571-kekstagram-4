const NAMES = [
  'Иван', 'Анна', 'Петр', 'Мария', 'Алексей', 'Елена'
];
const DESCRIPTIONS = [
  'Красота в каждой детали',
  'Захватывающий момент!',
  'Отражение идеальное',
  'Цвета просто потрясающие!',
  'Эмоции запечатлены в кадре',
  'Магия момента!',
  'Природа в своей красе',
  'Совершенное сочетание цветов',
  'Великолепные перспективы',
  'Удачно пойманный миг'
];
const COMMENTS = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра.', 'В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают.', 'Как можно было поймать такой неудачный момент?!'
];
const photos = [];
const COUNT_PHOTO = 25;
const COMMENTS_MAX = 30;
const LIKES = {
  MIN: 15,
  MAX: 200
};

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min) + min);

const GetDescription = () => DESCRIPTIONS[getRandomInt(0, DESCRIPTIONS.length-1)];

const GetComment = () => ({
  id: getRandomInt(0, 1000),
  avatar: `img/avatar-${getRandomInt(1,6)}.svg`,
  message: COMMENTS[getRandomInt(0, COMMENTS.length-1)],
  name: NAMES[getRandomInt(0, NAMES.length-1)]
});

const addPhoto = (index) => ({
  id: index,
  url: `photos/${index}.jpg`,
  description: GetDescription(),
  likes: getRandomInt(LIKES.MIN, LIKES.MAX+1),
  comments: Array.from(getRandomInt(0, COMMENTS_MAX),GetComment)
});

const addPhotos = () => {
  for (let index = 1; index <= COUNT_PHOTO; index++) {
    photos.push(addPhoto(index));
  }
};

addPhotos();

