import Container from '@/components/shared/Container';
import SectionHeading from '@/components/shared/SectionHeading';
import Card from '@/components/ui/Card';

export const metadata = {
  title: 'Now',
  description: 'What I\'m currently working on and learning',
};

export default function NowPage() {
  const lastUpdated = 'March 2024';

  return (
    <div className="py-20">
      <Container size="md">
        <SectionHeading
          title="What I'm Doing Now"
          subtitle={`Last updated: ${lastUpdated}`}
          centered
        />

        <div className="space-y-8">
          <Card hover={false}>
            <h2 className="text-2xl font-bold mb-4">🔧 Currently Working On</h2>
            <ul className="space-y-3 text-text-secondary dark:text-text-dark-secondary">
              <li>• RING Data Engineering and WiFi Testing at Amazon</li>
              <li>• Building automation frameworks for Ring device testing</li>
              <li>• Developing data pipelines for telemetry analysis</li>
            </ul>
          </Card>

          <Card hover={false}>
            <h2 className="text-2xl font-bold mb-4">📚 Currently Learning</h2>
            <ul className="space-y-3 text-text-secondary dark:text-text-dark-secondary">
              <li>• Advanced data engineering techniques</li>
              <li>• Machine learning for test optimization</li>
              <li>• Cloud infrastructure and DevOps practices</li>
            </ul>
          </Card>

          <Card hover={false}>
            <h2 className="text-2xl font-bold mb-4">📖 Currently Reading</h2>
            <ul className="space-y-3 text-text-secondary dark:text-text-dark-secondary">
              <li>• "The Phoenix Project" by Gene Kim</li>
              <li>• "Designing Data-Intensive Applications" by Martin Kleppmann</li>
            </ul>
          </Card>

          <Card hover={false}>
            <h2 className="text-2xl font-bold mb-4">🎯 Current Focus Areas</h2>
            <ul className="space-y-3 text-text-secondary dark:text-text-dark-secondary">
              <li>• Improving WiFi testing methodologies</li>
              <li>• Expanding AI/ML evaluation skills</li>
              <li>• Contributing to open source testing tools</li>
            </ul>
          </Card>
        </div>

        <p className="text-sm text-text-secondary dark:text-text-dark-secondary text-center mt-12">
          This page is inspired by <a href="https://nownownow.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">nownownow.com</a>
        </p>
      </Container>
    </div>
  );
}
