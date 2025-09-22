console.log("------------------------------------------------");
console.log("Nombre: Vaquela Valda Adriana Raquel");
console.log("C.I.: 7080065 LP");
console.log("Carrera: Informática");
console.log("Materia: Programación Web III // INF 133");
console.log("Fecha: 24/09/2025");
console.log("------------------------------------------------");
console.log("15. Proporcione un ejemplo para convertir un callback en una promesa.");

const cocinarCallback=(plato,callback)=>{
    let coccion=true;
    if (coccion){
        return callback(`El plato ${plato} esta listo`);
    }else{
        return callback(`El plato ${plato} esta crudo`);
    }
}
cocinarCallback("sopa",callback=>{
    console.log("callback: "+callback);
})

const cocinarPromesa=(plato)=>{
    let coccion=true;
    return new Promise((resolve,reject)=>{
        if (coccion){
            resolve(`El plato ${plato} esta listo`);
        }else{
            reject(`El plato ${plato} esta crudo`);
        }
    });
}
cocinarPromesa("aji de fideo")
.then((resolve)=>{
    console.log("promesa: "+resolve);
}).catch((error)=>{
    console.log("promesa: "+error);
});