import e from "cors";
import {actStockProductoId,insertarProducto, mostrarProductos,mostrarProductoId,actProductoId} from "../modelo/productosModelo.js";
//6. Crea un endpoint POST /productos que permita registrar un nuevo producto enviando nombre, precio, stock y categoria_id para asociarlo a una categoría existente.
export const postInsertarProducto= async(req,res)=>{
    const{nombre, precio, stock, categoria_id}= req.body;
    try{
        const producto= await insertarProducto({nombre, precio, stock, categoria_id});
        res.status(201).json({mensaje: "Producto creado con exito", producto});
    }catch(error){
        console.error(" Error en  POST/productos:", error);
        res.status(500).json({error: error.message});
    }
};

//7. Crea un endpoint GET /productos que devuelva todos los productos y muestre el nombre de la categoría a la que pertenece cada uno. 
export const getMostrarProductos = async (req, res) => {
    try {
        const productos = await mostrarProductos();
        res.json(productos);
    } catch (error) {
        console.error("Error en GET /productos:", error);
        res.status(500).json({ error: "Error al obtener los productos" });
    }
};

//8. Crea un endpoint GET /productos/:id que devuelva la información de un producto por su ID, incluyendo el nombre de la categoría asociada. 
export const getMostrarProductoId = async (req, res) => {
    const { id } = req.params;
    try {
        const producto = await mostrarProductoId(id);
        if (!producto) {
            return res.status(404).json({ error: "Producto no encontrado" });
        }
        res.json(producto);
    } catch (error) {
        console.error("Error en GET /productos/:id:", error);
        res.status(500).json({ error: "Error al obtener el producto" });
    }
};

//9. Crea un endpoint PUT /productos/:id que permita actualizar todos los datos de un producto, incluyendo la opción de cambiar la categoría a la que pertenece mediante categoria_id. 
export const putActProductoId = async (req, res) => {
    const { id } = req.params;
    const { nombre, precio, stock, categoria_id } = req.body;

    try {
        const producto = await actProductoId(id, { nombre, precio, stock, categoria_id });
        if (!producto) {
            return res.status(404).json({ error: "Producto no encontrado" });
        }
        res.json({ mensaje: "Producto actualizado con éxito", producto });
    } catch (error) {
        console.error("Error en PUT /productos/:id:", error);
        res.status(500).json({ error: error.message });
    }
};

//10. Crea un endpoint PATCH /productos/:id/stock que permita incrementar o decrementar el stock de un producto enviando al body la cantidad que se desea sumar o restar. 
export const patchActStockId = async (req, res) => {
    const { id } = req.params;
    const { cantidad } = req.body; 

    if (typeof cantidad !== 'number') {
        return res.status(400).json({ error: "La cantidad debe ser un número" });
    }

    try {
        const producto = await actStockProductoId(id, cantidad);
        if (!producto) {
            return res.status(404).json({ error: "Producto no encontrado" });
        }
        res.json({ mensaje: "Stock actualizado con éxito", producto });
    } catch (error) {
        console.error("Error en PATCH /productos/:id/stock:", error);
        res.status(500).json({ error: error.message });
    }
};
