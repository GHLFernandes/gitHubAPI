import express from 'express';

const app = express();
const HOST = 'http://localhost';
const PORT = 8080;

app.get('/', (req, res) => {
    res.send('hello world');
})

app.listen(PORT, () => console.log(`Server running in ${HOST}:${PORT}`));