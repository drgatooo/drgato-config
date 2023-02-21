module.exports = {
	env: {
		es2021: true,
		node: true
	},
	extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
		project: './tsconfig.json'
	},
	plugins: ['@typescript-eslint'],
	rules: {
		'@typescript-eslint/array-type': [
			'error',
			{
				default: 'array-simple',
				readonly: 'array-simple'
			}
		],
		'@typescript-eslint/await-thenable': 'error',
		'@typescript-eslint/consistent-type-assertions': 'error',
		'@typescript-eslint/consistent-type-definitions': 'error',
		'@typescript-eslint/consistent-type-imports': 'error',
		'@typescript-eslint/explicit-member-accessibility': 'error',
		'@typescript-eslint/no-base-to-string': [
			'error',
			{ ignoredTypeNames: ['TextChannel', 'VoiceChannel', 'Error'] }
		],
		'@typescript-eslint/no-namespace': 'off',
		'@typescript-eslint/no-confusing-non-null-assertion': 'error',
		'@typescript-eslint/no-floating-promises': 'error',
		'@typescript-eslint/no-non-null-assertion': 'off',
		'@typescript-eslint/no-unnecessary-condition': 'error',
		'@typescript-eslint/no-unused-vars': 'off',
		'@typescript-eslint/no-var-requires': 0,
		'@typescript-eslint/prefer-includes': 'error',
		'@typescript-eslint/prefer-optional-chain': 'error',
		'@typescript-eslint/prefer-return-this-type': 0,
		'@typescript-eslint/require-await': 'off',
		'arrow-body-style': 'error',
		'arrow-spacing': 'error',
		'block-spacing': 'error',
		'brace-style': ['error', '1tbs', { allowSingleLine: true }],
		'comma-spacing': 'error',
		'consistent-return': 'error',
		curly: ['error', 'multi-line'],
		'dot-location': ['error', 'property'],
		'dot-notation': 'error',
		'eol-last': ['error', 'always'],
		'key-spacing': 'error',
		'keyword-spacing': 'error',
		'max-classes-per-file': ['error', 1],
		'new-parens': ['error', 'always'],
		'newline-per-chained-call': 'error',
		'no-constructor-return': 'error',
		'no-multiple-empty-lines': 'error',
		'no-mixed-spaces-and-tabs': 'off',
		'no-return-await': 'error',
		'no-template-curly-in-string': 'error',
		'no-trailing-spaces': 'error',
		'no-unsafe-optional-chaining': 'error',
		'no-unused-expressions': 'error',
		'no-var': 'error',
		'object-curly-spacing': ['error', 'always'],
		'prefer-arrow-callback': 'error',
		'prefer-const': 'error',
		'prefer-destructuring': 'error',
		'prefer-rest-params': 'error',
		'prefer-spread': 'error',
		'prefer-template': 'error',
		quotes: ['error', 'single'],
		radix: ['error', 'always'],
		'require-await': 'error',
		semi: ['error', 'always'],
		'sort-imports': [
			'error',
			{
				ignoreCase: false,
				ignoreDeclarationSort: false,
				ignoreMemberSort: false,
				memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
				allowSeparatedGroups: false
			}
		]
	}
};
