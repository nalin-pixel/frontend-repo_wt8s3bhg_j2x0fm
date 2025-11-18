import { useEffect, useState } from 'react';

const BACKEND = import.meta.env.VITE_BACKEND_URL;

export default function Shop() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [msg, setMsg] = useState('');

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch(`${BACKEND}/api/products`);
        const data = await res.json();
        setItems(data);
      } catch (e) {
        setError('Failed to load products');
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  async function order(productId) {
    setMsg('');
    try {
      const res = await fetch(`${BACKEND}/api/order`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ product_id: productId, quantity: 1 })
      });
      const data = await res.json();
      if (res.ok) setMsg(`Order created! Total $${data.total.toFixed(2)}`);
      else setMsg(data.detail || 'Order failed');
    } catch (e) {
      setMsg('Order failed');
    }
  }

  return (
    <section id="shop" className="py-20 bg-slate-900">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-end justify-between gap-4">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">Shop curated services</h2>
          {msg && <div className="text-sm text-emerald-300">{msg}</div>}
        </div>
        {loading && <div className="mt-6 text-slate-300">Loading...</div>}
        {error && <div className="mt-6 text-red-300">{error}</div>}
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((p) => (
            <div key={p.id} className="rounded-2xl overflow-hidden glass">
              {p.image && <img src={p.image} alt={p.title} className="w-full h-40 object-cover" />}
              <div className="p-5">
                <h3 className="text-white font-semibold">{p.title}</h3>
                <p className="text-slate-300 text-sm mt-2 line-clamp-3">{p.description}</p>
                <div className="mt-4 flex items-center justify-between">
                  <div className="text-white font-extrabold">${p.price.toFixed(2)}</div>
                  <button onClick={() => order(p.id)} className="btn-primary text-sm">Add</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
