let array = ["Morgana", "Leona", "Sona", "Kayle"];

//array[-1] não retorna o valor final do array, ele na verdade retorna undefined
console.log(`array[-1]: ${array[-1]}`);

//Para acessar valores do fim para o começo podemos usar o método at
console.log(`array.at(-1): ${array.at(-1)}`);

//at funciona normal para valores positivos e de trás para frente para valores negativos
console.log(`array.at(2): ${array.at(2)}`);