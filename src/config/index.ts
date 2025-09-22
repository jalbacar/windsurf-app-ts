import dotenv from 'dotenv';

// Cargar variables de entorno
dotenv.config();

export default {
  port: process.env.PORT || 3000,
  nodeEnv: process.env.NODE_ENV || 'development',

  // Configuración de la base de datos (para futuras implementaciones)
  database: {
    url: process.env.DATABASE_URL || 'mongodb://localhost:27017/myapp',
  },

  // Configuración de JWT (para futuras implementaciones)
  jwt: {
    secret: process.env.JWT_SECRET || 'your-secret-key',
    expiresIn: process.env.JWT_EXPIRES_IN || '1d',
  },

  // Configuración de CORS
  cors: {
    origin: process.env.CORS_ORIGIN || '*',
  },
};
