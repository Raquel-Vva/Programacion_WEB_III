console.log("------------------------------------------------");
console.log("Nombre: Vaquela Valda Adriana Raquel");
console.log("C.I.: 7080065 LP");
console.log("Carrera: Informática");
console.log("Materia: Programación Web III // INF 133");
console.log("Fecha: 24/09/2025");
console.log("------------------------------------------------");
console.log("5. Crear una función que determine si una cadena es palíndromo (se lee igual al derecho y al revés)");

const palindromo=(cadena)=>{
    let original=cadena;
    let nueva=cadena.split("").reverse().join("");
    if (original===nueva){
        return true;
    }else{
        return false;
    }
    
}

let band =palindromo("oruro");
console.log(band);
let band1 =palindromo("hola");
console.log(band1);