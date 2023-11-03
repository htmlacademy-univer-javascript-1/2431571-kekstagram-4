import {getRandomInt, getRandomIdFromRange} from './util.js';

const COUNT_PHOTO = 25;

const CommentsConfig = {
  MIN_ID: 0,
  MAX_ID: 9999,
  MIN_AMOUNT: 0,
  MAX_AMOUNT: 30
};

const LikesConfig = {
  MIN: 15,
  MAX: 200
};

const Avatar = {
  MIN: 1,
  MAX: 6
};

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

const GetDescription = () => DESCRIPTIONS[getRandomInt(0, DESCRIPTIONS.length-1)];

const GetComment = () => ({
  id: getRandomIdFromRange(CommentsConfig.MIN_ID, CommentsConfig.MAX_ID),
  avatar: `img/avatar-${getRandomInt(Avatar.MIN, Avatar.MAX)}.svg`,
  message: COMMENTS[getRandomInt(0, COMMENTS.length-1)],
  name: NAMES[getRandomInt(0, NAMES.length-1)]
});

const addPhoto = (index) => ({
  id: index,
  url: `photos/${index}.jpg`,
  description: GetDescription(),
  likes: getRandomInt(LikesConfig.MIN, LikesConfig.MAX),
  comments: Array.from({length: getRandomInt(CommentsConfig.MIN_AMOUNT,
    CommentsConfig.MAX_AMOUNT)},GetComment)
});

const addPhotos = () => Array.from({length: COUNT_PHOTO}, addPhoto);

export {addPhotos};
