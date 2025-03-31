import { PrismaClient } from '@prisma/client';
import { Pagamento } from '../../domain/Pagamento';

const prismaPagamento = new PrismaClient();

export class PagamentoRepository {
    async listarTodos(): Promise<Pagamento[]> {
        return await prismaPagamento.pagamento.findMany();
    }

    async buscarPorId(codigo: number): Promise<Pagamento | null> {
        return await prismaPagamento.pagamento.findUnique({ where: { codigo } });
    }

    async criar(pagamento: Pagamento): Promise<Pagamento> {
        return await prismaPagamento.pagamento.create({ data: pagamento });
    }
}
