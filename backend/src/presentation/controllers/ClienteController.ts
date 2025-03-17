import { Request, Response } from 'express';
import { ClienteService } from '../../application/services/ClienteService';

export class ClienteController {
    private clienteService: ClienteService;

    constructor() {
        this.clienteService = new ClienteService();
    }

    listarTodos = async (req: Request, res: Response) => {
        console.log("🚀 Requisição recebida: Listar todos os clientes"); 
        const clientes = await this.clienteService.listarTodos();
        res.json(clientes);
    };

    buscarPorId = async (req: Request, res: Response) => {
        const { codigo } = req.params;
        const cliente = await this.clienteService.buscarPorId(Number(codigo));
        cliente ? res.json(cliente) : res.status(404).json({ mensagem: 'Cliente não encontrado' });
    };

    criar = async (req: Request, res: Response) => {
        const cliente = await this.clienteService.criar(req.body);
        res.status(201).json(cliente);
    };

    atualizar = async (req: Request, res: Response) => {
        const { codigo } = req.params;
        const clienteAtualizado = await this.clienteService.atualizar(Number(codigo), req.body);
        clienteAtualizado ? res.json(clienteAtualizado) : res.status(404).json({ mensagem: 'Cliente não encontrado' });
    };

    deletar = async (req: Request, res: Response) => {
        const { codigo } = req.params;
        await this.clienteService.deletar(Number(codigo));
        res.status(204).send();
    };
}