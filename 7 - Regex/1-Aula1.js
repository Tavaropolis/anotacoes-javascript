// g - flag global
// i - flag insensitive
// () - grupos
// | - ou
const regEx1 = /(Maria|João)/gi;

let { texto } = require('./base.js');

//Métodos usando como base o Regex
console.log(regEx1.test(texto));

console.log(regEx1.exec(texto));

//Manipulando o retorno de exec
const found = regEx1.exec(texto);
console.log(found[0])
