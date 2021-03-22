[![Tests](https://github.com/FabienGreard/front-end-rocks-boilerplate/actions/workflows/tests.yml/badge.svg)](https://github.com/FabienGreard/front-end-rocks-boilerplate/actions/workflows/tests.yml)
[![CodeQL](https://github.com/FabienGreard/front-end-rocks-boilerplate/actions/workflows/codeql-analysis.yml/badge.svg)](https://github.com/FabienGreard/front-end-rocks-boilerplate/actions/workflows/codeql-analysis.yml)

# front-end-rocks-boilerplate

This is an opinionated boilerplate with rocking tools for front-end development.

## Values

This boilerplate aims to provide a way to start a new project with everything from testing to ci/cd out of the box.

Keeping the dependencies up to date is a priority.

You should, with this boilerplate only focus on coding rocking react components! Nothing else!

## Installation

Start by cloning this repository, then use either `yarn install` or `npm install` to download the dependencies.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Commands

| Commands     |                      Info                       |                                   Description |
| ------------ | :---------------------------------------------: | --------------------------------------------: |
| dev          |                    next dev                     |                        Launch app in dev mode |
| dev:test     |                  jest --watch                   |                                   Launch test |
| dev:coverage |             jest --coverag --watch              |                 Generate a coverage from test |
| dev:e2e      |                   cypress run                   |                               Launch e2e test |
| build        |                   next build                    |              Build the app for production use |
| start        |                   next start                    |                         Launch app from build |
| format       |               prettier --write .                |                                Format project |
| lint         |                 eslint --fix .                  |                                  Lint project |
| test         |                  jest --silent                  |                                   Launch test |
| coverage     |            jest --coverage --silent             |                 Generate a coverage from test |
| e2e          |             cypress run --headless              |                               Launch e2e test |
| storybook    |             start-storybook -p 6006             |              Launch storybook (design-system) |
| bump:patch   | standard-version --release-as patch --no-verify |                            v.0.0.0 => v.0.0.1 |
| bump:minor   | standard-version --release-as minor --no-verify |                            v.0.0.0 => v.0.1.0 |
| bump:major   | standard-version --release-as major --no-verify |                            v.0.0.0 => v.1.0.0 |
| clear        |              node scripts/clear.js              |                 clear node_modules and \*lock |
| prepare      |                  husky install                  | This is need from husky to set up the project |

## Acknowledgement

This project is build with :

- [NextJs](https://nextjs.org/)
- [Tailwindcss](https://tailwindcss.com/)
- [Typescript](https://www.typescriptlang.org/)
- [react-intl](https://formatjs.io/)
- [Jest](https://jestjs.io/)
- [storybook](https://storybook.js.org/)
- [Cypress](https://www.cypress.io/)
- [Prettier](https://prettier.io/)
- [Eslint](https://eslint.org/)
- [husky](https://typicode.github.io/husky/#/)
- [commitlint](https://commitlint.js.org/#/)
- [standard-version](https://github.com/conventional-changelog/standard-version)
- [vscode](https://code.visualstudio.com/)

## Tests

This project use [testing-library](https://testing-library.com/) for both unit test and e2e.

- [react](https://testing-library.com/docs/react-testing-library/intro)
- [cypress](https://testing-library.com/docs/cypress-testing-library/intro)
- [jest-dom](https://github.com/testing-library/jest-dom)
- [react-hooks](https://react-hooks-testing-library.com/)

## Git Commit Convention

Using [commitlint](https://commitlint.js.org/#/) with the below types:

build
ci
docs
feat
fix
perf
refactor
revert
style
test
chore
wip

Given the [conventionalcommits](https://www.conventionalcommits.org/en/v1.0.0/):

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)
