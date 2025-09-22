import { Router, Request, Response } from 'express';
import usersRoutes from './users';

const router = Router();

// Ruta de estado
router.get('/status', (_req: Request, res: Response) => {
  res.json({
    status: 'online',
    timestamp: new Date(),
    environment: process.env.NODE_ENV || 'development',
  });
});

// Rutas de usuarios
router.use('/users', usersRoutes);

export default router;
