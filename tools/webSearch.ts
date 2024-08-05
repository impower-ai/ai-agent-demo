// https://sdk.vercel.ai/docs/foundations/tools

import { tool } from "ai";
import { getJson } from "serpapi";
import { z } from 'zod';

/**
 * Tool for performing web searches based on a query.
 * 
 * This tool utilizes the SerpAPI to perform Google searches and retrieve the organic search results.
 * 
 * @param {object} params - The parameters for the web search.
 * @param {string} params.query - The search query.
 * @returns {Promise<object[]>} - The organic search results.
 * @throws {Error} - Throws an error if the web search fails.
 */
export const webSearchTool = tool({
  description: 'A tool for searching the web based on a query.',
  parameters: z.object({
    query: z.string()  // The search query
  }),
  execute: async ({ query }) => {
    console.log('webSearch. start');

    try {
      // Perform the web search using SerpAPI
      const response = await getJson({
        engine: "google",  // Specify the search engine
        api_key: process.env.SERP_API_KEY,  // API key for SerpAPI
        q: query  // The search query
      });

      console.log('webSearch. done');

      return response["organic_results"];  // Return the organic search results
    } catch (error) {
      console.error('Error performing web search:', error);  // Log any errors
      throw new Error('Failed to perform web search. Please try again later.');  // Throw an error if the web search fails
    }
  }
});
