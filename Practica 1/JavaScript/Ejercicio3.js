console.log("------------------------------------------------");
console.log("Nombre: Vaquela Valda Adriana Raquel");
console.log("C.I.: 7080065 LP");
console.log("Carrera: Informática");
console.log("Materia: Programación Web III // INF 133");
console.log("Fecha: 24/09/2025");
console.log("------------------------------------------------");
console.log("3. Crear una función que reciba un arreglo de números y devuelva en un objeto a los pares e impares");

const parImpar=(numeros)=>{
    const par=[];
    const impar=[];
    for(let i=0; i<numeros.length;i++){
        if(numeros[i]%2===0){
            par.push(numeros[i]);
        }else{
            impar.push(numeros[i]);
        }
    }
    return{par, impar};
}

let obj=parImpar([1,2,3,4,5]);
console.log(obj);