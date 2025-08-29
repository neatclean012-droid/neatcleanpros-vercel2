import { Award, ShieldCheck, Clock, Sliders } from "lucide-react";
import FAQ from "./FAQ";
import React, { useEffect, useState } from "react";
import { Phone, Calendar, MessageCircle, MapPin, ShieldCheck, Sparkles, CheckCircle2, Upload } from "lucide-react";

/**
 * Galería con subida opcional vía Cloudinary Upload Widget.
 * Si configuras CLOUDINARY_CLOUD_NAME y CLOUDINARY_UPLOAD_PRESET (unsigned),
 * verás un botón "Upload work photos". Si no, solo muestra la galería local.
 */
function Gallery() {
  const [photos, setPhotos] = useState([
    // Puedes iniciar con fotos locales si quieres:
    // "/gallery/1.jpg", "/gallery/2.jpg"
  ]);
  const [widgetReady, setWidgetReady] = useState(false);

  const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || "";
  const uploadPreset = process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET || "";

  useEffect(() => {
    // Cargar script del widget si hay credenciales
    if (!cloudName || !uploadPreset) return;
    const id = "cloudinary-widget";
    if (document.getElementById(id)) { setWidgetReady(true); return; }
    const s = document.createElement("script");
    s.id = id;
    s.src = "https://widget.cloudinary.com/v2.0/global/all.js";
    s.onload = () => setWidgetReady(true);
    document.body.appendChild(s);
  }, [cloudName, uploadPreset]);

  const openWidget = () => {
    if (!window.cloudinary || !widgetReady) return;
    const widget = window.cloudinary.createUploadWidget(
      {
        cloudName,
        uploadPreset,   // Debe ser "unsigned"
        multiple: true,
        sources: ["local", "camera", "url"],
        cropping: false,
        folder: "neatcleanpros",
        maxFileSize: 5_000_000,
        styles: { palette: { window: "#0B0F19", sourceBg: "#0B0F19", windowBorder: "#C9A227", tabIcon: "#C9A227", menuIcons: "#FFFFFF", textDark: "#FFFFFF", link: "#E7C766", action: "#C9A227", inactiveTabIcon: "#C9A227", error: "#ff4d4f", inProgress: "#C9A227", complete: "#2ecc71", sourceBg: "#0B0F19" } }
      },
      (err, result) => {
        if (!err && result && result.event === "success") {
          setPhotos((p) => [result.info.secure_url, ...p]);
        }
      }
    );
    widget.open();
  };

  return (
    <section className="max-w-6xl mx-auto px-4 py-10">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold">Recent Work</h2>
        {cloudName && uploadPreset ? (
          <button onClick={openWidget} className="btn bg-brand-gold text-black hover:bg-brand-goldLight inline-flex gap-2">
            <Upload className="w-4 h-4" /> Upload work photos
          </button>
        ) : (
          <p className="text-sm text-slate-500">
            (Tip: activa subida gratis con Cloudinary. Te doy pasos abajo.)
          </p>
        )}
      </div>

      {photos.length === 0 ? (
        <p className="text-slate-600">No photos yet. Add some to showcase your quality.</p>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
          {photos.map((src, i) => (
            <div key={i} className="rounded-xl overflow-hidden border">
              <img src={src} alt={`work-${i}`} className="w-full h-40 object-cover" />
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

export default function NeatCleanProsLanding() {
  return (
    <div className="min-h-screen bg-white text-slate-800">

      {/* Topbar negro */}
      <header className="w-full bg-brand-black text-white sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src="/PROS.png" alt="NeatClean Pros" className="w-9 h-9" />
            <div className="leading-tight">
              <p className="font-semibold tracking-wide">NeatClean Pros LLC</p>
              <p className="text-xs text-white/70">Jesup, GA • Premium Cleaning</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <a href="tel:+19122026006" className="btn btn-outline"><Phone className="w-4 h-4" /> Call</a>
            <a href="https://wa.me/19122026006" className="btn btn-outline"><MessageCircle className="w-4 h-4" /> WhatsApp</a>
            <a href="#book" className="btn bg-brand-gold text-black hover:bg-brand-goldLight"><Calendar className="w-4 h-4" /> Book</a>
          </div>
        </div>
      </header>

      {/* HERO negro + dorado */}
      <section className="bg-brand-black text-white">
        <div className="max-w-6xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight">
              We Clean, <span className="text-brand-gold">You Relax</span>
            </h1>
            <p className="mt-4 text-lg text-white/80">
              Premium residential & commercial cleaning in Jesup and a 40-mile radius. Licensed & insured. Experience since 2019.
            </p>
            <div className="mt-6 flex gap-3">
              <a href="#book" className="btn btn-gold">Get a Free Quote</a>
              <a href="tel:+19122026006" className="btn btn-outline"><Phone className="w-4 h-4" /> Call</a>
            </div>
            <ul className="mt-6 grid sm:grid-cols-3 gap-3 text-sm">
              {[
                { icon: <ShieldCheck className="w-4 h-4 text-brand-gold" />, text: "Licensed & Insured" },
                { icon: <Sparkles className="w-4 h-4 text-brand-gold" />, text: "Premium products" },
                { icon: <CheckCircle2 className="w-4 h-4 text-brand-gold" />, text: "100% Satisfaction" },
              ].map((f, i) => (
                <li key={i} className="flex items-center gap-2">{f.icon}<span>{f.text}</span></li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl overflow-hidden border border-brand-gold/40 shadow-soft">
            <img src="/foto_neatclean.JPG" alt="Founders" className="w-full h-80 object-cover" />
          </div>
        </div>
      </section>

     {/* HOW IT WORKS */}
<section className="bg-gradient-to-b from-white to-slate-50 py-16">
  <div className="max-w-6xl mx-auto px-4 text-center">
    <h2 className="text-3xl font-bold text-slate-900 mb-12">How it works</h2>
    <div className="grid md:grid-cols-3 gap-8">
      
      <div className="bg-white shadow-lg rounded-2xl p-6 border-t-4 border-yellow-500 hover:shadow-xl transition">
        <Calendar className="w-10 h-10 text-yellow-500 mx-auto mb-4" />
        <h3 className="font-bold text-lg mb-2">Tell us about your home</h3>
        <p className="text-slate-600">Bedrooms, bathrooms, pets, preferred date.</p>
      </div>

      <div className="bg-white shadow-lg rounded-2xl p-6 border-t-4 border-yellow-500 hover:shadow-xl transition">
        <Sparkles className="w-10 h-10 text-yellow-500 mx-auto mb-4" />
        <h3 className="font-bold text-lg mb-2">We clean — you relax</h3>
        <p className="text-slate-600">Standard, Deep, Move in/out, Commercial.</p>
      </div>

      <div className="bg-white shadow-lg rounded-2xl p-6 border-t-4 border-yellow-500 hover:shadow-xl transition">
        <CheckCircle2 className="w-10 h-10 text-yellow-500 mx-auto mb-4" />
        <h3 className="font-bold text-lg mb-2">Enjoy a spotless place</h3>
        <p className="text-slate-600">Quality check and satisfaction guarantee.</p>
      </div>

    </div>
  </div>
</section>
 

      {/* AREAS */}
      <section className="bg-gradient-to-b from-white to-amber-50/30">
        <div className="max-w-6xl mx-auto px-4 py-10 rounded-2xl">
          <h2 className="text-2xl font-bold flex items-center gap-2"><MapPin className="w-5 h-5 text-brand-gold" /> Service Areas</h2>
          <p className="mt-2 text-slate-700">Jesup and a 40-mile radius: Waycross, Brunswick, Hinesville, Pooler, Richmond Hill.</p>
        </div>
      </section>
      {/* PREMIUM PANEL */}
<section className="py-16 bg-white">
  <div className="max-w-6xl mx-auto px-4">
    <h2 className="text-3xl font-bold text-center text-slate-900">
      Premium Cleaning Made Simple
    </h2>
    <p className="text-center text-slate-600 mt-2">
      Trusted cleaning services in Jesup and up to 40 miles: Waycross, Brunswick,
      Hinesville, Pooler, and Richmond Hill.
    </p>

    <div className="grid md:grid-cols-2 gap-10 mt-12">
      {/* Experienced */}
      <div className="flex items-start gap-4">
        <div className="shrink-0 w-12 h-12 rounded-xl bg-amber-100 grid place-items-center border border-amber-300">
          <Award className="w-6 h-6 text-amber-600" />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-slate-900">Experienced</h3>
          <p className="text-slate-600">
            Owner-operated since 2019 and established as an LLC in 2025. We’ve served
            hundreds of homes and small offices around Jesup and nearby cities using
            premium supplies and a consistent process.
          </p>
        </div>
      </div>

      {/* Reliable */}
      <div className="flex items-start gap-4">
        <div className="shrink-0 w-12 h-12 rounded-xl bg-amber-100 grid place-items-center border border-amber-300">
          <ShieldCheck className="w-6 h-6 text-amber-600" />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-slate-900">Reliable</h3>
          <p className="text-slate-600">
            Licensed & insured. We arrive on time with everything needed and finish
            with a quality check. Not 100% happy? We’ll make it right.
          </p>
        </div>
      </div>

      {/* Convenient */}
      <div className="flex items-start gap-4">
        <div className="shrink-0 w-12 h-12 rounded-xl bg-amber-100 grid place-items-center border border-amber-300">
          <Clock className="w-6 h-6 text-amber-600" />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-slate-900">Convenient</h3>
          <p className="text-slate-600">
            Book by call, email, or WhatsApp. One-time, weekly, or bi-weekly. Quotes
            are fast—just share bedrooms, bathrooms, pets, and a preferred date.
          </p>
        </div>
      </div>

      {/* Flexible */}
      <div className="flex items-start gap-4">
        <div className="shrink-0 w-12 h-12 rounded-xl bg-amber-100 grid place-items-center border border-amber-300">
          <Sliders className="w-6 h-6 text-amber-600" />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-slate-900">Flexible</h3>
          <p className="text-slate-600">
            Add Deep Clean, Move-In/Out, or extras like inside oven/fridge/cabinets.
            We adapt to your schedule, products, and budget.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

      
      {/* FAQ Section */}
<FAQ />


      {/* REVIEWS (placeholder simple) */}
      <section className="max-w-6xl mx-auto px-4 py-10">
        <h2 className="text-2xl font-bold">What clients say</h2>
        <div className="mt-4 grid md:grid-cols-3 gap-4">
          {[
            "They did a fantastic deep clean before our move! — Sarah K.",
            "On time, professional and spotless results. — Mike R.",
            "Highly recommend. Great communication and quality. — Ana P.",
          ].map((t, i) => (
            <div key={i} className="rounded-2xl border p-5">{t}</div>
          ))}
        </div>
      </section>

      {/* GALERÍA con subida */}
      <Gallery />

      {/* CTA final negro */}
      <section id="book" className="bg-brand-black text-white py-12">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold">Get your free, no-obligation quote</h2>
            <p className="mt-1 text-white/80">Tell us square footage, bathrooms, pets and preferred date.</p>
            <div className="mt-5 flex gap-3">
              <a href="tel:+19122026006" className="btn btn-gold"><Phone className="w-4 h-4" /> Call</a>
              <a href="mailto:neatclean012@gmail.com" className="btn btn-outline">Email</a>
              <a href="https://wa.me/19122026006" className="btn btn-outline"><MessageCircle className="w-4 h-4" /> WhatsApp</a>
            </div>
          </div>

          {/* Formulario dummy (visual) */}
          <form className="bg-white rounded-2xl p-6 shadow-soft grid gap-4">
            <input className="border rounded px-3 py-2" placeholder="Name" />
            <div className="grid sm:grid-cols-2 gap-4">
              <input className="border rounded px-3 py-2" placeholder="Email" />
              <input className="border rounded px-3 py-2" placeholder="Phone" />
            </div>
            <select className="border rounded px-3 py-2">
              <option>Standard Clean</option>
              <option>Deep Clean</option>
              <option>Move In/Out</option>
              <option>Commercial</option>
            </select>
            <textarea className="border rounded px-3 py-2" rows={4} placeholder="Square footage, bathrooms, pets, preferred date..." />
            <button type="button" className="btn btn-gold">Send request</button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-brand-black text-white/80 text-center">
        © {new Date().getFullYear()} NeatClean Pros LLC — Jesup, GA
      </footer>
    </div>
  );
}
