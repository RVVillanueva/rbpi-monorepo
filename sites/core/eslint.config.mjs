import { defineConfig } from 'eslint/config'

import js from '@eslint/js'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import ts from 'typescript-eslint'

export default defineConfig([
  js.configs.recommended,
  ts.configs.recommended,
  ...ts.configs.recommendedTypeChecked,
  {

    rules: {
      '@typescript-eslint/require-await': 'off',
      '@typescript-eslint/no-unsafe-member-access': 'off',
      '@typescript-eslint/no-unsafe-argument': 'off',
      '@typescript-eslint/no-unsafe-assignment': 'off',
      '@typescript-eslint/no-unsafe-return': 'off',
    },

    languageOptions: {
      parserOptions: {
        project: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
    plugins: {
      'react': react,
      'react-hooks': reactHooks,
    },
  },
])