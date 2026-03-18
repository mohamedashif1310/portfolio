import { Laptop, Code, Palette, Smartphone, Globe } from 'lucide-react';
import Container from '@/components/shared/Container';
import SectionHeading from '@/components/shared/SectionHeading';
import Card from '@/components/ui/Card';

export const metadata = {
  title: 'Uses',
  description: 'Tools, software, and hardware I use daily',
};

const categories = [
  {
    title: 'Hardware',
    icon: Laptop,
    items: [
      { name: 'MacBook Pro 16"', description: 'Primary development machine' },
      { name: 'Dell UltraSharp Monitor', description: '27" 4K display' },
      { name: 'Mechanical Keyboard', description: 'For comfortable typing' },
      { name: 'Logitech MX Master 3', description: 'Wireless mouse' },
    ],
  },
  {
    title: 'Development Tools',
    icon: Code,
    items: [
      { name: 'VS Code', description: 'Primary code editor' },
      { name: 'iTerm2', description: 'Terminal emulator' },
      { name: 'Git', description: 'Version control' },
      { name: 'Docker', description: 'Containerization' },
    ],
  },
  {
    title: 'Design Tools',
    icon: Palette,
    items: [
      { name: 'Figma', description: 'UI/UX design' },
      { name: 'Adobe Creative Suite', description: 'Graphics and media' },
    ],
  },
  {
    title: 'Apps & Productivity',
    icon: Smartphone,
    items: [
      { name: 'Notion', description: 'Note-taking and organization' },
      { name: 'Slack', description: 'Team communication' },
      { name: 'Spotify', description: 'Music while coding' },
    ],
  },
  {
    title: 'Hosting & Services',
    icon: Globe,
    items: [
      { name: 'Vercel', description: 'Web hosting and deployment' },
      { name: 'GitHub', description: 'Code hosting' },
      { name: 'AWS', description: 'Cloud services' },
    ],
  },
];

export default function UsesPage() {
  return (
    <div className="py-20">
      <Container>
        <SectionHeading
          title="Uses"
          subtitle="Tools, software, and hardware I use daily"
          centered
        />

        <div className="space-y-12">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <div key={category.title}>
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <Icon className="w-6 h-6 text-primary" />
                  {category.title}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {category.items.map((item) => (
                    <Card key={item.name} hover={false}>
                      <h3 className="font-semibold text-lg mb-2">{item.name}</h3>
                      <p className="text-text-secondary dark:text-text-dark-secondary">
                        {item.description}
                      </p>
                    </Card>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </div>
  );
}
