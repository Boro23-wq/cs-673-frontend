# CS 673 - Care Management and Co-ordination Frontend

Implementation of the frontend using Next.js, Typescript, and TailwindCSS, which is a part of the project CS 673 - Care Management and Co-ordination.

_"Next.js gives you the best developer experience with all the features you need for production: hybrid static & server rendering, TypeScript support, smart bundling, route pre-fetching, and more. No config needed."_

<u>Tech stack:</u>

1.  [Next.js](https://nextjs.org/) - as a framework for building the application.
2.  [Typescript](https://www.typescriptlang.org/) - as a programming language for strong types.
3.  [TailwindCSS](https://tailwindcss.com/) - for styling.
4.  [Flowbite](https://flowbite.com/#components) - as a component library.
5.  [Phosphor Icons](https://phosphoricons.com/) - for icon packs.
6.  [Eva Design System](https://eva.design/) - for color palettes.

## Project setup

I highly recommend to use VSCode for this project. VSCode is available for all platforms (Windows, Mac, Linux).

1. Clone the repository to your local machine.

```bash
$ git clone https://github.com/Boro23-wq/cs-673-frontend.git
```

2. Change directory into the repository you just cloned.

```bash
$ cd cs-673-frontend
```

3. Open the repository in your favorite code editor. I'm using VSCode. The shortcut to open a directory in VSCode is:

```bash
$ code .
```

Please make sure you are inside the directory.

4. Finally, run the command below to install all the required dependencies:

```bash
$ yarn install
```

5. Once you have the dependencies installed, create a new branch for your team or for the feature you are working on.

```bash
# Please make sure you the branch name helps identify what you are currently working on and avoids ambiguity

# Suppose you are working on a feature where you upload file to S3 bucket name the branch as follows

git checkout -b uploadFile-to-s3
```

## Engine Locking

We would like for all developers working on this project to use the same Node engine and package manager we are using.

We are using `Node v16 Gallium` and `yarn` for this project so we set those values like so:

`.nvmrc`

```.nvmrc
lts/gallium
```

`.npmrc`

```
engine-strict=true
```

You can check your version of Node with `node --version` and make sure you are setting the correct one. A list of Node version codenames can be found [here](https://github.com/nodejs/Release/blob/main/CODENAMES.md)

Note that the use of `engine-strict` didn't specifically say anything about `yarn`, we do that in `package.json`:

`package.json`

```json
...
"engines": {
"node": ">=16.0.0",
"yarn": ">=1.22.0",
"npm": "please-use-yarn"
},
...
```

The `engines` field is where I have specified the specific versions of the tools we are using.

## Code Formatting and Quality Tools

In order to set a standard that will be used by all contributors to the project to keep the code style consistent and basic best practices followed we will be implementing two tools:

- [eslint](https://eslint.org/) - For best practices on coding standards
- [prettier](https://prettier.io/) - For automatic formatting of code files
- [husky](https://github.com/typicode/husky) - For writing pre-commit, pre-push, and commit-lint hooks.

### ESLint, Prettier, and Husky

The configuration of ESLint, Prettier and Husky would help us:

1. Avoid Prettier warnings.
2. Avoid ESLint warnings.
3. Avoid errors compiling our code from Typescript.
4. Run a valid build using Next.js build command.
5. Above all, be consistent throughout the codebase.

- 5 different scripts for running checks pre-commit:

```json
# package.json

scripts: {
...
"check-types":  "tsc --pretty --noEmit",
"check-format":  "prettier --check .",
"check-lint":  "eslint . --ext ts --ext tsx --ext js",
"format":  "prettier --write .",
"test-all":  "npm run check-format && npm run check-lint && npm run check-types && npm run build"
...
}
```

1.  `check-types:` Check for type errors.
2.  `check-format:` Check for formatting errors.
3.  `check-lint:` Check for linting errors. (For.eg. Having unused vars in the codebase, or using types instead of interfaces.)
4.  `format:` Format entire codebase based on the rules set in `.prettierrc.json` file.
5.  `test-all:` Execute all the above commands sequentially.

<u>Packages installed: </u>

- ESLint ([`.eslintrc.js`](https://github.com/jarrodwatts/code-like-google/blob/main/.eslintrc.js))

- Prettier ([`.prettierrc.js`](https://github.com/jarrodwatts/code-like-google/blob/main/.prettierrc))

- Typescript ([`tsconfig.json`](https://github.com/jarrodwatts/code-like-google/blob/main/tsconfig.json))

- `eslint-config-prettier` (helps eslint and prettier get along)

### For auto-formatting on save:

Inside `/.vscode/settings.json` we set prettier as the default formatter, and also set `editor.codeActionsOnSave` to run:

- **Lint:** `"source.fixAll.eslint"`
- **Format:** `"source.fixAll.format"`

### Checking standards (pre-commit):

[Husky](https://www.npmjs.com/package/husky), helps us check all the style standards to make sure the git commits follow the guidelines or are as par.

## Git Hooks

We have setup three hooks for our app. But the one that will follow is something to take care of while committing and pushing code to Github.

We will follow a standard convention for all our commit messages. We added a linter for our commit messages:

```
yarn add -D @commitlint/config-conventional @commitlint/cli
```

To configure it we will be using a set of standard defaults, but I like to include that list explicitly in a `commitlint.config.js` file since I sometimes forget what prefixes are available:

`commitlint.config.js`

```js
// build: Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)
// ci: Changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs)
// docs: Documentation only changes
// feat: A new feature
// fix: A bug fix
// perf: A code change that improves performance
// refactor: A code change that neither fixes a bug nor adds a feature
// style: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
// test: Adding missing tests or correcting existing tests

module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'body-leading-blank': [1, 'always'],
    'body-max-line-length': [2, 'always', 100],
    'footer-leading-blank': [1, 'always'],
    'footer-max-line-length': [2, 'always', 100],
    'header-max-length': [2, 'always', 100],
    'scope-case': [2, 'always', 'lower-case'],
    'subject-case': [
      2,
      'never',
      ['sentence-case', 'start-case', 'pascal-case', 'upper-case']
    ],
    'subject-empty': [2, 'never'],
    'subject-full-stop': [2, 'never', '.'],
    'type-case': [2, 'always', 'lower-case'],
    'type-empty': [2, 'never'],
    'type-enum': [
      2,
      'always',
      [
        'build',
        'chore',
        'ci',
        'docs',
        'feat',
        'fix',
        'perf',
        'refactor',
        'revert',
        'style',
        'test',
        'translation',
        'security',
        'changeset'
      ]
    ]
  }
}
```

## VS Code Configuration

Now that we have implemented ESLint and Prettier so we can take advantage of some convenient VS Code functionality to have them be run automatically.

We have created a directory in the root of our project called `.vscode` and inside a file called `settings.json`. This will be a list of values that override the default settings of your installed VS Code.

The reason we want to place them in a folder for the project is that we can set specific settings that only apply to this project, and we can share them with the rest of our team by including them in the code repository.

`.vscode/settings.json`

```json
{
  "editor.formatOnPaste": true,
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true,
    "source.fixAll.format": true,
    "source.organizeImports": true
  }
}
```

The above will tell VS Code to use the Prettier extension as the default formatter and to automatically format your files and organize your import statements every time you save.

## Debugging

I have set up a convenient environment for debugging our application in case we run into any issues during development.

`launch.json`

```json
{
  "version": "0.1.0",
  "configurations": [
    {
      "name": "Next.js: debug server-side",
      "type": "node-terminal",
      "request": "launch",
      "command": "npm run dev"
    },
    {
      "name": "Next.js: debug client-side",
      "type": "pwa-chrome",
      "request": "launch",
      "url": "http://localhost:3000"
    },
    {
      "name": "Next.js: debug full stack",
      "type": "node-terminal",
      "request": "launch",
      "command": "npm run dev",
      "console": "integratedTerminal",
      "serverReadyAction": {
        "pattern": "started server on .+, url: (https?://.+)",
        "uriFormat": "%s",
        "action": "debugWithChrome"
      }
    }
  ]
}
```

With that script in place we have three choices for debugging. CLick the little "bug & play icon" on the left of VS Code or press `Ctrl + Shift + D` to access the debugging menu. You can select which script you want to run and start/stop it with the start/stop buttons.

We also have another package installed called [cross-env](https://www.npmjs.com/package/cross-env) which will; be necessary to set environment variables if we have teammates working on different environments (Windows, Linux, Mac, etc).

This will allow to log server data in the browser while working in dev mode, making it easier to debug issues.

## Directory Structure

This section is about setting up the folder structure in our project. This is one of those topics that many people will have _extremely strong opinions about_, and for good reason! Directory structure can really make or break a project in the long term when it gets out of control, especially when fellow team members have to spend unnecessary time trying to guess where to put things (or find things).

I personally like to take a fairly simplistic approach, keep things separated basically in a class model/view style. We will be using three primary folders:

```
/components
/lib
/pages
```

- `component` - The individual UI components that make up the app will live in here
- `lib` - Business/app/domain logic will live in here.
- `pages` - Will be the actual routes/pages as per the required Next.js structure.

We will have other folders in addition to this to support the project, but the core of almost everything that makes up the unique app that we are building will be housed in these three directories.

Within `components` we will have subdirectories that kind of group similar types of components together. You can use any method you prefer to do this. I have used the MUI library quite a bit in my time, so I tend to follow the same organization they use for components in [their documentation](https://mui.com/getting-started/installation/)

This section is simply designed to explain how I will be setting up this project.
