let array = ["Morgana", "Leona", "Sona", "Kayle"];

//É possível deletar um valor do array com delete, porém a posição dele não some, mas fica como undefined;
delete array[2];

console.log(array);
console.log(typeof array[2]);

//Não costuma ser uma boa prática, melhor ser evitada