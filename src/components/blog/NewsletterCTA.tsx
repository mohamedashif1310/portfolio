'use client';

import { useState } from 'react';
import { Mail } from 'lucide-react';
import Button from '@/components/ui/Button';

export default function NewsletterCTA() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setEmail('');
      setTimeout(() => setStatus('idle'), 3000);
    }, 1000);
  };

  return (
    <div className="p-8 rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 border border-border-light dark:border-border-dark">
      <div className="flex items-start gap-4">
        <div className="p-3 rounded-lg bg-primary/10 text-primary">
          <Mail className="w-6 h-6" />
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-text-primary dark:text-text-dark-primary mb-2">
            Enjoyed this post? Subscribe for more
          </h3>
          <p className="text-text-secondary dark:text-text-dark-secondary mb-4">
            Get the latest posts delivered right to your inbox. No spam, unsubscribe anytime.
          </p>
          
          <form onSubmit={handleSubmit} className="flex gap-2">
            <input
              type="email"
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 px-4 py-2 rounded-lg border border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark focus:outline-none focus:ring-2 focus:ring-primary/20"
            />
            <Button type="submit" disabled={status === 'loading'}>
              {status === 'loading' ? 'Subscribing...' : status === 'success' ? 'Subscribed!' : 'Subscribe'}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
