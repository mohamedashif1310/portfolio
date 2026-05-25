import Container from '@/components/shared/Container';
import SectionHeading from '@/components/shared/SectionHeading';

export default function BlogLoading() {
  return (
    <div className="py-20">
      <Container>
        <SectionHeading title="Blog" subtitle="Loading posts..." centered />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="rounded-xl bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark p-6 animate-pulse"
            >
              <div className="h-4 w-20 bg-border-light dark:bg-border-dark rounded mb-4" />
              <div className="h-6 w-full bg-border-light dark:bg-border-dark rounded mb-2" />
              <div className="h-4 w-3/4 bg-border-light dark:bg-border-dark rounded mb-4" />
              <div className="h-20 w-full bg-border-light dark:bg-border-dark rounded" />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
