'use strict';

//Определить площадь круга с радиусом 10см (ПR(2)). Math.pow(a, b) - возведение в степень
const rad = 10;
const area = Math.PI * Math.pow(rad, 2);
console.log(area);

//Каким будет результат этих выражений?
console.log(5 > 4);
console.log(10 >= "7");
console.log("2" > "12");
console.log("2" < "12");
console.log("4" == 4);
console.log("6" === 6);
console.log("false" === false);
console.log(1 == true);
console.log(1 === true);
console.log("0" == false);
console.log("0" === false);
console.log("Ёнанас" < "ёжик");
console.log("Ёнанас" === "ёжик");
console.log(undefined == null);
console.log(undefined === null);

// Что выведет код?
console.log(true && 3);
console.log(false && 3);
console.log(true && 4 && "hello");
console.log(true && 0 && "hello");
console.log(true || 3);
console.log(true || 3 || 4);
console.log(true || false || 7);
console.log(null || 2 || undefined);
console.log((1 && null && 2) > 0);
console.log(null || 2 && 3 || 4);

//Напишите условие if для проверки, что переменная age находится в диапазоне между 14 и 90 включительно. 
// «Включительно» означает, что значение переменной age может быть равно 14 или 90.
const min = 14;
const max = 90;
const age = 30;