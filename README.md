# AI Hub Buildkit
Building an One-stop Hub for all your AI Tools

## Introduction
Welcome to the **AI Hub Buildkit** – your ultimate solution for creating a personalized, AI-powered Tools hub. This open-source project empowers you to create your own AI tools, and build a customized AI hub effortlessly, using Next.js and TypeScript. Say goodbye to wasted time prompting and bookmarking the AI tools that work for you, and hello to a fully customizable, user-friendly platform where you can add and manage self-created AI tools with ease. Build an AI-enhanced workspace that’s perfectly tailored to your needs, effortlessly today!

## Features
- **Straightforward Tool Building Process**: Build your own AI tools at ease
- **A Hub built with Next.js, TypeScript, and Tailwind CSS**: A Hub for keeping all your AI tools, built with modern technologies for a seamless development experience.
- **Fully Customizable**: Tailor your AI hub to your needs and preferences.
- **Easy Tool Addition**: Add new AI tools by simply filling out tool information.
- **Show Your Tools**: Showcase your creative AI tools to the world, or even monetize it by building neatly crafted AI workflows for others.

## Getting Started

### Prerequisites
- Node.js (>=14.0.0)
- npm or yarn

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/chanitypham/ai-hub-buildkit.git
    ```

2. Navigate to the project directory:

    ```bash
    cd ai-hub-buildkit
    ```

3. Install dependencies:

    ```bash
    npm install
    # or
    yarn install
    ```

4. Start the development server:

    ```bash
    npm run dev
    # or
    yarn dev
    ```

## Usage

1. Create your own AI Tools on [MindPal](https://mindpal.space/). The process is very straightforward, and creation time takes from 1-2 minutes. As MindPal is quite feature-rich, it is recommended to follow the tutorials [here](https://www.youtube.com/watch?v=CcXvHkBQuSE) so you can make the most customized AI tools for your need.

2. Click Share your tool & copy the Tool ID, see the GIF below
![How to Share Your Tool](public/AIHub.gif)
The ID would be something like `69b2c0364d31ec6f5ec0361` by default, or `example-workflow-name` if you customize it.

3. Add a new tool in your hub
To add a new AI tool, create a new entry in the `lib/tools.tsx` file by copying the given in-file template. Example:
    ```
    {
        slug: "podcast-guest-researcher", 
        // the slug that, when clicked on, will open your tool on, for example: https://your_website/podcast-guest-researcher

        icon: "🔍", 
        // icon of the tool for visuals

        title: "Podcast Guest Researcher", 
        // title of the tool

        description: "Streamlines the process of researching podcast guests", 
        // description of the tool

        category: "", 
        // optional, can categorize your tools

        workflowID: "669b2c0364d31ec6f5ec0361", 
        // the ID of the workflow on MindPal, can be viewed when sharing the link, it is the ID after `https://workflow.mindpal.space/669b2c0364d31ec6f5ec0361` 

        copywriting: "The Podcast Guest Researcher is an innovative tool designed to enhance your podcasting experience by streamlining the preparation process for interviews. ", 
        // A more detailed introduction to your tools, so you can share it with others
    }, 
    ```

4. Explore the codebase and customize the appearance and functionality of your AI hub.

## Contributing

We welcome contributions from the community! To contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes and commit them (`git commit -m 'Add new feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Create a Pull Request.

## Reporting Issues
If you encounter any issues or bugs, please report them by submitting an issue on this repository. When submitting an issue, please include:
- A clear description of the problem.
- Steps to reproduce the issue.
- Any relevant screenshots or error messages.
- Providing detailed information will help us resolve the issue more effectively.

## Acknowledgement
- This project is created with the support from [MindPal Labs](https://mindpal.space/)

## Creator Contact
For any inquiries or support, please reach out to me (Chanity) at [chanitypham@gmail.com](mailto:chanitypham@gmail.com).

Have fun Building! 🥳