import {obtTodo, obtCatId, insertaCategoria, actualizaCategoria, actCatId, eliminaCategoria,eliCatId} from '../modelo/categoriasModelo.js';

//1. Crea un endpoint POST /categorias que permita registrar una nueva categoría
export const postCrearCategoria= async(req,res)=>{
    try{
        const resultado=await insertaCategoria(req.body);
        res.status(201).json(resultado);
    }catch(error){
        res.status(500).json({error: error.message});
    }
};

//2. Crea un endpoint GET /categorias que devuelva todas las categorías 
export const getObtenerCategorias=async(req,res)=>{
    try{
        const resultado=await obtTodo();
        res.json(resultado);
    }catch(error){
        res.status(500).json({error:error.message});
    }
};

//3. Crea un endpoint GET /categorias/:id que devuelva la categoría con el ID especificado
export const getMostrarCategoriaId = async (req, res) => {
    const { id } = req.params;
    const idNum = parseInt(id);
    if (isNaN(idNum)) {
        return res.status(400).json({ error: "ID inválido" });
    }
    try {
        const categoria = await obtCatId(idNum);
        if (!categoria) {
            return res.status(404).json({ error: "Categoria no encontrada" });
        }
        res.json(categoria);
    } catch (error) {
        console.error("Error en GET /categorias/:id:", error);
        res.status(500).json({ error: error.message });
    }
};


//4.Crea un endpoint PUT /categorias/:id que permita actualizar todos los datos de la categoría con el ID especificado.
export const putActCatId =async(req,res)=>{
    const{id}=req.params;
    const{nombre,descripcion}= req.body;
    try{
        const categoria=await actCatId(id, {nombre,descripcion});
        if(!categoria){
            return res.status(404).json({error: "Categoria no encontrada"});
        }
        res.json({mensaje: "Categoria actualizada", categoria});
    }catch(error){
        res.status(500).json({error: error.message});
    }
};

////5.Crea un endpoint DELETE /categorias/:id que elimine la categoría indicada y, al mismo tiempo, elimine automáticamente todos los productos que pertenecen a esa categoría. 
export const deleteEliCatId= async(req,res)=>{
    const{id}= req.params;
    try{
        const categoria= await eliCatId(id);
        if(!categoria){
            return res.status(404).json({error: "Categoria no encontrada"});
        }
        res.json({mensaje: "Categoria eliminada", id:categoria.id});
    }catch(error){
        res.status(500).json({error: error.message});
    }
}
