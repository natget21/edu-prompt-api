import { Orders } from '../models/mongodb/Orders.js';
import { getDBInstance } from '../db/dbSelector.js';

const collectionName = Orders


export const getOrderById = async (req, res) => {
    const order = await getDBInstance().getById(collectionName, req.params.id);
    res.json(order);
};

export const getOrders = async (req, res) => {
    const orders = await getDBInstance().get(collectionName);
    res.json(orders);
};

export const createOrder = async (req, res) => {
    const newOrder = await getDBInstance().create(collectionName, req.body);
    res.status(201).json(newOrder);
};

export const updateOrder = async (req, res) => {
    const order = await getDBInstance().update(collectionName, req.params.id, req.body);
    res.json(order);
};

export const deleteOrder = async (req, res) => {
    const response = await getDBInstance().delete(collectionName, req.params.id);
    res.status(204).send(response);
};
