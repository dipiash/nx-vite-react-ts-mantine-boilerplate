import viteReact from '@vitejs/plugin-react'
import path from 'node:path'
import { defineConfig } from 'vite'
import dts from 'vite-dts'

const isDevelopment = Boolean(process.env['DEV'] || process.env['NODE_ENV'] === 'development')

const isExternal = (id: string) => !id.startsWith('.') && !path.isAbsolute(id)

export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      formats: ['es'],
    },
    rollupOptions: {
      external: isExternal,
    },
  },
  plugins: [
    dts(),
    viteReact({
      babel: {
        plugins: [
          [
            '@emotion',
            {
              sourceMap: isDevelopment,
              autoLabel: 'dev-only',
              labelFormat: '[filename]--[local]',
              cssPropOptimization: true,
            },
          ],
        ],
      },
    }),
  ],
})
