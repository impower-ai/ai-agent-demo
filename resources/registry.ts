import { createAzure } from '@ai-sdk/azure';
import { createOpenAI } from '@ai-sdk/openai';
import { experimental_createProviderRegistry as createProviderRegistry } from 'ai';


/**
 * This code demonstrates how to set up a provider registry for AI services using the AI SDK from Vercel.
 * For detailed information, visit: https://sdk.vercel.ai/docs/ai-sdk-core/provider-management
 */

export const registry = createProviderRegistry({

    openai: createOpenAI({
        apiKey: process.env.OPENAI_API_KEY,
    }),


    azure: createAzure({
        resourceName: process.env.AZURE_RG,
        apiKey: process.env.AZURE_OPENAI_API_KEY,
    }),


    // add more proviers to your registry
});