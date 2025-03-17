import { PlanoRepository } from '../../infrastructure/repositories/PlanoRepository';
import { Plano } from '../../domain/Plano';

export class PlanoService {
    private planoRepository: PlanoRepository;

    constructor() {
        this.planoRepository = new PlanoRepository();
    }

    async listarTodos(): Promise<Plano[]> {
        return await this.planoRepository.listarTodos();
    }

    async buscarPorId(codigo: number): Promise<Plano | null> {
        return await this.planoRepository.buscarPorId(codigo);
    }

    async criar(plano: Plano): Promise<Plano> {
        return await this.planoRepository.criar(plano);
    }

    async atualizar(codigo: number, plano: Partial<Plano>): Promise<Plano | null> {
        return await this.planoRepository.atualizar(codigo, plano);
    }
}