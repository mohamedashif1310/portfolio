import Link from 'next/link';
import { Mail, ArrowRight, Sparkles } from 'lucide-react';
import Button from '@/components/ui/Button';
import Container from '@/components/shared/Container';
import ScrollReveal from '@/components/ui/ScrollReveal';

export default function CTASection() {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Dramatic gradient background */}
      <div className="absolute inset-0" aria-hidden="true">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.08] via-purple-600/[0.05] to-secondary/[0.08]" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-radial from-primary/[0.1] to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-gradient-radial from-secondary/[0.08] to-transparent rounded-full blur-3xl" />
      </div>

      <Container className="relative z-10">
        <ScrollReveal variant="zoom">
          <div className="max-w-4xl mx-auto">
            <div className="relative p-12 md:p-20 rounded-[2rem] bg-white/70 dark:bg-white/[0.03] backdrop-blur-2xl border border-white/30 dark:border-white/[0.08] shadow-premium-lg dark:shadow-glow-lg text-center overflow-hidden">
              {/* Inner glow */}
              <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-primary/[0.03] via-transparent to-secondary/[0.03]" />

              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-8 border border-primary/20">
                  <Sparkles className="w-4 h-4" />
                  Open to opportunities
                </div>

                <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
                  <span className="text-text-primary dark:text-text-dark-primary">Let&apos;s Build</span>
                  <br />
                  <span className="bg-gradient-to-r from-primary via-purple-500 to-secondary bg-clip-text text-transparent">
                    Something Great
                  </span>
                </h2>

                <p className="text-lg md:text-xl text-text-secondary dark:text-text-dark-secondary leading-relaxed max-w-2xl mx-auto mb-10">
                  Whether you need device testing expertise, automation solutions, or AI evaluation — I&apos;m ready to bring quality and precision to your next project.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <Link href="/contact">
                    <Button size="lg" variant="primary" className="gap-2.5 text-base">
                      <Mail className="w-5 h-5" />
                      Get In Touch
                    </Button>
                  </Link>
                  <Link href="/projects">
                    <Button size="lg" variant="outline" className="gap-2.5 text-base group">
                      View My Work
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
