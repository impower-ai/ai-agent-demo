# AI Agent Demo

We believe recent technological advancements in Generative AI have propelled us into a new era of business process automation. From basic task automation to conversational AI, we now stand at the forefront of Agentic AI. This significant milestone showcases the evolution towards more intelligent and autonomous systems. Our AI Agent Demo is designed to highlight the powerful capabilities of AI Agents in a clear and accessible way.

## Background

Over the past six years, we have leveraged RPA tools to automate business processes both internally and for our clients. These low-code platforms are specifically designed to orchestrate business workflows across organizational infrastructure. These processes often span multiple systems, execute business logic, determine proper paths, incorporate human-in-the-loop concepts, and involve complex data analysis. 

The term Intelligent Automation is not novel and has often been exploited as a sales tactic and elevator pitch to sell business process automation software as something it is not. Ultimately, traditional business automation workflow software is merely code designed to follow a specific path; there is no true intelligence here. We simply define exactly what we want our automation to do programmatically, and it follows the given workflow. This is where RPA has always fallen short. We are taking flexible business processes and forcing them into rigid, predefined paths, limiting their true potential.

![image](https://github.com/user-attachments/assets/c2bc7e33-255e-4db4-bf60-f1e6abd388fe)


We employ exceptional technologists with a high-level expertise in RPA development. However, discussions have consistently arisen regarding the inefficiencies and hindrances of RPA within a business context. These issues have propelled us on a quest for better solutions. We envision a world where automation is truly intelligent, capable of adapting, learning, and transforming businesses in unprecedented ways. With the technological advancements of recent years, we believe the time is now to turn this vision into reality.

Generative AI has undoubtedly made a profound impact on our society. Since November 30th, 2022, we have witnessed a significant shift in the user experiences and capabilities that can be integrated into our technology stack. Initially, it was remarkable to create a RAG (Retrieval-Augmented Generation) app on an internal knowledge base or offer customers a more personalized chat experience. Such is the past, however. We have now ventured into a broader set of use cases that will significantly shape organizations going forward.

At a high level, Generative AI has evolved from being merely conversational to becoming autonomous. This evolution has given rise to the concept of Agentic systems. Although the definition is still somewhat vague as we are early in this journey, these systems address many of the shortcomings of traditional automation tools. Agentic systems are designed to adapt, learn, and operate independently, offering a more advanced and versatile approach to automation.

![image](https://github.com/user-attachments/assets/90446237-ebbd-4952-a255-e44b4785e4c8)


What makes Agentic AI truly powerful is its ability to autonomously develop and reason through complex plans while recognizing when it needs human assistance. This blend of independence and collaborative ability ensures that business operations are not only streamlined but also intelligently managed. Imagine you were given a task to do; in your mind, you would format a plan of execution. If you didn't know what to do, you would ask for help. This is exactly what our Agents are doing—formulating and executing sophisticated plans to achieve optimal results, while seamlessly integrating human input when necessary. This approach not only enhances efficiency but also leverages the unique strengths of both AI and human expertise.

![image](https://github.com/user-attachments/assets/5f99e186-1676-4d82-89d4-d1ea77725f9a)


Another key enabler of Agentic systems is the set of tools—applications that AI agents can interact with. These tools allow AI agents to reason and decide which resources are needed to fulfill their responsibilities effectively. Once an agent has its plan, it begins to execute it using the tools available. As mentioned previously, such a workflow is no different from how humans work. Think of a task like preparing meeting notes for a new client meeting. You would likely utilize a CRM to manage and organize client information, conduct internet searches to gather relevant details, and use a word processing tool to draft your notes. Similarly, Agentic AI systems understand their responsibilities, devise plans, and utilize the appropriate tools to get the job done. Traditionally, agents can be trained on the API of external systems for integration, enabling them to seamlessly interact with various platforms and applications within your organization. 


This is a stark contrast from traditional business process automation, where developers require substantial domain knowledge of a business process, often confining the process to rigidly defined parameters. Developers then code the process, handle exceptions, and maintain the system. Now, we live in a world where business processes can be described in plain English to an AI agent. We simply provide the agent with the correct tools and guidelines, and watch it autonomously complete the task. This shift significantly simplifies and accelerates the automation of business processes, making them more adaptable and efficient.

![image](https://github.com/user-attachments/assets/d153c8b9-2a79-4acf-9f80-c2e5decbc6c4)


This shift not only significantly simplifies and accelerates the automation of business processes but also makes them more adaptable and efficient. By leveraging the unique strengths of both AI and human expertise, businesses can achieve a level of operational agility and intelligence that was previously unattainable.

We believe companies will soon have large teams of AI agents operating in parallel with employees, creating new levels of efficiency, innovation, and collaboration. When you harness the intelligence and reasoning of an LLM within business processes and enable seamless interaction with other systems, you transcend into the realm of TRUE intelligent automation. 

![image](https://github.com/user-attachments/assets/870768f6-c40e-4932-b286-9b075fec0b3c)


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


#### Resources 

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


