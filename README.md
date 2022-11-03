# CS 673 - Care Management and Co-ordination Frontend

Implementation of the frontend using Next.js, Typescript, and TailwindCSS, which is a part of the project CS 673 - Care Management and Co-ordination.

## Configured ESLint, Prettier, and Husky

Configuring the above helps us:

1.  Avoid Prettier warnings.
2.  Avoid ESLint warnings.
3.  Avoid errors compiling our code from Typescript.
4.  Run a valid build using Next.js build command.

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

- ESLint ([`.eslintrc.js`](https://github.com/jarrodwatts/code-like-google/blob/main/.eslintrc.js))
- Prettier ([`.prettierrc.js`](https://github.com/jarrodwatts/code-like-google/blob/main/.prettierrc))
- Typescript ([`tsconfig.json`](https://github.com/jarrodwatts/code-like-google/blob/main/tsconfig.json))
- `eslint-config-prettier` (helps eslint and prettier get along)

### For auto-formatting on save:

Inside `/.vscode/settings.json` we set prettier as the default formatter, and also set `editor.codeActionsOnSave` to run:

- **Lint:** `"source.fixAll.eslint"`
- **Format:** `"source.fixAll.format"`

### Checking standards (pre-commit):

Using [husky](https://www.npmjs.com/package/husky), check all the style standards to make sure the git commits follow the guidelines or are par.

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

4. Finally, run the command below based on your package manager:

```bash
# yarn
$ yarn
OR
# npm
$ npm install
```
