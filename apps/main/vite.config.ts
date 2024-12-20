import path from 'node:path'

import react from '@vitejs/plugin-react-swc'
import analyze from 'rollup-plugin-analyzer'
import visualizer from 'rollup-plugin-visualizer'
import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'

const isDevelopment = Boolean(process.env.DEV ?? process.env.NODE_ENV === 'development')
const isAnalyzeEnabled = Boolean(process.env.ANALYZE)
const isNoMinify = Boolean(process.env.NO_MINIFY)
const isSourceMapsEnabled = Boolean(process.env.SOURCE_MAPS)

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  build: {
    minify: isNoMinify ? false : 'esbuild',
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          if (id.includes('mantine')) {
            return '@mantine'
          }

          if (id.includes('node_modules')) {
            return 'vendor'
          }
        },
      },
      plugins: isAnalyzeEnabled
        ? ([
            analyze(),
            visualizer({
              brotliSize: true,
              filename: path.join(__dirname, 'dist/stats/stats.html'),
              gzipSize: true,
              open: isDevelopment,
              projectRoot: path.join(__dirname),
            }),
          ] as unknown as any) // eslint-disable-line @typescript-eslint/no-explicit-any
        : [],
    },
    sourcemap: isSourceMapsEnabled,
  },
  plugins: [tsconfigPaths(), react()],
  server: {
    host: false,
    port: 3000,
  },
})
