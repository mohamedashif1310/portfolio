import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const BLOG_DIR = path.join(process.cwd(), 'src/content/blog');

export async function GET() {
  try {
    if (!fs.existsSync(BLOG_DIR)) {
      return NextResponse.json({ posts: [] });
    }
    const files = fs.readdirSync(BLOG_DIR).filter(f => f.endsWith('.mdx'));
    const posts = files.map(file => {
      const content = fs.readFileSync(path.join(BLOG_DIR, file), 'utf8');
      const frontmatterMatch = content.match(/^---\n([\s\S]*?)\n---/);
      const slug = file.replace('.mdx', '');
      let title = slug, date = '', category = '', excerpt = '';
      if (frontmatterMatch) {
        const fm = frontmatterMatch[1];
        title = fm.match(/title:\s*"(.+?)"/)?.[1] || slug;
        date = fm.match(/date:\s*"(.+?)"/)?.[1] || '';
        category = fm.match(/category:\s*"(.+?)"/)?.[1] || '';
        excerpt = fm.match(/excerpt:\s*"(.+?)"/)?.[1] || '';
      }
      return { slug, title, date, category, excerpt, filename: file };
    });
    return NextResponse.json({ posts: posts.sort((a, b) => b.date.localeCompare(a.date)) });
  } catch {
    return NextResponse.json({ error: 'Failed to read posts' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const { title, excerpt, category, tags, content } = await request.json();
    if (!title || !content) {
      return NextResponse.json({ error: 'Title and content are required' }, { status: 400 });
    }
    const slug = title.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-').replace(/--+/g, '-').trim();
    const date = new Date().toISOString().split('T')[0];
    const tagsArray = (tags || '').split(',').map((t: string) => t.trim()).filter(Boolean);
    const tagsYaml = tagsArray.length > 0 ? `[${tagsArray.map((t: string) => `"${t}"`).join(', ')}]` : '[]';

    const mdxContent = `---
title: "${title}"
date: "${date}"
excerpt: "${excerpt || ''}"
category: "${category || 'General'}"
tags: ${tagsYaml}
coverImage: ""
author:
  name: "Mohamed Ashif"
  avatar: "👤"
  bio: "Testing Associate at Amazon"
---

${content}
`;
    if (!fs.existsSync(BLOG_DIR)) fs.mkdirSync(BLOG_DIR, { recursive: true });
    fs.writeFileSync(path.join(BLOG_DIR, `${slug}.mdx`), mdxContent, 'utf8');
    return NextResponse.json({ message: 'Post created', slug });
  } catch {
    return NextResponse.json({ error: 'Failed to create post' }, { status: 500 });
  }
}
