import HeroSection from '@/components/home/HeroSection';
import FeaturedProjects from '@/components/home/FeaturedProjects';
import LatestBlog from '@/components/home/LatestBlog';
import SkillsSection from '@/components/home/SkillsSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import CTASection from '@/components/home/CTASection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturedProjects />
      <LatestBlog />
      <SkillsSection />
      <TestimonialsSection />
      <CTASection />
    </>
  );
}
