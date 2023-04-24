import express from 'express';
const productRouter = express.Router();

import { Product } from '../models/Product.js';

/* ADD PRODUCT */

productRouter.route('/add').post(async (req, res) => {
  const name = req.body.name;
  const category = req.body.category;
  const description = req.body.description;
  const quantity = Number(req.body.quantity);
  const price = Number(req.body.price);
  const image = req.body.image;

  const newProduct = new Product({
    name,
    category,
    description,
    quantity,
    price,
    image,
  });

  newProduct
    .save()
    .then(() => {
      res.json('Product Added');
    })
    .catch((err) => {
      console.log(err);
    });
});

/* GET ALL PRODUCTS */

productRouter.route('/').get(async (req, res) => {
  await Product.find()
    .then((products) => {
      res.json(products);
    })
    .catch((err) => {
      console.log(err);
    });
});

/* UPDATE PRODUCT */

productRouter.route('/update/:id').put(async (req, res) => {
  let productId = req.params.id;
  const { name, category, description, quantity, price, status, image } =
    req.body;

  const updateProduct = {
    name,
    category,
    description,
    quantity,
    price,
    image,
  };

  const update = await Product.findByIdAndUpdate(productId, updateProduct)
    .then(() => {
      res.status(200).send({ status: 'Product Updated' });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send({ status: 'Error with updating data', error: err });
    });
});

/* DELETE PRODUCT */

productRouter.route('/delete/:id').delete(async (req, res) => {
  let productId = req.params.id;

  await Product.findByIdAndDelete(productId)

    .then(() => {
      res.status(200).send({ status: 'Product Deleted' });
    })
    .catch((err) => {
      console.log(err.message);
      res.status(500).send({ status: 'Error with delete product', error: err });
    });
});

/* Get one product */

productRouter.route('/get/:id').get(async (req, res) => {
  let productId = req.params.id;

  const product = await Product.findById(productId)
    .then((product) => {
      res.status(200).send({ product });
    })
    .catch((err) => {
      console.log(err.message);
      res
        .status(500)
        .send({ status: 'Error with get product', error: err.message });
    });
});

export default productRouter;
