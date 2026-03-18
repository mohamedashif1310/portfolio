import Link from 'next/link';
import { Home, Search, FileText, Briefcase } from 'lucide-react';
import Container from '@/components/shared/Container';
import Button from '@/components/ui/Button';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center py-20">
      <Container>
        <div className="text-center max-w-2xl mx-auto">
          <div className="text-9xl font-bold text-primary mb-4">404</div>
          <h1 className="text-4xl font-bold mb-4">Page Not Found</h1>
          <p className="text-lg text-text-secondary dark:text-text-dark-secondary mb-8">
            Oops! The page you're looking for seems to have wandered off into the digital void.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link href="/">
              <Button variant="primary" className="gap-2">
                <Home className="w-4 h-4" />
                Go Home
              </Button>
            </Link>
            <Link href="/blog">
              <Button variant="outline" className="gap-2">
                <FileText className="w-4 h-4" />
                Read Blog
              </Button>
            </Link>
            <Link href="/projects">
              <Button variant="outline" className="gap-2">
                <Briefcase className="w-4 h-4" />
                View Projects
              </Button>
            </Link>
          </div>

          <div className="text-8xl animate-float">🔍</div>
        </div>
      </Container>
    </div>
  );
}
