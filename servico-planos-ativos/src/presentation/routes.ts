import express from 'express';
import { AssinaturaController } from './controllers/AssinaturaController';

const router = express.Router();
const controller = new AssinaturaController();

router.get('/ativos/:codCli', controller.listarAtivasPorCliente);

export default router;