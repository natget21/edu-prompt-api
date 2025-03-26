import { Products } from '../models/mongodb/Products.js';
import { initializeDB } from '../db/dbSelector.js';

let db;
(async () => {
  db = await initializeDB();
})();

const collectionName = Products

export const getProductById = async (req, res) => {
  const product = await db.getById(collectionName, req.params.id);
  res.json(product);
};

export const getProducts = async (req, res) => {
  const products =  await db.get(collectionName);
  res.json(products);
};

export const createProduct = async (req, res) => {
  const newProduct = await db.create(collectionName, req.body);
  res.status(201).json(newProduct);
};

export const updateProduct = async (req, res) => {
  const product = await db.update(collectionName, req.params.id, req.body);
  res.json(product);
};

export const deleteProduct = async (req, res) => {
  const response = await db.delete(collectionName, req.params.id);
  res.status(204).send(response);
};
