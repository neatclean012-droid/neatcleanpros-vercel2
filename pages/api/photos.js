// pages/api/photos.js
import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,   // <- sin NEXT_PUBLIC_
  api_key:    process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// carpeta EXACTA donde subes en Cloudinary (la tuya es "neatcleanpros")
const FOLDER = 'neatcleanpros';

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'method_not_allowed' });
  }

  try {
    // Importante: usar la sintaxis del buscador de Cloudinary
    const result = await cloudinary.search
      .expression(`resource_type:image AND folder="${FOLDER}"`)
      .sort_by('created_at', 'desc')
      .max_results(50)
      .execute();

    const images = (result.resources || []).map(r => r.secure_url);

    // cache solo en edge/CDN, no en el navegador
    res.setHeader('Cache-Control', 's-maxage=60, stale-while-revalidate=300');
    return res.status(200).json({ images, count: images.length });
  } catch (err) {
    console.error('[Cloudinary]', err?.error || err);
    return res.status(500).json({ error: 'cloudinary_failed' });
  }
}
