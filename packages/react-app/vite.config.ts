import viteReact from '@vitejs/plugin-react'
import path from 'node:path'
import analyze from 'rollup-plugin-analyzer'
import visualizer from 'rollup-plugin-visualizer'
import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'

import { dependencies } from '../../package.json'

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
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-router-dom', 'react-dom'],
          ...renderChunks(dependencies),
        },
      },
    },
  },
  plugins: [
    visualizer({
      filename: path.join(__dirname, 'stats.html'),
      open: import.meta.env?.DEV,
      gzipSize: true,
      brotliSize: true,
      projectRoot: path.join(__dirname),
    }),
    analyze(),
    tsconfigPaths(),
    viteReact({
      babel: {
        compact: false,
        plugins: [
          [
            'babel-plugin-styled-components',
            {
              pure: true,
              ssr: true,
              displayName: Boolean(process.env.DEV),
              fileName: Boolean(process.env.DEV),
            },
          ],
        ],
      },
    }),
  ],
})
