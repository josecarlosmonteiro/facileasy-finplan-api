import express from 'express';

const app = express();
const PORT: number = 4000;

app.get('/', (req, res) => res.json({ message: 'Server changed!' }));
app.listen(PORT, () => console.log(`Server running in http://localhost:${PORT}`));