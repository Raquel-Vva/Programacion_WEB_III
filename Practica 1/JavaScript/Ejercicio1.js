console.log("------------------------------------------------");
console.log("Nombre: Vaquela Valda Adriana Raquel");
console.log("C.I.: 7080065 LP");
console.log("Carrera: Informática");
console.log("Materia: Programación Web III // INF 133");
console.log("Fecha: 24/09/2025");
console.log("------------------------------------------------");
console.log("1. Crear una función que cuente cuántas veces aparece cada vocal en un texto y devuelva el resultado en un objeto");

const contarVocal = (texto) =>{
    const vocal ={ a:0,e:0,i:0,o:0,u:0};
    for(let i=0; i<texto.length; i++){
        const letra=texto[i].toLowerCase();
        if (letra==='a'){
            vocal.a++;
        }else if (letra==='e'){
            vocal.e++;
        }else if (letra==='i'){
            vocal.i++;
        }else if (letra==='o'){
            vocal.o++;  
        }else if (letra==='u'){
            vocal.u++;
        }
    }
    console.log("texto:"+texto);  
    return vocal;
}

let obj=contarVocal("euforia");
console.log(obj);