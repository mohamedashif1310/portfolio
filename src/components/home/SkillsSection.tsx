'use client';

import { TestTube, Code, Database, Cpu, Sparkles, Wrench } from 'lucide-react';
import Container from '@/components/shared/Container';
import SectionHeading from '@/components/shared/SectionHeading';

const skillCategories = [
  {
    title: 'Testing & QA',
    icon: TestTube,
    skills: ['UI Testing', 'Automation Testing', 'Manual Testing', 'Regression Testing', 'ADB Testing', 'Boot Recovery', 'Kernel Testing', 'WiFi Testing'],
  },
  {
    title: 'Development',
    icon: Code,
    skills: ['Python', 'JavaScript', 'TypeScript', 'Shell Scripting', 'Test Automation', 'CI/CD'],
  },
  {
    title: 'Tools & Platforms',
    icon: Wrench,
    skills: ['ADB', 'JIRA', 'Git', 'Jenkins', 'Selenium', 'Appium', 'TestRail'],
  },
  {
    title: 'Devices',
    icon: Cpu,
    skills: ['Fire Stick', 'Fire Tablets', 'Echo Devices', 'Ring Devices', 'Android Embedded'],
  },
  {
    title: 'Data & Engineering',
    icon: Database,
    skills: ['Data Pipelines', 'Telemetry', 'Analytics', 'SQL', 'Data Validation'],
  },
  {
    title: 'AI & ML',
    icon: Sparkles,
    skills: ['Prompt Engineering', 'LLM Evaluation', 'Data Training', 'RLHF', 'Model Assessment'],
  },
];

export default function SkillsSection() {
  return (
    <section className="py-20 bg-surface-light dark:bg-surface-dark">
      <Container>
        <SectionHeading
          title="Skills & Expertise"
          subtitle="Technologies and tools I work with"
          centered
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className="group p-6 rounded-xl bg-background-light dark:bg-background-dark border border-border-light dark:border-border-dark hover:border-primary transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-text-primary dark:text-text-dark-primary">
                    {category.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 text-sm rounded-full bg-surface-light dark:bg-surface-dark text-text-secondary dark:text-text-dark-secondary border border-border-light dark:border-border-dark"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
