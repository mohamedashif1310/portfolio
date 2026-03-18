'use client';

import { useState, useMemo } from 'react';
import Container from '@/components/shared/Container';
import SectionHeading from '@/components/shared/SectionHeading';
import ProjectCard from '@/components/projects/ProjectCard';
import ProjectFilter from '@/components/projects/ProjectFilter';

const projects = [
  {
    slug: 'fire-stick-4k-testing',
    title: 'Amazon Fire Stick 4K Testing',
    description: 'Comprehensive end-to-end testing for Amazon Fire Stick 4K Select, including UI automation, ADB-based testing, and performance validation.',
    date: '2024-02-01',
    tags: ['ADB', 'Automation', 'Device Testing', 'QA', 'Python'],
    thumbnail: '🔥',
    featured: true,
    content: '',
  },
  {
    slug: 'ring-wifi-testing',
    title: 'RING WiFi Testing Framework',
    description: 'WiFi connectivity testing framework for Amazon Ring devices with data engineering pipelines and telemetry analysis.',
    date: '2024-03-01',
    tags: ['WiFi Testing', 'Data Engineering', 'IoT', 'Python', 'Analytics'],
    thumbnail: '📡',
    featured: true,
    content: '',
  },
  {
    slug: 'llm-evaluation-platform',
    title: 'AI/LLM Evaluation Platform',
    description: 'Prompt engineering and LLM evaluation system for training and assessing AI model outputs with RLHF methodologies.',
    date: '2023-12-01',
    tags: ['AI', 'LLM', 'Prompt Engineering', 'Evaluation', 'Python'],
    thumbnail: '🤖',
    featured: true,
    content: '',
  },
];

const categories = ['All', 'Device Testing', 'Automation', 'AI/ML', 'Data Engineering'];

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = useMemo(() => {
    if (activeCategory === 'All') return projects;
    return projects.filter((project) =>
      project.tags.some((tag) => tag.toLowerCase().includes(activeCategory.toLowerCase()))
    );
  }, [activeCategory]);

  return (
    <div className="py-20">
      <Container>
        <SectionHeading
          title="Projects"
          subtitle="A showcase of my work in device testing, automation, and AI evaluation"
          centered
        />

        <div className="mb-12">
          <ProjectFilter
            categories={categories}
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
          />
        </div>

        {filteredProjects.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-lg text-text-secondary dark:text-text-dark-secondary">
              No projects found in this category.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        )}
      </Container>
    </div>
  );
}
