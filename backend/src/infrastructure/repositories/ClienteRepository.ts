import { PrismaClient } from '@prisma/client';
import { Cliente } from '../../domain/Cliente';

const prisma = new PrismaClient();

export class ClienteRepository {
    async listarTodos(): Promise<Cliente[]> {
        return await prisma.cliente.findMany();
    }

    async buscarPorId(codigo: number): Promise<Cliente | null> {
        return await prisma.cliente.findUnique({ where: { codigo } });
    }

    async criar(cliente: Cliente): Promise<Cliente> {
        return await prisma.cliente.create({ data: cliente });
    }

    async atualizar(codigo: number, cliente: Partial<Cliente>): Promise<Cliente | null> {
        return await prisma.cliente.update({ where: { codigo }, data: cliente });
    }

    async deletar(codigo: number): Promise<void> {
        await prisma.cliente.delete({ where: { codigo } });
    }
}