//Podemos usar ?? como uma forma de passar valor a uma variável caso ela seja null ou undefined
let user;
user = user ?? "Usuário";
console.log(`Valor de user: ${user}`);

//Caso já tenha um valor, a variável não será alterada
let user2 = "Gabriel";
user2 = user2 ?? "Usuário";
console.log(`Valor de user2: ${user2}`);

//Podemos fazer o teste de nulidade várias vezes em uma mesma linha
let user3, user4, user5;
console.log(user3 ?? user4 ?? user5 ?? "Deu ruim!");