import { Orders } from '../models/mongodb/Orders.js';
import { initializeDB } from '../db/dbSelector.js';

const collectionName = Orders

let db;
(async () => {
  db = await initializeDB();
})();
export const getOrderById = async (req, res) => {
    const order = await db.getById(collectionName, req.params.id);
    res.json(order);
};

export const getOrders = async (req, res) => {
    const orders = await db.get(collectionName);
    res.json(orders);
};

export const createOrder = async (req, res) => {
    const newOrder = await db.create(collectionName, req.body);
    res.status(201).json(newOrder);
};

export const updateOrder = async (req, res) => {
    const order = await db.update(collectionName, req.params.id, req.body);
    res.json(order);
};

export const deleteOrder = async (req, res) => {
    const response = await db.delete(collectionName, req.params.id);
    res.status(204).send(response);
};
