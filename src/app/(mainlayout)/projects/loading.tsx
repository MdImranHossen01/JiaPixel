import { Skeleton } from "@/components/ui/skeleton";
import { GridSkeleton } from "@/components/CardSkeleton";

export default function Loading() {
    return (
        <div className="min-h-screen animate-in fade-in duration-500">
            {/* Hero Section Skeleton matching ProjectsClient */}
            <section className="py-16 bg-muted/20 border-b border-border/50">
                <div className="container mx-auto px-4 text-center max-w-3xl space-y-4">
                    <Skeleton className="h-10 md:h-12 w-2/3 mx-auto rounded-md" />
                    <Skeleton className="h-4 w-5/6 mx-auto" />
                    <Skeleton className="h-12 max-w-md mx-auto rounded-full mt-6" />
                </div>
            </section>

            {/* 4-Column Grid Skeleton matching ProjectsClient */}
            <div className="container mx-auto px-4 py-12">
                <GridSkeleton count={8} />
            </div>
        </div>
    );
}
