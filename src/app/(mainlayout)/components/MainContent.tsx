import { unstable_cache } from "next/cache";
import dynamic from "next/dynamic";
import connectDB from "@/lib/db";
import Project from "@/models/Project";
import Writing from "@/models/Writing";
import FeaturedProjectSection from "./FeaturedProjectSection/FeaturedProjectSection";

const AboutUsSection = dynamic(() => import("./aboutus/AboutUsSection"));
const PortfoilioSection = dynamic(() => import("./PortfoilioSection"));
const HoverServices = dynamic(() => import("./HoverServices"));
const SEOFeatures = dynamic(() => import("./SEOFeatures"));
const MarketingFeatures = dynamic(() => import("./MarketingFeatures"));
const WritingSection = dynamic(() => import("./WritingSection/WritingSection"));
const FaqSection = dynamic(() => import("./faq/FaqSection"));

const getCachedFeaturedProjects = unstable_cache(
  async () => {
    try {
      await connectDB();
      const projects = await Project.find({})
        .sort({ createdAt: -1 })
        .limit(8)
        .lean();
      return JSON.parse(JSON.stringify(projects));
    } catch (error) {
      console.error("Error fetching cached featured projects:", error);
      return [];
    }
  },
  ["featured-projects-home"],
  { revalidate: 31536000, tags: ["projects"] }
);

const getCachedLatestWritings = unstable_cache(
  async () => {
    try {
      await connectDB();
      const writings = await Writing.find({})
        .select("-__v")
        .sort({ publishedAt: -1, createdAt: -1 })
        .limit(4)
        .lean();
      return JSON.parse(JSON.stringify(writings));
    } catch (error) {
      console.error("Error fetching cached latest writings:", error);
      return [];
    }
  },
  ["latest-writings-home"],
  { revalidate: 31536000, tags: ["writings"] }
);

const MainContent = async () => {
  const [featuredProjects, latestWritings] = await Promise.all([
    getCachedFeaturedProjects(),
    getCachedLatestWritings(),
  ]);

  return (
    <>
      <FeaturedProjectSection initialProjects={featuredProjects} />
      <AboutUsSection />
      <PortfoilioSection />
      <HoverServices />
      <SEOFeatures />
      <MarketingFeatures />
      <WritingSection initialWritings={latestWritings} />
      <FaqSection />
    </>
  );
};

export default MainContent;
