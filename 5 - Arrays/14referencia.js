//Array na verdade nada mais é do que um tipo especial de objeto, onde os índices são as chaves e os elementos os valores;
//Portanto Arrays não passam seu valor a uma variável quando atribuida, na verdade ele passa seu endereço na memória;

let array = ["Morgana", "Leona", "Sona", "Kayle"];
let array2 = array;

//Portanto ao alterarmos o array original o secundário tbm será alterado
array.push("Sejuani", "Ashe");
console.log(array2) 