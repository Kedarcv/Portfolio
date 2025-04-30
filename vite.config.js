import { defineConfig } from 'vite';

export default defineConfig({
  resolve: {
    alias: {
      'three': 'three',
      'dat.gui': 'dat.gui'
    }
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          three: ['three'],
          'dat.gui': ['dat.gui']
        }
      }
    }
  }
});