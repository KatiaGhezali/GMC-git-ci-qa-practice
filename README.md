# GMC Git, CI and QA Practice

A JavaScript calculator project created to demonstrate Git version control, branching, merging, merge conflict resolution, automated testing, linting, and Continuous Integration.

## Features

- Addition
- Subtraction
- Multiplication
- Division
- Modulo
- Error handling for division by zero
- Error handling for modulo by zero

## Technologies

- JavaScript
- Node.js
- Node.js built-in test runner
- ESLint
- Git and GitHub
- GitHub Actions

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/KatiaGhezali/GMC-git-ci-qa-practice.git
cd GMC-git-ci-qa-practice
```

### 2. Install dependencies

```bash
npm ci
```

## Running the Project

Run the unit tests:

```bash
npm test
```

Run ESLint:

```bash
npm run lint
```

## Testing and Quality Assurance

The project includes unit tests covering:

- Addition
- Subtraction
- Multiplication
- Division
- Division by zero
- Modulo
- Modulo by zero

ESLint is used to identify JavaScript code quality issues.

## Continuous Integration

GitHub Actions automates the quality checks whenever changes are pushed to configured branches or pull requests target the main branch.

The workflow performs the following steps:

1. Checks out the repository.
2. Sets up Node.js.
3. Installs dependencies using `npm ci`.
4. Runs ESLint.
5. Executes the unit tests.

The workflow reports whether the checks pass or fail.

## Git Workflows Demonstrated

- Repository initialization and remote GitHub setup.
- Feature branch creation.
- Commits and pushes.
- Pull request creation and review.
- Feature branch merging.
- Merge conflict reproduction and resolution.
- Synchronization with the remote repository.

## Project Structure

```text
GMC-git-ci-qa-practice/
├── .github/
│   └── workflows/
│       └── ci.yml
├── docs/
│   └── project-info.md
├── screenshots/
├── src/
│   └── calculator.js
├── tests/
│   └── calculator.test.js
├── .gitignore
├── eslint.config.js
├── package.json
├── package-lock.json
└── README.md
```

## Screenshots and Evidence

The `screenshots/` directory contains evidence of:

- Successful GitHub Actions CI execution.
- Pull request creation and review.
- Successful pull request merging.
- Merge conflict detection.
- Merge conflict resolution and Git history.

## Repository

GitHub: https://github.com/KatiaGhezali/GMC-git-ci-qa-practice
