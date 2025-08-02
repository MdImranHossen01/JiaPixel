import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

// Define the props for the page
interface BlogPostProps {
  params: {
    slug: string;
  };
}

// Make this async (simulate database call)
function getPostBySlug(slug: string) {
  const posts = [
    { slug: 'getting-started-with-nextjs', title: 'Getting Started with Next.js', content: 'This is the content for the Next.js post.' },
    { slug: 'the-complete-guide-to-css-grid', title: 'The Complete Guide to CSS Grid', content: 'This is the content for the CSS Grid post.' },
  ];
  return posts.find((p) => p.slug === slug) ?? null;
}

// ✅ Async Component
export default function BlogPostPage({ params }: BlogPostProps) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="container mx-auto p-8 min-h-[70vh]">
      <h1 className="text-4xl font-bold">{post.title}</h1>
      <p className="mt-4 text-lg text-gray-600">{post.content}</p>
    </main>
  );
}

// ✅ Async Metadata Generator
export function generateMetadata({ params }: BlogPostProps): Metadata {
  const post = getPostBySlug(params.slug);
  return {
    title: post?.title ?? 'Post Not Found',
  };
}
