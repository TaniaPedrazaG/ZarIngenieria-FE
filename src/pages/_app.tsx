import type { AppProps } from 'next/app'

import { lightTheme } from '@/themes';
import { CssBaseline, ThemeProvider } from '@mui/material';

import '@/styles/globals.css'
import { SWRConfig } from 'swr';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <SWRConfig 
        value={{ fetcher: (resource, init) => fetch(resource, init).then(res => res.json()) }}
      >
        <ThemeProvider theme={lightTheme}>
          <CssBaseline>
            <Component {...pageProps} />
          </CssBaseline>
        </ThemeProvider>
      </SWRConfig>
    </>
  )
}
