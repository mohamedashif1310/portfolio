import { Metadata } from 'next';
import Container from '@/components/shared/Container';
import SectionHeading from '@/components/shared/SectionHeading';
import StudioTabs from './StudioTabs';

export const metadata: Metadata = {
  title: 'Studio',
  description: 'Content management studio — write blogs, manage skills, update projects',
};

export default function StudioPage() {
  return (
    <div className="py-24">
      <Container>
        <SectionHeading
          title="Studio"
          subtitle="Your personal content management dashboard"
          gradient
        />
        <StudioTabs />
      </Container>
    </div>
  );
}
