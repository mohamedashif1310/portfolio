export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  category: string;
  tags: string[];
  coverImage: string;
  author: Author;
  readingTime: string;
  content: string;
}

export interface Author {
  name: string;
  avatar: string;
  bio: string;
}

export interface Project {
  slug: string;
  title: string;
  description: string;
  date: string;
  tags: string[];
  thumbnail: string;
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  content: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
}

export interface Achievement {
  title: string;
  issuer: string;
  date: string;
  description: string;
  icon: string;
}
