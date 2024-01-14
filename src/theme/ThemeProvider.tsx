import React, { PropsWithChildren } from 'react'
import { ThemeProvider } from '@emotion/react'

export const theme = {
  colors: {
    primary: '#d9df12',
    secondary: 'blue',
    temp: 'gray',
  },
}

export type MyTheme = typeof theme

const MyThemeProvider = ({ children }: PropsWithChildren) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

export default MyThemeProvider
