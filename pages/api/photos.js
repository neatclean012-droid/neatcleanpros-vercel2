// pages/api/photos.js
import { v2 as cloudinary } from 'cloudinary';

// Variables PRIVADAS en Vercel (sin NEXT_PUBLIC_)
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,   // ej: d1ooccd6b
  api_key: process.env.CLOUDINARY_API_KEY,         // tu API Key
  api_secret: process.env.CLOUDINARY_API_SECRET,   // tu API Secret
});

// Carpeta real en tu Cloudinary (ajústala si usas subcarpetas)
const FOLDER = 'neatcleanpros';

export default async function handler(req, res) {
  try {
    const result = await cloudinary.search
      .expression(`folder=${FOLDER}/*`)
      .sort_by('created_at', 'desc')
      .max_results(50)
      .execute();

    const images = (result.resources || []).map(r => r.secure_url);
    return res.status(200).json({ images });
  } catch (err) {
    console.error('Cloudinary error:', err);
    return res.status(500).json({ error: 'cloudinary_failed' });
  }
}

