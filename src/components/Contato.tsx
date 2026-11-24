import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

export function Contato({ whatsappUrl }: { whatsappUrl: string }) {
  const form = useRef<HTMLFormElement>(null);
  const [isSending, setIsSending] = useState(false);
  const [sendStatus, setSendStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.current) return;
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Vamos trabalhar juntos?</h2>
          <p className="text-slate-400 text-lg">Preencha o formulário ou me chame no WhatsApp.</p>
        </div>
        <form ref={form} onSubmit={sendEmail} className="bg-slate-950 p-8 rounded-2xl border border-slate-800 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Seu Nome</label>
              <input type="text" name="from_name" required className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:border-amber-500 transition-colors" placeholder="João Silva" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Seu E-mail</label>
              <input type="email" name="from_email" required className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:border-amber-500 transition-colors" placeholder="joao@empresa.com" />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">Mensagem</label>
            <textarea name="message" required rows={4} className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:border-amber-500 transition-colors" placeholder="Olá Emerson, gostaria de um orçamento..."></textarea>
          </div>
          <button type="submit" disabled={isSending} className="w-full bg-amber-600 hover:bg-amber-500 disabled:bg-amber-800 text-white font-bold py-4 rounded-lg transition-colors">
            {isSending ? 'Enviando...' : 'Enviar Mensagem'}
          </button>
          {sendStatus === 'success' && <p className="text-green-400 text-center">Mensagem enviada com sucesso!</p>}
          {sendStatus === 'error' && <p className="text-red-400 text-center">Erro ao enviar. Tente pelo WhatsApp.</p>}
        </form>
        <div className="mt-16 text-center text-slate-600 text-sm">
          © {new Date().getFullYear()} Emerson Devel. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}