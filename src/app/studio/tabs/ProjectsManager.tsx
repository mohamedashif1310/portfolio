'use client';

import { useState } from 'react';
import { Plus, Trash2, Save, ExternalLink } from 'lucide-react';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import Badge from '@/components/ui/Badge';

interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  emoji: string;
  status: 'active' | 'completed' | 'planned';
}

const defaultProjects: Project[] = [
  { id: '1', title: 'Amazon Fire Stick 4K Testing', description: 'End-to-end testing including UI, automation, and ADB-based testing', tags: ['ADB', 'Automation', 'QA'], emoji: '🔥', status: 'completed' },
  { id: '2', title: 'RING WiFi Testing Framework', description: 'WiFi connectivity testing with data engineering pipelines', tags: ['WiFi', 'IoT', 'Python'], emoji: '📡', status: 'active' },
  { id: '3', title: 'AI/LLM Evaluation Platform', description: 'Prompt engineering and LLM evaluation system', tags: ['AI', 'LLM', 'RLHF'], emoji: '🤖', status: 'completed' },
];

const statusColors = { active: 'success', completed: 'primary', planned: 'warning' } as const;

export default function ProjectsManager() {
  const [projects, setProjects] = useState<Project[]>(defaultProjects);
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({ title: '', description: '', tags: '', emoji: '📦', status: 'planned' as const });
  const [saved, setSaved] = useState(false);

  const addProject = () => {
    if (!form.title.trim()) return;
    const tags = form.tags.split(',').map(t => t.trim()).filter(Boolean);
    setProjects([...projects, { id: Date.now().toString(), title: form.title, description: form.description, tags, emoji: form.emoji, status: form.status }]);
    setForm({ title: '', description: '', tags: '', emoji: '📦', status: 'planned' });
    setShowForm(false);
  };

  const removeProject = (id: string) => {
    if (!confirm('Remove this project?')) return;
    setProjects(projects.filter(p => p.id !== id));
  };

  const toggleStatus = (id: string) => {
    const order: Project['status'][] = ['planned', 'active', 'completed'];
    setProjects(projects.map(p => {
      if (p.id !== id) return p;
      const next = order[(order.indexOf(p.status) + 1) % order.length];
      return { ...p, status: next };
    }));
  };

  const handleSave = () => { setSaved(true); setTimeout(() => setSaved(false), 2000); };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <p className="text-text-secondary dark:text-text-dark-secondary">{projects.length} projects</p>
        <div className="flex gap-2">
          <Button onClick={() => setShowForm(!showForm)} variant="outline" size="sm" className="gap-2">
            <Plus className="w-4 h-4" /> Add Project
          </Button>
          <Button onClick={handleSave} variant="primary" size="sm" className="gap-2">
            <Save className="w-4 h-4" /> {saved ? 'Saved!' : 'Save'}
          </Button>
        </div>
      </div>

      {showForm && (
        <div className="p-6 rounded-2xl bg-white dark:bg-white/[0.02] border border-primary/20 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input label="Title" value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} placeholder="Project name" />
            <Input label="Emoji" value={form.emoji} onChange={(e) => setForm({ ...form, emoji: e.target.value })} placeholder="🔥" />
          </div>
          <Input label="Description" value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} placeholder="Brief description" />
          <Input label="Tags (comma separated)" value={form.tags} onChange={(e) => setForm({ ...form, tags: e.target.value })} placeholder="Python, Testing, IoT" />
          <div className="flex gap-3">
            <Button onClick={addProject} variant="primary" size="sm">Add Project</Button>
            <Button onClick={() => setShowForm(false)} variant="ghost" size="sm">Cancel</Button>
          </div>
        </div>
      )}

      <div className="space-y-3">
        {projects.map((project) => (
          <div key={project.id} className="flex items-center gap-4 p-5 rounded-2xl bg-white dark:bg-white/[0.02] border border-border-light dark:border-white/[0.06] hover:border-primary/20 transition-all duration-300">
            <div className="text-3xl">{project.emoji}</div>
            <div className="flex-1 min-w-0">
              <h4 className="font-semibold text-text-primary dark:text-text-dark-primary">{project.title}</h4>
              <p className="text-sm text-text-secondary dark:text-text-dark-secondary truncate">{project.description}</p>
              <div className="flex items-center gap-2 mt-2">
                <button onClick={() => toggleStatus(project.id)}>
                  <Badge variant={statusColors[project.status]}>{project.status}</Badge>
                </button>
                {project.tags.slice(0, 3).map(tag => (
                  <Badge key={tag} variant="default">{tag}</Badge>
                ))}
              </div>
            </div>
            <button onClick={() => removeProject(project.id)} className="p-2 rounded-lg hover:bg-error/10 text-text-secondary hover:text-error transition-colors" aria-label="Remove">
              <Trash2 className="w-4 h-4" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
