'use strict';
const AVATAR_URL = 'img/avatars/user';
const AVATAR_TYPE = '.png';
const OFFER_TITLE = 'Lorem Ipsum';
const OFFER_PRICE = [200, 3000, 5000, 10000];
const OFFER_TYPE = ['palace', 'flat', 'house', 'bungalow'];
// const TYPE_NAMES = {
//   flat: 'Квартира',
//   bungalow: 'Бунгало',
//   house: 'Дом',
//   palace: 'Дворец',
// };
const OFFER_ROOMS = [1, 2, 3];
const OFFER_GUESTS = [1, 2, 3, 5];
const OFFER_CHECKIN = ['12:00', '13:00', '14:00'];
const OFFER_CHECKOUT = ['12:00', '13:00', '14:00'];
const OFFER_FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const OFFER_DESCRIPTION = 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.';
const OFFER_PHOTOS = ['http://o0.github.io/assets/images/tokyo/hotel1.jpg', 'http://o0.github.io/assets/images/tokyo/hotel2.jpg', 'http://o0.github.io/assets/images/tokyo/hotel3.jpg'];
const LOCATION_X_MIN = 35.65000;
const LOCATION_X_MAX = 35.70000;
const LOCATION_Y_MIN = 139.70000;
const LOCATION_Y_MAX = 139.80000;
const LOCATION_NUM_AFTER_POINT_MIN = 1;
const LOCATION_NUM_AFTER_POINT_MAX = 5;
const PIN_QUANTITY = 8;

// Создание случайных целых чисел в диапазоне

const generateIntegralNum = (min, max) => {

  if (max < min) {
    return 'Error! Please, write correct max number';
  }

  if (min === max) {
    return max;
  }

  return Math.floor(min + Math.random() * Math.floor(max - min));

};

// Вычисление, сколько цифр в переданном числе до запятой

const findDotNum = (num) => {
  let numArray = Array.from(num);

  for (let i = 0; i < numArray.length; i++) {
    if (numArray[i] === '.') {
      return i + 1;
    }
  }

  return 0;
}

// Создание случайных чисел с плавающей точкой после запятой

const generateNonIntegralNum = (min, max, numAfterPoint) => {

  if (max < min) {
    return 'Error! Please, write correct max number';
  }

  if (min === max) {
    return max;
  }

  if (numAfterPoint < 1) {
    return 'Error! Please, write correct numAfterPoint';
  }

  const nonIntegralNum = (min + Math.random() * (max - min)).toString();
  const numBeforePoint = findDotNum(nonIntegralNum)
  return Number(nonIntegralNum.slice(0, numBeforePoint + numAfterPoint));
}

// Создание url аватара

const generateUrl = (number) => {
  if (number < 10) {
    return AVATAR_URL + 0 + number + AVATAR_TYPE;
  }

  return AVATAR_URL + number + AVATAR_TYPE;
};

// Создание массива url аватаров

const generateUrlArray = (amount) => {
  let numbersArray = [];
  let avatarNumbersArray = [];

  for (let i = 0; i < amount; i++) {
    numbersArray[i] = i + 1;
  }

  for (let i = 0; i < amount; i++) {
    const number = generateIntegralNum(0, numbersArray.length);
    const avatarNumber = numbersArray[number];
    avatarNumbersArray[i] = generateUrl(avatarNumber);
    numbersArray.splice(number, 1);
  }

  return avatarNumbersArray;
};

// Создание массива предложений

const generateOffers = function () {
  let offersArray = [];

  const urlArray = generateUrlArray(PIN_QUANTITY);

  for (let i = 0; i < PIN_QUANTITY; i++) {
    const offerFeatures = OFFER_FEATURES.slice(generateIntegralNum(0, OFFER_FEATURES.length));
    let offerPhotos = [];
    //const locationX = generateNumber(LOCATION_X_MIN, LOCATION_X_MAX - PIN_WIDTH - PIN_WIDTH / 2);
    //const locationY = generateNumber(LOCATION_Y_MIN, LOCATION_Y_MAX - PIN_HEIGHT);
    const locationX = generateNonIntegralNum(LOCATION_X_MIN, LOCATION_X_MAX, generateIntegralNum(LOCATION_NUM_AFTER_POINT_MIN, LOCATION_NUM_AFTER_POINT_MAX));
    const locationY = generateNonIntegralNum(LOCATION_Y_MIN, LOCATION_Y_MAX, generateIntegralNum(LOCATION_NUM_AFTER_POINT_MIN, LOCATION_NUM_AFTER_POINT_MAX));

    if (OFFER_PHOTOS.length > 0) {
      offerPhotos = OFFER_PHOTOS.slice(generateIntegralNum(0, OFFER_PHOTOS.length));
    }

    offersArray[i] = {
      'author':
        {
          'avatar': urlArray[i],
        },
      'offer':
        {
          'title': OFFER_TITLE,
          'address': locationX.toString() + ', ' + locationY.toString(),
          'price': OFFER_PRICE[generateIntegralNum(0, OFFER_PRICE.length)],
          'type': OFFER_TYPE[generateIntegralNum(0, OFFER_TYPE.length)],
          'rooms': OFFER_ROOMS[generateIntegralNum(0, OFFER_ROOMS.length)],
          'guests': OFFER_GUESTS[generateIntegralNum(0, OFFER_GUESTS.length)],
          'checkin': OFFER_CHECKIN[generateIntegralNum(0, OFFER_CHECKIN.length)],
          'checkout': OFFER_CHECKOUT[generateIntegralNum(0, OFFER_CHECKOUT.length)],
          'featured': offerFeatures,
          'description': OFFER_DESCRIPTION,
          'photos': offerPhotos,
        },
      'location':
        {
          'x': locationX,
          'y': locationY,
        },
    };
  }

  return offersArray;
};

generateOffers();


