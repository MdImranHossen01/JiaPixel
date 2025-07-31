// app/404/page.tsx
import { Suspense } from "react";
import CustomNotFound from "../components/CustomNotFound";

export default function NotFoundPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <CustomNotFound />
    </Suspense>
  );
}
