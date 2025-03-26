import express from 'express';
import { getHistoryById,getHistory, createHistory, updateHistory, deleteHistory } from '../handlers/historyHandler.js';

const router = express.Router();

router.get('/:id', getHistoryById);
router.get('/', getHistory);
router.post('/', createHistory);
router.put('/:id', updateHistory);
router.delete('/:id', deleteHistory);

export default router;
