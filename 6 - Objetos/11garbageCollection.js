let sona = {
    nome: "Sona",
    funçao: "Suporte",
    regiao: "Demacia",
    kda: "1/4/22"
}

let seraphine = {
    nome: "Seraphine",
    funçao: "Suporte",
    regiao: "Zaun",
    kda: "1/4/22"
}


//O javascript possui um sistema de gerenciamente de memória, que apaga objetos que não possuam mais referências
sona = null; //O objeto sona foi apagado da memória

//Caso ainda exista uma referência o objeto continua existindo
seraphine2 = seraphine;
seraphine = null;
console.log(seraphine2.nome);
