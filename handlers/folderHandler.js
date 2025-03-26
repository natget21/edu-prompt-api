import { initializeDB } from '../db/dbSelector.js';
import { Folder } from '../models/mongodb/Folder.js';

const collectionName = Folder

let db;
(async () => {
  db = await initializeDB();
})();

export const getFolderById = async (req, res) => {
  const response = await db.getById(collectionName, req.params.id);
  res.json(response);
};

export const getFolders = async (req, res) => {
  const response = await db.get(collectionName);
  res.json(response);
};

export const createFolder = async (req, res) => {
  const response = db.create(collectionName, req.body);
  res.status(201).json(response);
};

export const updateFolder = async (req, res) => {
  const response = db.update(collectionName, req.params.id, req.body);
  res.json(response);
};

export const deleteFolder = async (req, res) => {
  const response = await db.delete(collectionName, req.params.id);
  res.status(204).send(response);
};
