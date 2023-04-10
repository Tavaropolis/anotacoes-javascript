let { texto } = require('./base.js');

//Quantificadores em Regex
// * (opcional) 0 ou n vezes
// + (obrigatório) 1 ou n vezes
// ? (opcional) 0 ou 1 vezes

console.log(texto);

const regEx1 = /Jo+ão+/gi;

console.log(texto.match(regEx1));