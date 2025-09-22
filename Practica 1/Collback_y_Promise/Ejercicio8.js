console.log("------------------------------------------------");
console.log("Nombre: Vaquela Valda Adriana Raquel");
console.log("C.I.: 7080065 LP");
console.log("Carrera: Informática");
console.log("Materia: Programación Web III // INF 133");
console.log("Fecha: 24/09/2025");
console.log("------------------------------------------------");
console.log("8. Realizar un código para ejecutar una función callback después 2 segundos.");

const funcion=(callback)=>{
    setTimeout(() => {
        dosSegundos();
    },2000);
    return callback;
}
const dosSegundos=()=>{
    console.log("se ejecuto 2 segundos despues");
}

funcion(dosSegundos);
