import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
	base: "/semester-project-2/", // needed for GitHub Pages
	plugins: [tailwindcss()],
});