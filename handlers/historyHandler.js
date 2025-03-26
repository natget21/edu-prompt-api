import { initializeDB } from '../db/dbSelector.js';
import { History } from '../models/mongodb/History.js';

const collectionName = History

let db;
(async () => {
  db = await initializeDB();
})();


export const getHistoryById = async (req, res) => {
  const history = await db.getById(collectionName, req.params.id).populate('folderId messages');
  res.json(history);
};

export const getHistory = async (req, res) => {
  const history = await await db.get(collectionName).populate('folderId messages');
  res.json(history);
};

export const createHistory = async (req, res) => {
  const newHistory = db.create(collectionName, req.body);
  res.status(201).json(newHistory);
};

export const updateHistory = async (req, res) => {
  const history = await db.update(collectionName, req.params.id, req.body);
  res.json(history);
};

export const deleteHistory = async (req, res) => {
  const response = await db.delete(collectionName, req.params.id);
  res.status(204).send(response);
};
