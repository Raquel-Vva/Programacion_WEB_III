import {db} from '../config/db.js';

export const insertarProducto=async(productos)=>{
    const{nombre, precio,stock, categoria_id}= productos;
    const[categoria]=await db.query('SELECT id FROM categorias WHERE id=?',[categoria_id]);
    if(categoria.length===0){
        throw new Error('La categoria no existe');
    }
    const[resultado]= await db.query
    ('INSERT INTO productos (nombre, precio, stock,categoria_id) VALUES (?, ?, ?, ?)',
        [nombre, precio, stock, categoria_id]);
    return{
        id:resultado.insertId,nombre, precio, stock, categoria_id
    };
};

export const mostrarProductos=async()=>{
    const[resultado]= await db.query
    (`SELECT p.id, p.nombre, p.precio, p.stock,c.id AS categoria_id, c.nombre 
        AS categoria_nombre 
        FROM productos p LEFT JOIN categorias c ON p.categoria_id = c.id`);
    return resultado;
};

export const mostrarProductoId = async (id) => {
    const [resultado] = await db.query
    ( `SELECT p.id, p.nombre, p.precio, p.stock, c.id 
        AS categoria_id, c.nombre AS categoria_nombre FROM productos p 
        LEFT JOIN categorias c ON p.categoria_id = c.id WHERE p.id = ?`, [id]);
    return resultado.length ? resultado[0] : null;
};

export const actProductoId = async (id, { nombre, precio, stock, categoria_id }) => {
    const [categoria] = await db.query('SELECT id FROM categorias WHERE id = ?', [categoria_id]);
    if (categoria.length === 0) throw new Error('La categoría no existe');

        const [resultado] = await db.query(
        'UPDATE productos SET nombre = ?, precio = ?, stock = ?, categoria_id = ? WHERE id = ?',
        [nombre, precio, stock, categoria_id, id]
    );

    if (resultado.affectedRows === 0) return null;
    return { id, nombre, precio, stock, categoria_id };
};

export const actStockProductoId= async (id, cantidad) => {
    const [producto] = await db.query('SELECT stock FROM productos WHERE id = ?', [id]);
    if (producto.length === 0) return null;

    const nuevoStock = producto[0].stock + cantidad;

    if (nuevoStock < 0) throw new Error('No se puede disminuir el stock por debajo de 0');

    await db.query('UPDATE productos SET stock = ? WHERE id = ?', [nuevoStock, id]);

    return { id, stock: nuevoStock };
};