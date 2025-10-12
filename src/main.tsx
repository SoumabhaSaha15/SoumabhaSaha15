import './index.css';
import 'aos/dist/aos.css';
import App from './App.tsx';
import { createRoot } from 'react-dom/client';
import ToastProvider from './Context/Toast/ToastProvider.tsx';
import ThemeProvider from './Context/Theme/ThemeProvider.tsx';
createRoot(document.getElementById('root')!).render(
  <ThemeProvider children={<ToastProvider children={<App/>} />} />
);
