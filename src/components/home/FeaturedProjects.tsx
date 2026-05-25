'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Badge from '@/components/ui/Badge';
import Container from '@/components/shared/Container';
import SectionHeading from '@/components/shared/SectionHeading';
import ScrollReveal from '@/components/ui/ScrollReveal';

const featuredProjects = [
  {
    title: 'Amazon Fire Stick 4K Testing',
    description: 'Comprehensive end-to-end testing for Amazon Fire Stick 4K Select, including UI, automation, and ADB-based testing.',
    tags: ['ADB', 'Automation', 'Device Testing', 'QA'],
    image: '🔥',
    gradient: 'from-orange-500 to-red-500',
    bgGradient: 'from-orange-500/10 to-red-500/10',
  },
  {
    title: 'RING WiFi Testing Framework',
    description: 'WiFi connectivity testing framework for Amazon Ring devices with data engineering pipelines.',
    tags: ['WiFi Testing', 'Data Engineering', 'IoT', 'Python'],
    image: '📡',
    gradient: 'from-blue-500 to-cyan-500',
    bgGradient: 'from-blue-500/10 to-cyan-500/10',
  },
  {
    title: 'AI/LLM Evaluation Platform',
    description: 'Prompt engineering and LLM evaluation system for training and assessing AI model outputs.',
    tags: ['AI', 'LLM', 'Prompt Engineering', 'Evaluation'],
    image: '🤖',
    gradient: 'from-purple-500 to-pink-500',
    bgGradient: 'from-purple-500/10 to-pink-500/10',
  },
];

export default function FeaturedProjects() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-surface-light dark:bg-[#0a0a0f]" aria-hidden="true">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(99,102,241,0.05),transparent_50%)]" />
      </div>

      <Container className="relative z-10">
        <ScrollReveal>
          <SectionHeading
            title="Featured Projects"
            subtitle="A selection of my recent work in device testing, automation, and AI evaluation"
            centered
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <ScrollReveal key={index} variant="zoom" delay={index * 150}>
            <div className="group relative">
              {/* Glow border on hover */}
              <div className={`absolute -inset-[1px] bg-gradient-to-r ${project.gradient} rounded-2xl opacity-0 group-hover:opacity-100 blur-sm transition-all duration-700`} />

              <div className="relative h-full rounded-2xl bg-white dark:bg-[#111118] border border-border-light dark:border-white/[0.06] p-7 overflow-hidden transition-all duration-500 group-hover:-translate-y-1">
                {/* Background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />

                <div className="relative z-10">
                  <div className="text-5xl mb-5 transform transition-all duration-500 group-hover:scale-110 group-hover:-rotate-3">
                    {project.image}
                  </div>
                  <h3 className="text-xl font-bold text-text-primary dark:text-text-dark-primary mb-3 group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-text-secondary dark:text-text-dark-secondary mb-5 line-clamp-3 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="primary">{tag}</Badge>
                    ))}
                  </div>

                  <div className="flex items-center gap-2 text-primary font-semibold text-sm opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-3 group-hover:translate-y-0">
                    View Project
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              </div>
            </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal variant="fade-up" delay={400}>
        <div className="text-center">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-primary hover:text-primary-hover font-semibold transition-all duration-300 group"
          >
            <span className="relative">
              View All Projects
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-500" />
            </span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
          </Link>
        </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
