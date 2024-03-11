import { defineConfig } from 'astro/config';
import awsAdapter from 'astro-lambda-adapter';

export default defineConfig({
  output: "server", // enable SSR
  adapter: awsAdapter(),
  outDir: './server',
});
