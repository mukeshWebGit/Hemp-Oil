import express from 'express';
import { Data } from './Data.js';

const app = express();

app.get('/api/products', (res, req) => {
    res.send(Data.products);
});

const port = process.env.PORT || 6000;

app.listen(port, () => {
    console.log(`server at http://localhost/${port}`);
});

