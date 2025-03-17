import { Request, Response } from 'express';
import { PagamentoService } from '../../application/services/PagamentoService';

export class PagamentoController {
    private pagamentoService: PagamentoService;

    constructor() {
        this.pagamentoService = new PagamentoService();
    }

    listarTodos = async (req: Request, res: Response) => {
        const pagamentos = await this.pagamentoService.listarTodos();
        res.json(pagamentos);
    };

    buscarPorId = async (req: Request, res: Response) => {
        const { codigo } = req.params;
        const pagamento = await this.pagamentoService.buscarPorId(Number(codigo));
        pagamento ? res.json(pagamento) : res.status(404).json({ mensagem: 'Pagamento não encontrado' });
    };

    criar = async (req: Request, res: Response) => {
        const pagamento = await this.pagamentoService.criar(req.body);
        res.status(201).json(pagamento);
    };
}