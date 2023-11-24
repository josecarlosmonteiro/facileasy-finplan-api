import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT: string = process.env.PORT!;

// middleware para acompanhar logs de requisições
app.use('/api', (req, res, next) => {
  console.log(`[${req.method}] ${req.path}`);
  next();
});

app.get('/', (req, res) => res.json({ message: 'Server running!' }));
app.listen(PORT, () => console.log(`Server running in http://localhost:${PORT}`));