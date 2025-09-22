import { Router, Request, Response } from 'express';

const router = Router();

// Datos de ejemplo (en una aplicación real, esto vendría de una base de datos)
const users = [
  { id: 1, name: 'Juan Pérez', email: 'juan@example.com', role: 'admin' },
  { id: 2, name: 'María López', email: 'maria@example.com', role: 'user' },
  { id: 3, name: 'Carlos Gómez', email: 'carlos@example.com', role: 'user' },
];

// GET /api/users - Obtener todos los usuarios
router.get('/', (_req: Request, res: Response) => {
  return res.json({
    success: true,
    data: users,
    count: users.length,
  });
});

// GET /api/users/:id - Obtener un usuario por ID
router.get('/:id', (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const user = users.find(u => u.id === id);

  if (!user) {
    return res.status(404).json({
      success: false,
      error: `Usuario con ID ${id} no encontrado`,
    });
  }

  return res.json({
    success: true,
    data: user,
  });
});

export default router;
