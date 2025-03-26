import { Database } from '../db/database.js';

const { create, getById, get, update, remove } = new Database();
const collectionName = "Message"

export const getMessageById = async (req, res) => {
  const messages = await getById(collectionName, req.params.id);
  res.json(messages);
};

export const getMessages = async (req, res) => {
  const messages = await get(collectionName)
  res.json(messages);
};

export const createMessage = async (req, res) => {
  const newMessage = create(collectionName, req.body);
  res.status(201).json(newMessage);
};

export const updateMessage = async (req, res) => {
  const message = await update(collectionName, req.params.id, req.body);
  res.json(message);
};

export const deleteMessage = async (req, res) => {
  const response = await remove(collectionName, req.params.id);
    res.status(204).send(response);
};
