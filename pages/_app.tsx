
//Interface
import type { AppProps } from 'next/app'

// MUI
import { CssBaseline, ThemeProvider } from '@mui/material';

//Context
import { UIProvider } from '@/context/ui'

//Temas
import { lightTheme } from '../themes';
import { AuthProvider } from '@/context';

import '@/styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <UIProvider>
        <ThemeProvider theme={lightTheme}>
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
      </UIProvider>
    </AuthProvider>
  )
}
