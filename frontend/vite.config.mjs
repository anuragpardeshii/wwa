// New (vite.config.mjs using ESM)
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [react()],
    assetsInclude: ['**/*.JPG'],
});
