import { registry } from "../resources/registry";
import { generateObject, tool } from "ai";
import fs from 'fs';
import { z } from 'zod';
import { ApiOptions, callApi } from "../resources/apiCaller";

// Load the API documentation from a YAML file
const apiDocumentation = fs.readFileSync('knowledge/onThisDayApi.yaml', 'utf-8');

// System prompt defining the AI's role and instructions
const SYSTEM_PROMPT = 
  `You are an AI Agent that interacts with a system called On This Day through an API. ` +
  `Your job is to take in a request, evaluate the API documentation, and produce the correct API call to be made. ` +
  `If no further instructions are provided in the request, use the events endpoint. ` +
  `Always recommend one API endpoint, and formulate that endpoint with the correct data. ` +
  `Here is the API documentation you need to reference:\n\n${apiDocumentation}\n\n`; 

const MODEL_NAME = 'openai:gpt-4o';

/**
 * Tool for retrieving historical data (births, deaths, events) for any given day of the year.
 * 
 * This tool interacts with the "On This Day" API, using AI to generate the correct API calls based on user requests.
 * 
 * @param {object} params - The parameters for the API call.
 * @param {string} params.date - The date for which to retrieve historical data.
 * @returns {Promise<object>} - The API response containing the historical data.
 * @throws {Error} - Throws an error if the API call or object generation fails.
 */
export const onThisDayTool = tool({
    description: 'This API can be used to retrieve births, deaths, and events for any given day of the year. The data is all harvested from Wikipedia.',
    parameters: z.object({
        date: z.string()  // The date for which to retrieve historical data
    }),
    execute: async ({ date }) => {
        console.log('onThisDay. start');

        // Construct the prompt for the AI model
        const prompt = `Request: ${date}`;

        try {
            // Generate the object for the API call using the AI model
            const { object } = await generateObject({
                model: registry.languageModel(MODEL_NAME),  // Specify the AI model
                system: SYSTEM_PROMPT,  // Provide the system prompt
                prompt: prompt,  // Provide the constructed prompt
                schema: z.object({
                    baseUrl: z.string(),  // Base URL for the API
                    endpoint: z.string(),  // API endpoint to be used
                    method: z.enum(['get', 'post', 'put', 'delete']),  // HTTP method
                    params: z.record(z.any()).optional(),  // Optional parameters for the API call
                    data: z.record(z.any()).optional(),  // Optional data for the API call
                })
            });

            // Make the API call and get the response
            const response = await callApi(object as ApiOptions);

            console.log('onThisDay. done');

            return response;  // Return the API response
        } catch (error) {
            console.error('Error generating object:', error);  // Log any errors
            throw error;  // Throw an error if object generation or API call fails
        }
    }
});
