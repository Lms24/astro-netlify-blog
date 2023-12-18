import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import sentry from "@sentry/astro";

import spotlightjs from "@spotlightjs/astro";

// https://astro.build/config
export default defineConfig({
  site: "https://example.com",
  integrations: [
    mdx(),
    sitemap(),
    sentry({
      debug: true,
      dsn: "https://378cf0c9551d4233a70765ccd6095149@o447951.ingest.sentry.io/4505289071853568",
      sourceMapsUploadOptions: {
        project: "javascript-xj",
        authToken: process.env.SENTRY_AUTH_TOKEN,
      },
    }),
    spotlightjs(),
  ],
});
