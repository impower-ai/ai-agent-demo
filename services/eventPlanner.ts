import { aiApi } from "../resources/api";
import { registry } from "../resources/registry";
import { generateText } from 'ai';
import { emailTool } from "../tools/emailDraftor";
import { webSearchTool } from "../tools/webSearch";
import { onThisDayTool } from "../tools/onThisDay";

/**
 * POST endpoint for generating an event plan using AI.
 * 
 * This endpoint takes in an event description and uses an AI model to:
 * 1. Create an email template for inquiring about event details.
 * 2. Research and list five potential venues in the event's location.
 * 3. Find five catering companies that provide diverse menus.
 * 4. Discover a unique, joyful, and playful fact about the day of the event.
 * 5. Create an invitation email template to be sent to each invitee, incorporating the unique fact and tying it into the event.
 * 
 * @param {object} ctx - The context object, including request and response.
 * @returns {object} - The generated event plan or an error message.
 */
aiApi.post("/agent/eventPlanner", async (ctx) => {
  const { event } = ctx.req.json();  // Extract the event information from the request body

  // Define the prompt for the AI model
  const prompt =
    `You are a professional event planner. ` +
    `Reason step by step. ` +
    `Create an email template for inquiring about the event details. ` +
    `Research and list five potential venues in the event's location. ` +
    `Find five catering companies that provide diverse menus. ` +
    `Discover a unique, joyful, and playful fact about the day of the event. ` +
    `Create an invitation email template to be sent to each invitee, incorporating the unique fact and tying it into the event. ` +
    `Plan a party based on the following information: ` +
    `${event}`;

  try {
    // Generate the event plan using the AI model
    const result = await generateText({
      model: registry.languageModel('openai:gpt-4o'),  // Specify the AI model
      prompt: prompt,  // Provide the defined prompt
      tools: {
        emailTool,  // Tool for creating email templates
        webSearchTool,  // Tool for web searching
        onThisDayTool  // Tool for finding unique facts about the day of the event
      },
      maxToolRoundtrips: 10  // Set the maximum number of tool roundtrips
    });

    ctx.res.body = result.text;  // Set the response body to the generated event plan
  } catch (error) {
    console.error('Error generating event plan:', error);  // Log any errors
    ctx.res.body = { error: 'Failed to generate event plan' };  // Set the response body to an error message
  }

  return ctx;  // Return the context
});
