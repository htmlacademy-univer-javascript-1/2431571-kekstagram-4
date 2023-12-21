import {getRandomInt, getRandomIdFromRange} from './util.js';

const MAX_HASHTAGS_COUNT = 5;
const MAX_DESCRIPTION_LENGTH = 140;
const PHOTO_COUNT = 25;

export const SCALE_STEP = 25;

export const DEFAULT_SCALE = 100;

export const SCALE = {
  MIN: 25,
  MAX: 100
};

const COMMENTS = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра.', 'В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают.', 'Как можно было поймать такой неудачный момент?!'
];

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

const CommentsConfig = {
  MIN_ID: 0,
  MAX_ID: 9999,
  MIN_AMOUNT: 0,
  MAX_AMOUNT: 30
};

const Avatar = {
  MIN: 1,
  MAX: 6
};

const LikesConfig = {
  MIN: 15,
  MAX: 200
};

const createComment = () => ({
  id: getRandomIdFromRange(CommentsConfig.MIN_ID, CommentsConfig.MAX_ID),
  avatar: `img/avatar-${getRandomInt(Avatar.MIN, Avatar.MAX)}.svg`,
  message: COMMENTS[getRandomInt(0, COMMENTS.length - 1)],
  name: NAMES[getRandomInt(0, NAMES.length - 1)]
});

const createPhoto = (id) => ({
  id: id,
  url: `photos/${id}.jpg`,
  description: DESCRIPTIONS[getRandomInt(0, DESCRIPTIONS.length - 1)],
  likes: getRandomInt(LikesConfig.MIN, LikesConfig.MAX),
  comments: Array.from({length: getRandomInt(CommentsConfig.MIN_AMOUNT, CommentsConfig.MAX_AMOUNT)}
    , (_, index) => createComment(index + 1))
});

const photos = Array.from({length: PHOTO_COUNT}, (_, index) => createPhoto(index + 1));

export {photos, MAX_DESCRIPTION_LENGTH, MAX_HASHTAGS_COUNT};
