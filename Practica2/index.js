import cors from 'cors';
import express from "express";
import categoriasRutas from './rutas/categoriasRutas.js';
import productosRutas from './rutas/productosRutas.js';

const app=express(); //llama a la funcion express
app.use(cors()); //para que el servidor acepte peticiones de otros dominios
app.use(express.json()); //para que el servidor entienda json
app.use('/categorias',categoriasRutas); //rutas de categorias
app.use('/productos',productosRutas); //rutas de productos

// Ruta de prueba
app.get("/", (req, res) => {
    res.send(" Servidor funcionando");
});

const puerto =3001;
app.listen(puerto,()=>{
    console.log(`Servidor en http://localhost:${puerto}`);
});