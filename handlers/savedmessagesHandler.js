import { initializeDB } from '../db/dbSelector.js';
import { SavedMessages } from '../models/mongodb/SavedMessages.js';

const collectionName = SavedMessages

let db;
(async () => {
  db = await initializeDB();
})();


export const getSavedMessageById = async (req, res) => {
  const savedMessage = await db.getById(collectionName, req.params.id);
  res.json(savedMessage);
};

export const getSavedMessages = async (req, res) => {
  const savedMessages = await await db.get(collectionName);
  res.json(savedMessages);
};

export const createSavedMessage = async (req, res) => {
  const newSavedMessage = await db.create(collectionName, req.body);
  res.status(201).json(newSavedMessage);
};

export const updateSavedMessage = async (req, res) => {
  const savedMessage = await db.update(collectionName, req.params.id, req.body);
  res.json(savedMessage);
};

export const deleteSavedMessage = async (req, res) => {
  const response = await db.delete(collectionName, req.params.id);
  res.status(204).send(response);
};
