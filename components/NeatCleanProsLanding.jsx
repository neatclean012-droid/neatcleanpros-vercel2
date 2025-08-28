import React from "react";
import { Phone, Calendar, MessageCircle, MapPin } from "lucide-react";

export default function NeatCleanProsLanding() {
  const faqs = [
    { q: "Do you include laundry?", a: "Bed linens & towels with deep cleans. Personal laundry on request (extra fee)." },
    { q: "What areas do you cover?", a: "Jesup + 40 miles: Waycross, Brunswick, Hinesville, Pooler, Richmond Hill." },
    { q: "Do you bring supplies?", a: "Yes. Professional equipment and premium products. We can use yours if preferred." },
    { q: "How do I book?", a: "Click Book Now, send WhatsApp, or call the number in the header." },
  ];

  return (
    <div className="min-h-screen bg-white text-slate-800">
      {/* Top bar */}
      <header className="w-full border-b bg-white sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src="/PROS.png" alt="NeatClean Pros" className="w-9 h-9" />
            <span className="font-semibold">NeatClean Pros LLC</span>
          </div>
          <div className="flex items-center gap-2">
            <a href="tel:+19122026006" className="bg-emerald-600 text-white px-3 py-2 rounded">Call</a>
            <a href="https://wa.me/19122026006" className="bg-green-600 text-white px-3 py-2 rounded">WhatsApp</a>
            <a href="mailto:neatclean012@gmail.com" className="bg-black text-white px-3 py-2 rounded">Email</a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-4 py-12 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold">We Clean, You Relax</h1>
        <p className="mt-3 text-lg text-slate-600">
          Premium cleaning services in Jesup and up to 40 miles around. Licensed & Insured. Experience since 2019.
        </p>
        <div className="mt-6 flex justify-center gap-3">
          <a href="https://wa.me/19122026006" className="bg-emerald-600 text-white px-5 py-3 rounded inline-flex items-center gap-2">
            <Calendar className="w-4 h-4" /> Book Now
          </a>
          <a href="tel:+19122026006" className="border px-5 py-3 rounded inline-flex items-center gap-2">
            <Phone className="w-4 h-4" /> Call
          </a>
        </div>
        <div className="mt-8 mx-auto max-w-2xl rounded-2xl overflow-hidden border">
          <img src="/foto_neatclean.JPG" alt="Founders" className="w-full h-72 object-cover" />
        </div>
      </section>

      {/* Mission & Areas */}
      <section className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-6">
        <div className="rounded-2xl border p-6">
          <h2 className="text-2xl font-bold">Our Mission</h2>
          <p className="mt-2 text-slate-600">
            Deliver premium cleaning that builds trust, comfort, and peace of mind for every home and business.
          </p>
        </div>
        <div className="rounded-2xl border p-6">
          <h2 className="text-2xl font-bold flex items-center gap-2"><MapPin className="w-5 h-5 text-emerald-600" />Service Areas</h2>
          <p className="mt-2 text-slate-600">Jesup + 40 miles: Waycross, Brunswick, Hinesville, Pooler, Richmond Hill.</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-6xl mx-auto px-4 py-10">
        <h2 className="text-2xl font-bold">FAQ</h2>
        <div className="mt-4 space-y-3">
          {faqs.map((f, i) => (
            <details key={i} className="rounded-xl border p-4">
              <summary className="cursor-pointer font-medium">{f.q}</summary>
              <p className="mt-2 text-slate-700">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="book" className="bg-emerald-600 py-12">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
          <div className="text-white">
            <h2 className="text-3xl font-bold">Schedule your cleaning</h2>
            <p className="mt-1 text-emerald-50">Tell us square footage, bathrooms, pets and preferred date.</p>
            <div className="mt-5 flex flex-wrap gap-3">
              <a href="tel:+19122026006" className="bg-white text-emerald-700 px-4 py-2 rounded inline-flex items-center gap-2">
                <Phone className="w-4 h-4" /> Call
              </a>
              <a href="mailto:neatclean012@gmail.com" className="border border-white/40 px-4 py-2 rounded text-white">Email us</a>
              <a href="https://wa.me/19122026006" className="border border-white/40 px-4 py-2 rounded text-white inline-flex items-center gap-2">
                <MessageCircle className="w-4 h-4" /> WhatsApp
              </a>
            </div>
          </div>
          <form className="bg-white rounded-2xl p-6 shadow grid gap-4">
            <input className="border rounded px-3 py-2" placeholder="Name" />
            <div className="grid sm:grid-cols-2 gap-4">
              <input className="border rounded px-3 py-2" placeholder="Email" />
              <input className="border rounded px-3 py-2" placeholder="Phone" />
            </div>
            <select className="border rounded px-3 py-2">
              <option>Standard Clean</option><option>Deep Clean</option><option>Move In/Out</option><option>Commercial</option>
            </select>
            <textarea className="border rounded px-3 py-2" rows={4} placeholder="Square footage, bathrooms, pets, preferred date..." />
            <button type="button" className="bg-emerald-600 text-white px-4 py-2 rounded">Send request</button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-slate-900 text-slate-300">
        <div className="max-w-6xl mx-auto px-4 text-center sm:text-left">
          © {new Date().getFullYear()} NeatClean Pros LLC — Jesup, GA
        </div>
      </footer>
    </div>
  );
}
