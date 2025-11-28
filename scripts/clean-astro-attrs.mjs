// scripts/clean-astro-attrs.mjs

/**
 * Script de post-procesamiento para eliminar señales de Astro del build
 * Elimina atributos data-astro-* del HTML y CSS generado
 */

import { readdir, readFile, writeFile } from 'fs/promises';
import { join } from 'path';

const DIST_DIR = './dist';

// Patrones a eliminar
const HTML_PATTERNS = [
  /\s*data-astro-cid-[a-z0-9]+(?:="[^"]*")?/gi,
  /\s*data-astro-source-file="[^"]*"/gi,
  /\s*data-astro-source-loc="[^"]*"/gi,
  /\[data-astro-cid-[a-z0-9]+\]/gi,  // Selectores CSS en style tags
  /\[\]/g,  // Selectores vacíos resultantes
];

const CSS_PATTERNS = [
  /\[data-astro-cid-[a-z0-9]+\]/gi,
  /\[\]/g,  // Selectores vacíos resultantes
];

/**
 * Obtiene todos los archivos de un directorio recursivamente
 */
async function getFiles(dir, extension) {
  const files = [];
  const items = await readdir(dir, { withFileTypes: true });
  
  for (const item of items) {
    const fullPath = join(dir, item.name);
    if (item.isDirectory()) {
      files.push(...await getFiles(fullPath, extension));
    } else if (item.name.endsWith(extension)) {
      files.push(fullPath);
    }
  }
  
  return files;
}

/**
 * Limpia los patrones de un archivo
 */
async function cleanFile(filePath, patterns) {
  let content = await readFile(filePath, 'utf-8');
  let modified = false;
  
  for (const pattern of patterns) {
    const newContent = content.replace(pattern, '');
    if (newContent !== content) {
      content = newContent;
      modified = true;
    }
  }
  
  if (modified) {
    await writeFile(filePath, content);
    console.log(`  ✓ Limpiado: ${filePath}`);
  }
  
  return modified;
}

async function main() {
  console.log('\n🧹 Limpiando señales de Astro del build...\n');
  
  let htmlCount = 0;
  let cssCount = 0;
  
  // Limpiar archivos HTML
  const htmlFiles = await getFiles(DIST_DIR, '.html');
  console.log(`📄 Procesando ${htmlFiles.length} archivos HTML...`);
  for (const file of htmlFiles) {
    if (await cleanFile(file, HTML_PATTERNS)) {
      htmlCount++;
    }
  }
  
  // Limpiar archivos CSS
  const cssFiles = await getFiles(DIST_DIR, '.css');
  console.log(`\n🎨 Procesando ${cssFiles.length} archivos CSS...`);
  for (const file of cssFiles) {
    if (await cleanFile(file, CSS_PATTERNS)) {
      cssCount++;
    }
  }
  
  console.log(`\n✅ Completado: ${htmlCount} HTML y ${cssCount} CSS modificados.\n`);
}

main().catch(console.error);