import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { theme } from './components/styles/theme';
import App from './App';
import { ThemeProvider } from 'styled-components';
import { HashRouter as Router } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Router basename='/'>
        <App />
      </Router>
    </ThemeProvider>
  </React.StrictMode>
);
