import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/taskreact/", // Replace with your actual GitHub repo name
  build: {
    outDir: "dist", // Ensure build output goes to "dist"
  },
});
