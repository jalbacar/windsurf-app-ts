import { Router } from 'express';
import apiRoutes from './api';

const router = Router();

// Rutas API
router.use('/api', apiRoutes);

export default router;
