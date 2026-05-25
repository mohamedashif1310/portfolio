'use client';

import { TestTube, Code, Database, Cpu, Sparkles, Wrench } from 'lucide-react';
import Container from '@/components/shared/Container';
import SectionHeading from '@/components/shared/SectionHeading';
import ScrollReveal from '@/components/ui/ScrollReveal';

const skillCategories = [
  {
    title: 'Testing & QA',
    icon: TestTube,
    color: 'from-blue-500 to-cyan-500',
    skills: ['UI Testing', 'Automation Testing', 'Manual Testing', 'Regression Testing', 'ADB Testing', 'Boot Recovery', 'Kernel Testing', 'WiFi Testing'],
  },
  {
    title: 'Development',
    icon: Code,
    color: 'from-primary to-purple-600',
    skills: ['Python', 'JavaScript', 'TypeScript', 'Shell Scripting', 'Test Automation', 'CI/CD'],
  },
  {
    title: 'Tools & Platforms',
    icon: Wrench,
    color: 'from-amber-500 to-orange-500',
    skills: ['ADB', 'JIRA', 'Git', 'Jenkins', 'Selenium', 'Appium', 'TestRail'],
  },
  {
    title: 'Devices',
    icon: Cpu,
    color: 'from-emerald-500 to-teal-500',
    skills: ['Fire Stick', 'Fire Tablets', 'Echo Devices', 'Ring Devices', 'Android Embedded'],
  },
  {
    title: 'Data & Engineering',
    icon: Database,
    color: 'from-rose-500 to-pink-500',
    skills: ['Data Pipelines', 'Telemetry', 'Analytics', 'SQL', 'Data Validation'],
  },
  {
    title: 'AI & ML',
    icon: Sparkles,
    color: 'from-violet-500 to-purple-500',
    skills: ['Prompt Engineering', 'LLM Evaluation', 'Data Training', 'RLHF', 'Model Assessment'],
  },
];

export default function SkillsSection() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-surface-light dark:bg-[#0a0a0f]" aria-hidden="true">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(99,102,241,0.04),transparent_70%)]" />
      </div>

      <Container className="relative z-10">
        <ScrollReveal>
          <SectionHeading title="Skills & Expertise" subtitle="Technologies and tools I work with daily" centered gradient />
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <ScrollReveal key={index} variant="scale" delay={index * 100} className="h-full">
              <div
                className="group relative h-full p-6 rounded-2xl bg-white dark:bg-white/[0.02] border border-border-light dark:border-white/[0.06] hover:border-primary/30 dark:hover:border-primary/20 transition-all duration-500 hover:-translate-y-1 hover:shadow-premium dark:hover:shadow-glow"
              >
                {/* Gradient accent on hover */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500`} />

                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex items-center gap-3 mb-5">
                    <div className={`p-2.5 rounded-xl bg-gradient-to-br ${category.color} text-white shadow-lg group-hover:scale-110 group-hover:shadow-xl transition-all duration-500`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-bold text-text-primary dark:text-text-dark-primary">
                      {category.title}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2 flex-1 content-start">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1.5 text-xs font-medium rounded-lg bg-surface-light dark:bg-white/[0.04] text-text-secondary dark:text-text-dark-secondary border border-border-light dark:border-white/[0.06] hover:border-primary/30 hover:text-primary transition-all duration-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              </ScrollReveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
