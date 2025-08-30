// components/Comments.jsx
import React, { useEffect, useState } from "react";
import { Star } from "lucide-react";

function Stars({ value, onChange }) {
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((n) => (
        <button
          key={n}
          type="button"
          onClick={() => onChange(n)}
          aria-label={`${n} star${n > 1 ? "s" : ""}`}
          className="p-1"
        >
          <Star
            className={`w-5 h-5 ${
              n <= value ? "fill-yellow-400 text-yellow-400" : "text-slate-400"
            }`}
          />
        </button>
      ))}
    </div>
  );
}

export default function Comments() {
  const STORAGE_KEY = "neatcleanpros_comments_v1";
  const [items, setItems] = useState([]);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [rating, setRating] = useState(5);

  // cargar desde localStorage
  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setItems(JSON.parse(raw));
    } catch {}
  }, []);

  // guardar al cambiar
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch {}
  }, [items]);

  function addComment(e) {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;

    const newItem = {
      id: crypto.randomUUID(),
      name: name.trim(),
      message: message.trim(),
      rating,
      date: new Date().toISOString(),
    };
    setItems([newItem, ...items]);
    setName("");
    setMessage("");
    setRating(5);
  }

  return (
    <section className="max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-2xl font-bold text-slate-100">
        Comments
      </h2>
      <p className="text-slate-400 mt-1">
        Tell us how we did — we love feedback!
      </p>

      {/* Form */}
      <form
        onSubmit={addComment}
        className="mt-6 bg-slate-900/60 border border-slate-800 rounded-xl p-5"
      >
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-semibold text-slate-200 mb-1">
              Name
            </label>
            <input
              className="w-full rounded-lg bg-slate-800 border border-slate-700 px-3 py-2 text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-500/60"
              placeholder="John Doe"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-200 mb-1">
              Rating
            </label>
            <Stars value={rating} onChange={setRating} />
          </div>
        </div>

        <div className="mt-4">
          <label className="block text-sm font-semibold text-slate-200 mb-1">
            Comment
          </label>
          <textarea
            rows={4}
            className="w-full rounded-lg bg-slate-800 border border-slate-700 px-3 py-2 text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-500/60"
            placeholder="They did a fantastic deep clean before our move!"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>

        <div className="mt-4">
          <button
            type="submit"
            className="inline-flex items-center px-5 py-2 rounded-lg bg-amber-500 text-slate-900 font-semibold hover:bg-amber-400 transition"
          >
            Post comment
          </button>
        </div>
      </form>

      {/* Listado */}
      <div className="mt-8 grid md:grid-cols-2 gap-4">
        {items.length === 0 ? (
          <div className="text-slate-400">
            No comments yet. Be the first!
          </div>
        ) : (
          items.map((c) => (
            <article
              key={c.id}
              className="rounded-xl border border-slate-800 bg-slate-900/50 p-4"
            >
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-slate-100">{c.name}</h3>
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((n) => (
                    <Star
                      key={n}
                      className={`w-4 h-4 ${
                        n <= c.rating
                          ? "fill-yellow-400 text-yellow-400"
                          : "text-slate-500"
                      }`}
                    />
                  ))}
                </div>
              </div>
              <p className="text-slate-300 mt-2 whitespace-pre-wrap">
                {c.message}
              </p>
              <p className="text-xs text-slate-500 mt-3">
                {new Date(c.date).toLocaleString()}
              </p>
            </article>
          ))
        )}
      </div>
    </section>
  );
}
