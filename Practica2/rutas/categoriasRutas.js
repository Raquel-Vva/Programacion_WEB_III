import express from 'express';
import { getMostrarCategoriaId, getObtenerCategorias, postCrearCategoria, putActCatId, deleteEliCatId } from '../Controlador/categoriasCotrolador.js';

const router=express.Router();

router.post('/',postCrearCategoria);
router.get('/', getObtenerCategorias);
router.get('/:id', getMostrarCategoriaId);
router.put('/:id', putActCatId);
router.delete('/:id', deleteEliCatId);

export default router;