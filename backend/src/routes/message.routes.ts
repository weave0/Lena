import { Router } from 'express';

const router = Router();

// GET /api/messages
router.get('/', async (req, res) => {
  res.json({ message: 'Get conversations - to be implemented' });
});

// GET /api/messages/:id
router.get('/:id', async (req, res) => {
  res.json({ message: 'Get conversation messages - to be implemented' });
});

// POST /api/messages
router.post('/', async (req, res) => {
  res.json({ message: 'Send message - to be implemented' });
});

export default router;
