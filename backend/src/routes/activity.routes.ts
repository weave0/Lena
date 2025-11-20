import { Router } from 'express';

const router = Router();

// GET /api/activities
router.get('/', async (req, res) => {
  res.json({ message: 'Get activities - to be implemented' });
});

// POST /api/activities
router.post('/', async (req, res) => {
  res.json({ message: 'Create activity - to be implemented' });
});

// GET /api/activities/:id
router.get('/:id', async (req, res) => {
  res.json({ message: 'Get activity details - to be implemented' });
});

// POST /api/activities/:id/join
router.post('/:id/join', async (req, res) => {
  res.json({ message: 'Join activity - to be implemented' });
});

export default router;
