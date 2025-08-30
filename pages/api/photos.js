// pages/api/photos.js
import { v2 as cloudinary } from 'cloudinary';

const { CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET } = process.env;

// Configuración privada (sin NEXT_PUBLIC_)
cloudinary.config({
  cloud_name: CLOUDINARY_CLOUD_NAME,
  api_key: CLOUDINARY_API_KEY,
  api_secret: CLOUDINARY_API_SECRET,
});

// Carpeta EXACTA en Cloudinary
const FOLDER = 'neatcleanpros';

// Util para ordenar por fecha desc
const sortByCreatedDesc = (a, b) => new Date(b.created_at) - new Date(a.created_at);

export default async function handler(req, res) {
  try {
    // Validaciones rápidas de env vars
    if (!CLOUDINARY_CLOUD_NAME || !CLOUDINARY_API_KEY || !CLOUDINARY_API_SECRET) {
      return res.status(500).json({
        error: 'missing_env',
        details: {
          CLOUDINARY_CLOUD_NAME: !!CLOUDINARY_CLOUD_NAME,
          CLOUDINARY_API_KEY: !!CLOUDINARY_API_KEY,
          CLOUDINARY_API_SECRET: !!CLOUDINARY_API_SECRET,
        },
      });
    }

    // ********* Método estable: Admin API (NO Search) *********
    // Lista imágenes por prefijo de carpeta y ordenamos en código.
    const result = await cloudinary.api.resources({
      type: 'upload',
      resource_type: 'image',
      prefix: `${FOLDER}/`,   // incluye subcarpetas
      max_results: 100,
    });

    const images = (result.resources || [])
      .sort(sortByCreatedDesc)
      .map(r => r.secure_url);

    res.setHeader('Cache-Control', 's-maxage=60, stale-while-revalidate=300');
    return res.status(200).json({ images, count: images.length, folder: FOLDER });
  } catch (err) {
    console.error('[cloudinary_failed]', err?.error || err);
    return res.status(500).json({
      error: 'cloudinary_failed',
      message: err?.error?.message || err?.message || 'unknown',
    });
  }
}
