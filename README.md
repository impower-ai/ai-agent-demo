# AI Agent Demo

We believe recent technological advancements in Generative AI have propelled us into a new era of business process automation. From basic task automation to conversational AI, we now stand at the forefront of Agentic AI. This significant milestone showcases the evolution towards more intelligent and autonomous systems. Our AI Agent Demo is designed to highlight the powerful capabilities of AI Agents in a clear and accessible way.

## Background

Over the past six years, we have been leveraging RPA tools to automate business processes both internally and for our clients. These low-code platforms are specifically designed to orchestrate business workflows across organizational infrastructure. These processes often span multiple systems, execute business logic, determine proper paths, incorporate human-in-the-loop concepts, and involve complex data analysis—all tasks that humans can quickly assess with their eyes and mind.

The term Intelligent Automation has been around for a while, often used as a sales tactic and elevator pitch to sell business process automation software as something it is not. At the end of the day, traditional business automation workflow software is just code designed to follow a specific path; there is no true intelligence here. We simply define exactly what we want our automation to do programmatically, and it does it. This is where RPA has always fallen short. We are taking flexible business processes and forcing them into rigid, predefined paths, limiting their true potential and significantly impacting the end-user experience.

We employ exceptional technologists who have frequently discussed the limitations of RPA. These discussions have propelled us on a quest for better solutions. We envision a world where automation is truly intelligent, capable of adapting, learning, and transforming businesses in unprecedented ways. With the technological advancements of recent years, we believe the time is now to turn this vision into reality.

Generative AI has undoubtedly made a profound impact on our society. Since November 30th, 2022, we have witnessed a significant shift in the user experiences and capabilities we can integrate into our technology stack. Initially, it was remarkable to create a RAG app on an internal knowledge base or offer customers a more personalized chat experience. However, we have now ventured into a broader set of use cases that will significantly shape organizations going forward.

At a high level, Generative AI has evolved from being merely conversational to becoming autonomous. This evolution has given rise to the concept of Agentic systems. Although the definition is still somewhat vague as we are early in this journey, these systems address many of the shortcomings of traditional automation tools. Agentic systems are designed to adapt, learn, and operate independently, offering a more advanced and versatile approach to automation.

What makes Agentic AI truly powerful is its ability to autonomously develop and reason through complex plans while recognizing when it needs human assistance. This blend of independence and collaborative ability ensures that business operations are not only streamlined but also intelligently managed. Imagine you were given a task to do; in your mind, you would format a plan of execution. This is exactly what our Agents are doing—formulating and executing sophisticated plans to achieve optimal results, while seamlessly integrating human input when necessary. This approach not only enhances efficiency but also leverages the unique strengths of both AI and human expertise.

Another key enabler of Agentic systems is the set of tools—applications that AI agents can interact with. These tools allow AI agents to reason and decide which resources are needed to fulfill their responsibilities effectively. Once an agent has its plan, it begins to execute it using the tools available. This is no different from how humans work. Think of a task like preparing meeting notes for a new client meeting. You would most likely work with a CRM to gather relevant client information and a word processing tool to draft the notes. Similarly, Agentic AI systems understand their responsibilities, devise plans, and utilize the appropriate tools to get the job done. Traditionally, agents can be trained on the API of external systems for integration, enabling them to seamlessly interact with various platforms and applications within your organization. These agents can even recognize when they need more information and proactively reach out to humans for assistance, ensuring a continuous and efficient workflow.

![image](https://github.com/user-attachments/assets/d153c8b9-2a79-4acf-9f80-c2e5decbc6c4)

This is a stark contrast from traditional automation tools, where developers need to deeply understand the business process, often requiring the process to be rigidly defined. Developers then have to code the process, handle exceptions, and constantly maintain the system. Now, we live in a world where business processes can be described in plain English to an AI agent. We simply provide the agent with the correct tools and guidelines, and watch it autonomously complete the task. These agents can even recognize when they need more information and proactively reach out to humans for assistance.

![image](https://github.com/user-attachments/assets/c2bc7e33-255e-4db4-bf60-f1e6abd388fe)


This shift not only significantly simplifies and accelerates the automation of business processes but also makes them more adaptable and efficient. By leveraging the unique strengths of both AI and human expertise, businesses can achieve a level of operational agility and intelligence that was previously unattainable.

We believe that in the near future, companies will have large teams of AI agents operating in parallel with employees, creating new levels of efficiency, innovation, and collaboration. When you harness the intelligence and reasoning of an LLM to business processes and enable seamless interaction with other systems, you transcend into the realm of TRUE intelligent automation.

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

We recognize that it is still early days for the creation and adoption of Agentic frameworks and best practices. While there are many other solutions in this space, including Langchain, CrewAI, AutoGen, AgentGPT, and more, we ultimately chose Vercel's AI SDK for this demo. We found it offers an incredible amount of simplicity for solving complex problems. We were also impressed by Vercel's holistic approach to integrating Generative AI across an application's entire stack, from frontend to backend.

- [SDK Core](https://sdk.vercel.ai/docs/ai-sdk-core): A unified API for generating text, structured objects, and tool calls with LLMs.
- [AI SDK UI](https://sdk.vercel.ai/docs/ai-sdk-ui): A set of framework-agnostic hooks for quickly building chat and generative user interface.
- [AI SDK RSC](https://sdk.vercel.ai/docs/ai-sdk-rsc): A library to stream generative user interfaces with React Server Components (RSC).

We highly recommend checking out [v0 from Vercel](https://v0.dev/) to see some of the cool things Vercel has been working on in the space.

<img src="https://github.com/user-attachments/assets/af59f8fe-826e-4854-b799-7d5f367bdf92" alt="image" width="150" height="50">

#### OpenAI - https://openai.com/

We are leveraging OpenAI as our LLM, as it provides the best developer experience out of the box for understanding this demo. Vercel's AI SDK supports many providers: https://sdk.vercel.ai/docs/foundations/providers-and-models

#### SerpApi - https://serpapi.com/

We leverage SerpApi to efficiently search the internet for relevant information.

### Key Concepts

We aimed to provide a demo that showcases several capabilities applicable across all business process automation efforts:

- **Accessing the internet:** Our demo demonstrates the ability to research and summarize various topics.
- **Interacting with APIs:** We built an "On This Day" tool that returns random facts about a specific day, illustrating how AI agents can seamlessly interact with external systems and incorporate the acquired knowledge into their processes.
- **Crafting communication through emails:** Effective communication is crucial for AI agents, and our demo highlights their proficiency in creating well-crafted emails.

#### Event Planner Agent

This file defines an API endpoint `/agent/eventPlanner` that uses AI to assist in event planning. When a POST request is made to this endpoint with event details, it constructs a detailed prompt for the AI model. The AI agent then develops a comprehensive plan for execution. Once the plan is developed, the agent begins to execute it by leveraging the available tools. The endpoint manages any errors that occur during this process and currently returns the result of the plan or an error message in the response.

![image](https://github.com/user-attachments/assets/04fe5ac2-0804-437c-8ed3-59aa90c5073d)



