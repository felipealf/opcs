import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import routes from './presentation/routes';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3002;

app.use(cors());
app.use(express.json());
app.use('/api', routes);

app.listen(PORT, () => {
  console.log(`🚀 Servidor Planos Ativos rodando na porta ${PORT}`);
});