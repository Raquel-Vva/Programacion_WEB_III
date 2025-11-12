import {db} from '../config/db.js';

export const obtTodo =async()=>{
    const[resultado]= await db.query
    ('SELECT * FROM categorias');
    return resultado;
};

export const obtCatId = async (id) => {
    const consulta = `
        SELECT c.id, c.nombre, c.descripcion,
               p.id AS id_producto, p.nombre AS producto
        FROM categorias c
        LEFT JOIN productos p ON c.id = p.categoria_id
        WHERE c.id = ?
    `;
    const [resultado] = await db.query(consulta, [id]);
    if (resultado.length === 0) return null;

    const categoria = {
        id: resultado[0].id,
        nombre: resultado[0].nombre,
        descripcion: resultado[0].descripcion,
        productos: resultado
            .filter((p) => p.id_producto)
            .map((p) => ({ id: p.id_producto, nombre: p.producto })),
    };
    return categoria;
};


export const insertaCategoria=async(categorias)=>{
    const{nombre,descripcion}= categorias;
    const[resultado]= await db.query('INSERT INTO categorias (nombre, descripcion) VALUES (?, ?)',[nombre,descripcion]);
    console.log(resultado);
    return{id:resultado.insertId, nombre, descripcion};
};

export const actualizaCategoria = async(id,categorias)=>{
    const{nombre,descripcion}= categorias;
    await db.query('UPDATE categorias SET nombre=?, descripcion=? WHERE id=?',[nombre,descripcion,id]);
    return{id, nombre, descripcion};
};

export const actCatId =async(id,categorias)=>{
    const{nombre,descripcion}= categorias;
    const[resultado]= await db.query(`UPDATE categorias 
                            SET nombre=?, descripcion=? 
                    WHERE id=?`,[nombre, descripcion,id]);
    if(resultado.affectedRows===0)return null;
    return{id,nombre,descripcion};
};

export const eliminaCategoria= async(id)=>{
    await db.query('DELETE FROM categorias WHERE id=?',[id]);
    return id;
};

export const eliCatId= async(id,categorias)=>{
    await db.query('DELETE FROM productos WHERE categoria_id = ?', [id]);
    const[resultado]= await db.query('DELETE FROM categorias     WHERE id=?',[id]);
    if(resultado.affectedRows===0) return null;
    return{id};
}