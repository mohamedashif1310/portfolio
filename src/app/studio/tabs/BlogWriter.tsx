'use client';

import { useState, useEffect } from 'react';
import { Plus, Trash2, Eye, Save, ArrowLeft, PenLine } from 'lucide-react';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import Badge from '@/components/ui/Badge';

interface BlogPost {
  slug: string;
  title: string;
  date: string;
  category: string;
  excerpt: string;
}

export default function BlogWriter() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [mode, setMode] = useState<'list' | 'write'>('list');
  const [saving, setSaving] = useState(false);
  const [form, setForm] = useState({ title: '', excerpt: '', category: 'Tutorial', tags: '', content: '' });
  const [message, setMessage] = useState({ text: '', type: '' });

  const fetchPosts = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/studio/blog');
      const data = await res.json();
      setPosts(data.posts || []);
    } catch { setPosts([]); }
    setLoading(false);
  };

  useEffect(() => { fetchPosts(); }, []);

  const handleSave = async () => {
    if (!form.title.trim() || !form.content.trim()) {
      setMessage({ text: 'Title and content are required', type: 'error' });
      return;
    }
    setSaving(true);
    try {
      const res = await fetch('/api/studio/blog', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error();
      setMessage({ text: 'Post published!', type: 'success' });
      setForm({ title: '', excerpt: '', category: 'Tutorial', tags: '', content: '' });
      setMode('list');
      fetchPosts();
    } catch {
      setMessage({ text: 'Failed to save', type: 'error' });
    }
    setSaving(false);
    setTimeout(() => setMessage({ text: '', type: '' }), 3000);
  };

  const handleDelete = async (slug: string) => {
    if (!confirm('Delete this post?')) return;
    try {
      await fetch(`/api/studio/blog/${slug}`, { method: 'DELETE' });
      fetchPosts();
    } catch { /* ignore */ }
  };

  if (mode === 'write') {
    return (
      <div className="space-y-6">
        <button onClick={() => setMode('list')} className="flex items-center gap-2 text-text-secondary hover:text-primary transition-colors text-sm font-medium">
          <ArrowLeft className="w-4 h-4" /> Back to posts
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Input label="Title" required value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} placeholder="My awesome blog post" />
          <Input label="Category" value={form.category} onChange={(e) => setForm({ ...form, category: e.target.value })} placeholder="Tutorial, Career, Tech..." />
        </div>
        <Input label="Excerpt" value={form.excerpt} onChange={(e) => setForm({ ...form, excerpt: e.target.value })} placeholder="A brief summary of your post" />
        <Input label="Tags (comma separated)" value={form.tags} onChange={(e) => setForm({ ...form, tags: e.target.value })} placeholder="Next.js, TypeScript, Testing" />

        <div>
          <label className="mb-2 block text-sm font-medium text-text-primary dark:text-text-dark-primary">Content (Markdown)</label>
          <textarea
            value={form.content}
            onChange={(e) => setForm({ ...form, content: e.target.value })}
            rows={20}
            placeholder="# Your blog post content here...&#10;&#10;Write in Markdown format. Use ## for headings, **bold**, *italic*, ```code blocks```, etc."
            className="w-full rounded-xl border border-border-light dark:border-white/[0.08] bg-white dark:bg-white/[0.03] px-4 py-3 font-mono text-sm focus:border-primary focus:outline-none focus:ring-4 focus:ring-primary/10 transition-all duration-200 resize-y min-h-[300px]"
          />
        </div>

        {message.text && (
          <p className={`text-sm ${message.type === 'error' ? 'text-error' : 'text-success'}`} role="status">{message.text}</p>
        )}

        <div className="flex gap-3">
          <Button onClick={handleSave} disabled={saving} variant="primary" className="gap-2">
            <Save className="w-4 h-4" /> {saving ? 'Publishing...' : 'Publish Post'}
          </Button>
          <Button onClick={() => setMode('list')} variant="ghost">Cancel</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <p className="text-text-secondary dark:text-text-dark-secondary">
          {posts.length} post{posts.length !== 1 ? 's' : ''} published
        </p>
        <Button onClick={() => setMode('write')} variant="primary" size="sm" className="gap-2">
          <Plus className="w-4 h-4" /> New Post
        </Button>
      </div>

      {loading ? (
        <div className="text-center py-12 text-text-secondary">Loading posts...</div>
      ) : posts.length === 0 ? (
        <div className="text-center py-16 rounded-2xl border-2 border-dashed border-border-light dark:border-white/[0.08]">
          <PenLine className="w-12 h-12 mx-auto text-text-secondary/30 mb-4" />
          <p className="text-text-secondary dark:text-text-dark-secondary mb-4">No blog posts yet</p>
          <Button onClick={() => setMode('write')} variant="primary" size="sm" className="gap-2">
            <Plus className="w-4 h-4" /> Write your first post
          </Button>
        </div>
      ) : (
        <div className="space-y-3">
          {posts.map((post) => (
            <div key={post.slug} className="flex items-center justify-between p-5 rounded-2xl bg-white dark:bg-white/[0.02] border border-border-light dark:border-white/[0.06] hover:border-primary/20 transition-all duration-300">
              <div className="flex-1 min-w-0">
                <h4 className="font-semibold text-text-primary dark:text-text-dark-primary truncate">{post.title}</h4>
                <div className="flex items-center gap-3 mt-1">
                  {post.category && <Badge variant="primary">{post.category}</Badge>}
                  <span className="text-xs text-text-secondary dark:text-text-dark-secondary">{post.date}</span>
                </div>
              </div>
              <div className="flex items-center gap-2 ml-4">
                <a href={`/blog/${post.slug}`} target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg hover:bg-surface-light dark:hover:bg-white/[0.04] text-text-secondary hover:text-primary transition-colors" aria-label="Preview">
                  <Eye className="w-4 h-4" />
                </a>
                <button onClick={() => handleDelete(post.slug)} className="p-2 rounded-lg hover:bg-error/10 text-text-secondary hover:text-error transition-colors" aria-label="Delete">
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
