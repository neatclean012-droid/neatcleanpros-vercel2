// components/NeatCleanProsLanding.jsx
import RecentWork from "./RecentWork";
import React, { useEffect, useState } from "react";
import FAQ from "./FAQ";
import {
  // contacto / UI
  Phone,
  Mail,
  MessageCircle,
  Calendar,
  MapPin,
  // icons de secciones
  Sparkles,
  CheckCircle2,
  ShieldCheck,
  Award,
  Clock,
  Sliders,
  Star,
  // galería opcional
  Upload,
} from "lucide-react";

import Comments from "./Comments";
export default function NeatCleanProsLanding() {
  const PHONE = "+19122026006";
  const EMAIL = "neatclean012@gmail.com";

  /* --------------------------------- UI helpers -------------------------------- */
  const openWhatsApp = (text) => {
    const url = `https://wa.me/19122026006?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  };

  /* --------------------------------- RENDER UI --------------------------------- */
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50 text-slate-800">
      {/* ========= Top Bar ========= */}
      <header className="w-full border-b bg-white/80 backdrop-blur sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src="/PROS.png"
              alt="NeatClean Pros Logo"
              className="w-10 h-10"
            />
            <div className="leading-tight">
              <p className="font-semibold">NeatClean Pros LLC</p>
              <p className="text-xs text-slate-500">Jesup, GA • Est. 2025</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <a
              href={`tel:${PHONE}`}
              className="hidden sm:flex items-center gap-2 text-sm font-semibold px-3 py-2 rounded-xl bg-amber-600 text-white shadow hover:bg-amber-700 transition"
            >
              <Phone className="w-4 h-4" /> Call
            </a>
            <a
              href={`https://wa.me/19122026006`}
              className="flex items-center gap-2 text-sm font-semibold px-3 py-2 rounded-xl bg-emerald-600 text-white shadow hover:bg-emerald-700 transition"
              target="_blank"
              rel="noreferrer"
            >
              <MessageCircle className="w-4 h-4" /> WhatsApp
            </a>
            <a
              href="#book"
              className="flex items-center gap-2 text-sm font-semibold px-3 py-2 rounded-xl bg-black text-white shadow hover:bg-slate-900 transition"
            >
              <Calendar className="w-4 h-4" /> Book
            </a>
          </div>
        </div>
      </header>

      {/* ========= Hero simple ========= */}
      <section className="relative bg-gradient-to-r from-amber-50 via-white to-emerald-50">
        <div className="max-w-6xl mx-auto px-4 py-14 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900">
              “We Clean, You Relax”
              <br />
              <span className="text-emerald-700">Premium Cleaning Services</span>
            </h1>
            <p className="mt-4 text-lg text-slate-600">
              Licensed & insured. Owner-operated since 2019. We serve Jesup and
              up to 40 miles around—Waycross, Brunswick, Hinesville, Pooler, and
              Richmond Hill.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="#book"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-emerald-600 text-white font-semibold shadow hover:bg-emerald-700"
              >
                <Calendar className="w-4 h-4" /> Get a Quote
              </a>
              <a
                href={`tel:${PHONE}`}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl border border-slate-300 bg-white font-semibold hover:border-slate-400"
              >
                <Phone className="w-4 h-4" /> Call
              </a>
            </div>
          </div>

          <div className="relative rounded-3xl overflow-hidden shadow-xl border bg-white">
            <img
              alt="Founders NeatClean Pros"
              src="/foto_neatclean.JPG"
              className="w-full h-80 object-cover"
            />
          </div>
        </div>
      </section>

      {/* ========= How it works (3) ========= */}
      <section className="bg-gradient-to-b from-white to-slate-50 py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-12">
            How it works
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white shadow-lg rounded-2xl p-6 border-t-4 border-amber-500 hover:shadow-xl transition">
              <Calendar className="w-10 h-10 text-amber-600 mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-2">Tell us about your home</h3>
              <p className="text-slate-600">
                Bedrooms, bathrooms, pets, preferred date.
              </p>
            </div>

            <div className="bg-white shadow-lg rounded-2xl p-6 border-t-4 border-amber-500 hover:shadow-xl transition">
              <Sparkles className="w-10 h-10 text-amber-600 mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-2">We clean — you relax</h3>
              <p className="text-slate-600">
                Standard, Deep, Move in/out, Commercial.
              </p>
            </div>

            <div className="bg-white shadow-lg rounded-2xl p-6 border-t-4 border-amber-500 hover:shadow-xl transition">
              <CheckCircle2 className="w-10 h-10 text-amber-600 mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-2">Enjoy a spotless place</h3>
              <p className="text-slate-600">
                Quality check and satisfaction guarantee.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========= PREMIUM PANEL (4) ========= */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-slate-900">
            Premium Cleaning Made Simple
          </h2>
          <p className="text-center text-slate-600 mt-2">
            Trusted cleaning services in Jesup and up to 40 miles: Waycross,
            Brunswick, Hinesville, Pooler, and Richmond Hill.
          </p>

          <div className="grid md:grid-cols-2 gap-10 mt-12">
            {/* Experienced */}
            <div className="flex items-start gap-4">
              <div className="shrink-0 w-12 h-12 rounded-xl bg-amber-100 grid place-items-center border border-amber-300">
                <Award className="w-6 h-6 text-amber-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900">
                  Experienced
                </h3>
                <p className="text-slate-600">
                  Owner-operated since 2019 and established as an LLC in 2025.
                  We’ve served hundreds of homes and small offices around Jesup
                  using premium supplies and a consistent process.
                </p>
              </div>
            </div>

            {/* Reliable */}
            <div className="flex items-start gap-4">
              <div className="shrink-0 w-12 h-12 rounded-xl bg-amber-100 grid place-items-center border border-amber-300">
                <ShieldCheck className="w-6 h-6 text-amber-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900">
                  Reliable
                </h3>
                <p className="text-slate-600">
                  Licensed & insured. We arrive on time with everything needed
                  and finish with a quality check. Not 100% happy? We’ll make it
                  right.
                </p>
              </div>
            </div>

            {/* Convenient */}
            <div className="flex items-start gap-4">
              <div className="shrink-0 w-12 h-12 rounded-xl bg-amber-100 grid place-items-center border border-amber-300">
                <Clock className="w-6 h-6 text-amber-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900">
                  Convenient
                </h3>
                <p className="text-slate-600">
                  Book by call, email, or WhatsApp. One-time, weekly, or
                  bi-weekly. Quotes are fast—just share bedrooms, bathrooms,
                  pets, and a preferred date.
                </p>
              </div>
            </div>

            {/* Flexible */}
            <div className="flex items-start gap-4">
              <div className="shrink-0 w-12 h-12 rounded-xl bg-amber-100 grid place-items-center border border-amber-300">
                <Sliders className="w-6 h-6 text-amber-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900">
                  Flexible
                </h3>
                <p className="text-slate-600">
                  Add Deep Clean, Move-In/Out, or extras like inside
                  oven/fridge/cabinets. We adapt to your schedule, products, and
                  budget.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========= BOOKING WIDGET – v2 ========= */}
      <section id="book" className="py-16 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-5xl mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
              House Cleaning
            </h2>
            <div className="mt-3 flex items-center justify-center gap-1 text-amber-500">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-5 h-5 fill-amber-500 text-amber-500"
                />
              ))}
              <a
                href="#reviews"
                className="ml-2 text-sm text-slate-600 hover:text-slate-800 underline"
              >
                33,713 Reviews
              </a>
            </div>
          </div>

          {/* Form — ENVIAR A EMAIL (API) */}
          <form
            noValidate
              onSubmit={async (e) => {
  e.preventDefault();
  const data = Object.fromEntries(new FormData(e.currentTarget));

  const payload = {
    zip: String(data.zip || "").trim(),
    beds: data.beds || "",
    baths: data.baths || "",
    date: data.date || "",
    time: data.time || "",
    phone: String(data.phone || "").trim(),
    email: String(data.email || "").trim(),
  };

  try {
    const res = await fetch("/api/quote", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      // lee texto primero, si no es JSON
      const raw = await res.text();
      let msg = raw;
      try { msg = JSON.parse(raw).error || raw; } catch {}
      alert("No se pudo enviar el formulario: " + (msg || res.statusText));
      return;
    }

    alert("¡Solicitud enviada! Te contactaremos pronto.");
    e.currentTarget.reset();
  } catch (err) {
    alert("Error de red al enviar el formulario.");
    console.error(err);
  }
}}
           
            className="bg-white rounded-2xl shadow-xl border border-slate-200 p-6 md:p-8"
          >
            {/* estilo base para campos */}
            <style>{`
              .nc-field {
                height: 3rem;
                border-radius: 0.75rem;
                border: 1px solid rgb(203 213 225);
                padding: 0 0.75rem;
                font-weight: 600;
                color: #0f172a;
                background: #fff;
              }
              .nc-field:focus {
                outline: none;
                border-color: #f59e0b;
                box-shadow: 0 0 0 2px rgba(245, 158, 11, .35);
              }
              .nc-placeholder::placeholder {
                color: #94a3b8;
                font-weight: 500;
              }
            `}</style>

            <div className="grid gap-4 md:grid-cols-4">
              {/* ZIP */}
              <input
                name="zip"
                type="text"
                inputMode="numeric"
                pattern="\\d{5}"
                required
                placeholder="ZIP Code"
                className="nc-field nc-placeholder md:col-span-1"
                aria-label="ZIP Code"
              />

              {/* Beds */}
              <select
                name="beds"
                className="nc-field md:col-span-1"
                aria-label="Bedrooms"
              >
                {[1, 2, 3, 4, 5].map((n) => (
                  <option key={n} value={`${n} beds`}>
                    {n} {n === 1 ? "bed" : "beds"}
                  </option>
                ))}
                <option value="6+ beds">6+ beds</option>
              </select>

              {/* Baths */}
              <select
                name="baths"
                className="nc-field md:col-span-1"
                aria-label="Bathrooms"
              >
                {[1, 2, 3, 4].map((n) => (
                  <option key={n} value={`${n} baths`}>
                    {n} {n === 1 ? "bath" : "baths"}
                  </option>
                ))}
                <option value="5+ baths">5+ baths</option>
              </select>

              {/* Date */}
              <input
                name="date"
                type="date"
                className="nc-field md:col-span-1"
                aria-label="Preferred Date"
              />

              {/* Time */}
              <input
                name="time"
                type="time"
                className="nc-field md:col-span-1"
                aria-label="Preferred Time"
              />

              {/* Phone */}
              <input
                name="phone"
                type="tel"
                placeholder="Phone Number (Optional)"
                className="nc-field nc-placeholder md:col-span-2"
                aria-label="Phone Number"
              />

              {/* Email */}
              <input
                name="email"
                type="email"
                required
                placeholder="Email"
                className="nc-field nc-placeholder md:col-span-2"
                aria-label="Email"
              />

              {/* CTA */}
              <button
                type="submit"
                className="md:col-span-2 md:col-start-3 h-12 rounded-xl bg-amber-600 text-white font-bold shadow hover:bg-amber-700 transition"
              >
                Get a Price
              </button>
            </div>

            <p className="mt-3 text-center text-sm text-slate-500">
              For your home size, we recommend{" "}
              <span className="font-semibold text-slate-700">3 hours</span>
            </p>
          </form>

          {/* Quick actions */}
          <div className="flex flex-wrap justify-center gap-3 mt-5">
            <a
              href={`tel:${PHONE}`}
              className="px-4 py-2 rounded-xl bg-amber-600 text-white font-semibold shadow hover:bg-amber-700"
            >
              Call
            </a>
            <a
              href={`mailto:${EMAIL}`}
              className="px-4 py-2 rounded-xl border font-semibold text-slate-700 hover:bg-slate-50"
            >
              Email
            </a>
            <a
              href={`https://wa.me/19122026006?text=${encodeURIComponent(
                "Hi NeatClean Pros! I'd like a cleaning quote."
              )}`}
              className="px-4 py-2 rounded-xl border font-semibold text-slate-700 hover:bg-slate-50"
              target="_blank"
              rel="noreferrer"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* ========= AREAS ========= */}
      <section className="py-12 bg-gradient-to-b from-white to-amber-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <h2 className="text-2xl sm:text-3xl font-bold flex items-center gap-2">
              <MapPin className="w-6 h-6 text-emerald-600" />
              Service Areas
            </h2>
            <p className="text-slate-600 mt-2">
              Jesup and up to 40 miles around: Waycross, Brunswick, Hinesville,
              Pooler, Richmond Hill.
            </p>
          </div>
        </div>
      </section>

      {/* ========= FAQ ========= */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <FAQ />
        </div>
      </section>

      <RecentWork />
      <Comments />

      {/* ========= FOOTER ========= */}
      <footer className="py-10 bg-slate-900 text-slate-300">
        <div className="max-w-6xl mx-auto px-4 text-sm">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <p>© {new Date().getFullYear()} NeatClean Pros LLC. All rights reserved.</p>
            <div className="flex items-center gap-4">
              <a href="#" className="hover:text-white">
                Terms
              </a>
              <a href="#" className="hover:text-white">
                Privacy
              </a>
              <a href={`mailto:${EMAIL}`} className="hover:text-white inline-flex items-center gap-1">
                <Mail className="w-4 h-4" />
                {EMAIL}
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
