// once-ui.config.ts

import { person, social, newsletter, home, about, blog, work, gallery } from "./content";

// --- CORE CONFIGURATION ---
export const routes = { "/": true, "/about": true, "/blog": true, "/work": true, "/gallery": false };
export const protectedRoutes = {};
export const display = { hireMeButton: true };
export const mailchimp = { /* Your mailchimp settings */ };

// --- BRANDING & STYLE ---
export const baseURL = "https://example.com";
export const fonts = { 
    heading: { name: "Inter", variable: "--font-heading" },
    body: { name: "Inter", variable: "--font-body" },
    label: { name: "Inter", variable: "--font-label" },
    code: { name: "JetBrains Mono", variable: "--font-code" },
};

// ** THEME CONFIGURATION **
export const style = {
  brand: "neutral",
  accent: "neutral",
  neutral: "neutral",
  solid: "neutral-1200",
  solidStyle: "flat",
  border: "thin",
  surface: "flat",
  transition: "fast",
  scaling: "102",
};

// ** DATA VIZ CONFIG **
export const dataStyle = {
  variant: "monochrome",
};

// ** VISUAL EFFECTS **
export const effects = {
  mask: { display: true, x: "mouse", y: "mouse", radius: "xl", cursor: "default", opacity: "05", color: "neutral-800" },
  gradient: { display: false },
  dots: { display: false },
  grid: { display: false },
  lines: { display: false },
};

// --- SCHEMA & METADATA ---
export const schema = { type: "person", name: person.name, url: baseURL, image: `${baseURL}${person.avatar}` };
export const sameAs = social.map((s) => s.link);

// Re-export all content and config
export { person, social, newsletter, home, about, blog, work, gallery };
