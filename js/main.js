// Cлучайное целое число
function randomInt (numMin, numMax) {
  if (numMin < 0 || numMax < 0 || numMax <= numMin) {
    return false;
  } else {
    numMin = Math.ceil(numMin);
    numMax = Math.floor(numMax);
    return Math.floor(Math.random() * (numMax - numMin + 1)) + numMin;
  }
};

// Cлучайное целое число с плавающей точкой
function randomIntFloat (numMin, numMax, numAfter) {
  if (numMin < 0 || numMax < 0 || numMax <= numMin) {
    return false;
  } else {
    numMin = Math.ceil(numMin);
    numMax = Math.floor(numMax);
    const numResult = (Math.random() * (numMax - numMin) + numMin);
    return numResult.toFixed(numAfter);
  }
};





function RandomAvatar() {

  const AVATAR_MIN_VAL = 1;
  const AVATAR_MAX_VAL = 10;

  let = avatarVal = randomInt(AVATAR_MIN_VAL, AVATAR_MAX_VAL)

  if (avatarVal < AVATAR_MAX_VAL) {
    avatarVal = '0'+avatarVal;
  }

  return `img/avatars/user${avatarVal}.png`;
}

const TitleArr = [
  'Первый заголовок предложения', 
  'Второй заголовок предложения', 
  'Третий заголовок предложения', 
  'Четвертый заголовок предложения', 
  'Пятый заголовок предложения', 
  'Шестой заголовок предложения', 
  'Седьмой заголовок предложения', 
  'Восьмой заголовок предложения', 
  'Девятый заголовок предложения', 
  'Десятый заголовок предложения', 
];

const typeArr = [
  'palace', 'flat', 'house', 'bungalow', 'hotel'
];

const checkinArr = [
  '12:00', '13:00', '14:00'
];

const checkoutArr = [
  '12:00', '13:00', '14:00'
];

function RandomFeaturesLenght() {

  const featuresArr = [
    'wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'
  ];

  for (let i = 0; i < featuresArr.length; i++) {
    //return featuresArr[i];

    console.log(featuresArr[i]);
  }

}
RandomFeaturesLenght();


// Создание объекта обявлений
function creatAds() {

  return [
    {
      avatar: RandomAvatar(),
      offer: {
        title: TitleArr[randomInt(0, TitleArr.length-1)],
        address: '',
        price: randomInt(10000, 45000),
        type: typeArr[randomInt(0, typeArr.length-1)],
        rooms: randomInt(1, 5),
        guests: randomInt(1, 10),
        checkin: checkinArr[randomInt(0, checkinArr.length-1)],
        checkout: checkoutArr[randomInt(0, checkoutArr.length-1)],
      },

    },
  ]

}



