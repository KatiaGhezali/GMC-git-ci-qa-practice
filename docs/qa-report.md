# Quality Assurance Report

## 1. Project Overview

Project: GMC Git, CI and QA Practice

The project is a JavaScript calculator developed to demonstrate software testing, code quality checks, version control, and Continuous Integration.

## 2. Unit Testing

The project uses the Node.js built-in test runner (`node:test`) and the strict assertion module (`node:assert/strict`).

Seven unit tests were implemented and executed successfully.

| Test Case        | Expected Result                            | Status |
| ---------------- | ------------------------------------------ | ------ |
| Addition         | Returns the sum of two numbers             | Passed |
| Subtraction      | Returns the difference between two numbers | Passed |
| Multiplication   | Returns the product of two numbers         | Passed |
| Division         | Returns the quotient                       | Passed |
| Division by zero | Throws an error                            | Passed |
| Modulo           | Returns the remainder                      | Passed |
| Modulo by zero   | Throws an error                            | Passed |

Command used:

```bash
npm test
```

Result: 7 tests passed, 0 failed.

## 3. Static Code Analysis

ESLint was configured to check JavaScript files in the `src` and `tests` directories.

Command used:

```bash
npm run lint
```

Result: No linting errors were reported.

## 4. Continuous Integration

A GitHub Actions workflow was configured in `.github/workflows/ci.yml`.

The workflow automatically:

1. Checks out the repository.
2. Sets up Node.js 24.
3. Installs dependencies using `npm ci`.
4. Runs ESLint.
5. Executes the unit tests.

The workflow was triggered by pushes to configured branches and pull requests targeting `main`.

Result: The GitHub Actions pipeline completed successfully.

## 5. Pull Request and Code Review

A feature branch named `feature/modulo-operation` was created to implement the modulo operation.

A pull request was opened to merge the feature into `main`.

The pull request was reviewed, a review comment was added, and the changes were merged successfully.

Note: The review performed for this exercise was a self-review. No external peer reviewer participated.

## 6. Branching and Merge Conflict Resolution

Two branches were created:

- `feature/conflict-practice`
- `feature/conflict-update`

Both branches independently created and modified `docs/project-info.md` with different content.

When the second branch was merged into `main`, Git detected an add/add merge conflict.

The conflict was resolved manually by selecting the final project description, staging the corrected file, and completing the merge commit.

The merge history confirms that both branches were integrated into `main`.

## 7. Evidence

Screenshots documenting the following activities are available in the `screenshots/` directory:

- Successful CI pipeline execution.
- Pull request creation and review.
- Successful pull request merge.
- Merge conflict detection.
- Git merge history.

## 8. Conclusion

The project demonstrates the use of Git for version control and collaboration workflows, automated unit testing, static code analysis, pull request review, merge conflict resolution, and Continuous Integration through GitHub Actions.
