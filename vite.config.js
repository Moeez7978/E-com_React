import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    port: 3000,
  },
  test: {
    globals: true,
    environment: "jsdom",   // so window + DOM APIs exist
    setupFiles: "./setupTests.js", // 👈 add this
    coverage: {
      provider: "v8",
      reporter: ["text", "json", "html"],
    },
  },
  base: "/E-com_React",
})

// https://vite.dev/config/
