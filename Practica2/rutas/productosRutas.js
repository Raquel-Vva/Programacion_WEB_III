import express from 'express';
import { patchActStockId,putActProductoId,getMostrarProductoId,getMostrarProductos, postInsertarProducto } from '../Controlador/productosControlador.js';

const router=express.Router();

router.post('/',postInsertarProducto);
router.get('/', getMostrarProductos);
router.get('/:id', getMostrarProductoId);
router.put('/:id', putActProductoId);
router.patch('/:id/stock', patchActStockId);

export default router;