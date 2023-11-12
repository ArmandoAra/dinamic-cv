
//Interface
import type { AppProps } from 'next/app'

// MUI
import { CssBaseline, ThemeProvider } from '@mui/material';

//Context
import { UIProvider } from '@/context/ui'

//Temas
import { lightTheme } from '../themes';
import { AuthProvider, FormProvider } from '@/context';

import '@/styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <UIProvider>
        <FormProvider>
          <ThemeProvider theme={lightTheme}>
            <CssBaseline />
            <Component {...pageProps} />
          </ThemeProvider>
        </FormProvider>
      </UIProvider>
    </AuthProvider>
  )
}
