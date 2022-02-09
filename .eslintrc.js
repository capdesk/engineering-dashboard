module.exports = {
  env: {
    es6: true,
  },
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: ['standard-with-typescript', 'prettier'],
  // The rule choice below is opinionated
  // They are considered best practice but mostly make the codebase less pleasant
  rules: {
    // Allow implicit function return type
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/explicit-function-return-type.md
    '@typescript-eslint/explicit-function-return-type': 'off',
    // Allow implicitly typed module export
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/explicit-module-boundary-types.md
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    // Allow empty interface
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-empty-interface.md
    '@typescript-eslint/no-empty-interface': 'off',
    // Allow falsy/truthy boolean expressions
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/strict-boolean-expressions.md
    '@typescript-eslint/strict-boolean-expressions': 'off',
    // Prefer double quote in JSX statement
    'jsx-quotes': ['error', 'prefer-double'],
    // Prefer type over interfaces
    '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
    // Fix eslint-plugin-import re-export bug
    'import/export': 'off',
    // Allow number in template literals
    '@typescript-eslint/restrict-template-expressions': 'off',
  },
  parserOptions: {
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
  },
}
