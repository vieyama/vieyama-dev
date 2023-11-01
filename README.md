
# FishFin

FishFin Dashboard Application using NextJS and React

## Features

- ⚡️ Next.js 13
- ⚛️ React 18
- ⛑ TypeScript
- 💅 Tailwind + Emotion for styling and components
- 💡 Sentry — Performance monitoring tools for handle capture an errors
- 📊 Microsoft/Google Analytics — Get Analytics of web applications
- 📏 ESLint — Find and fix problems in your code
- 💖 Prettier — Code Formatter for consistent style
- 🐶 Husky — For running scripts before committing
- ⚡ Extracts & React Query — Tools for data fetching and state for API. Or you can use GraphQL
- 📄 Commitizen — To define a standard way of committing rules
- 🚓 Commitlint — Make sure your commit messages follow the convention
- 🚫 lint-staged — To run ESLint and Prettier against staged Git files
- ⚙️ EditorConfig — Maintain consistent coding styles across editors and IDEs
- 🗂 Path Mapping — Import components or images using the `~` prefix
- 👻 Jotai for State Management
- 📝 React Hook Form + Yup for handling nested forms and deep logic for forms validation
- 🧪 Testing with React Testing Library, Jest, Playwright
- 🐳 Docker for running this app in your local container

## Quick Start

You need to clone this repo using this command to cloning or create the app

```
git clone git@gitlab.com:fishlog/fishfin/ff-fe-fap.git
```

### Development

To start the project locally, run:

```bash
yarn dev
```

Open `http://localhost:3000` with your browser to see the result.

### Requirements

- Node.js >= 18
- Yarn 1 (Classic) or pnpm

Instead of installing a node and yarn
you can push this apps using command `yarn docker-run` to up this app into your local container using docker

### Directory Structure

- [`.gitlab`](.gitlab) — Gitlab configuration including the CI workflow.<br>
- [`.husky`](.husky) — Husky configuration and hooks.<br>
- [`public`](./public) — Static assets such as robots.txt, images, and favicon.<br>
- [`src`](./src) — Application source code, including pages, components, styles, etc.

### Scripts

- `yarn dev` — Starts the application in development mode at `http://localhost:3000`.
- `yarn build` — Creates an optimized production build of your application.
- `yarn start` — Starts the application in production mode.
- `yarn type-check` — Validate code using TypeScript compiler.
- `yarn lint` — Runs ESLint for all files in the `src` directory.
- `yarn format` — Runs Prettier for all files in the `src` directory.
- `yarn commit` — Run commitizen. Alternative to `git commit`.
- `yarn check:ts` — Run typescript compiler and check type.
- `yarn docker-run` — Run this app in docker container.
- `yarn generate-icon-type` - Run this to generate icon type.

### Path Mapping

TypeScript are pre-configured with custom path mappings. To import components or files, use the `~` prefix.

```ts
import {Button} from "~/components/Button";

// To import images or other files from the public folder
import Avatar from "~/public/avatar.png";
```

### Note: Switch to yarn for running this app

By default, this starter uses yarn, please install yarn first for global engine package, install the dependencies with `yarn`

### Merge Request Workflow

Every PR should be formatting for example:
`feat(800): Create login page`

This mean you give a explanation what you doing in your code.
`feat` mean you adding new feature `800` is optional like you explanation backlog jira code
and `Create login page` is description what you doing.

And every PR should be reviewed by one person

### Structure Folder
this project use NextJS 13 with App Directory
```md
├── src
    ├── app
	    ├── (auth)
		    ├── login
			    ├── login.tsx
			    └── page.tsx
		    └── layout.tsx
	    ├── (dashboard)
		    ├── (routes)
			    ├── application
				    ├── components
				    ├── constants
				    ├── detail
				    ├── form-application
				    ├── layout.tsx
				    └── page.tsx
			    └── workspace
				    ├── components
				    └── page.tsx
		    ├── components
		    ├── constants
		    ├── layout.tsx
		    └── loading.tsx
	    ├── favicon.ico
	    ├── globals.css
	    ├── layout.tsx
	    └── page.tsx
    ├── components
    ├── constants
    ├── hooks
    ├── interfaces
    ├── services
    ├── state
    ├── utils
    └── validations
├── public
    └── assets
		├── auth-illustration.svg
		├── broken-image.svg
		├── fishfin-logo-white.svg
		├── fishfin-logo.svg
		├── no-images.svg
		├── preview-docx.svg
		├── preview-image.svg
		├── preview-pdf.svg
		└── upload-icon.svg
├── middleware.ts
├── .commitlintrc.json
├── .editorconfig
├── .env
├── .eslintignore
├── .eslintrc
├── .gitignore
├── .gitlab-ci.yml
├── .prettierignore
├── .prettierrc
├── next.config.js
├── tailwind.config.js
├── sonar-project.properties
├── README.md
└── tsconfig.json
```
In general, the app directory structure includes:
1. folder name, if the folder name contains () then the folder will not appear in the route url, for example app/(auth)/login then the url will be localhost:3000/login.
2. file 'page.tsx'. This file marks a folder as a router.
3. There is a folder called components in each parent folder in the app folder. The component folder is a collection of component files that are only used by the parent folder. as well as other folders such as constants and other folders.
4. file 'Layout.tsx'. This file is a layout component for each route. For example, in the auth folder there is a layout file so only children of the auth route can access it. so we can create each route with a different layout file if necessary.