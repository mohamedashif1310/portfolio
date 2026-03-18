import { Metadata } from 'next';
import Link from 'next/link';
import { Calendar, ArrowLeft } from 'lucide-react';
import Container from '@/components/shared/Container';
import Badge from '@/components/ui/Badge';
import { siteConfig } from '@/lib/constants';

const projects = [
  {
    slug: 'fire-stick-4k-testing',
    title: 'Amazon Fire Stick 4K Testing',
    description: 'Comprehensive end-to-end testing for Amazon Fire Stick 4K Select, including UI automation, ADB-based testing, and performance validation.',
    date: '2024-02-01',
    tags: ['ADB', 'Automation', 'Device Testing', 'QA', 'Python'],
    thumbnail: '🔥',
    content: 'This project involved extensive device testing using ADB commands, UI automation frameworks, and performance benchmarking tools.',
  },
  {
    slug: 'ring-wifi-testing',
    title: 'RING WiFi Testing Framework',
    description: 'WiFi connectivity testing framework for Amazon Ring devices with data engineering pipelines and telemetry analysis.',
    date: '2024-03-01',
    tags: ['WiFi Testing', 'Data Engineering', 'IoT', 'Python', 'Analytics'],
    thumbnail: '📡',
    content: 'This framework tested WiFi connectivity across various network conditions and analyzed telemetry data.',
  },
  {
    slug: 'llm-evaluation-platform',
    title: 'AI/LLM Evaluation Platform',
    description: 'Prompt engineering and LLM evaluation system for training and assessing AI model outputs with RLHF methodologies.',
    date: '2023-12-01',
    tags: ['AI', 'LLM', 'Prompt Engineering', 'Evaluation', 'Python'],
    thumbnail: '🤖',
    content: 'This platform evaluated LLM outputs using RLHF methodologies and prompt engineering techniques.',
  },
];

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) return { title: 'Project Not Found' };
  return {
    title: `${project.title} | ${siteConfig.name}`,
    description: project.description,
  };
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    return (
      <div className="py-20">
        <Container>
          <p className="text-center text-text-secondary dark:text-text-dark-secondary">
            Project not found.
          </p>
          <div className="text-center mt-4">
            <Link href="/projects" className="text-primary hover:underline">
              Back to Projects
            </Link>
          </div>
        </Container>
      </div>
    );
  }

  return (
    <div className="py-20">
      <Container size="lg">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-text-secondary dark:text-text-dark-secondary hover:text-primary transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Projects
        </Link>
        <article>
          <header className="mb-12">
            <div className="text-6xl mb-6">{project.thumbnail}</div>
            <h1 className="text-4xl md:text-5xl font-bold text-text-primary dark:text-text-dark-primary mb-4">
              {project.title}
            </h1>
            <p className="text-xl text-text-secondary dark:text-text-dark-secondary mb-6">
              {project.description}
            </p>
            <div className="flex items-center gap-2 text-text-secondary dark:text-text-dark-secondary mb-6">
              <Calendar className="w-4 h-4" />
              <span>
                {new Date(project.date).toLocaleDateString('en-US', {
                  month: 'long',
                  year: 'numeric',
                })}
              </span>
            </div>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <Badge key={tag} variant="default">
                  {tag}
                </Badge>
              ))}
            </div>
          </header>
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p>{project.content}</p>
          </div>
        </article>
      </Container>
    </div>
  );
}