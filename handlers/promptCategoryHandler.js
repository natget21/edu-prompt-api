import { Database } from '../db/database.js';

const { create, getById, get, update, delete } = new Database();
const collectionName = "PromptCategory"

export const getPromptCategoryById = async (req, res) => {
  const category = await getById(collectionName, req.params.id);
  res.json(category);
};

export const getPromptCategories = async (req, res) => {
  const categories = await get(collectionName).populate('promptIds');
  res.json(categories);
};

export const createPromptCategory = async (req, res) => {
  const newCategory = create(collectionName, req.body);
  res.status(201).json(newCategory);
};

export const updatePromptCategory = async (req, res) => {
  const category = await update(collectionName, req.params.id, req.body);
  res.json(category);
};

export const deletePromptCategory = async (req, res) => {
  const response = await delete(collectionName, req.params.id);
  res.status(204).send(response);
};
