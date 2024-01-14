import '@emotion/react'
import { theme } from './ThemeProvider'

type ThemeType = typeof theme

declare module '@emotion/react' {
  export interface Theme extends ThemeType {}
}
