# In-Editor/PR Review Tooling Plan

## Primary Tool: Amazon Q Developer

### Tool Selection Rationale
- **Amazon Q Developer** - Integrated AI assistant for VS Code
- Context-aware code suggestions and reviews
- Built-in security scanning and best practices
- TypeScript and React expertise
- Direct integration with development workflow

## Review Support Features

### Code Review Assistance
- **Security Analysis**: Identify vulnerabilities in React components and API routes
- **Performance Review**: Detect inefficient rendering patterns and bundle size issues
- **Type Safety**: Ensure proper TypeScript usage across components
- **Best Practices**: Validate Next.js patterns and React conventions

### PR Review Workflow
1. **Pre-commit**: Code quality checks and suggestions
2. **PR Creation**: Auto-generate PR descriptions and change summaries
3. **Review Process**: Highlight potential issues and improvements
4. **Merge Preparation**: Final security and performance validation

### Commit Message Generation
- Conventional commit format enforcement
- Automatic change categorization (feat, fix, refactor, etc.)
- Context-aware descriptions based on code changes

## Sample Prompts

### Component Testing Prompt
```
Generate a comprehensive test suite for this React portfolio component using React Testing Library. Include:
- Props validation tests
- User interaction tests (clicks, form submissions)
- Accessibility tests with screen reader compatibility
- Responsive design tests for mobile/desktop
- Framer Motion animation tests
Follow TypeScript strict mode and test all edge cases.
```

### API Route Security Prompt
```
Review this Next.js API route for security vulnerabilities and generate improvements:
- Input validation using Zod schemas
- Rate limiting implementation
- CORS configuration for portfolio contact form
- Error handling without information leakage
- TypeScript type safety for request/response
Include unit tests for all security scenarios.
```

## Workflow Integration

### Development Phase
- **Real-time Suggestions**: Code completion for React/TypeScript patterns
- **Inline Documentation**: Generate JSDoc comments for components
- **Refactoring Assistance**: Optimize component structure and performance

### Review Phase
- **Automated Checks**: Security, performance, and accessibility scanning
- **Code Quality**: ESLint rule compliance and TypeScript strict mode
- **Architecture Review**: Component composition and state management patterns

### Deployment Phase
- **Build Optimization**: Bundle analysis and performance recommendations
- **SEO Validation**: Meta tags and structured data verification
- **Accessibility Audit**: WCAG compliance checking

## Quality Gates

### Pre-merge Checklist
- [ ] Security scan passed
- [ ] Performance benchmarks met
- [ ] Accessibility standards compliant
- [ ] TypeScript strict mode enabled
- [ ] Test coverage above 80%
- [ ] Bundle size within limits

### Automated Validations
- Component prop types validation
- API route input/output schema validation
- Image optimization and lazy loading verification
- SEO meta tags completeness check

## Continuous Improvement

### Learning Integration
- Track common issues and create custom rules
- Build project-specific prompt templates
- Maintain coding standards documentation
- Regular tool configuration updates

### Metrics Tracking
- Code review efficiency improvements
- Bug detection rate increases
- Development velocity metrics
- Code quality score trends