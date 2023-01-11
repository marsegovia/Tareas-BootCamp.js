const fecha_actual = new Date();
const miFecha = new Date(2000, 9, 10);

console.log(fecha_actual);
console.log(miFecha);
console.log(miFecha.getDate());
console.log(miFecha.getMonth() + 1);
console.log(miFecha.getFullYear());

if(fecha_actual > miFecha)
{
    console.log("Hoy es mas tarde que aquella fecha");
}

