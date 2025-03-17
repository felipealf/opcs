import { AssinaturaRepository } from '../../infrastructure/repositories/AssinaturaRepository';
import { Assinatura } from '../../domain/Assinatura';

export class AssinaturaService {
    private assinaturaRepository: AssinaturaRepository;

    constructor() {
        this.assinaturaRepository = new AssinaturaRepository();
    }

    async buscarPorId(codigo: number): Promise<Assinatura | null> {
        return await this.assinaturaRepository.buscarPorId(codigo);
    }

    async buscarPorCliente(codCli: number): Promise<Assinatura[]> {
        return await this.assinaturaRepository.buscarPorCliente(codCli);
    }

    async buscarPorPlano(codPlano: number): Promise<Assinatura[]> {
        return await this.assinaturaRepository.buscarPorPlano(codPlano);
    }

    async buscarPorTipo(tipo: string): Promise<Assinatura[]> {
        return await this.assinaturaRepository.buscarPorTipo(tipo);
    }

    async criar(assinatura: Assinatura): Promise<Assinatura> {
        return await this.assinaturaRepository.criar(assinatura);
    }

    async atualizar(codigo: number, assinatura: Partial<Assinatura>): Promise<Assinatura | null> {
        return await this.assinaturaRepository.atualizar(codigo, assinatura);
    }
}