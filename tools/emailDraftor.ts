// https://sdk.vercel.ai/docs/foundations/tools

import { generateText, tool } from 'ai';
import { z } from 'zod';
import { registry } from '../resources/registry';

// System prompt defining the AI's role and expertise
const SYSTEM_PROMPT = 
  `You are an expert at drafting emails. ` +
  `You draft emails based on the provided tone, information, and goal. `;

const MODEL_NAME = 'openai:gpt-4o';

/**
 * Tool for creating emails based on provided tone, information, and goal.
 * 
 * This tool utilizes an AI model to generate email content. It takes in three parameters:
 * - tone: The desired tone of the email (e.g., formal, informal).
 * - information: The content or key points to be included in the email.
 * - goal: The intended purpose or outcome of the email (e.g., to request information, to confirm a meeting).
 * 
 * @param {object} params - The parameters for email generation.
 * @param {string} params.tone - The tone of the email.
 * @param {string} params.information - The information to be included in the email.
 * @param {string} params.goal - The goal of the email.
 * @returns {Promise<string>} - The generated email text.
 * @throws {Error} - Throws an error if email generation fails.
 */
export const emailTool = tool({
  description: 'A tool for creating emails based on provided tone, information, and goal.',
  parameters: z.object({
    tone: z.string(),  // The tone of the email
    information: z.string(),  // The information to be included in the email
    goal: z.string(),  // The goal of the email
  }),
  execute: async ({ tone, information, goal }) => {

    console.log('email start');

    // Construct the prompt for the AI model
    const prompt = 
      `Tone: ${tone} ` + 
      `Information: ${information} ` +
      `Goal: ${goal}`;

    try {
      // Generate the email text using the AI model
      const { text } = await generateText({
        model: registry.languageModel(MODEL_NAME),  // Specify the AI model
        system: SYSTEM_PROMPT,  // Provide the system prompt
        prompt: prompt  // Provide the constructed prompt
      });

      console.log('email end');
      return text;  // Return the generated email text
    } catch (error) {
      console.error('Error generating email text', { error, tone, information, goal });  // Log any errors

      throw new Error('Failed to generate email text. Please try again later.');  // Throw an error if email generation fails
    }
  },
});
