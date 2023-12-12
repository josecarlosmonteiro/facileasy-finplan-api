import dotenv from 'dotenv';

import app from "./server";

dotenv.config();
const PORT: string = process.env.PORT!;

app.listen(PORT, () => console.log(`Server running in http://localhost:${PORT}`));