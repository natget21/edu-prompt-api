import express from 'express';
import { getSavedMessageById,getSavedMessages, createSavedMessage, updateSavedMessage, deleteSavedMessage } from '../handlers/savedmessagesHandler.js';

const router = express.Router();

router.get('/:id', getSavedMessageById);
router.get('/', getSavedMessages);
router.post('/', createSavedMessage);
router.put('/:id', updateSavedMessage);
router.delete('/:id', deleteSavedMessage);

export default router;