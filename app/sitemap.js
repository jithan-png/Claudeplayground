import { services } from "@/lib/site";

const base = "https://www.genussrenovation.ca";

export default function sitemap() {
  const now = new Date();
  const staticRoutes = ["", "/projects", "/about", "/contact"].map((p) => ({
    url: `${base}${p}`,
    lastModified: now,
    priority: p === "" ? 1 : 0.8,
  }));
  const serviceRoutes = services.map((s) => ({
    url: `${base}/services/${s.slug}`,
    lastModified: now,
    priority: 0.9,
  }));
  return [...staticRoutes, ...serviceRoutes];
}
