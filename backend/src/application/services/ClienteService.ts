import { ClienteRepository } from '../../infrastructure/repositories/ClienteRepository';
import { Cliente } from '../../domain/Cliente';

export class ClienteService {
    private clienteRepository: ClienteRepository;

    constructor() {
        this.clienteRepository = new ClienteRepository();
    }

    async listarTodos(): Promise<Cliente[]> {
        return await this.clienteRepository.listarTodos();
    }

    async buscarPorId(codigo: number): Promise<Cliente | null> {
        return await this.clienteRepository.buscarPorId(codigo);
    }

    async criar(cliente: Cliente): Promise<Cliente> {
        return await this.clienteRepository.criar(cliente);
    }

    async atualizar(codigo: number, cliente: Partial<Cliente>): Promise<Cliente | null> {
        return await this.clienteRepository.atualizar(codigo, cliente);
    }

    async deletar(codigo: number): Promise<void> {
        return await this.clienteRepository.deletar(codigo);
    }
}