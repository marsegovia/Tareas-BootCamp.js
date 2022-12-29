const lista_compra= ["Cebolla", "Morron", "Huevo", "Tomate", "Lechuga"];

lista_compra.push("Aceite de Girasol");

console.log(lista_compra);

lista_compra.pop("Aceite de Girasol");

console.log(lista_compra);

const Peliculas= [
    {Titulo:"Shrek",Director:"Varios",Fecha:2001},
    {Titulo:"W y G",Director: "Nick Park",Fecha:1989},
    {Titulo:"Avengers",Director: "Stan Lee", Fecha:2019}
]
console.log(Peliculas);

console.log(Peliculas.filter(movie => movie.Fecha>2010));

const directores = Peliculas.map(Direct => Direct.Director)
console.log(directores);

const titulos = Peliculas.map(Movies => Movies.Titulo);
console.log(titulos);

const directores_titulos = directores.concat(titulos)
console.log(directores_titulos);

const Pelis = [...directores, ...titulos];
console.log(Pelis);