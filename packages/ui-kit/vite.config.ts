import { defineConfig } from 'vite'

import path from 'node:path'
import dts from 'vite-dts'
import viteReact from '@vitejs/plugin-react'

const isExternal = (id: string) => !id.startsWith('.') && !path.isAbsolute(id)

export default defineConfig({
  esbuild: {
    jsxInject: "import React from 'react'",
  },
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
