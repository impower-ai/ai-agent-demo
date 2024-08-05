# AI Agent Demo

We believe recent technological advancements in Generative AI have propelled us into a new era of business process automation. From basic task automation to conversational AI, we now stand at the forefront of Agentic AI. This significant milestone showcases the evolution towards more intelligent and autonomous systems. Our AI Agent Demo is designed to highlight the powerful capabilities of AI Agents in a clear and accessible way.

## Background

Over the past six years, we have used Robotic Process Automation (RPA)  tools to automate business processes internally and for clients. These low-code platforms orchestrate workflows across systems, execute business logic, determine paths, incorporate human input, and leverage complex data analysis.

Ultimately, traditional business automation workflow software is merely code 
designed to follow a specific path; there is no true intelligence. We simply define exactly what we want our automation to do programmatically, and it follows the given workflow. This is where RPA has always fallen short; we are taking flexible business processes and forcing them into rigid, predefined paths, limiting their true potential.

![image](https://github.com/user-attachments/assets/c2bc7e33-255e-4db4-bf60-f1e6abd388fe)


We employ exceptional technologists with a high-level expertise in RPA development. Discussions have consistently arisen regarding the inefficiencies and hindrances of RPA within a business context. These issues have propelled us on a quest for better solutions. We envision a world where automation is truly intelligent, capable of adapting, learning, and transforming businesses in unprecedented ways. With the technological advancements of recent years, we believe the time is now to turn this vision into reality.

Since November 30th, 2022, Generative AI has profoundly impacted our society, transforming user experiences and capabilities in our technology stack. Initially, it was impressive to create Retrieval-Augmented Generation (RAG)  apps or offer personalized chat experiences. However, we have now expanded into broader use cases that will significantly shape organizations for years to come. Generative AI has evolved from being conversational to autonomous, giving rise to Agentic systems. These systems address the shortcomings of traditional automation tools, offering a more advanced and versatile approach to automation.


![image](https://github.com/user-attachments/assets/90446237-ebbd-4952-a255-e44b4785e4c8)

Agentic AI's power lies in its ability to autonomously develop and execute complex plans while seeking human assistance when needed. This blend of independence and collaboration ensures streamlined and intelligent business operations, closely mirroring how humans naturally work. Unlike traditional automation, which follows rigid, predefined paths, Agentic AI reasons, adapts and evolves. For example, if you were preparing for a new client meeting, you would develop a plan, execute tasks, and seek help if needed—just like Agentic AI.


![image](https://github.com/user-attachments/assets/5f99e186-1676-4d82-89d4-d1ea77725f9a)

Another key enabler of Agentic systems is the set of tools—applications that AI agents can interact with. These tools allow AI agents to reason, decide, and fulfill their responsibilities effectively. Once an agent has its plan, it executes using available tools, similar to humans. For instance, when preparing for that new client meeting, you might use a CRM for client information, search online for details, and draft notes in a word processor. Likewise, Agentic AI systems understand their tasks, devise plans, and use the appropriate tools to accomplish them. Agents can be trained on external system APIs, enabling seamless interaction with various platforms and applications within your organization.




This is a stark contrast from traditional business process automation, where developers require substantial domain knowledge of a business process, often confining the process to rigidly defined parameters. Developers then code the process, handle exceptions, and maintain the system.

![image](https://github.com/user-attachments/assets/d153c8b9-2a79-4acf-9f80-c2e5decbc6c4)

Now, we live in a world where business processes can be described in plain English to an AI agent. We simply provide the agent with the correct tools and guidelines, and watch it autonomously complete the task. This shift significantly simplifies and accelerates the automation of business processes, making them more adaptable and efficient.

![image](https://github.com/user-attachments/assets/ae86dca3-eac6-49a7-8c10-4c0bc8ab2039)


We believe companies will soon have large teams of AI agents operating in parallel with employees, creating new levels of efficiency, innovation, and collaboration. When you harness the intelligence and reasoning of an LLM within business processes and enable seamless interaction with other systems, you transcend into the realm of TRUE intelligent automation.

![image](https://github.com/user-attachments/assets/74d4327a-6366-4f14-91fa-00d592bcf571)


We have created an open-source repository featuring a starter framework that leverages some of our preferred technologies to help you understand and implement Agentic AI in your organization. Designed with accessibility in mind, this resource offers a comprehensive foundation in Agentic AI, complete with practical steps to get you started. You can explore the repository here, which includes detailed instructions and descriptions of the technologies and patterns used.

## Demo Overview

### Technology

![image](https://github.com/user-attachments/assets/94ec57fb-3973-4810-8a14-764cbdcd1852)

#### Nitric - https://nitric.io/

We are consistently tasked with building various API layers for organizations, whether it be a backend for an app or an integration layer. Typically, we design our APIs with an API gateway that interfaces with either containers or serverless functions. This setup often includes components such as Pub/Sub systems, storage buckets, secrets management, and more.

Deploying and managing this stack can be complex, frequently requiring numerous Terraform files to piece everything together. Nitric offers a different approach by understanding your code and automatically deploying the necessary resources and infrastructure, significantly simplifying the process. The local development experience with Nitric is also fantastic, arguably the best we've seen for building cloud-native backends.

If you haven't checked out Nitric yet, we highly recommend it.

<img src="https://github.com/user-attachments/assets/48a0218b-7aa7-412f-b6fc-7be507c665e8" alt="image" width="125" height="50">

#### Vercel AI SDK - https://sdk.vercel.ai/

We recognize that we are still in the early stages of the creation and adoption of Agentic frameworks and best practices. While there are many other solutions in this space, including Langchain, CrewAI, AutoGen, AgentGPT, and more, we ultimately chose Vercel's AI SDK for this demo. We found it offers an incredible amount of simplicity for solving complex problems. We were also impressed by Vercel's holistic approach to integrating Generative AI across an application's entire stack, from frontend to backend.

- [SDK Core](https://sdk.vercel.ai/docs/ai-sdk-core): A unified API for generating text, structured objects, and tool calls with LLMs.
- [AI SDK UI](https://sdk.vercel.ai/docs/ai-sdk-ui): A set of framework-agnostic hooks for quickly building chat and generative user interface.
- [AI SDK RSC](https://sdk.vercel.ai/docs/ai-sdk-rsc): A library to stream generative user interfaces with React Server Components (RSC).

We highly recommend checking out [v0 from Vercel](https://v0.dev/) to see some of the cool things Vercel has been working on in the space.

<img src="https://github.com/user-attachments/assets/af59f8fe-826e-4854-b799-7d5f367bdf92" alt="image" width="150" height="50">

#### OpenAI - https://openai.com/

We are leveraging OpenAI as our LLM, as it provides the best developer experience out of the box for understanding this demo. 
Vercel's AI SDK supports many providers: https://sdk.vercel.ai/docs/foundations/providers-and-models

![image](https://github.com/user-attachments/assets/397f5829-aaf3-4405-bc08-006761e39d7d)


#### SerpApi - https://serpapi.com/

We leverage SerpApi to efficiently search the internet for relevant information.

### Key Concepts

We aimed to provide a demo that showcases several capabilities applicable across all business process automation efforts:

- **Accessing the internet:** Our demo demonstrates the ability to research and summarize various topics.
- **Interacting with APIs:** We built an "On This Day" tool that returns random facts about a specific day, illustrating how AI agents can seamlessly interact with external systems and incorporate the acquired knowledge into their processes.
- **Crafting communication through emails:** Effective communication is crucial for AI agents, and our demo highlights their proficiency in creating well-crafted emails.

## Running the Project

### Install Nitric - https://nitric.io/docs/getting-started/installation

We generally install Nitric using WSL if on Windows.

### Add Environment Variables

Create .env file and add the following two variables

- OPENAI_API_KEY
- SERP_API_KEY 

### Start the Project

To start your Nitric project, open your terminal and execute the following command:

```sh
nitric start
```

If you are on WSL on Windows add --no-browser to the command to avoid browser launch errors.

```sh
nitric start --no-browser
```

You should see the project load and open a dashboard. 

![image](https://github.com/user-attachments/assets/dfcabe8d-3c20-4b94-88cf-43eb736262e4)

### Send Request

To send a request first navigate to the dashboard url.

Enter a JSON body with a key of event.

![image](https://github.com/user-attachments/assets/897ab5ff-7824-42fc-aafe-97ccf023e455)

If everything is wired up correctly you should see a response that contains the plan and results.

![image](https://github.com/user-attachments/assets/9666580e-3ebc-4910-927c-03e1c61f1113)


## Additional Resources 

For those interested in learning more about AI agents, here are some valuable resources:

Videos:
- [What are AI Agents?](https://www.youtube.com/watch?v=F8NKVhkZZWI&t)
- [What's next for AI agentic workflows ft. Andrew Ng of AI Fund](https://www.youtube.com/watch?v=sal78ACtGTc&t)
- [What's next for AI agents ft. LangChain's Harrison Chase](https://www.youtube.com/watch?v=pBBe1pk8hf4&t)

Articles & Blog Posts:

- [Why agents are the next frontier of generative AI](https://www.mckinsey.com/capabilities/mckinsey-digital/our-insights/why-agents-are-the-next-frontier-of-generative-ai)
- [Unlock the power of AI agents to scale generative AI innovation](https://www.kearney.com/service/digital-analytics/article/unlock-the-power-of-ai-agents-to-scale-generative-ai-innovation)
- [What are AI Agents?](https://aws.amazon.com/what-is/ai-agents/#:~:text=AI%20agents%20are%20rational%20agents,uses%20customer%20queries%20as%20input.)
- [Introduction to LLM Agents](https://developer.nvidia.com/blog/introduction-to-llm-agents/)
- [An Introduction to AI Agents](https://medium.com/humansdotai/an-introduction-to-ai-agents-e8c4afd2ee8f)

Academic Papers:
- [A Survey on Context-Aware Multi-Agent Systems: Techniques, Challenges and Future Directions](https://arxiv.org/abs/2402.01968)
- [AI Agents That Matter](https://arxiv.org/abs/2407.01502)
- [The Rise and Potential of Large Language Model Based Agents: A Survey](https://arxiv.org/abs/2309.07864)


