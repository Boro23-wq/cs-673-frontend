# CS 673 - Care Management and Co-ordination Frontend

Implementation of the frontend using Next.js, Typescript, and TailwindCSS, which is a part of the project CS 673 - Care Management and Co-ordination.

<u>Tech stack:</u>

1. [Next.js](https://nextjs.org/) - as a framework for building the application.
2. [Typescript](https://www.typescriptlang.org/) - as a programming language for strong types.
3. [TailwindCSS](https://tailwindcss.com/) - for styling.
4. [Flowbite](https://flowbite.com/#components) - as a component library.
5. [Phosphor Icons](https://phosphoricons.com/) - for icon packs.
6. [Eva Design System](https://eva.design/) - for color palettes.

## Configured ESLint, Prettier, and Husky

ESLint, Prettier, and Husky configuration helps us:

1.  Avoid Prettier warnings.
2.  Avoid ESLint warnings.
3.  Avoid errors compiling our code from Typescript.
4.  Run a valid build using Next.js build command.
5.  Above all, be consistent throughout the codebase.

- 5 different scripts for running checks pre-commit:

```json
# package.json

scripts: {
	...
	"check-types": "tsc --pretty --noEmit",
	"check-format": "prettier --check .",
	"check-lint": "eslint . --ext ts --ext tsx --ext js",
	"format": "prettier --write .",
	"test-all": "npm run check-format && npm run check-lint && npm run check-types && npm run build"
	...
}
```

1. `check-types:` Check for type errors.
2. `check-format:` Check for formatting errors.
3. `check-lint:` Check for linting errors. (For.eg. Having unused vars in the codebase, or using types instead of interfaces.)
4. `format:` Format entire codebase based on the rules set in `.prettierrc.json` file.
5. `test-all:` Execute all the above commands sequentially.

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

## How to install and run

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

4. Finally, run the command below based on your package manager to install all the required dependencies:

```bash
# yarn
$ yarn
OR
# npm
$ npm install
```

5. Once you have the dependencies installed, create a new branch for your team or for the feature you are working on.

```bash
# Please make sure you the branch name helps identify what you are currently working on and avoids ambiguity
# Suppose you are working on a feature where you upload file to S3 bucket name the branch as follows
git checkout -b uploadFile-to-s3
```

#### Update, add, commit, and push changes

On this branch, edit, stage, and commit changes in the usual fashion, building up the feature with as many commits as necessary. Before making a commit always run the command `yarn run format` or `npm run format` to format the files before commiting, as the pre-commit hook will not go through if there are formatting issues in the codebase. Once done, commit and push the branch as usual:

```bash
git add -A



# add meaningful commit messages
git commit -m 'added feature to upload profile image to S3'

git push -u origin new-feature
```

For more github commands and workflows please visit [here](https://www.atlassian.com/git/tutorials/comparing-workflows/feature-branch-workflow).

#### Create a PR

1. Once you have pushed the changes to the remote branch, create a PR (Pull Request), and request for review.
2. Please do not merge any PR without notifying to me or one of the moderators.

<u>Pull Requests. How it works?</u>

1.  A developer creates some feature in a dedicated branch in their local repository.
2.  The developer pushes the branch to a public Github repository.
3.  The developer creates a pull request via Github.
4.  The rest of the team or moderators reviews the code, discusses it, and alters it.
5.  The moderator if satisfied with the code merges the feature into the official repository and closes the pull request.
