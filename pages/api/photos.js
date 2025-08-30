// pages/api/photos.js
import { v2 as cloudinary } from 'cloudinary';

const { CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET } = process.env;

cloudinary.config({
  cloud_name: CLOUDINARY_CLOUD_NAME,
  api_key: CLOUDINARY_API_KEY,
  api_secret: CLOUDINARY_API_SECRET,
});

// Carpeta EXACTA en Cloudinary (tú usas "neatcleanpros")
const FOLDER = 'neatcleanpros';

// Util para ordenar (más nuevas primero)
const sortByCreatedDesc = (a, b) => new Date(b.created_at) - new Date(a.created_at);

export default async function handler(req, res) {
  try {
    const debug = req.query.debug === '1';

    // 1) Validar env vars
    const envState = {
      CLOUDINARY_CLOUD_NAME: CLOUDINARY_CLOUD_NAME || null,
      CLOUDINARY_API_KEY: !!CLOUDINARY_API_KEY,
      CLOUDINARY_API_SECRET: !!CLOUDINARY_API_SECRET,
    };
    if (!CLOUDINARY_CLOUD_NAME || !CLOUDINARY_API_KEY || !CLOUDINARY_API_SECRET) {
      return res.status(500).json({ error: 'missing_env', envState });
    }

    // 2) Admin API estable (sin Search)
    const result = await cloudinary.api.resources({
      type: 'upload',
      resource_type: 'image',
      prefix: `${FOLDER}/`,   // carpeta + subcarpetas
      max_results: 100,
    });

    const images = (result.resources || [])
      .sort(sortByCreatedDesc)
      .map(r => r.secure_url);

    // 3) Respuesta
    res.setHeader('Cache-Control', 's-maxage=60, stale-while-revalidate=300');
    if (debug) {
      return res.status(200).json({
        ok: true,
        folder: FOLDER,
        count: images.length,
        sample: images.slice(0, 3),
        envState,
      });
    }
    return res.status(200).json({ images });
  } catch (err) {
    console.error('[cloudinary_failed]', err?.error || err);
    return res.status(500).json({
      error: 'cloudinary_failed',
      message: err?.error?.message || err?.message || 'unknown',
    });
  }
}

