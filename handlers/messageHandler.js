import { initializeDB } from '../db/dbSelector.js';
import { Message } from '../models/mongodb/Message.js';

const collectionName = Message

let db;
(async () => {
  db = await initializeDB();
})();


export const getMessageById = async (req, res) => {
  const messages = await db.getById(collectionName, req.params.id);
  res.json(messages);
};

export const getMessages = async (req, res) => {
  const messages = await db.get(collectionName)
  res.json(messages);
};

export const createMessage = async (req, res) => {
  const newMessage = await db.create(collectionName, req.body);
  res.status(201).json(newMessage);
};

export const updateMessage = async (req, res) => {
  const message = await db.update(collectionName, req.params.id, req.body);
  res.json(message);
};

export const deleteMessage = async (req, res) => {
  const response = await db.delete(collectionName, req.params.id);
    res.status(204).send(response);
};
