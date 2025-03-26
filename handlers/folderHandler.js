import { Database } from '../db/database.js';

const { create, getById, get, update, delete } = new Database();

const collectionName = "Folder"

export const getFolderById = async (req, res) => {
  const response = await getById(collectionName, req.params.id);
  res.json(response);
};

export const getFolders = async (req, res) => {
  const response = await get(collectionName);
  res.json(response);
};

export const createFolder = async (req, res) => {
  const response = create(collectionName, req.body);
  res.status(201).json(response);
};

export const updateFolder = async (req, res) => {
  const response = update(collectionName, req.params.id, req.body);
  res.json(response);
};

export const deleteFolder = async (req, res) => {
  const response = await delete(collectionName, req.params.id);
  res.status(204).send(response);
};
