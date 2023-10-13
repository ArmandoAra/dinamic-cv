
//Interface
import type { AppProps } from 'next/app'

// MUI
import { CssBaseline, ThemeProvider } from '@mui/material';

//Context
import { UIProvider } from '@/context/ui'

//Temas
import { lightTheme } from '../themes';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <UIProvider>
      <ThemeProvider theme={lightTheme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </UIProvider>
  )
}
