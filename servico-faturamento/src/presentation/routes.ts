import express from 'express';
import { FaturaController } from './controllers/FaturaController';

const router = express.Router();
const controller = new FaturaController();

router.get('/faturas', controller.listarTodas);
router.get('/faturas/:codCli', controller.listarPorCliente);
router.post('/faturas', controller.criar);
router.patch('/faturas/:id/pagar', controller.marcarComoPaga);

export default router;