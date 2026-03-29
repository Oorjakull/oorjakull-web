import type { MetadataRoute } from "next";
import { getAllBlogSlugs } from "@/lib/blog";

const SITE_URL = "https://www.oorjakull.com";

export default function sitemap(): MetadataRoute.Sitemap {
    const staticRoutes = [
        { path: "", priority: 1.0, changeFrequency: "weekly" as const },
        { path: "/yoga", priority: 0.9, changeFrequency: "weekly" as const },
        { path: "/about", priority: 0.8, changeFrequency: "monthly" as const },
        { path: "/courses", priority: 0.9, changeFrequency: "monthly" as const },
        { path: "/blog", priority: 0.8, changeFrequency: "weekly" as const },
        { path: "/contact", priority: 0.6, changeFrequency: "monthly" as const },
        { path: "/book-trial", priority: 0.7, changeFrequency: "monthly" as const },
    ];

    const blogSlugs = getAllBlogSlugs();

    const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
        url: `${SITE_URL}${route.path}`,
        lastModified: new Date(),
        changeFrequency: route.changeFrequency,
        priority: route.priority,
    }));

    const blogEntries: MetadataRoute.Sitemap = blogSlugs.map((slug) => ({
        url: `${SITE_URL}/blog/${slug}`,
        lastModified: new Date(),
        changeFrequency: "monthly" as const,
        priority: 0.7,
    }));

    return [...staticEntries, ...blogEntries];
}
