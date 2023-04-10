//Uma peculiaridade do Javascript é que ele permite acessar qualquer propriedade, mesmo que ela não exista, sem retornar erro
let objeto = {
    nome: "Sona",
    funçao: "Suporte",
    regiao: "Demacia",
}

console.log(objeto.kda) //Como a propriedade não existe, será retornado undefined