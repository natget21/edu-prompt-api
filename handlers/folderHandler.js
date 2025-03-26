import { Folder } from '../models/mongodb/Folder.js';

const collectionName = Folder

export const getFolderById = async (req, res) => {
  const response = await req.db.getById(collectionName, req.params.id);
  res.json(response);
};

export const getFolders = async (req, res) => {
  const response = await req.db.get(collectionName);
  res.json(response);
};

export const createFolder = async (req, res) => {
  const response = await db.create(collectionName, req.body);
  res.status(201).json(response);
};

export const updateFolder = async (req, res) => {
  const response = await db.update(collectionName, req.params.id, req.body);
  res.json(response);
};

export const deleteFolder = async (req, res) => {
  const response = await db.delete(collectionName, req.params.id);
  res.status(204).send(response);
};
