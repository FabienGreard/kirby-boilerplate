[![Tests](https://github.com/FabienGreard/kirby-boilerplate/actions/workflows/tests.yml/badge.svg)](https://github.com/FabienGreard/kirby-boilerplate/actions/workflows/tests.yml)
[![CodeQL](https://github.com/FabienGreard/kirby-boilerplate/actions/workflows/codeql-analysis.yml/badge.svg)](https://github.com/FabienGreard/kirby-boilerplate/actions/workflows/codeql-analysis.yml)

![](public/images/og-image.png)

# kirby-boilerplate

This is an opinionated boilerplate with rocking tools for front-end development.

**⚠️ DISCLAIMER: This project as nothing to do with [Kirby CMS](https://getkirby.com/) !**

## Values

This boilerplate aims to provide a way to start a new project with everything from testing to ci/cd out of the box.

Keeping the dependencies up to date is a priority.

You should, with this boilerplate only focus on coding rocking react components! Nothing else!

## Installation

Start by cloning this repository, then use either `yarn install` or `npm install` to download the dependencies.

## Quick start

Want an easy way yo start the project with everything setup ? launch `yarn bootstrap` or `npm run bootstrap`

## Getting Started

First look at the `.env.example` file. (you can start with the default) by copying it into `.env`.

Then, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Commands

| Commands        |                      Info                       |                                                                Description |
| --------------- | :---------------------------------------------: | -------------------------------------------------------------------------: |
| bootstrap       |            node scripts/bootstrap.js            |                                                  run and setup the project |
| dev             |                    next dev                     |                                                     Launch app in dev mode |
| dev:test        |                  jest --watch                   |                                                                Launch test |
| dev:coverage    |             jest --coverage --watch             |                                              Generate a coverage from test |
| dev:e2e         |                  cypress open                   |                                                            Launch e2e test |
| build           |                   next build                    |                                           Build the app for production use |
| start           |                   next start                    |                                                      Launch app from build |
| format          |               prettier --write .                |                                                             Format project |
| lint            |                 eslint --fix .                  |                                                               Lint project |
| test            |                  jest --silent                  |                                                                Launch test |
| coverage        |            jest --coverage --silent             |                                              Generate a coverage from test |
| e2e             |             cypress run --headless              |                                                            Launch e2e test |
| storybook       |             start-storybook -p 6006             |                                           Launch storybook (design-system) |
| bump:patch      | standard-version --release-as patch --no-verify |                                                         v.0.0.0 => v.0.0.1 |
| bump:minor      | standard-version --release-as minor --no-verify |                                                         v.0.0.0 => v.0.1.0 |
| bump:major      | standard-version --release-as major --no-verify |                                                         v.0.0.0 => v.1.0.0 |
| codegen         |  npx apollo client:codegen --target typescript  |                      use for generating typing files from a graphql schema |
| prisma:migrate  |               prisma migrate dev                |                                      prisma database schema migration tool |
| prisma:seed     |        prisma db seed --preview-feature         |                                                  prisma database seed tool |
| prisma:generate |                 prisma generate                 |                                                     generate prisma client |
| clear           |              node scripts/clear.js              |                                              clear node_modules and \*lock |
| prepare         |        husky install && prisma:generate         | This is needed from husky to set up the project and generate prisma client |

## Acknowledgement

This project is build with :

- [NextJs](https://nextjs.org/)
- [React-Query](https://react-query.tanstack.com/)
- [Apollo](https://www.apollographql.com/)
- [Prisma](https://www.prisma.io/)
- [Tailwindcss](https://tailwindcss.com/)
- [Typescript](https://www.typescriptlang.org/)
- [React-Intl](https://formatjs.io/)
- [Jest](https://jestjs.io/)
- [Storybook](https://storybook.js.org/)
- [Cypress](https://www.cypress.io/)
- [Prettier](https://prettier.io/)
- [Eslint](https://eslint.org/)
- [Husky](https://typicode.github.io/husky/#/)
- [Commitlint](https://commitlint.js.org/#/)
- [Standard-Version](https://github.com/conventional-changelog/standard-version)
- [Vscode](https://code.visualstudio.com/)

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

## Setting up your own database (e.g. PostgreSQL, MySQL, SQL Server)

If you want to use another database than PostgreSQL, you can adjust the database connection in [`prisma/schema.prisma`](hhttps://github.com/FabienGreard/kirby-boilerplate/tree/main/prisma/schema.prisma) by reconfiguring the datasource block.

Learn more about the different connection configurations in the [docs](https://www.prisma.io/docs/reference/database-reference/connection-urls).

At this point your should be able to execute `yarn prisma:migrate` or `npm run prisma:migrate` to initialise your database with the base schema.

You could also seed your database with `yarn prisma:seed` or `npm run prisma:seed`.

:warning: by default you wont have the access for doing it, use your own database.

## Generate typing from graphql schema

You may need to look at [apollo-tooling](https://github.com/apollographql/apollo-tooling)

With the graphql endpoint running launch `yarn codegen`, this will create a typing file `schema.ts` under `types`.

## Hosting

Kirby use [vercel](https://vercel.com/docs) however you can use any other hosting service.

In order to not populate `.env` and still being able to deploy we are using [vercel-env](https://vercel.com/docs/concepts/projects/environment-variables).

You need to add both `NEXT_PUBLIC_GRAPHQL_ENDPOINT` and `DATABASE_URL` to have a sucessfull deployment on vercel.

## Roadmap:

(Would love Pull requests that build towards these objectives)

- [ ] Add a CLI installer like cra / cna
- [ ] Multiple install with opt-out feature e.f without apollo, with monorepo etc...
  - [ ] Monorepo
  - [ ] Without server / api (remove apollo)
  - [ ] More installer ??
- [ ] improve changelog generation
- [ ] Better doc ?
- [ ] Feature projects build with Kirby
- [ ] Feature contributors

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)
