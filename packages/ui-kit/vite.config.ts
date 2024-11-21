import path from 'node:path'

import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vite'
import dts from 'vite-dts'

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
  plugins: [dts(), react()],
})
