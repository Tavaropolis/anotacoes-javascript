//Quando queremos fazer iterações sobre um array usamos: forEach, for ou for..of
//Quando queremos fazer iteração e retornar um valor para cada elemento usamos: map

//reduce() é usado quando queremos fazer iterações e retormar apenas um valor do array (geralmente a soma dos valores);
let array = [1, 2, 3, 4, 5, 6];

let resultado = array.reduce((soma, atual) => soma + atual);
console.log(resultado);

//É possível usar outros operadores como multiplicação também
let array2 = [1, 2, 3, 4, 5, 6];

let resultado2 = array.reduce((soma, atual) => soma * atual);
console.log(resultado2);

//Podemos passar mais um parâmetro para o reduce() que será o valor inicial do somador
let array3 = [1, 2, 3, 4, 5, 6];

let resultado3 = array.reduce((soma, atual) => soma + atual, 9);
console.log(resultado3)
