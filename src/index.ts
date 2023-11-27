import express from 'express';
import dotenv from 'dotenv';
import router from './router';
import { loggingHttpRequests } from './middlewares';
import { syncDatabase } from './models';

dotenv.config();
syncDatabase();

const app = express();
const PORT: string = process.env.PORT!;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// middleware para acompanhar logs de requisições
app.use('/api', loggingHttpRequests);

// definir router da aplicação
app.use('/api', router);

app.get('/', (_req, res) => res.json({ message: 'Server running!' }));
app.listen(PORT, () => console.log(`Server running in http://localhost:${PORT}`));