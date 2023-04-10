//Assim como em array ao atribuirmos uma variável objeto a outra variável, estamos apenas passando a referência na memória daquele objeto
let sona = {
    nome: "Sona",
    funçao: "Suporte",
    regiao: "Demacia",
    kda: "1/4/22"
}

let seraphine = sona;

//Portanto ao mudarmos o objeto inicial, tbm alteramos a variável associada
sona["regiao"] = "Ionia";
console.log(seraphine);