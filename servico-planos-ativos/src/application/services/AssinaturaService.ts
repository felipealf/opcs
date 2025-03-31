import { AssinaturaRepository } from '../../infrastructure/repositories/AssinaturaRepository';
import { Assinatura } from '../../domain/Assinatura';

export class AssinaturaService {
  private repository = new AssinaturaRepository();

  async listarAtivasPorCliente(codCli: number): Promise<Assinatura[]> {
    return this.repository.listarAtivasPorCliente(codCli);
  }
}