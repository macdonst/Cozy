import { handler as ssrHandler } from "./dist/server/entry.mjs";

export async function handler(event) {
  console.log(`🚀 ${event.requestContext.http.method}: ${event.rawPath}`);

  if (event.rawPath.startsWith('/_astro')) {
    return {
        statusCode: 301,
        headers: {
          Location: `/_static${event.rawPath}`,
        }
      };
  }

  return await ssrHandler(
    event,
    { host: (process.env.ARC_SANDBOX ? "http://localhost:3333" : null) },
  );
}
