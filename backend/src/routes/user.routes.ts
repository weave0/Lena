import { Router } from 'express';

const router = Router();

// GET /api/users
router.get('/', async (req, res) => {
  res.json({ message: 'Get users - to be implemented' });
});

// GET /api/users/:id
router.get('/:id', async (req, res) => {
  res.json({ message: 'Get user by ID - to be implemented' });
});

// PUT /api/users/:id
router.put('/:id', async (req, res) => {
  res.json({ message: 'Update user - to be implemented' });
});

export default router;
