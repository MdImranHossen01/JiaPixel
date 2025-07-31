// app/components/CustomNotFound.tsx
"use client";

import { useSearchParams } from "next/navigation";

export default function CustomNotFound() {
  const searchParams = useSearchParams();
  const from = searchParams.get("from");

  return (
    <div className="min-h-screen flex items-center justify-center flex-col text-center p-4">
      <h1 className="text-4xl font-bold text-red-600">404 - Page Not Found</h1>
      {from && (
        <p className="mt-4 text-gray-600">
          You were trying to access: <strong>{from}</strong>
        </p>
      )}
    </div>
  );
}
