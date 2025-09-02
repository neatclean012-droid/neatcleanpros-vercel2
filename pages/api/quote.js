// pages/api/quote.js
import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

  try {
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
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 587),
      secure: process.env.SMTP_SECURE === "true",
      auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
    });

    await transporter.sendMail({
      from: `"NeatClean Pros Site" <${process.env.SMTP_FROM || process.env.SMTP_USER}>`,
      to: process.env.SMTP_TO || "neatclean012@gmail.com",
      subject: `New Quote • ${zip || "No ZIP"} • ${beds || ""} / ${baths || ""}`,
      text,
      html: text.replace(/\n/g, "<br/>"),
      replyTo: email || undefined,
    });

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: err.message || "Mail error" });
  }
}
