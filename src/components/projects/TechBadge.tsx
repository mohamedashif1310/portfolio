import Badge from '@/components/ui/Badge';

interface TechBadgeProps {
  tech: string;
}

export default function TechBadge({ tech }: TechBadgeProps) {
  return (
    <Badge variant="primary" className="text-xs">
      {tech}
    </Badge>
  );
}
