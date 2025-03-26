import { initializeDB } from '../db/dbSelector.js';
import { Prompt } from '../models/mongodb/Prompt.js';

const collectionName = Prompt

let db;
(async () => {
  db = await initializeDB();
})();


export const getPromptById = async (req, res) => {
  const prompt = await db.getById(collectionName, req.params.id);
  res.json(prompt);
};

export const getPrompts = async (req, res) => {
  const prompts = await await db.get(collectionName);
  res.json(prompts);
};

export const createPrompt = async (req, res) => {
  const newPrompt = await db.create(collectionName, req.body);
  res.status(201).json(newPrompt);
};

export const updatePrompt = async (req, res) => {
  const prompt = await db.update(collectionName, req.params.id, req.body);
  res.json(prompt);
};

export const deletePrompt = async (req, res) => {
  const response = await db.delete(collectionName, req.params.id);
  res.status(204).send(response);
};
