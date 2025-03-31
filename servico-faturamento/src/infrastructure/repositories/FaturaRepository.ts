import { PrismaClient } from '@prisma/client';
import { Fatura } from '../../domain/Fatura';

const prisma = new PrismaClient();

export class FaturaRepository {
  async listarTodas(): Promise<Fatura[]> {
    return prisma.fatura.findMany();
  }

  async listarPorCliente(codCli: number): Promise<Fatura[]> {
    return prisma.fatura.findMany({ where: { codCli } });
  }

  async criar(fatura: Fatura): Promise<Fatura> {
    return prisma.fatura.create({ data: fatura });
  }

  async marcarComoPaga(id: number): Promise<Fatura> {
    return prisma.fatura.update({
      where: { id },
      data: { pago: true },
    });
  }
}