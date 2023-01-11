
const persona = {
    "nombre" : "Martin",
    "apellido": "Segovia",
    "edad": 22,
    "altura": 170,
    "Desarrollador": true
}

const edad = persona.edad;
console.log(edad);

const amigos = [
    {"nombre" : "Matias",
    "apellido": "Gomez",
    "edad": 21,
    "altura": 172,
    "Desarrollador": false},

    {"nombre" : "Joaquin",
    "apellido": "Olea",
    "edad": 22,
    "altura": 171,
    "Desarrollador": false}
]

const listaordenada = amigos.sort((a,b) => b.edad - a.edad)
console.log(listaordenada)
