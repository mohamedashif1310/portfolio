import Container from '@/components/shared/Container';

export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center py-20">
      <Container>
        <div className="text-center">
          <div className="inline-block w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      </Container>
    </div>
  );
}
