import type { MetadataRoute } from "next";
export default function sitemap(): MetadataRoute.Sitemap{
    return [

        {url: "https://equibytes.de"},
        {url: "https://equibytes.de/impressum"},
        {url: "https://equibytes.de/datenschutz"},
    ]
}