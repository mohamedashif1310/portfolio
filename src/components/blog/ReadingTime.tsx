import { Clock } from 'lucide-react';

interface ReadingTimeProps {
  time: string;
}

export default function ReadingTime({ time }: ReadingTimeProps) {
  return (
    <span className="flex items-center gap-1 text-sm text-text-secondary dark:text-text-dark-secondary">
      <Clock className="w-4 h-4" />
      {time}
    </span>
  );
}
