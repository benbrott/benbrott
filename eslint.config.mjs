import { defineConfig, globalIgnores } from 'eslint/config';
import nextVitals from 'eslint-config-next/core-web-vitals';
import nextTs from 'eslint-config-next/typescript';
import prettier from 'eslint-config-prettier/flat';
import importPlugin from 'eslint-plugin-import';

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  prettier,
  {
    plugins: {
      import: importPlugin
    },
    rules: {
      'import/order': 'error',
      'import/no-unresolved': 'error',
      'import/no-duplicates': 'error'
    },
    settings: {
      'import/resolver': {
        typescript: true,
        node: true
      }
    }
  },
  {
    rules: {
      'react/no-unescaped-entities': 'off'
    }
  },
  globalIgnores(['.next/**', 'out/**', 'build/**', 'next-env.d.ts'])
]);

export default eslintConfig;
