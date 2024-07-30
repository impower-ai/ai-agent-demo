// https://sdk.vercel.ai/docs/foundations/tools

import { registry } from "../resources/registry";
import { generateObject, tool } from "ai";
import fs from 'fs';
import { z } from 'zod';
import { ApiOptions, callApi } from "../resources/apiCaller";

const apiDocumentation = fs.readFileSync('knowledge/onThisDayApi.yaml', 'utf-8');

const SYSTEM_PROMPT = 
  `You are an AI Agent that interacts with a system called On This Day through an API. ` +
  `Your job is to take in a request, evaluate the API documentation, and produce the correct API call to be made. ` +
  `If no further instructions are provided in the request, use the events endpoint. ` +
  `Always recommend one API endpoint, and formulate that endpoint with the correct data. ` +
  `Here is the API documentation you need to reference:\n\n${apiDocumentation}\n\n`; 

const MODEL_NAME = 'openai:gpt-4o';

export const onThisDayTool = tool({
    description: 'This API can be used to retrieve births, deaths, and events for any given day of the year. The data is all harvested from Wikipedia.',
    parameters: z.object({
        date: z.string()
    }),
    execute: async ({ date }) => {
        console.log('onThisDay. start');

        const prompt = `Request: ${date}`;

        try {
            const { object } = await generateObject({
                model: registry.languageModel(MODEL_NAME),
                system: SYSTEM_PROMPT,
                prompt: prompt,
                schema: z.object({
                    baseUrl: z.string(),
                    endpoint: z.string(),
                    method: z.enum(['get', 'post', 'put', 'delete']),
                    params: z.record(z.any()).optional(),
                    data: z.record(z.any()).optional(),
                })
            });

            const response = await callApi(object as ApiOptions)
   
            console.log('onThisDay. done');

            return response;
        } catch (error) {
            console.error('Error generating object:', error);
            throw error;
        }
    }
});
