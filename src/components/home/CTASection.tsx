import Link from 'next/link';
import { Mail, ArrowRight } from 'lucide-react';
import Button from '@/components/ui/Button';
import Container from '@/components/shared/Container';

export default function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-br from-primary/10 via-secondary/10 to-transparent">
      <Container>
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary dark:text-text-dark-primary">
            Let's Work Together
          </h2>
          <p className="text-lg md:text-xl text-text-secondary dark:text-text-dark-secondary">
            I'm always interested in hearing about new projects and opportunities. Whether you need device testing expertise, automation solutions, or AI evaluation services, let's connect!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Link href="/contact">
              <Button size="lg" variant="primary" className="gap-2">
                <Mail className="w-5 h-5" />
                Get In Touch
              </Button>
            </Link>
            <Link href="/projects">
              <Button size="lg" variant="outline" className="gap-2">
                View My Work
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
