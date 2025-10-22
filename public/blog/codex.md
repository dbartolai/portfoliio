---
title: "Codex: My Free Employees"
slug: codex
date: 2025-10-21
preview: An introduction to the Codex web client and why I love it
---
The new-ish OpenAI Codex web platform is genuinely amazing. I started building ClassMate over the summer with incredibly limited web development knowledge. As I made my way through iterations of failure with different AI tools, I learned a lot about programming with and without AI. Most importantly, I became aware of the best tasks to handle myself, and the best tasks to offload. 

For example: I can't design. You could give me paper and markers and I couldn't draw up a design half as good as what AI could create. Given a design, I'm confident I could code it up. But I don't think I have that vision yet to connect my desired features to some abstract visual interface. 

Just the other day I explained to ChatGPT what I needed out of my user interface. Within minutes it had a beautiful example UI for ClassMate all in one simple `.jsx` file. All I had to do was add proper typing, since I use TypeScript, and I was on my way. Due to the elegance of this interface, I genuinely scrapped all of the prior tsx and css code I'd created over time. 

This is where Codex comes in. It's more or less a standalone developer that you link up to your GitHub repository via the web. I stumbled across the web client this past weekend, and I genuinely spent my entire Saturday sending it through different repositories to make changes for me. In this case, I had GPT create me a prompt for a Codex task. GPT is a great layer of abstraction between my natural voice and what the codex model wants to hear, which is a specific structured task. This task was a "/plan" task, meaning it prompted Codex to create a sequence of new tasks. 

Let me step back. In Codex, each task is like a sprint. Codex will go into some branch in your repository, make the changes it deems necessary, give you live updates on the changes it's making via the web client, and show you the diff of changes when it finishes up. Upon completion, you can turn those changes into a pull request right in your repo. This is the greatest part. All of the changes are on a separate branch! So you could go right into VScode and switch to the Codex feature branch to text those changes. Then merge it right into your dev branch. Previously, with Copilot, I would be stuck stashing and committing after every single prompt, but working in branches makes the whole workflow so much cleaner. 

The Codex context window is also your entire repository, and you can even configure an entire environment with dependencies and different versions of common interpreters/compilers. It's genuinely amazing. 

Back to ClassMate, I had this 600ish line file loaded with hardcoded data for different pages, views, and modals. Generated directly in the ChatGPT sandbox. I made a Codex plan to turn that into a full UI with components divided in subdirectories by features, hardcoded data replaced by my pre-existing hooks/services, and wrapped in my UserContext component. 

Throughout this process, I've noticed that it requires prompts that are far more in depth than what I would have given something like Copilot. I find myself writing out specific files to edit, functions/endpoints to create, and other adjustments that I find important to enumerate. Usually, the prompt looks like the documentation for an MP in one of my classes. But it works like a charm, and it's allowed me to iterate much more quickly. I'm super excited to keep working with it.