import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
    return (
        <div className="min-h-screen animate-in fade-in duration-500">
            {/* Hero Section Skeleton */}
            <section className="py-16 bg-muted/20 border-b border-border/50">
                <div className="container mx-auto px-4 text-center max-w-3xl space-y-4">
                    <Skeleton className="h-10 md:h-12 w-2/3 mx-auto rounded-md" />
                    <Skeleton className="h-4 w-5/6 mx-auto" />
                    <Skeleton className="h-12 max-w-md mx-auto rounded-full mt-6" />
                </div>
            </section>

            {/* 3-Column Grid Skeleton matching PortfoliosClient */}
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {Array.from({ length: 6 }).map((_, i) => (
                        <div key={i} className="flex flex-col space-y-3 bg-card border rounded-xl overflow-hidden p-3">
                            <Skeleton className="aspect-[16/10] w-full rounded-lg" />
                            <Skeleton className="h-5 w-3/4" />
                            <Skeleton className="h-4 w-1/2" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
