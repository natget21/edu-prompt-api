import { Database } from '../db/database.js';

const { create, getById, get, update, delete } = new Database();
const collectionName = "Prompt"

export const getPromptById = async (req, res) => {
  const prompt = await getById(collectionName, req.params.id);
  res.json(prompt);
};

export const getPrompts = async (req, res) => {
  const prompts = await await get(collectionName);
  res.json(prompts);
};

export const createPrompt = async (req, res) => {
  const newPrompt = create(collectionName, req.body);
  res.status(201).json(newPrompt);
};

export const updatePrompt = async (req, res) => {
  const prompt = await update(collectionName, req.params.id, req.body);
  res.json(prompt);
};

export const deletePrompt = async (req, res) => {
  const response = await delete(collectionName, req.params.id);
  res.status(204).send(response);
};
