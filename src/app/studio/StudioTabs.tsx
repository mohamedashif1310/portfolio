'use client';

import { useState } from 'react';
import { PenLine, Wrench, FolderKanban, Settings } from 'lucide-react';
import { cn } from '@/lib/utils';
import BlogWriter from './tabs/BlogWriter';
import SkillsManager from './tabs/SkillsManager';
import ProjectsManager from './tabs/ProjectsManager';
import SiteSettings from './tabs/SiteSettings';

const tabs = [
  { id: 'blog', label: 'Blog Writer', icon: PenLine },
  { id: 'skills', label: 'Skills', icon: Wrench },
  { id: 'projects', label: 'Projects', icon: FolderKanban },
  { id: 'settings', label: 'Settings', icon: Settings },
] as const;

type TabId = (typeof tabs)[number]['id'];

export default function StudioTabs() {
  const [activeTab, setActiveTab] = useState<TabId>('blog');

  return (
    <div>
      {/* Tab navigation */}
      <div className="flex flex-wrap gap-2 mb-10 p-1.5 rounded-2xl bg-surface-light dark:bg-white/[0.02] border border-border-light dark:border-white/[0.06]">
        {tabs.map(({ id, label, icon: Icon }) => (
          <button
            key={id}
            onClick={() => setActiveTab(id)}
            className={cn(
              'flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold transition-all duration-300',
              activeTab === id
                ? 'bg-primary text-white shadow-glow-primary'
                : 'text-text-secondary dark:text-text-dark-secondary hover:text-text-primary dark:hover:text-text-dark-primary hover:bg-white dark:hover:bg-white/[0.04]'
            )}
          >
            <Icon className="w-4 h-4" />
            {label}
          </button>
        ))}
      </div>

      {/* Tab content */}
      <div>
        {activeTab === 'blog' && <BlogWriter />}
        {activeTab === 'skills' && <SkillsManager />}
        {activeTab === 'projects' && <ProjectsManager />}
        {activeTab === 'settings' && <SiteSettings />}
      </div>
    </div>
  );
}
