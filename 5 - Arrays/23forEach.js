let array = ["Morgana", "Leona", "Sona", "Kayle"];

//O método forEach() aplica uma função callback em todos os elementos do array
    //A função reconhece 3 parametros por posição: item, index e arr
        //O primeiro argumento é o item mostra os valores do array
            array.forEach((item) => {
                console.log(item);
            })

        //O segundo argumento é o index mostram os indexes
            array.forEach((item, index) => {
                console.log(index);
            })

        //O terceiro argumento é o array completo
            array.forEach((item, index, arr) => {
                console.log(arr);
            })

    //Como ele reconhece a posição, os argumentos podem ter quaisquer nomes

//forEach é bom para atribuir valor a outras variáveis de fora do array,mas não retorna valores
//Não é possível mexer no array em si
let array2 = [];
array.forEach((item, index)=> {
    array2[index] = item.toUpperCase();
})
console.log(array2)



