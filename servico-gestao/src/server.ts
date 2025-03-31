import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import helmet from 'helmet';
import { PrismaClient } from '@prisma/client';
import routes from './presentation/routes';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
const prisma = new PrismaClient();

// Middlewares
app.use(express.json());
app.use(cors());
app.use(helmet());

// Rotas
app.use('/gestao', routes);

// Testando conexão com o banco de dados
prisma.$connect()
    .then(() => console.log('Banco de dados conectado com sucesso!'))
    .catch(err => console.error('Erro ao conectar no banco de dados:', err));

// Inicialização do servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});

export default app;