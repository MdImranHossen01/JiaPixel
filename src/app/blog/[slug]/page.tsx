import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

// Define the props for the page
interface BlogPostProps {
  params: {
    slug: string;
  };
}

// --- Example Data Fetching (this function can be async) ---
async function getPostBySlug(slug: string) {
  // In a real app, you would fetch this from a database or CMS
  const posts = [
    { slug: 'getting-started-with-nextjs', title: 'Getting Started with Next.js', content: 'This is the content for the Next.js post.' },
    { slug: 'the-complete-guide-to-css-grid', title: 'The Complete Guide to CSS Grid', content: 'This is the content for the CSS Grid post.' },
  ];
  const post = posts.find((p) => p.slug === slug);
  return post;
}


// --- Your Page Component (FIXED: removed the 'async' keyword) ---
export default function BlogPostPage({ params }: BlogPostProps) {
  // You can still use await for data fetching INSIDE the component
  const post = getPostBySlug(params.slug);

  // Handle cases where the post doesn't exist
  if (!post) {
    notFound();
  }

  return (
    <main className="container mx-auto p-8 min-h-[70vh]">
      <h1 className="text-4xl font-bold">{post.title}</h1>
      <p className="mt-4 text-lg text-gray-600">{post.content}</p>
      {/* ... rest of your blog post content */}
    </main>
  );
}

// You can also have a dynamic metadata function
export async function generateMetadata({ params }: BlogPostProps): Promise<Metadata> {
  const post = await getPostBySlug(params.slug);
  return {
    title: post?.title || 'Post Not Found',
  };
}