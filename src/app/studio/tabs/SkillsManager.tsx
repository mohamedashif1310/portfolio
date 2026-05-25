'use client';

import { useState } from 'react';
import { Plus, X, Save, Palette } from 'lucide-react';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import Badge from '@/components/ui/Badge';

interface SkillCategory {
  id: string;
  title: string;
  color: string;
  skills: string[];
}

const COLORS = [
  'from-blue-500 to-cyan-500',
  'from-primary to-purple-600',
  'from-amber-500 to-orange-500',
  'from-emerald-500 to-teal-500',
  'from-rose-500 to-pink-500',
  'from-violet-500 to-purple-500',
  'from-red-500 to-orange-500',
  'from-sky-500 to-indigo-500',
];

const defaultCategories: SkillCategory[] = [
  { id: '1', title: 'Testing & QA', color: COLORS[0], skills: ['UI Testing', 'Automation Testing', 'Manual Testing', 'ADB Testing', 'WiFi Testing'] },
  { id: '2', title: 'Development', color: COLORS[1], skills: ['Python', 'JavaScript', 'TypeScript', 'Shell Scripting'] },
  { id: '3', title: 'Tools & Platforms', color: COLORS[2], skills: ['ADB', 'JIRA', 'Git', 'Jenkins', 'Selenium'] },
  { id: '4', title: 'AI & ML', color: COLORS[5], skills: ['Prompt Engineering', 'LLM Evaluation', 'RLHF'] },
];

export default function SkillsManager() {
  const [categories, setCategories] = useState<SkillCategory[]>(defaultCategories);
  const [newSkill, setNewSkill] = useState<Record<string, string>>({});
  const [newCategoryTitle, setNewCategoryTitle] = useState('');
  const [saved, setSaved] = useState(false);

  const addSkill = (catId: string) => {
    const skill = newSkill[catId]?.trim();
    if (!skill) return;
    setCategories(cats => cats.map(c =>
      c.id === catId && !c.skills.includes(skill) ? { ...c, skills: [...c.skills, skill] } : c
    ));
    setNewSkill(prev => ({ ...prev, [catId]: '' }));
  };

  const removeSkill = (catId: string, skill: string) => {
    setCategories(cats => cats.map(c =>
      c.id === catId ? { ...c, skills: c.skills.filter(s => s !== skill) } : c
    ));
  };

  const addCategory = () => {
    if (!newCategoryTitle.trim()) return;
    const id = Date.now().toString();
    const color = COLORS[categories.length % COLORS.length];
    setCategories([...categories, { id, title: newCategoryTitle.trim(), color, skills: [] }]);
    setNewCategoryTitle('');
  };

  const removeCategory = (catId: string) => {
    if (!confirm('Remove this category?')) return;
    setCategories(cats => cats.filter(c => c.id !== catId));
  };

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
    // In production, this would save to a file or database
  };

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <p className="text-text-secondary dark:text-text-dark-secondary">{categories.length} skill categories</p>
        <Button onClick={handleSave} variant="primary" size="sm" className="gap-2">
          <Save className="w-4 h-4" /> {saved ? 'Saved!' : 'Save Changes'}
        </Button>
      </div>

      <div className="space-y-6">
        {categories.map((cat) => (
          <div key={cat.id} className="p-6 rounded-2xl bg-white dark:bg-white/[0.02] border border-border-light dark:border-white/[0.06]">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${cat.color}`} />
                <h4 className="font-bold text-text-primary dark:text-text-dark-primary">{cat.title}</h4>
                <span className="text-xs text-text-secondary">{cat.skills.length} skills</span>
              </div>
              <button onClick={() => removeCategory(cat.id)} className="p-1.5 rounded-lg hover:bg-error/10 text-text-secondary hover:text-error transition-colors" aria-label="Remove category">
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
              {cat.skills.map((skill) => (
                <span key={skill} className="group inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg bg-surface-light dark:bg-white/[0.04] border border-border-light dark:border-white/[0.06] text-text-secondary dark:text-text-dark-secondary">
                  {skill}
                  <button onClick={() => removeSkill(cat.id, skill)} className="opacity-0 group-hover:opacity-100 hover:text-error transition-all" aria-label={`Remove ${skill}`}>
                    <X className="w-3 h-3" />
                  </button>
                </span>
              ))}
            </div>

            <div className="flex gap-2">
              <input
                value={newSkill[cat.id] || ''}
                onChange={(e) => setNewSkill(prev => ({ ...prev, [cat.id]: e.target.value }))}
                onKeyDown={(e) => e.key === 'Enter' && addSkill(cat.id)}
                placeholder="Add a skill..."
                className="flex-1 px-3 py-2 text-sm rounded-lg border border-border-light dark:border-white/[0.08] bg-transparent focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
              />
              <Button onClick={() => addSkill(cat.id)} variant="ghost" size="sm"><Plus className="w-4 h-4" /></Button>
            </div>
          </div>
        ))}
      </div>

      {/* Add new category */}
      <div className="flex gap-3 p-5 rounded-2xl border-2 border-dashed border-border-light dark:border-white/[0.08]">
        <Input value={newCategoryTitle} onChange={(e) => setNewCategoryTitle(e.target.value)} onKeyDown={(e: React.KeyboardEvent) => e.key === 'Enter' && addCategory()} placeholder="New category name..." />
        <Button onClick={addCategory} variant="outline" size="sm" className="gap-2 whitespace-nowrap">
          <Plus className="w-4 h-4" /> Add Category
        </Button>
      </div>
    </div>
  );
}
