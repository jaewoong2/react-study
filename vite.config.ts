/* eslint-disable import/no-extraneous-dependencies */
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'

export default () => {
  return defineConfig({
    plugins: [
      react({
        jsxImportSource: '@emotion/react',
        babel: {
          plugins: ['@emotion/babel-plugin'],
        },
      }),
      tsconfigPaths(),
    ],
  })
}
