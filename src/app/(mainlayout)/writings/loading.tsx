import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
    return (
        <div className="min-h-screen animate-in fade-in duration-500">
            {/* Hero Banner Skeleton */}
            <section className="py-16 bg-muted/20 border-b border-border/50">
                <div className="container mx-auto px-4 text-center max-w-3xl space-y-4">
                    <Skeleton className="h-10 md:h-12 w-48 mx-auto rounded-md" />
                    <Skeleton className="h-4 w-3/4 mx-auto" />
                    <Skeleton className="h-12 max-w-md mx-auto rounded-full mt-6" />
                </div>
            </section>

            <div className="container mx-auto px-4 py-8">
                {/* Breadcrumb & Header Skeleton */}
                <Skeleton className="h-4 w-32 mb-6" />

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                    {/* Main Content (3-column cards grid matching WritingsClient) */}
                    <div className="lg:col-span-8">
                        <div className="flex items-center justify-between mb-8">
                            <Skeleton className="h-8 w-44" />
                            <Skeleton className="h-4 w-36" />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {Array.from({ length: 6 }).map((_, i) => (
                                <div key={i} className="flex flex-col space-y-3 bg-card border rounded-lg p-3">
                                    <Skeleton className="aspect-[1024/570] w-full rounded-md" />
                                    <Skeleton className="h-3 w-16" />
                                    <Skeleton className="h-5 w-full" />
                                    <Skeleton className="h-3 w-24" />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Sidebar Skeleton */}
                    <div className="lg:col-span-4 space-y-6">
                        <div className="bg-card rounded-xl border border-border p-4 space-y-4">
                            <Skeleton className="h-6 w-36" />
                            <div className="space-y-3">
                                {[1, 2, 3, 4].map((i) => (
                                    <div key={i} className="flex gap-3 items-start">
                                        <Skeleton className="w-16 h-14 rounded-md shrink-0" />
                                        <div className="space-y-2 flex-1">
                                            <Skeleton className="h-4 w-full" />
                                            <Skeleton className="h-3 w-20" />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
