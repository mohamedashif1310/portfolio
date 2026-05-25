'use client';

const techStack = [
  { name: 'Python', icon: '🐍' },
  { name: 'TypeScript', icon: '💎' },
  { name: 'Next.js', icon: '▲' },
  { name: 'React', icon: '⚛️' },
  { name: 'ADB', icon: '📱' },
  { name: 'Selenium', icon: '🔬' },
  { name: 'Jenkins', icon: '🔧' },
  { name: 'Git', icon: '🌿' },
  { name: 'SQL', icon: '🗄️' },
  { name: 'Docker', icon: '🐳' },
  { name: 'AWS', icon: '☁️' },
  { name: 'AI/ML', icon: '🤖' },
];

export default function TechMarquee() {
  const items = [...techStack, ...techStack];

  return (
    <section className="relative py-16 overflow-hidden border-y border-border-light dark:border-white/[0.04]">
      <div className="absolute inset-0 bg-surface-light dark:bg-[#080810]" />
      
      <div className="relative">
        <div className="flex animate-marquee whitespace-nowrap">
          {items.map((tech, i) => (
            <div
              key={i}
              className="mx-8 flex items-center gap-3 text-text-secondary/40 dark:text-text-dark-secondary/30 hover:text-primary transition-colors duration-500 cursor-default select-none"
            >
              <span className="text-2xl">{tech.icon}</span>
              <span className="text-lg font-semibold tracking-wide uppercase">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
