import express from 'express';
import path from 'path';
import url from 'url';
import data from './routes/data.js'

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 8000;

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/users', data);

app.listen(PORT, () => {
    console.log(`Server has started at port ${PORT}!`);
})