# Hillary's Portfolio

## 🔖 Project Title & Description

**Hillary's Portfolio** - A modern, responsive portfolio website showcasing professional work, skills, and experience.

**Target Audience**: Potential employers, clients, and collaborators seeking to understand Hillary's capabilities and past projects.

**Why It Matters**: Creates a professional online presence that effectively communicates expertise, demonstrates technical skills through the implementation itself, and serves as a central hub for career opportunities.

## 🛠️ Tech Stack

**Core Framework**: Next.js 14 with App Router
**Frontend**: React 18, TypeScript
**Styling**: Tailwind CSS
**Development**: ESLint, Prettier
**Deployment**: Vercel
**Package Manager**: npm

See [TECH_STACK.md](./TECH_STACK.md) for detailed documentation.

## 🧠 AI Integration Strategy

### Code Generation
- **IDE Agent**: Amazon Q Developer for component scaffolding, utility functions, and boilerplate code
- **Feature Development**: Use context-aware prompts with existing codebase structure to generate consistent components
- **API Integration**: Generate type-safe API clients and data fetching logic

### Testing
- **Unit Tests**: AI-generated test cases for components using Jest and React Testing Library
- **Integration Tests**: Automated test scenarios for user workflows and API interactions
- **Test Prompts**: "Generate comprehensive tests for [component] covering edge cases and accessibility"

### Documentation
- **Docstrings**: AI-generated JSDoc comments for all functions and components
- **Inline Comments**: Context-aware explanations for complex logic
- **README Maintenance**: Automated updates to documentation as features evolve
- **API Documentation**: Auto-generated documentation from TypeScript interfaces

### Context-Aware Techniques
- **File Tree Context**: Feed complete project structure to AI for consistent naming and organization
- **API Specifications**: Include TypeScript interfaces and API contracts in prompts for accurate implementations
- **Diff Analysis**: Use git diffs in AI prompts for targeted code reviews and improvements
- **Component Library**: Maintain AI context of existing components to ensure design system consistency

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the portfolio.

## Project Structure

```
src/
├── app/           # Next.js 14 app directory
├── components/    # Reusable components
├── lib/          # Utilities and configurations
└── types/        # TypeScript type definitions
```

## Development Workflow

See [AI_INTEGRATION_PLAN.md](./AI_INTEGRATION_PLAN.md) for detailed AI development strategy.

See [PR_REVIEW_TOOLING_PLAN.md](./PR_REVIEW_TOOLING_PLAN.md) for code review and quality assurance workflow.