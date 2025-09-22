import { Request, Response, NextFunction } from 'express';
import config from '../config';

interface ErrorWithStatus extends Error {
  status?: number;
  code?: number;
}

export const errorHandler = (
  err: ErrorWithStatus,
  _req: Request,
  res: Response,
  _next: NextFunction
) => {
  const status = err.status || err.code || 500;
  const message = err.message || 'Ha ocurrido un error en el servidor';

  // Registrar el error
  console.error(`[Error] ${status} - ${message}`);
  console.error(err.stack);

  // Enviar respuesta al cliente
  res.status(status).json({
    error: {
      message,
      // Solo incluir detalles del error en entornos de desarrollo
      ...(config.nodeEnv !== 'production' && { stack: err.stack }),
    },
  });
};

// Middleware para capturar rutas no encontradas
export const notFoundHandler = (req: Request, res: Response) => {
  res.status(404).json({
    error: {
      message: `Ruta no encontrada: ${req.method} ${req.originalUrl}`,
    },
  });
};
