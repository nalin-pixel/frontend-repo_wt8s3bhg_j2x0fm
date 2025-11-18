import { useEffect, useRef, useState } from 'react';

const BACKEND = import.meta.env.VITE_BACKEND_URL;

export default function Chat() {
  const [session, setSession] = useState(() => localStorage.getItem('nt_session') || '');
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const scroller = useRef(null);

  useEffect(() => {
    if (session) {
      fetch(`${BACKEND}/api/messages?session_id=${session}`)
        .then((r) => r.json())
        .then((data) => setMessages(data || []))
        .catch(() => {});
    }
  }, [session]);

  useEffect(() => {
    scroller.current?.scrollTo({ top: scroller.current.scrollHeight, behavior: 'smooth' });
  }, [messages]);

  async function send() {
    if (!input.trim()) return;
    setLoading(true);
    const userMsg = { role: 'user', content: input };
    setMessages((m) => [...m, userMsg]);
    setInput('');

    try {
      const res = await fetch(`${BACKEND}/api/chat`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userMsg.content, session_id: session || null })
      });
      const data = await res.json();
      if (res.ok) {
        setSession((s) => {
          const sid = s || data.session_id;
          localStorage.setItem('nt_session', sid);
          return sid;
        });
        setMessages((m) => [...m, { role: 'assistant', content: data.reply }]);
      } else {
        setMessages((m) => [...m, { role: 'assistant', content: data.detail || 'Error' }]);
      }
    } catch (e) {
      setMessages((m) => [...m, { role: 'assistant', content: 'Network error' }]);
    } finally {
      setLoading(false);
    }
  }

  function onKey(e) {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      send();
    }
  }

  return (
    <section id="chat" className="py-20 bg-slate-950">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white text-center">Chat with your AI therapist</h2>
        <div className="mt-8 rounded-2xl glass overflow-hidden">
          <div ref={scroller} className="h-[420px] overflow-y-auto p-6 space-y-4">
            {messages.length === 0 && (
              <div className="text-slate-300">Ask me about goals, preferences, allergies, or meal ideas.</div>
            )}
            {messages.map((m, idx) => (
              <div key={idx} className={`${m.role === 'user' ? 'justify-end' : 'justify-start'} flex`}>
                <div className={`${m.role === 'user' ? 'bg-indigo-500 text-white' : 'bg-white/10 text-slate-100'} max-w-[85%] px-4 py-2 rounded-2xl whitespace-pre-wrap`}>{m.content}</div>
              </div>
            ))}
          </div>
          <div className="p-4 border-t border-white/10 bg-slate-900/40">
            <div className="flex items-end gap-3">
              <textarea value={input} onChange={(e) => setInput(e.target.value)} onKeyDown={onKey} rows={2} placeholder="Type a message..." className="flex-1 resize-none px-4 py-3 rounded-xl bg-slate-800/60 text-white placeholder-slate-400 border border-white/10 focus:outline-none" />
              <button onClick={send} disabled={loading} className="btn-primary">{loading ? 'Sending...' : 'Send'}</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
