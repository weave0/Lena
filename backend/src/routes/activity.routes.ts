import { Router } from 'express';
import { getActivities, getActivityById, createActivity, joinActivity, leaveActivity } from '../controllers/activity.controller';
import { authenticateToken } from '../middleware/auth.middleware';

const router = Router();

// GET /api/activities (protected)
router.get('/', authenticateToken, getActivities);

// POST /api/activities (protected)
router.post('/', authenticateToken, createActivity);

// GET /api/activities/:id (protected)
router.get('/:id', authenticateToken, getActivityById);

// POST /api/activities/:id/join (protected)
router.post('/:id/join', authenticateToken, joinActivity);

// POST /api/activities/:id/leave (protected)
router.post('/:id/leave', authenticateToken, leaveActivity);

export default router;
