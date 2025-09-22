# Servidor Web con Node.js y TypeScript

Este proyecto es un servidor web desarrollado con Node.js y TypeScript, utilizando Express como framework principal.

## Características

- Configuración completa de TypeScript para Node.js
- Express para manejo de rutas y middleware
- Estructura de proyecto organizada y escalable
- Manejo de errores centralizado
- Configuración mediante variables de entorno
- Seguridad mejorada con Helmet
- Soporte para CORS

## Requisitos previos

- Node.js (v14 o superior)
- npm o yarn

## Instalación

1. Clona este repositorio:
   ```bash
   git clone <url-del-repositorio>
   cd express-typescript-server
   ```

2. Instala las dependencias:
   ```bash
   npm install
   # o
   yarn install
   ```

3. Copia el archivo de variables de entorno de ejemplo:
   ```bash
   cp .env.example .env
   ```

4. Edita el archivo `.env` según tus necesidades.

## Scripts disponibles

### Desarrollo

- `npm run dev`: Inicia el servidor en modo desarrollo con ts-node-dev (reinicio automático)
- `npm run dev:debug`: Inicia el servidor en modo debug con soporte para inspección
- `npm run dev:watch`: Alternativa usando nodemon para reinicio automático

### Compilación

- `npm run build`: Compila el código TypeScript a JavaScript
- `npm run build:clean`: Limpia la carpeta dist y luego compila

### Ejecución

- `npm start`: Inicia el servidor desde los archivos compilados
- `npm run start:prod`: Inicia el servidor en modo producción
- `npm run build:start`: Compila el código y luego inicia el servidor

### Calidad de código

- `npm run lint`: Ejecuta el linter para verificar el código
- `npm run lint:fix`: Corrige automáticamente los problemas de linting
- `npm run format`: Formatea el código según las reglas de Prettier
- `npm run format:check`: Verifica el formato sin modificar los archivos
- `npm run check`: Ejecuta verificaciones de linting y formato
- `npm run fix`: Corrige automáticamente problemas de linting y formato

### Gestión de dependencias

- `npm run update-check`: Verifica todas las dependencias obsoletas y permite actualizarlas interactivamente (usa npx)
- `npm run update-check:prod`: Verifica solo las dependencias de producción obsoletas (usa npx)
- `npm run update-check:dev`: Verifica solo las dependencias de desarrollo obsoletas (usa npx)

### Pruebas

- `npm test`: Ejecuta las pruebas

## Estructura del proyecto

```
.
├── .github/             # Configuración de GitHub
│   └── workflows/       # Workflows de GitHub Actions
│       └── ci.yml       # Configuración de CI
├── src/                 # Código fuente
│   ├── config/          # Configuración de la aplicación
│   ├── middleware/      # Middleware personalizado
│   ├── routes/          # Definición de rutas
│   │   ├── api.ts       # Rutas de la API
│   │   ├── users.ts     # Rutas de usuarios
│   │   └── index.ts     # Configuración de rutas
│   └── index.ts         # Punto de entrada de la aplicación
├── dist/                # Código compilado (generado)
├── .env.example         # Ejemplo de variables de entorno
├── .gitignore           # Archivos ignorados por Git
├── package.json         # Dependencias y scripts
├── tsconfig.json        # Configuración de TypeScript
└── README.md            # Este archivo
```

## Integración Continua (CI/CD)

Este proyecto utiliza GitHub Actions para la integración continua. El workflow se activa automáticamente en cada push a la rama `main` y realiza las siguientes tareas:

1. **Checkout del código**: Obtiene la última versión del código.
2. **Configuración de Node.js**: Configura el entorno de Node.js.
3. **Instalación de dependencias**: Instala todas las dependencias necesarias.
4. **Ejecución del linter**: Verifica la calidad del código con ESLint.
5. **Compilación del proyecto**: Compila el código TypeScript para asegurar que no hay errores.

### Archivo de configuración

El archivo de configuración se encuentra en `.github/workflows/ci.yml`. Puedes personalizar este archivo según tus necesidades específicas.

Para más información sobre GitHub Actions, consulta la [documentación oficial](https://docs.github.com/es/actions).

## Desarrollo

Para iniciar el servidor en modo desarrollo:

```bash
npm run dev
```

El servidor se ejecutará en `http://localhost:3000` (o el puerto especificado en tu archivo `.env`).

## Producción

Para preparar la aplicación para producción:

1. Compila el código:
   ```bash
   npm run build
   ```

2. Inicia el servidor:
   ```bash
   npm start
   ```

## Licencia

ISC
