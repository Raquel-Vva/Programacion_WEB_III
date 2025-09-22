console.log("------------------------------------------------");
console.log("Nombre: Vaquela Valda Adriana Raquel");
console.log("C.I.: 7080065 LP");
console.log("Carrera: Informática");
console.log("Materia: Programación Web III // INF 133");
console.log("Fecha: 24/09/2025");
console.log("------------------------------------------------");
console.log("13. Proporcione un ejemplo concreto donde el anidamiento de promesas se puede reescribir mejor con async/await haciendo el código más limpio y mantenible.");

const adoptarMascota= ()=>{
    return new Promise((resolve,reject) =>{
    const disponible=true;
    if (disponible){
        resolve("Se puede adoptar esta amascota");
    }else{
        reject("No hay mascotas disponibles")
    }
});
}

const elegir=(x)=>{
    return new Promise((resolve)=>{
    console.log(x);
    const mascota={nombre:"Reasse", tipo:"Gato", raza:"Siames"};
    resolve(`Mascota elegida: NOMBRE: ${mascota.nombre} TIPO:${mascota.tipo} RAZA:${mascota.raza}`);
});
};

const confirmar=(x)=>{
    return new Promise((resolve)=>{
        console.log(x);
        resolve ("Adopcion confirmada!!!");
    });
}

async function procesoAdopcion() {
    try {
        const disponibilidad = await adoptarMascota();
        const mascota = await elegir(disponibilidad);
        const confirmacion = await confirmar(mascota);
        console.log(confirmacion);
    } catch (error) {
        console.error(error);
    }
}

procesoAdopcion();

