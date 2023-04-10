let objeto = {
    nome: "Sona",
    funçao: "Suporte",
    regiao: "Demacia",
    kda: undefined
}

//Podemos usar o operador in para verificar se existe uma propriedade específica no objeto, retornando true or false

console.log("regiao" in objeto); //Lembrar de colocar a chave em aspas

//É possível fazer o mesmo com variáveis
let nome = "nome";
console.log(nome in objeto);

//Uma grande vantagem do in é que ele ajuda a diferenciar propriedades que não existem de propriedades que estão guardando undefined
console.log("kda" in objeto);