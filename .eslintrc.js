module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname
  },
  extends: [
    '@react-native',
    'standard-with-typescript',
    'eslint-config-prettier',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-type-checked',
    'plugin:@typescript-eslint/strict',
    'plugin:@typescript-eslint/strict-type-checked',
  ],
  plugins: ['module-resolver', 'simple-import-sort', 'unused-imports'],
  ignorePatterns: [
    '__tests__',
    '/*.js'
  ],
  rules: {
    '@typescript-eslint/no-unused-vars': [
      'warn',
      {
        argsIgnorePattern: '^_',
        destructuredArrayIgnorePattern: '^_',
        varsIgnorePattern: '^_'
      }
    ],

    // Tweaking @typescript-eslint rules
    '@typescript-eslint/key-spacing': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-shadow': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-explicit-any': 'warn',
    "@typescript-eslint/consistent-type-definitions": "off",
    "@typescript-eslint/restrict-template-expressions": "off",
    // Prop types are not used in TypeScript files
    'react/no-unused-prop-types': 'off',
    'react/prop-types': 'off',
    // React
    'react/no-unstable-nested-components': 'off',
    'react-hooks/exhaustive-deps': 'error',
    'react-native/no-inline-styles': 'off',
    'react-native/no-single-element-style-arrays': 'error',
    'react-native/no-unused-styles': 'error',
    'react/jsx-curly-brace-presence': 'error',

    // Misc.
    'eslint-comments/no-unlimited-disable': 'error',
    'no-void': 0,
    'require-await': 2,
    'unused-imports/no-unused-imports': 'error',
    'simple-import-sort/imports': [
      'error',
      {
        groups: [
          // Side effect imports.
          ['^\\u0000'],
          // Node.js builtins prefixed with `node:`.
          ['^node:'],
          // Packages.
          // React packages first. Then, things that start with a letter (or digit or underscore), or `@` followed by a letter.
          [
            '^react$',
            '^react-native$',
            '^prop-types$',
            '^react-(?!native)(\\w+)',
            '^@?\\w'
          ],
          // Absolute imports and other imports such as Vue-style `@/foo`.
          // Anything not matched in another group.
          ['^'],
          // Relative imports.
          // Anything that starts with a dot.
          ['^\\.']
        ]
      }
    ]
  },
  "overrides": [
    {
     "files": ["startselect_types.ts"],
        "rules": {
          "@typescript-eslint/no-explicit-any": "off"
        }
    }
   ]
};
