'use strict';

//Создание случайных целых чисел в диапазоне

const generateIntegralNum = (min, max) => {

  if (max < min) {

    return 'Error! Please, write correct max number';

  } else {

    if (min === max) {

      return max;

    } else {

      return Math.floor(min + Math.random() * Math.floor(max + 1 - min));

    }

  }

};


//Создание случайных числе с плавающей точкой после запятой

const generateNonIntegralNum = (min, max, numAfterPoint) => {

  if (max < min) {

    return 'Error! Please, write correct max number';

  } else {

    if (min === max) {

      return max;

    } else {

      if (numAfterPoint < 1) {

        return 'Error! Please, write correct numAfterPoint';

      } else {

        const nonIntegralNum = (min + Math.random() * (max - min)).toString();

        return Number(nonIntegralNum.slice(0, numAfterPoint + 2));

      }

    }

  }

};

generateIntegralNum(5, 7);

generateNonIntegralNum(1.2, 1.5, 3);


