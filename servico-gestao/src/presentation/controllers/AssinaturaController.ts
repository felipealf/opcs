import { Request, Response } from 'express';
import { AssinaturaService } from '../../application/services/AssinaturaService';

export class AssinaturaController {
    private assinaturaService: AssinaturaService;

    constructor() {
        this.assinaturaService = new AssinaturaService();
    }

    buscarPorId = async (req: Request, res: Response) => {
        const { codigo } = req.params;
        const assinatura = await this.assinaturaService.buscarPorId(Number(codigo));
        assinatura ? res.json(assinatura) : res.status(404).json({ mensagem: 'Assinatura não encontrada' });
    };

    buscarPorCliente = async (req: Request, res: Response) => {
        const { codCli } = req.params;
        const assinaturas = await this.assinaturaService.buscarPorCliente(Number(codCli));
        res.json(assinaturas);
    };

    buscarPorPlano = async (req: Request, res: Response) => {
        const { codPlano } = req.params;
        const assinaturas = await this.assinaturaService.buscarPorPlano(Number(codPlano));
        res.json(assinaturas);
    };

    buscarPorTipo = async (req: Request, res: Response) => {
        const { tipo } = req.params;
        const assinaturas = await this.assinaturaService.buscarPorTipo(tipo.toUpperCase());
        res.json(assinaturas);
    };

    criar = async (req: Request, res: Response) => {
        const assinatura = await this.assinaturaService.criar(req.body);
        res.status(201).json(assinatura);
    };

    atualizar = async (req: Request, res: Response) => {
        const { codigo } = req.params;
        const assinaturaAtualizada = await this.assinaturaService.atualizar(Number(codigo), req.body);
        assinaturaAtualizada ? res.json(assinaturaAtualizada) : res.status(404).json({ mensagem: 'Assinatura não encontrada' });
    };
}