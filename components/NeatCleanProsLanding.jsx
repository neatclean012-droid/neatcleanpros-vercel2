import React from "react";
import { Phone, Calendar, MessageCircle } from "lucide-react";

export default function NeatCleanProsLanding() {
  return (
    <div className="min-h-screen bg-white text-slate-800">
      <header className="p-4 shadow flex justify-between items-center">
        <h1 className="font-bold text-xl">NeatClean Pros LLC</h1>
        <div className="flex gap-2">
          <a href="tel:+19122026006" className="bg-emerald-600 text-white px-3 py-2 rounded">Call</a>
          <a href="https://wa.me/19122026006" className="bg-green-600 text-white px-3 py-2 rounded">WhatsApp</a>
          <a href="mailto:neatclean012@gmail.com" className="bg-black text-white px-3 py-2 rounded">Email</a>
        </div>
      </header>

      <main className="p-10 text-center">
        <h2 className="text-4xl font-bold mb-4">We Clean, You Relax</h2>
        <p className="text-lg mb-6">Premium cleaning services in Jesup and up to 40 miles around. Licensed & Insured. Experience since 2019.</p>
        <a href="https://wa.me/19122026006" className="inline-block bg-emerald-600 text-white px-5 py-3 rounded">Book Now</a>
      </main>

      <footer className="p-4 bg-slate-900 text-slate-300 text-center">
        © {new Date().getFullYear()} NeatClean Pros LLC — Jesup, GA
      </footer>
    </div>
  );
}
