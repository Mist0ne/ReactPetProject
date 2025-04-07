import './index.css';
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './app/App';
import { ThemeProvider } from '@mui/material';
import { theme } from './app/Theme';

const rootNode = document.getElementById('root');
if (!rootNode) throw new Error('No root node found');

const root = createRoot(rootNode);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
);
