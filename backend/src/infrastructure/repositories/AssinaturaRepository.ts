import { PrismaClient } from '@prisma/client';
import { Assinatura } from '../../domain/Assinatura';

const prismaAssinatura = new PrismaClient();

export class AssinaturaRepository {
    async buscarPorId(codigo: number): Promise<Assinatura | null> {
        return await prismaAssinatura.assinatura.findUnique({ where: { codigo } });
    }

    async buscarPorCliente(codCli: number): Promise<Assinatura[]> {
        return await prismaAssinatura.assinatura.findMany({ where: { codCli } });
    }

    async buscarPorPlano(codPlano: number): Promise<Assinatura[]> {
        return await prismaAssinatura.assinatura.findMany({ where: { codPlano } });
    }

    async buscarPorTipo(tipo: string): Promise<Assinatura[]> {
        const hoje = new Date();
        
        if (tipo === 'ATIVOS') {
            return await prismaAssinatura.assinatura.findMany({
                where: { fimFidelidade: { gt: hoje } }
            });
        }
        
        if (tipo === 'CANCELADOS') {
            return await prismaAssinatura.assinatura.findMany({
                where: { fimFidelidade: { lte: hoje } }
            });
        }

        return await prismaAssinatura.assinatura.findMany();
    }

    async criar(assinatura: Assinatura): Promise<Assinatura> {
        return await prismaAssinatura.assinatura.create({
            data: {
                codCli: assinatura.codCli,
                codPlano: assinatura.codPlano,
                inicioFidelidade: assinatura.inicioFidelidade || new Date(),
                fimFidelidade: assinatura.fimFidelidade || new Date(new Date().setFullYear(new Date().getFullYear() + 1)),
                custoFinal: assinatura.custoFinal,
                descricao: assinatura.descricao
            }
        });
    }    

    async atualizar(codigo: number, assinatura: Partial<Assinatura>): Promise<Assinatura | null> {
        return await prismaAssinatura.assinatura.update({ where: { codigo }, data: assinatura });
    }
}
