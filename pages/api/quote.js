// pages/api/quote.js
export const config = { runtime: "nodejs" }; // asegura Node (no Edge)

export default async function handler(req, res) {
  if (req.method !== "POST")
    return res.status(405).json({ error: "Method not allowed" });

  try {
    const { default: nodemailer } = await import("nodemailer"); // import dinámico
    const { zip, beds, baths, date, time, phone, email } = req.body || {};

    const text = [
      "New Cleaning Quote Request",
      "--------------------------------",
      `ZIP: ${zip || "-"}`,
      `Beds: ${beds || "-"}`,
      `Baths: ${baths || "-"}`,
      `Date: ${date || "-"}`,
      `Time: ${time || "-"}`,
      `Phone: ${phone || "-"}`,
      `Email: ${email || "-"}`,
    ].join("\n");

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,                // ej: smtp.office365.com / smtp.gmail.com
      port: Number(process.env.SMTP_PORT || 587), // 587 con STARTTLS
      secure: process.env.SMTP_SECURE === "true", // false para 587
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"NeatClean Pros Site" <${process.env.SMTP_FROM || process.env.SMTP_USER}>`,
      to: process.env.SMTP_TO || "neatclean012@gmail.com",
      subject: `New Quote • ${zip || "No ZIP"} • ${beds || ""} / ${baths || ""}`,
      text,
      html: text.replace(/\n/g, "<br/>"),
      replyTo: email || undefined,
    });

    res.status(200).json({ ok: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message || "Mail error" });
  }
}

