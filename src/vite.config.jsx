import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  return {
    // vite config
    define: {
      __APP_ENV__URL: JSON.stringify(env.VITE_APP_URL),
      global: 'window',
    },
    alias: {
      '@': '/src',
    },
    root: '.',
    server: {
      proxy: {
        '/socket.io': {
          target: 'ws://localhost:5000',
          ws: true,
          changeOrigin: false,
          secure: false,
        },
      },
    },

    plugins: [react()],
    build: {
      outDir: '../backend/public',
      emptyOutDir: 'override',
    },
  };
});
