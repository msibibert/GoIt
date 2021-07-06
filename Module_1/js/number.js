'use strict';
// Целые числа и числа с плавающей запятой. 
// После объявления переменной, можно инициализировать ее числовым значением.
 
const intNum = 100;
const floatNum = 10.20232;

/*  Примеры вычислений */
const ex1 = intNum + floatNum;
const ex2 = intNum - floatNum;
const ex3 = intNum * floatNum;
const ex4 = intNum / floatNum;
const ex5 = 10 % 3;
const ex6 = (2 + 3) * 10 / 5;

console.log('ex1 -> ', ex1, '\nex2 -> ', ex2, '\nex3 -> ', ex3, '\nex4 -> ', ex4, '\nex5 -> ', ex5, '\nex6 -> ', ex6);

const inf = 1 / 0;

console.log('inf -> ', inf);

const n = "не число" / 2;

console.log('n -> ', n);


/* Примеры методов */
// toString
// let num = 120;

// console.log('num -> ', num.toString());
// console.log('num (base=2) -> ', num.toString(2));

// Math.round
// let num = 11.1;

// console.log('num -> ',  Math.round(num));

// toFixed
// let num = 11.36;

// console.log('num1 -> ',  num.toFixed(1));
// console.log('num2 -> ',  num.toFixed(4));

// Math.random
// let num = 11.1;

// console.log('random -> ',  Math.random());

// min and max
// console.log( 'max -> ', Math.max(3, 5, -12, 0, 2) );
// console.log( 'min -> ', Math.min(1, 2) );

// pow
// console.log( 'pow -> ', Math.pow(2, 3) );

/* Функции */
// console.log( 'parseInt -> ', parseInt('120px') );
// console.log( 'parseFloat', parseFloat('12.5px') );

// console.log( 'parseInt -> ', parseInt('12.3') );
// console.log( 'parseFloat -> ', parseFloat('12.3.4') );

// console.log( 'parseInt -> ', parseInt('$$$122.3') );