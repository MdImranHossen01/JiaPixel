// src/app/404/page.tsx
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center px-4">
      <h1 className="text-6xl font-bold text-purple-600 mb-4">404</h1>
      <p className="text-lg text-gray-700 mb-8">
        Oops! The page you're looking for doesn't exist.
      </p>
      <Link
        href="/"
        className="px-6 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 transition"
      >
        Go back home
      </Link>
    </div>
  );
}
