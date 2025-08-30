import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function RecentWork() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState(null);

  const load = async () => {
    try {
      setLoading(true);
      setErr(null);
      const res = await fetch('/api/photos', { cache: 'no-store' });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data = await res.json();
      setImages(data.images || []);
    } catch (e) {
      setErr('No pudimos cargar las fotos.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { load(); }, []);

  return (
    <section id="recent-work" className="max-w-6xl mx-auto px-4 py-10">
      <h2 className="text-2xl font-semibold mb-4">Recent Work</h2>

      {loading && <p className="text-gray-500">Loading photos…</p>}
      {err && <p className="text-red-600">{err}</p>}
      {!loading && !err && images.length === 0 && (
        <p className="text-gray-500">No photos yet.</p>
      )}

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
        {images.map((src, i) => (
          <div key={i} className="relative w-full aspect-[4/3] overflow-hidden rounded-xl shadow">
            <Image src={src} alt={`work-${i}`} fill className="object-cover" unoptimized />
          </div>
        ))}
      </div>
    </section>
  );
}
