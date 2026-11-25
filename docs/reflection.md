# Project Reflection

Completing this project helped me understand how version control, software testing, code quality tools, and Continuous Integration work together in a software development workflow.

One of the main challenges was understanding Git branching and merge conflicts. I created two independent branches that modified the same documentation file. When I attempted to merge them, Git detected an add/add conflict. I inspected the conflict markers, compared both versions, selected the appropriate content, and completed the merge. This exercise helped me understand why conflicts occur and how to resolve them without losing work.

Another important part of the project was implementing automated quality checks. I created seven unit tests using Node.js's built-in test runner and configured ESLint to identify code quality issues. I also configured GitHub Actions to install dependencies, run the linter, and execute the tests automatically.

Continuous Integration is valuable because it provides early feedback whenever code changes are pushed or submitted through a pull request. It helps detect problems before changes are integrated into the main branch, reduces repetitive manual work, and makes the development process more reliable.

This project could be improved by introducing additional test cases, including input validation and edge cases. I would also like to add a build or deployment stage to the CI pipeline, introduce test coverage reporting, and involve other developers in pull request reviews.

Overall, this exercise strengthened my understanding of Git workflows and demonstrated how automated testing, code reviews, and CI contribute to software quality and maintainability.
