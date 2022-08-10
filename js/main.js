// Cлучайное целое число
const randomInt = (numMin, numMax) => {
  if (numMin < 0 || numMax < 0 || numMax <= numMin) {
    return false;
  } else {
    numMin = Math.ceil(numMin);
    numMax = Math.floor(numMax);
    return Math.floor(Math.random() * (numMax - numMin + 1)) + numMin;
  }
};
randomInt(5, 25);

// Cлучайное целое число с плавающей точкой
const randomIntFloat = (numMin, numMax, numAfter) => {
  if (numMin < 0 || numMax < 0 || numMax <= numMin) {
    return false;
  } else {
    numMin = Math.ceil(numMin);
    numMax = Math.floor(numMax);
    const numResult = (Math.random() * (numMax - numMin) + numMin);
    return numResult.toFixed(numAfter);
  }
};
randomIntFloat(5, 25, 7);
