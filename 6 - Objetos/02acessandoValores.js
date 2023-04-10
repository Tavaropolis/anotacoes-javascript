let objeto = {
    nome: "Sona",
    funçao: "Suporte",
    regiao: "Demacia",
}

//Para acessar valores de um objeto utiliza-se 
console.log(objeto.nome);

//Também é possível acessar com notação de colchetes (lembrar de colocar a chave entre aspas)
console.log(objeto["nome"]);

//Chaves de duas palavras podem ser adicionadas como string
    //Set
        objeto["numero de skins"] = 9; 
    //Get
        console.log(objeto["numero de skins"]) //Só podem ser acessadas com colchetes
    //Delete
        delete objeto["numero de skins"];
        console.log(objeto);

//Síntase por colchetes é bem comoda pois podemos trabalhar com inputs do usuário
let chave = "chance de vitória";
objeto[chave] = "60%";
console.log(objeto)