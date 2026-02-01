# Contributing to Efficiensee

Thank you for your interest in contributing to Efficiensee! This document provides guidelines and instructions for contributing to the project.

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Development Workflow](#development-workflow)
- [Project Rules](#project-rules)
- [Code Standards](#code-standards)
- [Testing Requirements](#testing-requirements)
- [Pull Request Process](#pull-request-process)
- [Commit Guidelines](#commit-guidelines)
- [Documentation](#documentation)

---

## Code of Conduct

### Our Pledge

We are committed to providing a welcoming and inclusive environment for all contributors, regardless of experience level, gender identity, sexual orientation, disability, personal appearance, race, ethnicity, age, religion, or nationality.

### Expected Behavior

- Use welcoming and inclusive language
- Be respectful of differing viewpoints and experiences
- Gracefully accept constructive criticism
- Focus on what is best for the community
- Show empathy towards other community members

### Unacceptable Behavior

- Harassment, trolling, or insulting/derogatory comments
- Personal or political attacks
- Publishing others' private information without permission
- Any conduct that would be considered inappropriate in a professional setting

---

## Getting Started

### Prerequisites

Before contributing, ensure you have:

- Node.js >= 20.0.0
- Bun >= 1.1.0
- Docker Desktop (for local testing)
- Git configured with your name and email
- A GitHub account

### Fork and Clone

1. **Fork the repository** on GitHub
2. **Clone your fork** locally:
   ```bash
   git clone https://github.com/YOUR_USERNAME/efficiensee.git
   cd efficiensee
   ```
3. **Add upstream remote**:
   ```bash
   git remote add upstream https://github.com/ORIGINAL_OWNER/efficiensee.git
   ```

### Initial Setup

1. **Install dependencies**:
   ```bash
   bun install
   ```

2. **Configure environment**:
   ```bash
   cp apps/frontend/.env.example apps/frontend/.env
   # Edit .env with your local configuration
   ```

3. **Start development environment**:
   ```bash
   bun run docker:dev
   ```

4. **Verify setup**:
   - Open `http://localhost:3000`
   - Run tests: `bun test`
   - Run linter: `bun lint`

---

## Development Workflow

### Before You Start

1. **Check existing issues**: Look for existing issues or discussions about the feature/bug
2. **Create an issue**: If none exists, create one to discuss your proposed changes
3. **Wait for feedback**: Get confirmation before starting significant work
4. **Assign yourself**: Assign the issue to yourself to avoid duplicate work

### Making Changes

1. **Create a feature branch**:
   ```bash
   git checkout -b feature/your-feature-name
   # or
   git checkout -b fix/your-bug-fix
   ```

2. **Make your changes** following our [Code Standards](#code-standards)

3. **Test your changes**:
   ```bash
   bun test
   bun lint
   bun run build
   ```

4. **Commit your changes** following [Commit Guidelines](#commit-guidelines)

5. **Keep your branch updated**:
   ```bash
   git fetch upstream
   git rebase upstream/main
   ```

---

## Project Rules

### MANDATORY: Read Project Rules First

Before writing any code or UI, you **MUST** read these files in order:

1. **`.cursorrules`** - Entry point and rule hierarchy
2. **`rules/figma.md`** - Pegasus Design System Pro (Figma as single source of truth)
3. **`rules/react_tailwind.md`** - React + Tailwind implementation rules

### Rule Hierarchy

When rules conflict, resolve in this order:
1. `rules/figma.md` (highest priority)
2. `rules/react_tailwind.md`
3. `.cursorrules` (lowest priority)

**Figma always wins over code convenience.**

### Question-First Policy

You **MUST** ask questions when:
- You are **not 100% certain** what to do
- A requirement is **ambiguous or incomplete**
- A decision could **affect architecture, UX, or scalability**
- Multiple valid implementations exist
- Figma does not clearly define behavior, layout, or states

🚫 **NEVER guess**  
🚫 **NEVER silently decide**  
🚫 **NEVER "fill the gaps" creatively**

If something is unclear:
➡️ STOP  
➡️ ASK QUESTIONS (open a GitHub issue or discussion)  
➡️ WAIT FOR CONFIRMATION

---

## Code Standards

### TypeScript

- **Strict mode**: All code must pass TypeScript strict checks
- **Explicit types**: Avoid `any`, use explicit types or `unknown`
- **Type inference**: Use Drizzle's `$inferSelect` and `$inferInsert`
- **Interfaces over types**: Prefer interfaces for object shapes
- **No implicit returns**: Always explicitly return values

### React & Next.js

- **Server Components by default**: Use Server Components unless client interactivity is required
- **Use "use client" sparingly**: Only add to components that need browser APIs or React hooks
- **Functional components**: Use functional components with hooks
- **Component structure**:
  ```typescript
  // 1. Imports
  import { ... } from "..."
  
  // 2. Types
  interface MyComponentProps { ... }
  
  // 3. Component
  export function MyComponent({ ... }: MyComponentProps) {
    // 4. Hooks
    const [state, setState] = useState(...)
    
    // 5. Effects
    useEffect(() => { ... }, [])
    
    // 6. Handlers
    const handleClick = () => { ... }
    
    // 7. Render
    return (...)
  }
  ```

### Tailwind CSS

- **Follow Figma exactly**: Do not invent spacing, colors, or layouts
- **Use design tokens**: Use variables from `rules/figma.md`
- **Responsive design**: Only add responsiveness if specified in requirements
- **No inline styles**: Use Tailwind classes, not style attributes
- **Semantic naming**: Use meaningful class combinations

### Backend Architecture

Follow the **Three-Layer Pattern**:

1. **Queries** (`lib/api/queries/`)
   - Pure database operations
   - No error handling
   - No business logic
   - Use Drizzle ORM

2. **Connectors** (`lib/api/connectors/`)
   - Wrap queries with try/catch
   - Return `ServerActionResult<T>`
   - No business logic

3. **Services** (`lib/api/services/`)
   - Business logic and orchestration
   - Use "use server" directive
   - Call connectors, not queries directly

4. **Actions** (`app/**/actions/`) - Optional
   - Only when calling from Client Components
   - Thin wrappers around services
   - Use "use server" directive

### Database Schema

- **Domain-driven organization**: Keep tables in appropriate domain directories
- **Relation management**:
  - Direct references for same-domain relationships
  - String-based references for cross-domain relationships
- **Type exports**: Export types using Drizzle inference
- **Inline relations**: Define relations in the same file as the table
- **Documentation**: Document tables and columns with comments

### File Naming

- **Components**: PascalCase (`UserProfile.tsx`)
- **Utilities**: kebab-case (`date-utils.ts`)
- **Hooks**: camelCase with "use" prefix (`useTeamData.ts`)
- **Constants**: UPPER_SNAKE_CASE (`MAX_RETRY_COUNT`)
- **Types**: PascalCase (`UserProfile.ts` for types)

---

## Testing Requirements

### Test Coverage

All contributions should include appropriate tests:

- **Unit tests** for utility functions and helpers
- **Integration tests** for API routes and database operations
- **Component tests** for complex UI components
- **E2E tests** for critical user flows (when applicable)

### Running Tests

```bash
# Run all tests
bun test

# Run tests in watch mode
bun test --watch

# Run tests with coverage
bun test --coverage

# Run specific test file
bun test path/to/test-file.test.ts
```

### Test Structure

```typescript
import { describe, it, expect, beforeEach, afterEach } from "vitest"

describe("ComponentOrFunctionName", () => {
  beforeEach(() => {
    // Setup
  })

  afterEach(() => {
    // Cleanup
  })

  it("should do something specific", () => {
    // Arrange
    const input = ...

    // Act
    const result = ...

    // Assert
    expect(result).toBe(...)
  })
})
```

### Testing Best Practices

- **One assertion per test**: Keep tests focused
- **Descriptive names**: Use "should" statements
- **Test behavior, not implementation**: Focus on what, not how
- **Mock external dependencies**: Use mocks for APIs, databases, etc.
- **Test edge cases**: Include error cases and boundary conditions

---

## Pull Request Process

### Before Opening a PR

1. ✅ All tests pass locally
2. ✅ Linter passes without errors
3. ✅ Code builds successfully
4. ✅ You've tested manually in the browser (for UI changes)
5. ✅ Documentation is updated (if needed)
6. ✅ Commits follow our commit guidelines

### Opening a PR

1. **Push your branch** to your fork:
   ```bash
   git push origin feature/your-feature-name
   ```

2. **Open a Pull Request** on GitHub with:
   - **Clear title**: Summarize the change in one line
   - **Description**: Explain what, why, and how
   - **Issue reference**: Link related issues (e.g., "Fixes #123")
   - **Screenshots**: Include for UI changes
   - **Testing notes**: Explain how to test the changes

### PR Template

```markdown
## Description
Brief description of the changes

## Related Issues
Fixes #123
Related to #456

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## Testing
- [ ] Unit tests added/updated
- [ ] Manual testing completed
- [ ] All tests pass locally

## Screenshots (if applicable)
Add screenshots for UI changes

## Checklist
- [ ] Code follows project style guidelines
- [ ] Self-review completed
- [ ] Comments added for complex logic
- [ ] Documentation updated
- [ ] No new warnings introduced
```

### Review Process

1. **Automated checks**: CI/CD pipeline must pass
2. **Code review**: At least one maintainer approval required
3. **Address feedback**: Respond to all review comments
4. **Keep PR updated**: Rebase on main if needed
5. **Final approval**: Maintainer merges when ready

### After Merge

1. **Delete your branch**:
   ```bash
   git branch -d feature/your-feature-name
   git push origin --delete feature/your-feature-name
   ```

2. **Update your local main**:
   ```bash
   git checkout main
   git pull upstream main
   ```

---

## Commit Guidelines

### Commit Message Format

Follow the [Conventional Commits](https://www.conventionalcommits.org/) specification:

```
<type>(<scope>): <subject>

<body>

<footer>
```

### Types

- **feat**: New feature
- **fix**: Bug fix
- **docs**: Documentation changes
- **style**: Code style changes (formatting, missing semicolons, etc.)
- **refactor**: Code refactoring without changing functionality
- **perf**: Performance improvements
- **test**: Adding or updating tests
- **chore**: Maintenance tasks (dependencies, build config, etc.)
- **ci**: CI/CD changes

### Examples

```bash
# Good commits
feat(dashboard): add team velocity chart
fix(auth): resolve token expiration issue
docs(readme): update installation instructions
refactor(api): extract user service logic
test(metrics): add unit tests for velocity calculation

# Bad commits
update stuff
fixed bug
WIP
changes
```

### Commit Best Practices

- **Atomic commits**: One logical change per commit
- **Present tense**: "Add feature" not "Added feature"
- **Imperative mood**: "Fix bug" not "Fixes bug"
- **Descriptive subject**: Clear and concise (50 characters max)
- **Detailed body**: Explain why, not what (wrap at 72 characters)
- **Reference issues**: Include issue numbers in footer

---

## Documentation

### When to Update Documentation

Update documentation when you:
- Add new features or APIs
- Change existing behavior
- Fix bugs that affect documented behavior
- Add new configuration options
- Introduce breaking changes

### Documentation Types

1. **README.md**: High-level overview and getting started
2. **docs/**: Detailed documentation by topic
3. **Code comments**: Complex logic explanation
4. **API documentation**: Endpoint documentation
5. **Architecture docs**: Design decisions and patterns

### Documentation Standards

- **Clear and concise**: Avoid jargon when possible
- **Code examples**: Include practical examples
- **Keep updated**: Update docs with code changes
- **Link related docs**: Cross-reference related documentation
- **Use proper markdown**: Follow markdown best practices

---

## Getting Help

### Resources

- **Documentation**: Check `docs/` directory
- **GitHub Issues**: Search existing issues
- **GitHub Discussions**: Ask questions and share ideas
- **Code Comments**: Read inline documentation

### How to Ask for Help

When asking for help:
1. **Search first**: Check if your question was already answered
2. **Be specific**: Provide context and details
3. **Include code**: Share relevant code snippets
4. **Show what you tried**: Explain your attempted solutions
5. **Be patient**: Maintainers respond as time allows

---

## Recognition

Contributors will be recognized in:
- **CHANGELOG.md**: Listed in release notes
- **README.md**: Contributors section (for significant contributions)
- **GitHub**: Contributor badges and stats

---

## Questions?

If you have any questions about contributing, please:
- Open a [GitHub Discussion](../../discussions)
- Comment on a related issue
- Reach out to maintainers

Thank you for contributing to Efficiensee! 🎉
