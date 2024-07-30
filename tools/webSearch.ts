// https://sdk.vercel.ai/docs/foundations/tools

import { tool } from "ai";
import { getJson } from "serpapi";
import { z } from 'zod';

export const webSearchTool = tool({
  description: 'A tool for searching the web based on a query.',
  parameters: z.object({
    query: z.string()
  }),
  execute: async ({ query }) => {

    console.log('webSearch. start')

    const response = await getJson({
      engine: "google",
      api_key: '38f1f095dc0d3a49ad2c8886c4b13c91561fe6b40494e2418b0282ad1f3b228b',
      q: query
    });

    console.log('webSearch. done')

    return response["organic_results"]
  }
})