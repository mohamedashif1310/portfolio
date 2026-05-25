import HeroSection from '@/components/home/HeroSection';
import TechMarquee from '@/components/home/TechMarquee';
import StatsSection from '@/components/home/StatsSection';
import ExperienceSection from '@/components/home/ExperienceSection';
import FeaturedProjects from '@/components/home/FeaturedProjects';
import SkillsSection from '@/components/home/SkillsSection';
import LatestBlog from '@/components/home/LatestBlog';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import CTASection from '@/components/home/CTASection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <TechMarquee />
      <StatsSection />
      <ExperienceSection />
      <FeaturedProjects />
      <SkillsSection />
      <LatestBlog />
      <TestimonialsSection />
      <CTASection />
    </>
  );
}
