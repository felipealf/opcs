import { Request, Response } from 'express';
import { AssinaturaService } from '../../application/services/AssinaturaService';

export class AssinaturaController {
  private service = new AssinaturaService();

  listarAtivasPorCliente = async (req: Request, res: Response) => {
    const { codCli } = req.params;
    const assinaturas = await this.service.listarAtivasPorCliente(Number(codCli));
    res.json(assinaturas);
  };
}