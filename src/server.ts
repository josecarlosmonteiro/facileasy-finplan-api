import express from 'express';
import router from './router';
import { logRequestMiddleware } from './middlewares';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// middleware para acompanhar logs de requisições
app.use('/api', logRequestMiddleware);

// definir router da aplicação
app.use('/api', router);

app.get('/', (_req, res) => res.json({ message: 'Server running!' }));

export default app;