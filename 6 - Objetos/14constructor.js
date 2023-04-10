//Quando queremos criar vários objetos similares, podemos utilizar uma função construtura que servirá de molde para os objetos
function Campeao(nome, funcao, regiao){
    this.nome = nome;
    this.funcao = funcao;
    this.regiao = regiao
}

let sona = new Campeao("Sona", "Suporte", "Demacia");
console.log(sona.nome);

//Regras de criação de uma função construtora
    //Não pode ser uma arrow funtion
    //Ela deve possuir o nome em maiúsculo 
    //Só deve ser iniciada com o operador new