//As regras de ordem das chaves podem ser um pouco confusas
 

//Quando as chaves são números ou strings de número, elas seram organizadas em forma crescente automaticamente
let codes = {
    49: "Germany",
    41: "Switzerland",
    44: "Great Britain",
    1: "United States"
}

for(let key in codes){
    console.log(key);
}

//Um jeito de trapacear essa regra para números é adicionando um + na frente da chave
let codes2 = {
    "+49": "Germany",
    "+41": "Switzerland",
    "+44": "Great Britain",
    "+1": "United States"
}

for(let key in codes2){
    console.log(key);
}

//Outros valores serão apresentados em ordem de criação
let objeto = {
    nome: "Sona",
    funçao: "Suporte",
    regiao: "Demacia",
    kda: "1/4/22"
}

for(let key in objeto) {
    console.log(key);
}

