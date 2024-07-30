import { aiApi } from "../resources/api";
import { registry } from "../resources/registry";
import { generateText } from 'ai';
import { emailTool } from "../tools/emailDraftor";
import { webSearchTool } from "../tools/webSearch";
import { onThisDayTool } from "../tools/onThisDay";

aiApi.post("/agent/eventPlanner", async (ctx) => {
  const { event } = ctx.req.json();

  const prompt = 
    `You are a professional event planner. ` +
    `Reason step by step. ` +
    `Create an email template that will be used for inquiring. ` +
    `Research five locations in the location of the event` +
    `Find a catering company for food ` +
    `Look up a uniqe fact about the day. Select a fact that is joyful and playful. ` +
    `Create an invitation email template that will be sent to each invitee. Include the fact and tie it into the event. ` +
    `Plan a party based on the following information: ` +
    `${event}`;

  try {
    const result = await generateText({
      model: registry.languageModel('openai:gpt-4o'),
      prompt: prompt,
      tools: {
        emailTool,
        webSearchTool,
        onThisDayTool
      },
      maxToolRoundtrips: 10
    });

    ctx.res.body = result.text
  } catch (error) {
    console.error('Error generating event plan:', error);
    ctx.res.body = { error: 'Failed to generate event plan' };
  }

  return ctx;
});
