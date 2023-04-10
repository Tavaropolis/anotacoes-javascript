//Geralmente utilizamos funções para computar e retornar um valor

function elevarAoQuadrado(num) {
    return num * num;
}

let numero = elevarAoQuadrado(4);
console.log(numero);

//Ao atingir return a função se encerra

//Uma função com return vazio ou sem return, devolve undefined
function algumaCoisa() {
    return
}

let numero2 = algumaCoisa();
console.log(numero2);

//Nunca adicione uma linha entre o return e o valor, o Javascript vai automaticamente adicionar um ; após o return
function outraCoisa() {
    return 
        4 + 5 + 6 + 7 
} 
console.log(outraCoisa())