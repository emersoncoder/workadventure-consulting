import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useLanguage } from '../i18n/useLanguage';

export function Contato() {
  const { dictionary } = useLanguage();
  const form = useRef<HTMLFormElement>(null);
  const [isSending, setIsSending] = useState(false);
  const [sendStatus, setSendStatus] = useState<'idle' | 'success' | 'error'>('idle');

  // Usando as variáveis de ambiente configuradas na Cloudflare
  const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
  const isEmailConfigured = Boolean(EMAILJS_SERVICE_ID && EMAILJS_TEMPLATE_ID && EMAILJS_PUBLIC_KEY);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.current) return;
    if (!isEmailConfigured) {
      setSendStatus('error');
      return;
    }
    setIsSending(true);
    setSendStatus('idle');

    emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, form.current, EMAILJS_PUBLIC_KEY)
      .then(() => { setIsSending(false); setSendStatus('success'); form.current?.reset(); })
      .catch((error) => { console.error(error.text); setIsSending(false); setSendStatus('error'); });
  };

  return (
    <footer id="contato" className="py-24 bg-slate-900">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{dictionary.contact.title}</h2>
          <p className="text-slate-400 text-lg">{dictionary.contact.subtitle}</p>
        </div>
        <form ref={form} onSubmit={sendEmail} className="bg-slate-950 p-8 rounded-2xl border border-slate-800 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="from_name" className="block text-sm font-medium text-slate-300 mb-2">{dictionary.contact.name}</label>
              <input id="from_name" type="text" name="from_name" required autoComplete="name" className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:border-amber-500 transition-colors" placeholder={dictionary.contact.namePlaceholder} />
            </div>
            <div>
              <label htmlFor="from_email" className="block text-sm font-medium text-slate-300 mb-2">{dictionary.contact.email}</label>
              <input id="from_email" type="email" name="from_email" required autoComplete="email" className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:border-amber-500 transition-colors" placeholder={dictionary.contact.emailPlaceholder} />
            </div>
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">{dictionary.contact.message}</label>
            <textarea id="message" name="message" required rows={4} className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:border-amber-500 transition-colors" placeholder={dictionary.contact.messagePlaceholder}></textarea>
          </div>
          <button type="submit" disabled={isSending || !isEmailConfigured} className="w-full bg-amber-600 hover:bg-amber-500 disabled:bg-amber-800 disabled:cursor-not-allowed text-white font-bold py-4 rounded-lg transition-colors">
            {isSending ? dictionary.contact.sending : dictionary.contact.send}
          </button>
          {sendStatus === 'success' && <p role="status" className="text-green-400 text-center">{dictionary.contact.success}</p>}
          {sendStatus === 'error' && <p role="alert" className="text-red-400 text-center">{dictionary.contact.error}</p>}
        </form>
        <div className="mt-16 text-center text-slate-600 text-sm">
          © {new Date().getFullYear()} Emerson Devel. {dictionary.contact.copyright}
          <p className="mt-2">
            {dictionary.contact.privacy}
            <a href="mailto:emerson@emersondevel.com" className="ml-1 underline underline-offset-4 hover:text-slate-300">
              {dictionary.contact.removal}
            </a>.
          </p>
        </div>
      </div>
    </footer>
  );
}