import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Inserindo faturas de teste...");

  await prisma.fatura.createMany({
    data: [
      {
        codCli: 1,
        descricao: 'Assinatura básica - março',
        valor: 49.90,
        pago: true
      },
      {
        codCli: 2,
        descricao: 'Assinatura premium - março',
        valor: 89.90,
        pago: false
      },
      {
        codCli: 1,
        descricao: 'Assinatura básica - abril',
        valor: 49.90,
        pago: false
      }
    ]
  });

  console.log("✅ Faturas de teste inseridas com sucesso!");
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
