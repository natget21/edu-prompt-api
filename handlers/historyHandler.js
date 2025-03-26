import { Database } from '../db/database.js';

const { create, getById, get, update, remove } = new Database();
const collectionName = "History"

export const getHistoryById = async (req, res) => {
  const history = await getById(collectionName, req.params.id).populate('folderId messages');
  res.json(history);
};

export const getHistory = async (req, res) => {
  const history = await await get(collectionName).populate('folderId messages');
  res.json(history);
};

export const createHistory = async (req, res) => {
  const newHistory = create(collectionName, req.body);
  res.status(201).json(newHistory);
};

export const updateHistory = async (req, res) => {
  const history = await update(collectionName, req.params.id, req.body);
  res.json(history);
};

export const deleteHistory = async (req, res) => {
  const response = await remove(collectionName, req.params.id);
  res.status(204).send(response);
};
