console.log("------------------------------------------------");
console.log("Nombre: Vaquela Valda Adriana Raquel");
console.log("C.I.: 7080065 LP");
console.log("Carrera: Informática");
console.log("Materia: Programación Web III // INF 133");
console.log("Fecha: 24/09/2025");
console.log("------------------------------------------------");
console.log("12. Proporcione un ejemplo concreto donde el anidamiento de callbacks se puede reescribir mejor con async/await haciendo el código más limpio y mantenible.");

const verificarUsario=(nombre)=>{
    return new Promise((resolve)=>{
        console.log(`Ùsuario ${nombre} encontrado`)
        resolve(nombre);
    });
}

const validarPassword=(usuario)=>{
    return new Promise ((resolve)=>{
        console.log(`Contraseña de ${usuario} validada`)
        resolve(usuario);
    });
}

const cargarDatos=(usuario)=>{
    return new Promise((resolve)=>{
        console.log(`Datos subidos de ${usuario}`)
        resolve(usuario);
    });
}

async  function login(usuario){
    await verificarUsario(usuario);
    await validarPassword(usuario);
    await cargarDatos(usuario);
    console.log("loguin completado!!!")
}

login("Raquel");