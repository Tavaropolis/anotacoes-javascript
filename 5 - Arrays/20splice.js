let array = ["Morgana", "Leona", "Sona", "Kayle"];

//Splice() é um dos métodos mais importantes de array, ele pode adicionar, remover, ou alterar elementos de dentro do array
    //Adicionando elementos com splice()
        //o primeiro argumento é a posição que se deseja alterar, o segundo é quantos elementos se quer apagar, e o terceiro são os elementos a ser adicionados
        array.splice(1, 0, "Sejuani");
        console.log(array);

    //Removendo elementos do array
        array.splice(2, 1);
        console.log(array);
    
    //Alterando elementos do array
        array.splice(2, 2, "Bardo", "Lissandra");
        console.log(array);
