// Строка — это индексированный набор из нуля или более символов, заключенных в кавычки.
let str = "Привет";
let str2 = 'Привет второй раз' + '...';
let phrase = `Привет и ${str}`;

console.log('str ->', str);
console.log('str2 ->', str2);
console.log('phrase ->', phrase);

// length
console.log('length of dragon ->',  'dragon'.length);

// спецсимвол
let names = "Names:\n * John\n * Pete\n * Mary";

console.log('names ->', phrnamesase);

console.log('I\'m a programmer!' );

// регистр
console.log('worLd'.toUpperCase() );
console.log('WoRLd'.toLowerCase() );

// поиск подстроки
let str = 'Widget with id';

console.log( str.indexOf('Widget') );
console.log( str.indexOf('widget') );
console.log( str.indexOf("id") );

console.log( "Hello with id".includes("with") );
console.log( "Hello".includes("Bye") );