import { unstable_cache } from "next/cache";
import connectDB from "@/lib/db";
import Project from "@/models/Project";
import Writing from "@/models/Writing";
import PortfoilioSection from "./PortfoilioSection";
import HoverServices from "./HoverServices";
import FaqSection from "./faq/FaqSection";
import AboutUsSection from "./aboutus/AboutUsSection";
import MarketingFeatures from "./MarketingFeatures";
import SEOFeatures from "./SEOFeatures";
import FeaturedProjectSection from "./FeaturedProjectSection/FeaturedProjectSection";
import WritingSection from "./WritingSection/WritingSection";

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
