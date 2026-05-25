'use client';

import { useState } from 'react';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import Textarea from '@/components/ui/Textarea';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'General Inquiry',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || 'Failed to send message');
      }

      setStatus('success');
      setFormData({ name: '', email: '', subject: 'General Inquiry', message: '' });
      setTimeout(() => setStatus('idle'), 4000);
    } catch (err) {
      setStatus('error');
      setErrorMessage(err instanceof Error ? err.message : 'Something went wrong');
      setTimeout(() => setStatus('idle'), 4000);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
      <Input
        label="Name"
        type="text"
        required
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        placeholder="Your name"
      />

      <Input
        label="Email"
        type="email"
        required
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        placeholder="your.email@example.com"
      />

      <div>
        <label htmlFor="contact-subject" className="mb-2 block text-sm font-medium">Subject</label>
        <select
          id="contact-subject"
          value={formData.subject}
          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
          className="w-full rounded-lg border border-border-light dark:border-border-dark bg-background-light dark:bg-surface-dark px-4 py-2.5 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
        >
          <option>General Inquiry</option>
          <option>Freelance Project</option>
          <option>Job Opportunity</option>
          <option>Collaboration</option>
          <option>Just Saying Hi</option>
          <option>Other</option>
        </select>
      </div>

      <Textarea
        label="Message"
        required
        rows={6}
        value={formData.message}
        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
        placeholder="Your message..."
      />

      <Button type="submit" variant="primary" size="lg" className="w-full" disabled={status === 'loading'}>
        {status === 'loading' ? 'Sending...' : status === 'success' ? 'Sent!' : 'Send Message'}
      </Button>

      {status === 'success' && (
        <p className="text-success text-center" role="status">Message sent successfully!</p>
      )}
      {status === 'error' && (
        <p className="text-error text-center" role="alert">{errorMessage}</p>
      )}
    </form>
  );
}
