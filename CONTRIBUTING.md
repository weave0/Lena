# Contributing to MeetConnect

Thank you for your interest in contributing to MeetConnect! This document provides guidelines and instructions for contributing.

## Code of Conduct

- Be respectful and inclusive
- Welcome newcomers
- Focus on constructive feedback
- Maintain professional communication

## Getting Started

1. Fork the repository
2. Clone your fork: `git clone https://github.com/your-username/meetconnect.git`
3. Create a branch: `git checkout -b feature/your-feature`
4. Follow the setup instructions in [GETTING_STARTED.md](./docs/GETTING_STARTED.md)

## Development Process

### 1. Branching Strategy

- `main` - Production-ready code
- `develop` - Integration branch
- `feature/*` - New features
- `bugfix/*` - Bug fixes
- `hotfix/*` - Urgent production fixes

### 2. Commit Messages

We follow [Conventional Commits](https://www.conventionalcommits.org/):

```
feat: add user profile editing
fix: resolve login token expiration
docs: update API documentation
style: format code with prettier
refactor: simplify activity service
test: add unit tests for auth
chore: update dependencies
```

### 3. Pull Request Process

1. Update documentation if needed
2. Add tests for new features
3. Ensure all tests pass: `npm test`
4. Update CHANGELOG.md
5. Create PR with clear description
6. Request review from team members
7. Address review feedback
8. Merge after approval

### 4. Code Style

- **TypeScript**: Use strict mode
- **Naming**: camelCase for variables/functions, PascalCase for components/classes
- **Formatting**: Prettier (automatic on save)
- **Linting**: ESLint (fix with `npm run lint`)

### 5. Testing

- Write tests for new features
- Maintain test coverage above 80%
- Run tests before committing: `npm test`
- Test types:
  - Unit tests for utilities and services
  - Integration tests for API endpoints
  - E2E tests for critical user flows

## Project Structure

```
MeetConnect/
├── mobile/          # React Native app
├── web/            # React web app
├── backend/        # Node.js API
├── shared/         # Shared types and utils
└── docs/           # Documentation
```

## What to Contribute

### High Priority
- Core MVP features (see ROADMAP.md)
- Bug fixes
- Performance improvements
- Security enhancements
- Documentation

### Welcome Contributions
- UI/UX improvements
- New features (discuss first)
- Test coverage
- Accessibility improvements
- Internationalization

### Please Avoid
- Breaking changes without discussion
- Large refactors without approval
- Dependencies without justification

## Reporting Bugs

Create an issue with:
- Clear title and description
- Steps to reproduce
- Expected vs actual behavior
- Screenshots if applicable
- Environment details (OS, browser, versions)

## Feature Requests

Create an issue with:
- Clear description of the feature
- Use case and benefits
- Mockups or examples if possible
- Willingness to implement

## Questions?

- Check existing documentation
- Search closed issues
- Ask in team chat
- Create a discussion thread

## License

By contributing, you agree that your contributions will be licensed under the same license as the project.

Thank you for contributing to MeetConnect! 🚀
