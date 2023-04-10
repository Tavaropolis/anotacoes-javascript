let objeto = {
    nome: "Sona",
    funçao: "Suporte",
    regiao: "Demacia",
    kda: "1/4/22"
}

//Para objetos existe um tipo especial de loop, o for..in
for(let chave in objeto) {
    console.log(chave); //Irá mostrar as chaves
}

for(let chave in objeto) {
    console.log(objeto[chave]) //Irá mostar o valor das propriedades
}