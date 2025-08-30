// /pages/api/photos.js
export default async function handler(req, res) {
  const cloudName = process.env.CLOUDINARY_CLOUD_NAME;
  const apiKey = process.env.CLOUDINARY_API_KEY;
  const apiSecret = process.env.CLOUDINARY_API_SECRET;

  // Usa el mismo nombre de carpeta que pones cuando subes tus fotos en Cloudinary
  const folder = "neatcleanpros";

  try {
    const response = await fetch(
      `https://api.cloudinary.com/v1_1/${cloudName}/resources/image/upload?prefix=${folder}/&max_results=30`,
      {
        headers: {
          Authorization:
            "Basic " + Buffer.from(`${apiKey}:${apiSecret}`).toString("base64"),
        },
      }
    );

    if (!response.ok) throw new Error("Cloudinary fetch failed");

    const data = await response.json();
    const images = (data.resources || []).map((r) => r.secure_url);

    res.status(200).json({ images });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to load images" });
  }
}
