console.log("------------------------------------------------");
console.log("Nombre: Vaquela Valda Adriana Raquel");
console.log("C.I.: 7080065 LP");
console.log("Carrera: Informática");
console.log("Materia: Programación Web III // INF 133");
console.log("Fecha: 24/09/2025");
console.log("------------------------------------------------");
console.log("9. Crear una promesa que devuelva un mensaje de éxito después de 3 segundos.");

const promesa=new Promise((resolve)=>{
    setTimeout(() => {
        resolve("se ejecuto la promesa despues de 3 segundos");
    },3000);
});
promesa.then((mensaje)=>{
    console.log(mensaje);
});

