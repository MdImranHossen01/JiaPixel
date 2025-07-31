import React from 'react';
import { FiCalendar, FiUser, FiTag, FiArrowRight, FiSearch, FiClock } from 'react-icons/fi';

const BlogPostCard = ({ title, excerpt, date, author, category, readTime, image }) => {
  return (
    <article className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center text-sm text-gray-500 mb-3">
          <span className="flex items-center mr-4">
            <FiCalendar className="mr-1" /> {date}
          </span>
          <span className="flex items-center mr-4">
            <FiUser className="mr-1" /> {author}
          </span>
          <span className="flex items-center">
            <FiClock className="mr-1" /> {readTime}
          </span>
        </div>
        <span className="inline-block px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-xs font-medium mb-3">
          {category}
        </span>
        <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{excerpt}</p>
        <a 
          href="#" 
          className="text-purple-600 hover:text-purple-800 font-medium flex items-center transition-colors duration-300"
        >
          Read more <FiArrowRight className="ml-1" />
        </a>
      </div>
    </article>
  );
};

const BlogSidebar = () => {
  const categories = [
    { name: "Web Development", count: 12 },
    { name: "UI/UX Design", count: 8 },
    { name: "Mobile Apps", count: 5 },
    { name: "Digital Marketing", count: 7 },
    { name: "Business Strategy", count: 3 }
  ];

  const popularPosts = [
    {
      title: "10 React Best Practices in 2023",
      date: "May 15, 2023",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
    },
    {
      title: "The Future of JavaScript Frameworks",
      date: "April 28, 2023",
      image: "https://images.unsplash.com/photo-1579403124614-197f69d8187b?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
    },
    {
      title: "Building Scalable Microservices",
      date: "March 10, 2023",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
    }
  ];

  return (
    <div className="space-y-8">
      {/* Search Widget */}
      <div className="bg-white p-6 rounded-xl shadow-md">
        <h3 className="text-lg font-bold text-gray-800 mb-4">Search</h3>
        <div className="relative">
          <input 
            type="text" 
            placeholder="Search articles..." 
            className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          />
          <FiSearch className="absolute left-3 top-3 text-gray-400" />
        </div>
      </div>

      {/* Categories Widget */}
      <div className="bg-white p-6 rounded-xl shadow-md">
        <h3 className="text-lg font-bold text-gray-800 mb-4">Categories</h3>
        <ul className="space-y-2">
          {categories.map((category, index) => (
            <li key={index} className="flex justify-between items-center">
              <a href="#" className="text-gray-600 hover:text-purple-600 flex items-center">
                <FiTag className="mr-2 text-sm" /> {category.name}
              </a>
              <span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full">
                {category.count}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Popular Posts Widget */}
      <div className="bg-white p-6 rounded-xl shadow-md">
        <h3 className="text-lg font-bold text-gray-800 mb-4">Popular Posts</h3>
        <div className="space-y-4">
          {popularPosts.map((post, index) => (
            <div key={index} className="flex items-center space-x-3">
              <div className="flex-shrink-0">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-16 h-16 object-cover rounded-lg"
                />
              </div>
              <div>
                <a href="#" className="text-gray-800 hover:text-purple-600 font-medium">
                  {post.title}
                </a>
                <p className="text-sm text-gray-500">{post.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Blog = () => {
  const blogPosts = [
    {
      title: "Getting Started with Next.js and TypeScript",
      excerpt: "Learn how to set up a new project with Next.js and TypeScript for better developer experience and type safety.",
      date: "June 5, 2023",
      author: "Sarah Johnson",
      category: "Web Development",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "The Complete Guide to CSS Grid Layout",
      excerpt: "Master CSS Grid with this comprehensive guide covering all the properties and practical examples for modern layouts.",
      date: "May 22, 2023",
      author: "Michael Chen",
      category: "Web Development",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Building Accessible Web Applications",
      excerpt: "Essential techniques and tools to ensure your web applications are accessible to all users regardless of ability.",
      date: "May 10, 2023",
      author: "Emma Davis",
      category: "UI/UX Design",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "State Management in React Applications",
      excerpt: "Comparing different state management solutions for React and when to use each one in your projects.",
      date: "April 28, 2023",
      author: "David Wilson",
      category: "Web Development",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Mobile First Design Principles",
      excerpt: "Why mobile-first design matters and how to implement it effectively in your design workflow.",
      date: "April 15, 2023",
      author: "Jessica Lee",
      category: "UI/UX Design",
      readTime: "4 min read",
      image: "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Optimizing React Performance",
      excerpt: "Practical tips and tricks to improve the performance of your React applications.",
      date: "March 30, 2023",
      author: "Robert Taylor",
      category: "Web Development",
      readTime: "9 min read",
      image: "https://images.unsplash.com/photo-1579403124614-197f69d8187b?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Blog Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-purple-100 text-purple-600 font-medium text-sm mb-4">
            Our Blog
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Insights & Updates
          </h1>
          <p className="max-w-2xl mx-auto text-xl text-gray-600">
            Stay updated with the latest trends, tutorials, and company news
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <main className="lg:w-2/3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {blogPosts.map((post, index) => (
                <BlogPostCard 
                  key={index}
                  title={post.title}
                  excerpt={post.excerpt}
                  date={post.date}
                  author={post.author}
                  category={post.category}
                  readTime={post.readTime}
                  image={post.image}
                />
              ))}
            </div>

            {/* Pagination */}
            <div className="mt-12 flex justify-center">
              <nav className="flex items-center space-x-2">
                <button className="px-4 py-2 bg-white border border-gray-200 rounded-md text-gray-500 hover:bg-gray-50">
                  Previous
                </button>
                <button className="px-4 py-2 bg-purple-600 text-white rounded-md">
                  1
                </button>
                <button className="px-4 py-2 bg-white border border-gray-200 rounded-md text-gray-700 hover:bg-gray-50">
                  2
                </button>
                <button className="px-4 py-2 bg-white border border-gray-200 rounded-md text-gray-700 hover:bg-gray-50">
                  3
                </button>
                <button className="px-4 py-2 bg-white border border-gray-200 rounded-md text-gray-500 hover:bg-gray-50">
                  Next
                </button>
              </nav>
            </div>
          </main>

          {/* Sidebar */}
          <aside className="lg:w-1/3">
            <BlogSidebar />
          </aside>
        </div>
      </div>
    </section>
  );
};

export default Blog;