console.log("------------------------------------------------");
console.log("Nombre: Vaquela Valda Adriana Raquel");
console.log("C.I.: 7080065 LP");
console.log("Carrera: Informática");
console.log("Materia: Programación Web III // INF 133");
console.log("Fecha: 24/09/2025");
console.log("------------------------------------------------");
console.log("2. Crear una función que invierta el orden de las palabras en una frase.");

// invierte el orden de las palabras
const invertirOrden=(frase)=>{
    const palabra=frase.split(" ");
    const invertida=frase.split(" ").reverse();
    console.log("frase:"+frase);
    console.log("La frase invertida: ");
    return invertida.join(" ");
}

// invierta el orden de las letras
const invertirOrden1=(frase)=>{
    const palabra=frase.split("");
    const invertida=frase.split("").reverse();
    console.log("frase:"+frase);
    console.log("La frase invertida: ");
    return invertida.join("");
}


let cad= invertirOrden1("abcd");
console.log(cad);