import { Request, Response } from 'express';
import { PlanoService } from '../../application/services/PlanoService';

export class PlanoController {
    private planoService: PlanoService;

    constructor() {
        this.planoService = new PlanoService();
    }

    listarTodos = async (req: Request, res: Response) => {
        const planos = await this.planoService.listarTodos();
        res.json(planos);
    };

    buscarPorId = async (req: Request, res: Response) => {
        const { codigo } = req.params;
        const plano = await this.planoService.buscarPorId(Number(codigo));
        plano ? res.json(plano) : res.status(404).json({ mensagem: 'Plano não encontrado' });
    };

    criar = async (req: Request, res: Response) => {
        const plano = await this.planoService.criar(req.body);
        res.status(201).json(plano);
    };

    atualizar = async (req: Request, res: Response) => {
        const { codigo } = req.params;
        const planoAtualizado = await this.planoService.atualizar(Number(codigo), req.body);
        planoAtualizado ? res.json(planoAtualizado) : res.status(404).json({ mensagem: 'Plano não encontrado' });
    };
}