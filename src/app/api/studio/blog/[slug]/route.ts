import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const BLOG_DIR = path.join(process.cwd(), 'src/content/blog');

export async function GET(_request: Request, { params }: { params: { slug: string } }) {
  try {
    const filePath = path.join(BLOG_DIR, `${params.slug}.mdx`);
    if (!fs.existsSync(filePath)) {
      return NextResponse.json({ error: 'Post not found' }, { status: 404 });
    }
    const raw = fs.readFileSync(filePath, 'utf8');
    const frontmatterMatch = raw.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
    if (!frontmatterMatch) {
      return NextResponse.json({ error: 'Invalid post format' }, { status: 500 });
    }
    const fm = frontmatterMatch[1];
    const content = frontmatterMatch[2].trim();
    const title = fm.match(/title:\s*"(.+?)"/)?.[1] || '';
    const date = fm.match(/date:\s*"(.+?)"/)?.[1] || '';
    const excerpt = fm.match(/excerpt:\s*"(.+?)"/)?.[1] || '';
    const category = fm.match(/category:\s*"(.+?)"/)?.[1] || '';
    const tagsMatch = fm.match(/tags:\s*\[(.+?)\]/);
    const tags = tagsMatch ? tagsMatch[1].replace(/"/g, '') : '';

    return NextResponse.json({ slug: params.slug, title, date, excerpt, category, tags, content });
  } catch {
    return NextResponse.json({ error: 'Failed to read post' }, { status: 500 });
  }
}

export async function DELETE(_request: Request, { params }: { params: { slug: string } }) {
  try {
    const filePath = path.join(BLOG_DIR, `${params.slug}.mdx`);
    if (!fs.existsSync(filePath)) {
      return NextResponse.json({ error: 'Post not found' }, { status: 404 });
    }
    fs.unlinkSync(filePath);
    return NextResponse.json({ message: 'Post deleted' });
  } catch {
    return NextResponse.json({ error: 'Failed to delete post' }, { status: 500 });
  }
}
