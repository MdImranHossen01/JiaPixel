'use client'

import { useSearchParams } from 'next/navigation'
import { Suspense } from 'react'

export default function NotFoundPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="text-lg mb-6">The page you’re looking for doesn’t exist.</p>

      {/* ✅ Wrap client hook in Suspense */}
      <Suspense fallback={<div>Loading...</div>}>
        <SearchQuery />
      </Suspense>
    </div>
  )
}

// ✅ Move useSearchParams into a separate component
function SearchQuery() {
  const searchParams = useSearchParams()
  const query = searchParams.get('q')

  if (!query) return null

  return <p className="text-sm text-gray-500">You searched for: <code>{query}</code></p>
}
