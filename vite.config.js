import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/SystItSoft/",  // Ensure this is correct
  build: {
    outDir: "dist", // Default build directory
  },
});
