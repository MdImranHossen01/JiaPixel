import React from 'react';

interface PageHeaderProps {
  title: string;
  subtitle: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, subtitle }) => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-600 to-blue-600 text-white text-center">
      <h1 className="text-4xl md:text-5xl font-bold">{title}</h1>
      <p className="mt-4 text-xl max-w-3xl mx-auto">
        {subtitle}
      </p>
    </section>
  );
};

export default PageHeader;