import { createRequestHandler } from "@remix-run/netlify";

// Optional: Add custom context to loaders
export const handler = createRequestHandler({
  getLoadContext() {
    // Example: Pass environment variables or other data
    return {};
  },
});
