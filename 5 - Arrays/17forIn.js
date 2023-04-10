let array = ["Morgana", "Leona", "Sona", "Kayle"];

//Outra opção para se percorrer arrays é através do for in

for(let campeao in array) {
    console.log(array[campeao]);
}

//Aqui ao invés de acessar os valores acessamos a chave do array
//For In é mais focado em percorrer objetos, é menos otimizado e pode ocorrer erros ao utiliza-lo em arrays;