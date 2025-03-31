import { Fatura } from '../../domain/Fatura';
import { FaturaRepository } from '../../infrastructure/repositories/FaturaRepository';

export class FaturaService {
  private repository = new FaturaRepository();

  listarTodas(): Promise<Fatura[]> {
    return this.repository.listarTodas();
  }

  listarPorCliente(codCli: number): Promise<Fatura[]> {
    return this.repository.listarPorCliente(codCli);
  }

  criar(fatura: Fatura): Promise<Fatura> {
    return this.repository.criar(fatura);
  }

  marcarComoPaga(id: number): Promise<Fatura> {
    return this.repository.marcarComoPaga(id);
  }
}