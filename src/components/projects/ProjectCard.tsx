import Link from 'next/link';
import { ExternalLink, Github } from 'lucide-react';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import type { Project } from '@/lib/types';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="h-full flex flex-col group">
      <div className="text-6xl mb-4">{project.thumbnail}</div>
      
      <h3 className="text-xl font-semibold text-text-primary dark:text-text-dark-primary mb-2 group-hover:text-primary transition-colors">
        {project.title}
      </h3>
      
      <p className="text-text-secondary dark:text-text-dark-secondary mb-4 flex-1 line-clamp-3">
        {project.description}
      </p>
      
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tags.slice(0, 4).map((tag) => (
          <Badge key={tag} variant="primary">
            {tag}
          </Badge>
        ))}
      </div>
      
      <div className="flex items-center gap-3 pt-4 border-t border-border-light dark:border-border-dark">
        <Link
          href={`/projects/${project.slug}`}
          className="flex-1 text-center px-4 py-2 rounded-lg bg-primary text-white hover:bg-primary-hover transition-colors text-sm font-medium"
        >
          View Case Study
        </Link>
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg hover:bg-surface-light dark:hover:bg-surface-dark transition-colors"
            aria-label="Live demo"
          >
            <ExternalLink className="w-5 h-5" />
          </a>
        )}
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg hover:bg-surface-light dark:hover:bg-surface-dark transition-colors"
            aria-label="Source code"
          >
            <Github className="w-5 h-5" />
          </a>
        )}
      </div>
    </Card>
  );
}
