import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Inserindo assinaturas de teste...");

  await prisma.assinatura.createMany({
    data: [
      {
        codCli: 1,
        codPlano: 1,
        inicioFidelidade: new Date('2025-01-01'),
        fimFidelidade: new Date('2025-12-31'),
        descricao: 'Assinatura Anual - Plano Básico',
        custoFinal: 59.9
      },
      {
        codCli: 1,
        codPlano: 2,
        inicioFidelidade: new Date('2023-01-01'),
        fimFidelidade: new Date('2023-12-31'),
        descricao: 'Assinatura Anual - Expirada',
        custoFinal: 49.9
      },
      {
        codCli: 2,
        codPlano: 3,
        inicioFidelidade: new Date('2025-03-01'),
        fimFidelidade: new Date('2026-02-28'),
        descricao: 'Assinatura Premium',
        custoFinal: 89.9
      }
    ]
  });

  console.log("✅ Assinaturas de teste inseridas com sucesso!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());