# drgato config files

you can use this config files for your projects uwu

## Eslint

.eslintrc.cjs

> you need to install `@typescript-eslint/eslint-plugin` and `@typescript-eslint/parser`

```js
module.exports = require('@drgatoxd/config/eslint.json');
```

## Typescript config

```jsonc
{
	"extends": "@drgatoxd/config/tsconfig.json",
	"compilerOptions": {
		// aditional config
	},
	"exclude": ["node_modules", "**/*.spec.ts"],
	"include": ["src/**/*", ".eslintrc.cjs"]
}
```
