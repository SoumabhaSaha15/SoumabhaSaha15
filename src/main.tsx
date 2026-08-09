import '@/index.css';
import '@/patterns.css';
import App from '@/App.tsx';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import ToastProvider from '@/context/toast/ToastProvider.tsx';
import ThemeProvider from '@/context/theme/ThemeProvider.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <ToastProvider>
        <App />
      </ToastProvider>
    </ThemeProvider>
  </StrictMode>
);
