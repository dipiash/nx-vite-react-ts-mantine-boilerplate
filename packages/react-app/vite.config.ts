import { defineConfig } from 'vite'
import viteReact from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'
import visualizer from 'rollup-plugin-visualizer'
import analyze from 'rollup-plugin-analyzer'
import path from 'node:path'

import { dependencies } from '../../package.json'
function renderChunks(deps: Record<string, string>) {
  const chunks = {}

  for (const key of Object.keys(deps)) {
    if (['react', 'react-router-dom', 'react-dom'].includes(key)) continue
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    chunks[key] = [key]
  }

  return chunks
}

// https://vitejs.dev/config/
export default defineConfig({
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
      open: true, // TODO: BANDLE_ANALYZER
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
              displayName: true, // TODO: Need to add production settings
              fileName: true, // TODO: Need to add production settings
            },
          ],
        ],
      },
    }),
  ],
})
