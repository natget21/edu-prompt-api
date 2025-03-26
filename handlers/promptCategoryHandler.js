import { PromptCategory } from '../models/mongodb/PromptCategory.js';

const collectionName = PromptCategory

export const getPromptCategoryById = async (req, res) => {
  const category = await req.db.getById(collectionName, req.params.id);
  res.json(category);
};

export const getPromptCategories = async (req, res) => {
  const categories = await req.db.get(collectionName).populate('promptIds');
  res.json(categories);
};

export const createPromptCategory = async (req, res) => {
  const newCategory = await req.db.create(collectionName, req.body);
  res.status(201).json(newCategory);
};

export const updatePromptCategory = async (req, res) => {
  const category = await req.db.update(collectionName, req.params.id, req.body);
  res.json(category);
};

export const deletePromptCategory = async (req, res) => {
  const response = await req.db.delete(collectionName, req.params.id);
  res.status(204).send(response);
};
