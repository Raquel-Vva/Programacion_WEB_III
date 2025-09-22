console.log("------------------------------------------------");
console.log("Nombre: Vaquela Valda Adriana Raquel");
console.log("C.I.: 7080065 LP");
console.log("Carrera: Informática");
console.log("Materia: Programación Web III // INF 133");
console.log("Fecha: 24/09/2025");
console.log("------------------------------------------------");
console.log("14. Proporcione un ejemplo para convertir una promesa en un callback.");
//promesa
const compraPromesa=(prenda)=>{
    return new Promise((resolve,reject)=>{
    let exito=true;
    if (exito){
        resolve(`La compra de ${prenda} fue completada`);
    }else{
        reject(`La compra de ${prenda} no se realizo`);
    }
});
}

compraPromesa("blusa")
.then((resolve)=>{
    console.log("promesa: "+resolve);
})
.catch((error)=>{
    console.log("promesa: "+error);
}); 


//callback
const compraCallbac=(prenda,callback)=>{
    let exito=true;
    if(exito){
        callback(`la compra de ${prenda} fue completada`);
    }else
        callback(`la compra de ${prenda} no se realizo`);
};

compraCallbac("pantalon",callback=>{
    console.log("callback: "+callback);
});
