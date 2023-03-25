import type { AppProps } from 'next/app'

import { lightTheme } from '@/themes';
import { CssBaseline, ThemeProvider } from '@mui/material';

import '@/styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={lightTheme}>
        <CssBaseline>
          <Component {...pageProps} />
        </CssBaseline>
      </ThemeProvider>
    </>
  )
}
