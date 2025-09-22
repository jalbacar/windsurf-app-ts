#!/usr/bin/env node

/**
 * Script para verificar y corregir el formato y los errores de linting en el proyecto
 * Uso:
 *   - node scripts/lint-format.js check  -> Verifica el formato y los errores de linting
 *   - node scripts/lint-format.js fix    -> Corrige el formato y los errores de linting
 */

const { execSync } = require('child_process');
const path = require('path');

// Colores para la consola
const colors = {
  reset: '\x1b[0m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  magenta: '\x1b[35m',
  cyan: '\x1b[36m',
};

// Función para ejecutar comandos
function runCommand(command) {
  try {
    execSync(command, { stdio: 'inherit' });
    return true;
  } catch (error) {
    return false;
  }
}

// Función para imprimir mensajes con colores
function printMessage(message, color = colors.reset) {
  console.log(`${color}${message}${colors.reset}`);
}

// Obtener el modo (check o fix)
const mode = process.argv[2] || 'check';

// Verificar el modo
if (mode !== 'check' && mode !== 'fix') {
  printMessage('Modo no válido. Uso: node scripts/lint-format.js [check|fix]', colors.red);
  process.exit(1);
}

// Ejecutar los comandos según el modo
if (mode === 'check') {
  printMessage('🔍 Verificando el formato con Prettier...', colors.cyan);
  const prettierSuccess = runCommand('npx prettier --check "src/**/*.ts"');
  
  printMessage('🔍 Verificando errores de linting con ESLint...', colors.cyan);
  const eslintSuccess = runCommand('npx eslint . --ext .ts');
  
  if (prettierSuccess && eslintSuccess) {
    printMessage('✅ ¡Todo correcto! El código cumple con los estándares de formato y linting.', colors.green);
    process.exit(0);
  } else {
    printMessage('❌ Se encontraron problemas. Ejecuta `node scripts/lint-format.js fix` para corregirlos.', colors.red);
    process.exit(1);
  }
} else {
  printMessage('🔧 Corrigiendo el formato con Prettier...', colors.yellow);
  runCommand('npx prettier --write "src/**/*.ts"');
  
  printMessage('🔧 Corrigiendo errores de linting con ESLint...', colors.yellow);
  runCommand('npx eslint . --ext .ts --fix');
  
  printMessage('✅ ¡Correcciones aplicadas! Verifica los cambios y haz commit.', colors.green);
  process.exit(0);
}
