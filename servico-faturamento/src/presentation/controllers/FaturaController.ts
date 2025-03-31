import { Request, Response } from 'express';
import { FaturaService } from '../../application/services/FaturaService';

export class FaturaController {
  private service = new FaturaService();

  listarTodas = async (req: Request, res: Response) => {
    const faturas = await this.service.listarTodas();
    res.json(faturas);
  };

  listarPorCliente = async (req: Request, res: Response) => {
    const { codCli } = req.params;
    const faturas = await this.service.listarPorCliente(Number(codCli));
    res.json(faturas);
  };

  criar = async (req: Request, res: Response) => {
    const fatura = await this.service.criar(req.body);
    res.status(201).json(fatura);
  };

  marcarComoPaga = async (req: Request, res: Response) => {
    const { id } = req.params;
    const fatura = await this.service.marcarComoPaga(Number(id));
    res.json(fatura);
  };
}