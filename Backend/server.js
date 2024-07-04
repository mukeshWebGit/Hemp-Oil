import express from 'express';
import Data from './Data.js';

const app = express();

app.get('/api/products', (req, res) => {
    res.send(Data.products);
});
app.get('/api/products/slug/:slug', (req, res) => {
    const product = Data.products.find((x) => x.slug === req.params.slug);
    if (product) {
      res.send(product);
    } else {
      res.status(404).send({ message: 'Product Not Found' });
    }
  });
const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`server at http://localhost:${port}`);
});

