'use client';

import Button from '@/components/ui/Button';
import Container from '@/components/shared/Container';

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-screen flex items-center justify-center py-20">
      <Container>
        <div className="text-center max-w-md mx-auto">
          <div className="text-6xl mb-4">⚠️</div>
          <h2 className="text-2xl font-bold mb-4">Something went wrong</h2>
          <p className="text-text-secondary dark:text-text-dark-secondary mb-8">
            An unexpected error occurred. Please try again.
          </p>
          <Button onClick={reset} variant="primary">
            Try again
          </Button>
        </div>
      </Container>
    </div>
  );
}
