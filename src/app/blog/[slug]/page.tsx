import React from 'react';

interface BlogPostProps {
    params: { slug: string };
}

const BlogPost: React.FC<BlogPostProps> = ({ params }) => {
    const slug: string = params.slug;
    return (
        <div>
            <h1>This is the blog post page for {slug}</h1>
        </div>
    );

};

export default BlogPost;