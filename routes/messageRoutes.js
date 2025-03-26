import express from 'express';
import { getMessageById,getMessages, createMessage, updateMessage, deleteMessage } from '../handlers/messageHandler.js';

const router = express.Router();

router.get('/:id', getMessageById);
router.get('/', getMessages);
router.post('/', createMessage);
router.put('/:id', updateMessage);
router.delete('/:id', deleteMessage);

export default router;
