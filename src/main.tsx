import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { ThemeProvider } from './components/theme-provider.tsx'
import { Toaster } from './components/ui/toaster.tsx'

createRoot(document.getElementById('root')!).render(
  <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
    <StrictMode>
      <App />
      <Toaster/>
    </StrictMode>
  </ThemeProvider>
)
