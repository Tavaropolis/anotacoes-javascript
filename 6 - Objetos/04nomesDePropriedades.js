//Os nomes de propriedades não possuem as limitações dos nomes de variáveis 

//Podemos usar números
let objeto1 = {
    0: "O",
    1: "L",
    2: "A",
    3: "!"
}
console.log(objeto1[2]); //Só é possível acessar com colchetes

//Podemos usar palavras reservadas do Javascript
let objeto2 = {
    for: 1,
    let: 2,
    return: 3
}
console.log(objeto2["return"])