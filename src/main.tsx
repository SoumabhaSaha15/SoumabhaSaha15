import './index.css';
import './patterns.css';
import App from './App.tsx';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import ToastProvider from './Context/Toast/ToastProvider.tsx';
import ThemeProvider from './Context/Theme/ThemeProvider.tsx';

createRoot(document.getElementById('root')!).render(<StrictMode children={<ThemeProvider children={<ToastProvider children={<App />} />} />} />);
