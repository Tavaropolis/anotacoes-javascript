//Funções constructor em geral não possuem return, mas caso possuam, se aplica a seguinte regra:
    //Caso retorne um objeto, ele irá sobreescrever o this
    function Campeao(nome){
        this.nome = nome;
        return {nome: "Sona"};
    }

    let leBlanc = new Campeao("Le Blanc");
    console.log(leBlanc.nome); //Devolverá Sona

    //Caso o return devola um primitivo ou vazio, ele é ignorado
    function Suporte(nome){
        this.nome = nome;
        return "Seraphine";
    }

    let alistar = new Suporte("Alistar");
    console.log(alistar.nome); //Devolverá Alistar