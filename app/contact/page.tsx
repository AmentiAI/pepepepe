'use client';

import { useState } from 'react';
import { Send, CheckCircle2, Brain, MessageSquare, HelpCircle, AlertCircle } from 'lucide-react';
import { AnimateIn } from '@/components/AnimateIn';

const inquiryTypes = [
  { id: 'protocol', label: 'Protocol advice', icon: <Brain className="w-4 h-4" /> },
  { id: 'question', label: 'General question', icon: <HelpCircle className="w-4 h-4" /> },
  { id: 'feedback', label: 'Site feedback', icon: <MessageSquare className="w-4 h-4" /> },
  { id: 'issue', label: 'Report an issue', icon: <AlertCircle className="w-4 h-4" /> },
];

export default function ContactPage() {
  const [type, setType] = useState('protocol');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    // Simulate form submission — replace with actual endpoint
    await new Promise(r => setTimeout(r, 1000));
    setSubmitted(true);
    setLoading(false);
  }

  if (submitted) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-32 text-center">
        <div className="w-16 h-16 bg-brand-500/20 border border-brand-500/30 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 className="w-8 h-8 text-brand-400" />
        </div>
        <h2 className="text-2xl font-black text-white mb-3">Message sent!</h2>
        <p className="text-gray-400">We typically respond within 24-48 hours.</p>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 py-16">
      <AnimateIn>
        <div className="mb-10">
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-4">
            Get in <span className="gradient-text">Touch</span>
          </h1>
          <p className="text-gray-400 text-xl">
            Questions about protocols, stack advice, or anything else — we read every message.
          </p>
        </div>
      </AnimateIn>

      <AnimateIn delay={0.1}>
        <div className="bg-[#111] border border-white/5 rounded-2xl p-6 sm:p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Inquiry type */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-3">
                What&apos;s your inquiry about?
              </label>
              <div className="grid grid-cols-2 gap-2">
                {inquiryTypes.map(t => (
                  <button
                    key={t.id}
                    type="button"
                    onClick={() => setType(t.id)}
                    className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-colors text-left ${
                      type === t.id
                        ? 'bg-brand-500/20 border border-brand-500/30 text-brand-300'
                        : 'bg-white/5 border border-white/5 text-gray-500 hover:text-white'
                    }`}
                  >
                    {t.icon}
                    {t.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Name */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2" htmlFor="name">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                placeholder="Your name"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 text-sm focus:outline-none focus:border-brand-500/40 transition-colors"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="you@example.com"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 text-sm focus:outline-none focus:border-brand-500/40 transition-colors"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                placeholder={
                  type === 'protocol'
                    ? 'Describe your cognitive goals, current supplements, and any specific challenges...'
                    : 'What would you like to say?'
                }
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 text-sm focus:outline-none focus:border-brand-500/40 transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full flex items-center justify-center gap-2 py-3.5 bg-brand-500 hover:bg-brand-400 disabled:opacity-50 text-black font-bold rounded-xl text-sm transition-colors"
            >
              {loading ? (
                <>Sending...</>
              ) : (
                <>
                  Send Message <Send className="w-4 h-4" />
                </>
              )}
            </button>
          </form>
        </div>
      </AnimateIn>

      <AnimateIn delay={0.2}>
        <div className="mt-8 bg-[#111] border border-white/5 rounded-2xl p-6">
          <h3 className="font-bold text-white mb-3">Before contacting us</h3>
          <p className="text-base text-gray-400 leading-relaxed">
            Our AI Protocol Advisor (bottom right) can answer most protocol questions instantly. Our{' '}
            <a href="/faq" className="text-brand-400 hover:underline">FAQ page</a> covers the 15 most common questions. Our{' '}
            <a href="/guide" className="text-brand-400 hover:underline">Beginner Guide</a> is the starting point for most questions about stacking and protocols.
          </p>
        </div>
      </AnimateIn>
    </div>
  );
}
