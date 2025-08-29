import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "What's included in a cleaning?",
    a: "Standard includes dusting, vacuuming, mopping, wiping surfaces, kitchen (outside appliances), and bathrooms. Deep cleaning adds baseboards, vents, inside window sills, detail in kitchen/bath, and build-up removal.",
  },
  {
    q: "Which professional will come to my place?",
    a: "We're owner-operated. You’ll get one or both owners. We’re licensed, insured, and we bring professional supplies.",
  },
  {
    q: "Can I skip or reschedule bookings?",
    a: "Yes. Please let us know at least 24–48 hours in advance to avoid a late-cancellation fee.",
  },
  {
    q: "How much are house cleaning services?",
    a: "Pricing depends on bedrooms, bathrooms, square footage, and condition. We’ll give you a free, no-obligation quote up front.",
  },
  {
    q: "Are house cleaning services worth it?",
    a: "Absolutely. You save time, get consistent results, and protect your home with insured, professional service and premium products.",
  },
  {
    q: "How much do you tip a house cleaning service?",
    a: "Tipping is appreciated but not required. Many clients tip 10–20% depending on the job.",
  },
  {
    q: "Does house cleaning include laundry?",
    a: "Laundry of personal clothing is not included by default. We can add bed linens & towels for deep cleans, or do personal laundry on request for an extra fee.",
  },
  {
    q: "How long should a house cleaning take?",
    a: "A standard 2–3 bedroom home usually takes 2–4 hours depending on condition and selected add-ons.",
  },
  {
    q: "What is your cancellation policy?",
    a: "Cancellations within 24 hours may incur a fee. We’re flexible—just message us as early as possible.",
  },
  {
    q: "What happens when a minimum term ends?",
    a: "If you’re on a recurring plan with a minimum term, you can continue, pause, or cancel anytime after the term ends—no pressure.",
  },
];

function Item({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-white/10">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 py-4 text-left"
        aria-expanded={open}
      >
        <span className="text-base sm:text-lg">{q}</span>
        <span className="shrink-0 rounded-full border border-white/20 p-1 text-white/80">
          {open ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
        </span>
      </button>
      <div
        className={`overflow-hidden transition-[max-height,opacity] duration-300 ${
          open ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <p className="pb-4 text-white/80">{a}</p>
      </div>
    </div>
  );
}

export default function FAQ() {
  return (
    <section className="py-14" aria-labelledby="faq-heading">
      <div className="max-w-5xl mx-auto px-4">
        <h2
          id="faq-heading"
          className="text-3xl font-bold text-brand-gold mb-2"
        >
          Frequently Asked Questions
        </h2>
        <p className="text-white/70 mb-6">
          Quick answers about our services, pricing, and scheduling.
        </p>
        <div className="rounded-2xl bg-brand-black/90 text-white border border-brand-gold/30 shadow-soft p-4 sm:p-6">
          {faqs.map((f, i) => (
            <Item key={i} q={f.q} a={f.a} />
          ))}
        </div>
      </div>
    </section>
  );
}
