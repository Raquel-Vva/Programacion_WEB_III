console.log("------------------------------------------------");
console.log("Nombre: Vaquela Valda Adriana Raquel");
console.log("C.I.: 7080065 LP");
console.log("Carrera: Informática");
console.log("Materia: Programación Web III // INF 133");
console.log("Fecha: 24/09/2025");
console.log("------------------------------------------------");
console.log("16. Proporcione un ejemplo para migrar una función con promesas a async/await.");

const promedio=(estudiante,notas)=> {
    return new Promise((resolve,reject)=>{
        let suma=0;
        for(let i=0; i<notas.length; i++){
            suma+=notas[i];
        }
        let p=(suma)/notas.length;
        if(p>50){
            resolve(`El promedio del estudiante ${estudiante} es ${p}, aprobado`);
        }else{
            reject(`El promedio del estudiante ${estudiante} es ${p}, reprobado`);
        }
})
}
async function resultado(){
    try{
        const resultado=await promedio("Juan",[61,19,70,97,23]);  
        console.log(resultado);  
    }catch(error){
        console.log(error);
    }
}
 resultado();