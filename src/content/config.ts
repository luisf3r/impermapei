import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';
import * as fs from 'fs';
import * as path from 'path';
import sizeOf from 'image-size';

const productos = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/productos" }),
  schema: z.object({
    name: z.string(),
    excerpt: z.string().optional(),
    exampleImage: z.union([z.string(), z.object({ width: z.number(), height: z.number() })]), // Path de la imagen de uso
    marca: z.string(), // Marca del producto
    categoria: z.string(), // Categoria del producto
    tipo: z.string(), // Tipo del producto
  }).transform((data) => {
    // Función para obtener las dimensiones reales de una imagen
    const getImageDimensions = (imagePath: string) => {
      try {
        // Resolver la ruta de la imagen
        // Asumimos que las rutas comienzan con / y son relativas a /public
        const fullPath = path.join(process.cwd(), 'public', imagePath);
        console.log(`Verificando dimensiones para: ${imagePath}`);
        console.log(`Ruta completa: ${fullPath}`);
        
        if (fs.existsSync(fullPath)) {
          // Leer el archivo como buffer antes de pasarlo a sizeOf
          const buffer = fs.readFileSync(fullPath);
          // Convertir Buffer a Uint8Array
          const uint8Array = new Uint8Array(buffer);
          const dimensions = sizeOf(uint8Array);
          console.log(`Dimensiones obtenidas: ${dimensions.width}x${dimensions.height}`);
          return {
            width: dimensions.width || 600,
            height: dimensions.height || 600
          };
        } else {
          console.log(`Archivo no encontrado: ${fullPath}`);
        }
      } catch (error) {
        console.warn(`Error al obtener dimensiones para: ${imagePath}`, error);
      }
      
      // Valores predeterminados si no se puede obtener las dimensiones
      console.log(`Usando dimensiones predeterminadas: 600x600`);
      return { width: 600, height: 600 };
    };

    // Transformamos exampleImage
    let transformedImage;
    
    if (typeof data.exampleImage === 'string') {
      console.log(`Procesando imagen: ${data.exampleImage}`);
      const dimensions = getImageDimensions(data.exampleImage);
      transformedImage = {
        src: data.exampleImage,
        width: dimensions.width,
        height: dimensions.height
      };
      console.log(`Imagen transformada:`, transformedImage);
    } else {
      // Si ya es un objeto con width y height, solo añadimos src si no existe
      console.log(`Procesando objeto de imagen:`, data.exampleImage);
      transformedImage = {
        src: '', // Valor por defecto
        ...data.exampleImage
      };
      console.log(`Objeto transformado:`, transformedImage);
    }

    return {
      ...data,
      exampleImage: transformedImage
    };
  }),
});

export const collections = { productos: productos };