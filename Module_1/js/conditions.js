'use strict';

let cost = 0;
const subscription = 'pro';

if (subscription === 'pro') {
  cost = 100;
}

console.log(cost);

if (subscription === 'pro') {
  cost = 100;
} else if (subscription === ' super pro') {
  cost = 200;
} else {
  cost = 50;
}

console.log(cost);