import express from 'express';
import { ClienteController } from './controllers/ClienteController';
import { PlanoController } from './controllers/PlanoController';
import { AssinaturaController } from './controllers/AssinaturaController';
import { PagamentoController } from './controllers/PagamentoController';

const router = express.Router();

const clienteController = new ClienteController();
const planoController = new PlanoController();
const assinaturaController = new AssinaturaController();
const pagamentoController = new PagamentoController();

// Rotas de Clientes
router.get('/clientes', clienteController.listarTodos);
router.get('/clientes/:codigo', clienteController.buscarPorId);
router.post('/clientes', clienteController.criar);
router.put('/clientes/:codigo', clienteController.atualizar);
router.delete('/clientes/:codigo', clienteController.deletar);

// Rotas de Planos
router.get('/planos', planoController.listarTodos);
router.get('/planos/:codigo', planoController.buscarPorId);
router.post('/planos', planoController.criar);
router.patch('/planos/:codigo', planoController.atualizar);

// Rotas de Assinaturas
router.get('/assinaturas/:tipo', assinaturaController.buscarPorTipo);
router.post('/assinaturas', assinaturaController.criar);
router.patch('/assinaturas/:codigo', assinaturaController.atualizar);
router.get('/assinaturascliente/:codCli', assinaturaController.buscarPorCliente);
router.get('/assinaturasplano/:codPlano', assinaturaController.buscarPorPlano);

// Rotas de Pagamentos
router.get('/pagamentos', pagamentoController.listarTodos);
router.get('/pagamentos/:codigo', pagamentoController.buscarPorId);
router.post('/pagamentos', pagamentoController.criar);

export default router;
