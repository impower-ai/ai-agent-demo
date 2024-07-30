// https://sdk.vercel.ai/docs/foundations/tools

import { generateText, tool } from 'ai';
import { z } from 'zod';
import { registry } from '../resources/registry';

const SYSTEM_PROMPT = 
  `You are an expert at drafting emails. ` +
  `You draft emails based on the provided tone, information, and goal. `;

const MODEL_NAME = 'openai:gpt-4o';

export const emailTool = tool({
  description: 'A tool for creating emails based on provided tone, information, and goal.',
  parameters: z.object({
    tone: z.string(),
    information: z.string(),
    goal: z.string(),
  }),
  execute: async ({ tone, information, goal }) => {

    console.log('email start')

    const prompt = 
      `Tone: ${tone} ` + 
      `Information: ${information} ` +
      `Goal: ${goal}`;

    try {
      const { text } = await generateText({
        model: registry.languageModel(MODEL_NAME),
        system: SYSTEM_PROMPT,
        prompt: prompt
      });

      console.log('email end')
      return text;
    } catch (error) {
      console.error('Error generating email text', { error, tone, information, goal });

      throw new Error('Failed to generate email text. Please try again later.');
    }
  },
});
