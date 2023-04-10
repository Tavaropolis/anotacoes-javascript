let { texto, arquivos } = require('./base.js');

//Quantificadores em Regex
// * (opcional) 0 ou n vezes
// + (obrigatório) 1 ou n vezes
// ? (opcional) 0 ou 1 vezes
// \ caracter de escape
// {n, m} para definir numero de caracteres (minimo, máximo)

const regExp1 = /.+\.jpe{0,}g/gi

for (const arquivo of arquivos) {
    console.log(arquivo, arquivo.match(regExp1));
}

