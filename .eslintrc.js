module.exports = {
    env: {
        browser: true,
        es2021: true,
        jest: true,
    },
    extends: [
        'plugin:react/recommended',
        'airbnb',
        'plugin:i18next/recommended',
        'plugin:storybook/recommended',
        'plugin:prettier/recommended',
        'eslint-config-prettier',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: [
        'react',
        '@typescript-eslint',
        'i18next',
        'react-hooks',
        'mb',
        'unused-imports',
    ],
    rules: {
        'react/jsx-filename-extension': [
            1,
            { extensions: ['.js', '.jsx', '.tsx'] },
        ],
        'no-unused-vars': 'warn',
        'react/jsx-props-no-spreading': 'warn',
        'no-console': 'warn',
        'import/no-unresolved': 'off',
        'import/prefer-default-export': 'off',
        'react/require-default-props': 'off',
        'react/react-in-jsx-scope': 'off',
        'react/function-component-definition': 'off',
        'no-shadow': 'off',
        'import/extensions': 'off',
        'import/no-extraneous-dependencies': 'off',
        'no-underscore-dangle': 'off',
        'jsx-a11y/no-static-element-interactions': 'off',
        'jsx-a11y/click-events-have-key-events': 'off',
        'no-undef': 'off',
        'react/no-array-index-key': 'off',
        'react/destructuring-assignment': 'warn',
        'react/no-unstable-nested-components': 'warn',
        'i18next/no-literal-string': [
            'error',
            {
                markupOnly: true,
                ignoreAttribute: [
                    'data-testid',
                    'to',
                    'target',
                    'justify',
                    'align',
                    'direction',
                    'gap',
                    'role',
                    'as',
                    'border',
                ],
            },
        ],
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'error',
        'no-param-reassign': 'off',
        'unused-imports/no-unused-imports': 'error',
        'mb/path-checker': ['error', { alias: '@' }],
        'mb/public-api-imports': [
            'error',
            {
                alias: '@',
                testFilesPatterns: [
                    '**/*.test.*',
                    '**/*.story.',
                    '**/StoreDecorator.tsx',
                ],
            },
        ],
        'mb/layer-imports': [
            'error',
            {
                alias: '@',
                ignoreImportPatterns: ['**/StoreProvider', '**/testing'],
            },
        ],
    },
    globals: {
        __IS_DEV__: true,
        __API__: true,
        __PROJECT__: true,
    },
    overrides: [
        {
            files: [
                '**/src/**/*.test.{ts,tsx}',
                '**/src/**/*.stories.{ts,tsx}',
            ],
            rules: {
                'i18next/no-literal-string': 'off',
            },
        },
    ],
};
