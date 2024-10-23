# Contributing Guide

Welcome to our project! We're thrilled that you're considering contributing. Here's a comprehensive guide to help you get started, tailored to the information you've provided:

## Getting Started

1. Fork the repository to your GitHub account.
2. Clone the forked repository to your local machine.
3. Run `npm install` to install the project dependencies.
4. Familiarize yourself with the project's structure and codebase.

## Branching

1. Create a new branch for your contribution: `git checkout -b feature/my-feature`.
2. Keep your branch up to date with the main branch: git pull origin main.

## Development

1. Before proceeding, read how to create a [GitHub access token](https://help.github.com/en/github/authenticating-to-github/creating-a-personal-access-token-for-the-command-line).
2. To configure environment variables:
   - Copy `cp ./packages/graphql/env.example ./packages/graphql/.env.local` and add your GitHub token as indicated in step 1.
   - Copy `cp ./apps/main/env.example ./apps/main/.env.local` and add your GitHub token in the same way.
3. If needed, you can generate code from the GraphQL schema using: `npm run codegen:graphql`
4. To start the application: `npm run dev`
5. Open your browser and navigate to http://localhost:3000 to view the app.

## Committing

1. Craft descriptive and concise commit messages.
2. Write in the present tense, such as "Add feature" instead of "Added feature".
3. Link to related issues using keywords like "Fixes #123".

## Pull Requests

1. Push your changes to your forked repository.
2. Create a Pull Request (PR) from your branch to the main repository's main branch.
3. Provide a clear PR title and an explanatory description of your changes.
4. Reference relevant issues using keywords like "Closes #123".

## Issues

1. Should you come across a bug or have an idea, check for existing issues. If none exist, create one.
2. Utilize the provided issue template for comprehensive details.
3. Approach feedback and suggestions with a respectful and receptive attitude.

Thank you for considering contributing to our project. Your dedication contributes to its growth and quality. Enjoy the collaborative journey!
