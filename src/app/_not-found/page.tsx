'use client'

import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

const NotFoundPage = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SearchParamsContent />
    </Suspense>
  );
};

const SearchParamsContent = () => {
  const searchParams = useSearchParams();
  const query = searchParams.get('q');

  return (
    <div className="min-h-screen flex flex-col justify-center items-center text-center px-4">
      <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="mb-2">The page you’re looking for doesn’t exist.</p>
      {query && (
        <p className="text-sm text-gray-500">Searched for: <code>{query}</code></p>
      )}
    </div>
  );
};

export default NotFoundPage;
