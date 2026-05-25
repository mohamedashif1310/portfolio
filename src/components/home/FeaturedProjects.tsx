'use client';

import { useEffect, useRef, useState } from 'react';
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
  {
    title: 'Snapzon',
    description: 'Snapchat-inspired social experience built to celebrate Amazon internal festivals. Planned, coded, tested, and deployed entirely through AI-native development with Claude Code and prompt engineering — showcasing the ability to ship a working social app from zero to production using AI as the co-pilot.',
    tags: ['AI Native', 'Claude Code', 'React', 'Social App', 'Prompt Engineering'],
    image: '📸',
    gradient: 'from-yellow-500 to-amber-500',
    bgGradient: 'from-yellow-500/10 to-amber-500/10',
    link: 'https://github.com/mohamedashif1310/snapzon',
  },
  {
    title: 'MadPutty',
    description: 'AI-powered terminal tool replacing PuTTY and TeraTerm — equipped with real-time serial port log analysis. AI runs inside the terminal to detect errors the human eye misses, translates technical device logs into plain English, and suggests fixes instantly. Built with Claude Opus 4.7, MCP integrations, and advanced prompt engineering to handle hallucination-free log interpretation.',
    tags: ['AI Native', 'Serial Port', 'Log Analysis', 'Claude Opus 4.7', 'MCP Tools', 'DevTools'],
    image: '🧠',
    gradient: 'from-violet-500 to-fuchsia-500',
    bgGradient: 'from-violet-500/10 to-fuchsia-500/10',
    link: 'https://github.com/mohamedashif1310/madputty',
  },
];

export default function FeaturedProjects() {
  const [showIframe, setShowIframe] = useState(false);
  const iframeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowIframe(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (iframeRef.current) observer.observe(iframeRef.current);
    return () => observer.disconnect();
  }, []);

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
            subtitle="From device testing & automation to AI-native full-stack apps — built end-to-end with Claude, Kiro AI, and modern tooling"
            centered
          />
        </ScrollReveal>

        {/* Reel Counter — Hero Spotlight */}
        <ScrollReveal variant="fade-up" delay={100}>
          <div className="mb-16 rounded-2xl sm:rounded-3xl border border-border-light dark:border-white/[0.06] bg-white dark:bg-[#111118] overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Live Preview */}
              <div className="relative bg-gradient-to-br from-emerald-500/5 to-teal-500/5 p-3 sm:p-4 flex flex-col">
                {/* Browser chrome */}
                <div className="flex items-center gap-1.5 mb-2 sm:mb-0 sm:absolute sm:top-4 sm:left-4 z-10">
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-red-400" />
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-yellow-400" />
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-green-400" />
                  <span className="ml-2 text-[10px] sm:hidden text-text-secondary dark:text-text-dark-secondary">reel-counter-website.vercel.app</span>
                </div>
                <div className="hidden sm:block absolute top-3 left-1/2 -translate-x-1/2 text-xs text-text-secondary dark:text-text-dark-secondary bg-white/80 dark:bg-white/10 px-3 py-1 rounded-full backdrop-blur-sm z-10">
                  reel-counter-website.vercel.app
                </div>

                {/* Iframe container */}
                <div ref={iframeRef} className="w-full h-[250px] sm:h-[320px] lg:flex-1 lg:h-auto sm:mt-4 rounded-lg sm:rounded-xl overflow-hidden">
                  {showIframe && (
                    <iframe
                      src="https://reel-counter-website.vercel.app/"
                      title="Reel Counter Live Preview"
                      className="w-[142%] h-[142%] sm:w-[125%] sm:h-[125%] border-0 pointer-events-none origin-top-left scale-[0.7] sm:scale-[0.8]"
                      loading="lazy"
                      sandbox="allow-scripts allow-same-origin"
                    />
                  )}
                </div>

                {/* Development Workflow — bottom strip */}
                <div className="mt-2 sm:mt-3 p-2 sm:p-3 rounded-lg sm:rounded-xl bg-white/60 dark:bg-white/[0.03] border border-border-light dark:border-white/[0.06]">
                  <p className="text-[9px] sm:text-[10px] font-semibold text-text-primary dark:text-text-dark-primary mb-1 uppercase tracking-wider">AI Development Workflow</p>
                  <div className="flex flex-wrap gap-1">
                    {['Ideation', 'Architecture', 'Prompt Design', 'Code Gen', 'Testing', 'Deploy'].map((step, i) => (
                      <span key={step} className="inline-flex items-center gap-0.5 text-[9px] sm:text-[10px] px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 font-medium">
                        <span className="text-emerald-500">{i + 1}.</span> {step}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Info Panel */}
              <div className="p-5 sm:p-8 lg:p-10 flex flex-col justify-center">
                <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                  <span className="text-3xl sm:text-4xl">🎬</span>
                  <Badge variant="primary">⭐ Spotlight Project</Badge>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-text-primary dark:text-text-dark-primary mb-3 sm:mb-4">
                  Reel Counter
                </h3>
                <p className="text-sm sm:text-base text-text-secondary dark:text-text-dark-secondary mb-4 sm:mb-6 leading-relaxed">
                  A privacy-first Android app that auto-detects Instagram Reels using accessibility events, 
                  extracts content via on-device ML Kit OCR, and delivers rich analytics — heatmaps, session tracking, 
                  predictive insights — all 100% offline.
                </p>
                <p className="text-xs sm:text-sm text-text-secondary dark:text-text-dark-secondary mb-4 sm:mb-6 italic border-l-2 border-primary pl-3 sm:pl-4">
                  Built end-to-end with Claude Opus 4.6, Amazon Kiro AI (steering files + MCP tools) — from architecture to deployment.
                </p>

                <div className="grid grid-cols-3 gap-2 sm:gap-3 mb-4 sm:mb-6">
                  {[
                    { label: 'Privacy', value: '100%' },
                    { label: 'ML Features', value: '6+' },
                    { label: 'Network Calls', value: 'Zero' },
                  ].map((stat) => (
                    <div key={stat.label} className="text-center p-2 sm:p-3 rounded-lg sm:rounded-xl bg-emerald-500/5 border border-emerald-500/10">
                      <div className="text-sm sm:text-lg font-bold text-emerald-600 dark:text-emerald-400">{stat.value}</div>
                      <div className="text-[10px] sm:text-xs text-text-secondary dark:text-text-dark-secondary">{stat.label}</div>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-6">
                  {['AI Native', 'Claude Opus', 'Kiro AI', 'Next.js', 'Android', 'ML Kit', 'Vercel'].map((tag) => (
                    <Badge key={tag} variant="primary">{tag}</Badge>
                  ))}
                </div>

                <a
                  href="https://reel-counter-website.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-semibold rounded-lg sm:rounded-xl hover:opacity-90 transition-opacity w-fit text-sm sm:text-base"
                >
                  Visit Live Site
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <ScrollReveal key={index} variant="zoom" delay={index * 150}>
            <a href={(project as any).link || '#'} target={(project as any).link ? '_blank' : undefined} rel="noopener noreferrer" className="block">
            <div className="group relative h-full">
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
            </a>
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
