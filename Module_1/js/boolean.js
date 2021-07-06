// Булевый тип (boolean) может принимать только два значения: true (истина) и false (ложь).

const yes = true;
const no = false;

console.log(yes && no);
console.log(yes || no);
console.log(!yes);

console.log(1 > 2 && 2 === 2);
console.log(1 > 2 || 2 === 2);

// Приведение типов к boolean
console.log(!!1);
console.log(!!0);
console.log(!!null);
console.log(!!NaN);
console.log(!!undefined);
console.log(!!'');