import { Router } from 'express';
import { getUsers, getUserById, updateUser } from '../controllers/user.controller';
import { authenticateToken } from '../middleware/auth.middleware';

const router = Router();

// GET /api/users (protected)
router.get('/', authenticateToken, getUsers);

// GET /api/users/:id (protected)
router.get('/:id', authenticateToken, getUserById);

// PUT /api/users/:id (protected)
router.put('/:id', authenticateToken, updateUser);

export default router;
