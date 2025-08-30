// components/Comments.jsx
import React, { useEffect, useState } from "react";
import { Star, Send, MessageCircle } from "lucide-react";

function StarInput({ value, onChange }) {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((i) => (
        <button
          key={i}
          type="button"
          onClick={() => onChange(i)}
          className="p-1"
          aria-label={`Rate ${i} star${i > 1 ? "s" : ""}`}
          title={`Rate ${i}`}
        >
          <Star
            className={`h-5 w-5 ${
              i <= value ? "fill-amber-400 text-amber-400" : "text-slate-300"
            }`}
          />
        </button>
      ))}
    </div>
  );
}

function StarRow({ value }) {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${
            i <= value ? "fill-amber-400 text-amber-400" : "text-slate-300"
          }`}
        />
      ))}
    </div>
  );
}

export default function Comments() {
  const [items, setItems] = useState([]);
  const [name, setName] = useState("");
  const [text, setText] = useState("");
  const [rating, setRating] = useState(5);

  // Cargar reseñas (localStorage)
  useEffect(() => {
    try {
      const saved = localStorage.getItem("nc_comments");
      if (saved) setItems(JSON.parse(saved));
      else {
        // Semillas iniciales
        setItems([
          {
            id: "c1",
            name: "Sarah K.",
            rating: 5,
            text:
              "They did a fantastic deep clean before our move! On time and very professional.",
            date: new Date().toISOString(),
          },
          {
            id: "c2",
            name: "Mike R.",
            rating: 5,
            text: "Quick quote and spotless results. Highly recommend.",
            date: new Date(Date.now() - 86400000).toISOString(),
          },
        ]);
      }
    } catch {}
  }, []);

  // Guardar reseñas (localStorage)
  useEffect(() => {
    try {
      localStorage.setItem("nc_comments", JSON.stringify(items));
    } catch {}
  }, [items]);

  const avg =
    items.length === 0
      ? 0
      : Math.round(
          (items.reduce((a, c) => a + (c.rating || 0), 0) / items.length) * 10
        ) / 10;

  function handleSubmit(e) {
    e.preventDefault();
    if (!name.trim() || !text.trim()) return;
    const newItem = {
      id: crypto.randomUUID(),
      name: name.trim(),
      text: text.trim(),
      rating,
      date: new Date().toISOString(),
    };
    setItems([newItem, ...items]);
    setName("");
    setText("");
    setRating(5);
  }

  return (
    <section id="reviews" className="py-16 bg-white">
      <div className="max-w-3xl mx-auto px-4">
        {/* Header */}
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-slate-900">
            What Our Clients Say
          </h2>
          <p className="mt-2 text-slate-600">
            Verified feedback from homes we clean around Jesup and nearby areas.
          </p>

          <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-amber-50 px-4 py-1">
            <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
            <span className="font-semibold text-slate-800">{avg || "5.0"}</span>
            <span className="text-slate-500">
              · {items.length} review{items.length !== 1 ? "s" : ""}
            </span>
          </div>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="mt-10 rounded-2xl border border-slate-200 bg-white shadow-sm"
        >
          <div className="p-5 md:p-6">
            <div className="flex items-center gap-2 text-slate-700">
              <MessageCircle className="h-5 w-5 text-amber-500" />
              <h3 className="text-lg font-semibold">Leave a review</h3>
            </div>

            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700">
                  Name
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your name"
                  className="mt-1 w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-slate-900 placeholder-slate-400 shadow-sm focus:border-amber-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700">
                  Rating
                </label>
                <div className="mt-2">
                  <StarInput value={rating} onChange={setRating} />
                </div>
              </div>
            </div>

            <div className="mt-4">
              <label className="block text-sm font-medium text-slate-700">
                Comment
              </label>
              <textarea
                rows={4}
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Tell us how it went…"
                className="mt-1 w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-slate-900 placeholder-slate-400 shadow-sm focus:border-amber-500 focus:outline-none"
              />
            </div>

            <div className="mt-5 flex justify-end">
              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-xl bg-amber-500 px-4 py-2 font-semibold text-white shadow-sm hover:bg-amber-600 active:bg-amber-700"
              >
                <Send className="h-4 w-4" />
                Post review
              </button>
            </div>
          </div>
        </form>

        {/* Listado */}
        <div className="mt-8 space-y-4">
          {items.map((c) => (
            <article
              key={c.id}
              className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
            >
              <div className="flex items-start gap-4">
                {/* Avatar inicial */}
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-100 text-amber-700 font-bold">
                  {c.name?.[0]?.toUpperCase() || "N"}
                </div>

                <div className="flex-1">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div>
                      <h4 className="font-semibold text-slate-900">{c.name}</h4>
                      <p className="text-xs text-slate-500">
                        {new Date(c.date).toLocaleDateString()}
                      </p>
                    </div>
                    <StarRow value={c.rating || 5} />
                  </div>

                  <p className="mt-2 text-slate-700 leading-relaxed">{c.text}</p>
                </div>
              </div>
            </article>
          ))}

          {items.length === 0 && (
            <p className="text-center text-slate-500">No reviews yet.</p>
          )}
        </div>
      </div>
    </section>
  );
}

