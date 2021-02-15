'use strict';

//Создание случайных целых чисел в диапазоне

const generateIntegralNum = (min, max) => {

  if (max < min) {

    console.log('Error! Please, write correct max number');

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

    console.log('Error! Please, write correct max number');

  } else {

    if (min === max) {

      return max;

    } else {

      if (numAfterPoint < 1) {

        console.log('Error! Please, write correct numAfterPoint');

      } else {

        const nonIntegralNum = (min + Math.random() * (max - min)).toString();

        return Number(nonIntegralNum.slice(0, numAfterPoint + 2));

      }

    }

  }

};

console.log(generateIntegralNum(5, 7));

console.log(generateNonIntegralNum(2.1, 3.2, 4))
