
import { PagamentoRepository } from '../../infrastructure/repositories/PagamentoRepository';
import { Pagamento } from '../../domain/Pagamento';

export class PagamentoService {
    private pagamentoRepository: PagamentoRepository;

    constructor() {
        this.pagamentoRepository = new PagamentoRepository();
    }

    async listarTodos(): Promise<Pagamento[]> {
        return await this.pagamentoRepository.listarTodos();
    }

    async buscarPorId(codigo: number): Promise<Pagamento | null> {
        return await this.pagamentoRepository.buscarPorId(codigo);
    }

    async criar(pagamento: Pagamento): Promise<Pagamento> {
        return await this.pagamentoRepository.criar(pagamento);
    }
}