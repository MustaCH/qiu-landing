import type { MetadataRoute } from "next";
import { BASE_URL } from "./robots";

type ChangeFrequency = MetadataRoute.Sitemap[number]["changeFrequency"];

const lastModified = new Date();

const sections: Array<{ path: string; changeFrequency: ChangeFrequency }> = [
  { path: "/", changeFrequency: "weekly" },
  { path: "/#beneficios", changeFrequency: "monthly" },
  { path: "/#servicios", changeFrequency: "monthly" },
  { path: "/#proceso", changeFrequency: "monthly" },
  { path: "/#contacto", changeFrequency: "monthly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return sections.map(({ path, changeFrequency }) => ({
    url: new URL(path, BASE_URL).toString(),
    lastModified,
    changeFrequency,
  }));
}
