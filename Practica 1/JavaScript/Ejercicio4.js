console.log("------------------------------------------------");
console.log("Nombre: Vaquela Valda Adriana Raquel");
console.log("C.I.: 7080065 LP");
console.log("Carrera: Informática");
console.log("Materia: Programación Web III // INF 133");
console.log("Fecha: 24/09/2025");
console.log("------------------------------------------------");
console.log("4. Crear una función que reciba un arreglo de números y devuelva el número mayor y el menor, en un objeto.");

const mayorMenor=(numeros)=>{
    console.log(numeros)
    let may=0, men=0, aux=0;
    for(let i=0;i<numeros.length;i++){
        if(i===0){
            may=numeros[i];
            men=numeros[i];
        }else if(numeros[i]<men){
            men=numeros[i];
        }else if(numeros[i]>may){
            may=numeros[i];
        }
    }
    return {may,men};
}

const obj=mayorMenor([3,1,5,4,2]);
console.log(obj);