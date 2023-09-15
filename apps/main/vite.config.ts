import path from 'node:path'
import analyze from 'rollup-plugin-analyzer'
import visualizer from 'rollup-plugin-visualizer'
import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'

import react from '@vitejs/plugin-react-swc'

import { dependencies } from '../../package.json'

const isDevelopment = Boolean(process.env.DEV || process.env.NODE_ENV === 'development')
const isAnalyzeEnabled = Boolean(process.env.ANALYZE)
const isNoMinify = Boolean(process.env.NO_MINIFY)
const isSourceMapsEnabled = Boolean(process.env.SOURCE_MAPS)

function renderChunks(deps: Record<string, string>) {
  const chunks = {}

  for (const key of Object.keys(deps)) {
    if (['react', 'react-router-dom', 'react-dom'].includes(key)) {
      continue
    }

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    chunks[key] = [key]
  }

  return chunks
}

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  build: {
    minify: isNoMinify ? false : 'esbuild',
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-router-dom', 'react-dom'],
          ...renderChunks(dependencies),
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
    https: false,
    port: 3000,
  },
})
