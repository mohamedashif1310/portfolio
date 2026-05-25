'use client';

import { useState } from 'react';
import { Save, Globe, User, Link2, Briefcase } from 'lucide-react';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';

export default function SiteSettings() {
  const [saved, setSaved] = useState(false);
  const [settings, setSettings] = useState({
    name: 'Mohamed Ashif',
    title: 'Testing Associate | QA & Automation Engineer',
    description: 'Testing Associate at Amazon with expertise in device testing, automation, and AI/ML evaluation.',
    email: 'mohamedashif1310@gmail.com',
    location: 'Chennai, Tamil Nadu, India',
    github: 'https://github.com/mohamedashif1310',
    linkedin: 'https://www.linkedin.com/in/mohamed-ashif-m-superashif/',
    twitter: 'https://twitter.com/mohamedashif',
    siteUrl: 'https://mohamedashif.dev',
    yearsExp: '1.2',
    projectsCount: '15',
  });

  const update = (key: string, value: string) => setSettings(prev => ({ ...prev, [key]: value }));
  const handleSave = () => { setSaved(true); setTimeout(() => setSaved(false), 2000); };

  return (
    <div className="space-y-8 max-w-3xl">
      {/* Personal Info */}
      <div className="space-y-5">
        <div className="flex items-center gap-2 text-text-primary dark:text-text-dark-primary font-bold">
          <User className="w-5 h-5 text-primary" /> Personal Information
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input label="Full Name" value={settings.name} onChange={(e) => update('name', e.target.value)} />
          <Input label="Email" type="email" value={settings.email} onChange={(e) => update('email', e.target.value)} />
        </div>
        <Input label="Title / Role" value={settings.title} onChange={(e) => update('title', e.target.value)} />
        <Input label="Bio / Description" value={settings.description} onChange={(e) => update('description', e.target.value)} />
        <Input label="Location" value={settings.location} onChange={(e) => update('location', e.target.value)} />
      </div>

      {/* Social Links */}
      <div className="space-y-5">
        <div className="flex items-center gap-2 text-text-primary dark:text-text-dark-primary font-bold">
          <Link2 className="w-5 h-5 text-primary" /> Social Links
        </div>
        <Input label="GitHub" value={settings.github} onChange={(e) => update('github', e.target.value)} placeholder="https://github.com/..." />
        <Input label="LinkedIn" value={settings.linkedin} onChange={(e) => update('linkedin', e.target.value)} placeholder="https://linkedin.com/in/..." />
        <Input label="Twitter / X" value={settings.twitter} onChange={(e) => update('twitter', e.target.value)} placeholder="https://twitter.com/..." />
      </div>

      {/* Site Config */}
      <div className="space-y-5">
        <div className="flex items-center gap-2 text-text-primary dark:text-text-dark-primary font-bold">
          <Globe className="w-5 h-5 text-primary" /> Site Configuration
        </div>
        <Input label="Site URL" value={settings.siteUrl} onChange={(e) => update('siteUrl', e.target.value)} />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input label="Years of Experience" value={settings.yearsExp} onChange={(e) => update('yearsExp', e.target.value)} />
          <Input label="Projects Completed" value={settings.projectsCount} onChange={(e) => update('projectsCount', e.target.value)} />
        </div>
      </div>

      <Button onClick={handleSave} variant="primary" className="gap-2">
        <Save className="w-4 h-4" /> {saved ? 'Settings Saved!' : 'Save Settings'}
      </Button>
    </div>
  );
}
