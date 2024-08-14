import express from 'express';
import Product from '../models/productModel.js';
import Data from '../Data.js';

const seedRouter = express.Router();

seedRouter.get('/', async (req, res) => {
  await Product.deleteMany({});
  const createdProducts = await Product.insertMany(Data.products);
  res.send({ createdProducts });
});
export default seedRouter;
