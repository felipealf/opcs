import { PrismaClient } from '@prisma/client';
import { Assinatura } from '../../domain/Assinatura';

const prisma = new PrismaClient();

export class AssinaturaRepository {
  async listarAtivasPorCliente(codCli: number): Promise<Assinatura[]> {
    return prisma.assinatura.findMany({
      where: {
        codCli,
        fimFidelidade: {
          gt: new Date(),
        },
      },
    });
  }
}