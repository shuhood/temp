import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeProvider, NotificationProvider, ChatProvider } from './contexts';
import App from './App';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <NotificationProvider>
        <ChatProvider>
          <App />
        </ChatProvider>
      </NotificationProvider>
    </ThemeProvider>
  </StrictMode>
);