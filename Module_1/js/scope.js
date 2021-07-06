'use strict';

// области видимости глобальная, блочная, функции

const message = 'Hello'
console.log(message) // 'Hello'

if (true) {
  const message1 = 'Hello'

  console.log(message1) // 'Hello'
}

console.log(message1) // ReferenceError: message1 is not defined