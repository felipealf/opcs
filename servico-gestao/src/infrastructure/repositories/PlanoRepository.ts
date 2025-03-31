import { PrismaClient } from '@prisma/client';
import { Plano } from '../../domain/Plano';

const prismaPlano = new PrismaClient();

export class PlanoRepository {
    async listarTodos(): Promise<Plano[]> {
        return await prismaPlano.plano.findMany();
    }

    async buscarPorId(codigo: number): Promise<Plano | null> {
        return await prismaPlano.plano.findUnique({ where: { codigo } });
    }

    async criar(plano: Plano): Promise<Plano> {
        return await prismaPlano.plano.create({ data: plano });
    }

    async atualizar(codigo: number, plano: Partial<Plano>): Promise<Plano | null> {
        return await prismaPlano.plano.update({ where: { codigo }, data: plano });
    }
}