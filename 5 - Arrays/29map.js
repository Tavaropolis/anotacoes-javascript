let array = ["Morgana", "Leona", "Sona", "Kayle"];

//O método map() é semelhante ao forEach(), porém o map retorna valores e o forEach não
//Isso faz com que possamos alterar o prórpio array com map()

array = array.map((item) => {
    return item.toUpperCase();
})

console.log(array);

//Assim como forEach() e filter() os elementos da cb são: item, index, array