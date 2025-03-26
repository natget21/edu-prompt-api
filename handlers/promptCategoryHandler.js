import { initializeDB } from '../db/dbSelector.js';
import { PromptCategory } from '../models/mongodb/PromptCategory.js';

const collectionName = PromptCategory

let db;
(async () => {
  db = await initializeDB();
})();


export const getPromptCategoryById = async (req, res) => {
  const populate = { path: '_prompts', select: '_id title description' };
  const category = await db.getById(collectionName, req.params.id,populate);
  res.json(category);
};

export const getPromptCategories = async (req, res) => {
  const populate = { path: '_prompts', select: '_id title description' };
  const categories = await db.get(collectionName,{},{},{},populate);
  res.json(categories);
};

export const createPromptCategory = async (req, res) => {
  const newCategory = await db.create(collectionName, req.body);
  res.status(201).json(newCategory);
};

export const updatePromptCategory = async (req, res) => {
  const category = await db.update(collectionName, req.params.id, req.body);
  res.json(category);
};

export const deletePromptCategory = async (req, res) => {
  const response = await db.delete(collectionName, req.params.id);
  res.status(204).send(response);
};
