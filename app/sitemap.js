import { services, areas, costGuide } from "@/lib/site";

const base = "https://www.genussrenovation.ca";

export default function sitemap() {
  const now = new Date();
  const staticRoutes = [
    "",
    "/projects",
    "/cost-guide",
    "/reviews",
    "/areas",
    "/about",
    "/contact",
  ].map((p) => ({
    url: `${base}${p}`,
    lastModified: now,
    priority: p === "" ? 1 : 0.8,
  }));
  const serviceRoutes = services.map((s) => ({
    url: `${base}/services/${s.slug}`,
    lastModified: now,
    priority: 0.9,
  }));
  const areaRoutes = areas.map((a) => ({
    url: `${base}/areas/${a.slug}`,
    lastModified: now,
    priority: 0.85,
  }));
  return [...staticRoutes, ...serviceRoutes, ...areaRoutes];
}
