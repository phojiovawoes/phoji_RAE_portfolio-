import { defineConfig } from 'vite';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('.', import.meta.url));

export default defineConfig({
  server: {
    watch: {
      ignored: [
        `${root}.chrome-profile-*`,
        `${root}.npm-cache/**`,
        `${root}.npm-logs/**`
      ]
    }
  }
});
