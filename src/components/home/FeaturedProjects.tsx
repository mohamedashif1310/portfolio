'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, ExternalLink, Github } from 'lucide-react';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import Container from '@/components/shared/Container';
import SectionHeading from '@/components/shared/SectionHeading';

const featuredProjects = [
  {
    title: 'Amazon Fire Stick 4K Testing',
    description: 'Comprehensive end-to-end testing for Amazon Fire Stick 4K Select, including UI, automation, and ADB-based testing.',
    tags: ['ADB', 'Automation', 'Device Testing', 'QA'],
    image: '🔥',
    gradient: 'from-orange-500/10 to-red-500/10',
  },
  {
    title: 'RING WiFi Testing Framework',
    description: 'WiFi connectivity testing framework for Amazon Ring devices with data engineering pipelines.',
    tags: ['WiFi Testing', 'Data Engineering', 'IoT', 'Python'],
    image: '📡',
    gradient: 'from-blue-500/10 to-cyan-500/10',
  },
  {
    title: 'AI/LLM Evaluation Platform',
    description: 'Prompt engineering and LLM evaluation system for training and assessing AI model outputs.',
    tags: ['AI', 'LLM', 'Prompt Engineering', 'Evaluation'],
    image: '🤖',
    gradient: 'from-purple-500/10 to-pink-500/10',
  },
];

export default function FeaturedProjects() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-20 bg-surface-light dark:bg-surface-dark relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px]" />
      
      <Container className="relative z-10">
        <SectionHeading
          title="Featured Projects"
          subtitle="A selection of my recent work in device testing, automation, and AI evaluation"
          centered
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredProjects.map((project, index) => (
            <div
              key={index}
              className="group relative"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Glow Effect on Hover */}
              <div className={`absolute -inset-0.5 bg-gradient-to-r ${project.gradient} rounded-xl blur opacity-0 group-hover:opacity-100 transition duration-500`} />
              
              <Card className="relative h-full transform transition-all duration-500 group-hover:scale-[1.02]">
                {/* Animated Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl`} />
                
                <div className="relative z-10">
                  <div className="text-6xl mb-4 transform transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                    {project.image}
                  </div>
                  <h3 className="text-xl font-semibold text-text-primary dark:text-text-dark-primary mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-text-secondary dark:text-text-dark-secondary mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <Badge 
                        key={tag} 
                        variant="primary"
                        className="transform transition-transform duration-300 hover:scale-110"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  
                  {/* Animated Arrow */}
                  <div className="flex items-center gap-2 text-primary font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <span>View Project</span>
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-2 transition-transform" />
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-primary hover:text-primary-hover font-medium transition-all duration-300 group relative"
          >
            <span className="relative">
              View All Projects
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
            </span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
          </Link>
        </div>
      </Container>
    </section>
  );
}
