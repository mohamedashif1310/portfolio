'use client';

import { Briefcase, Calendar } from 'lucide-react';
import Container from '@/components/shared/Container';
import ScrollReveal from '@/components/ui/ScrollReveal';

const experiences = [
  {
    role: 'RING Data Engineering & WiFi Testing',
    company: 'Amazon',
    period: 'Current',
    description: 'Leading WiFi connectivity testing for Ring devices. Building data pipelines for telemetry analysis and automated test frameworks.',
    tags: ['WiFi Testing', 'Data Engineering', 'Python', 'IoT'],
    active: true,
  },
  {
    role: 'Fire Stick 4K Select Testing',
    company: 'Amazon',
    period: '2023 - 2024',
    description: 'End-to-end device testing including UI automation, ADB-based testing, boot recovery, and kernel testing for Fire Stick 4K.',
    tags: ['ADB', 'Automation', 'Device Testing', 'QA'],
    active: false,
  },
  {
    role: 'AI/LLM Evaluation & Prompt Engineering',
    company: 'Freelance',
    period: '2023',
    description: 'Evaluated LLM outputs using RLHF methodologies. Designed prompts and assessed AI model quality for training datasets.',
    tags: ['AI', 'LLM', 'RLHF', 'Prompt Engineering'],
    active: false,
  },
];

export default function ExperienceSection() {
  return (
    <section className="relative py-28 overflow-hidden">
      <div className="absolute inset-0" aria-hidden="true">
        <div className="absolute inset-0 bg-gradient-to-b from-background-light via-surface-light to-background-light dark:from-background-dark dark:via-[#080810] dark:to-background-dark" />
      </div>

      <Container className="relative z-10">
        <ScrollReveal>
          <div className="text-center mb-20">
            <p className="text-sm font-semibold tracking-[0.2em] uppercase text-primary mb-4">Experience</p>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-text-primary dark:text-text-dark-primary">
              Where I&apos;ve <span className="bg-gradient-to-r from-primary via-purple-500 to-secondary bg-clip-text text-transparent">Made Impact</span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <ScrollReveal key={index} variant={index % 2 === 0 ? 'slide-left' : 'slide-right'} delay={index * 200}>
              <div className="relative pl-8 pb-16 last:pb-0">
                {/* Timeline line */}
                {index < experiences.length - 1 && (
                  <div className="absolute left-[11px] top-8 bottom-0 w-[2px] bg-gradient-to-b from-primary/40 to-transparent" />
                )}
                {/* Timeline dot */}
                <div className={`absolute left-0 top-1.5 w-6 h-6 rounded-full border-[3px] ${exp.active ? 'border-primary bg-primary/20 shadow-glow' : 'border-border-light dark:border-white/20 bg-background-light dark:bg-background-dark'}`}>
                  {exp.active && <div className="absolute inset-1 rounded-full bg-primary animate-pulse" />}
                </div>

                <div className="group p-8 rounded-2xl bg-white dark:bg-white/[0.02] border border-border-light dark:border-white/[0.06] hover:border-primary/20 transition-all duration-500 hover:-translate-y-0.5 hover:shadow-premium dark:hover:shadow-glow ml-4">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    {exp.active && (
                      <span className="px-2.5 py-0.5 text-[10px] font-bold tracking-wider uppercase bg-primary/10 text-primary rounded-full border border-primary/20">
                        Current
                      </span>
                    )}
                    <span className="flex items-center gap-1.5 text-sm text-text-secondary dark:text-text-dark-secondary">
                      <Calendar className="w-3.5 h-3.5" /> {exp.period}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-text-primary dark:text-text-dark-primary mb-1 group-hover:text-primary transition-colors">
                    {exp.role}
                  </h3>
                  <p className="flex items-center gap-1.5 text-sm font-medium text-primary/80 mb-4">
                    <Briefcase className="w-3.5 h-3.5" /> {exp.company}
                  </p>
                  <p className="text-text-secondary dark:text-text-dark-secondary leading-relaxed mb-5">
                    {exp.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1 text-xs font-medium rounded-lg bg-surface-light dark:bg-white/[0.04] text-text-secondary dark:text-text-dark-secondary border border-border-light dark:border-white/[0.06]">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
