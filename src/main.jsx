import React from 'react';
import ReactDOM from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import App from './App';
import './index.css';
import 'aos/dist/aos.css';
import AOS from 'aos';

AOS.init({
  duration: 800,
  once: true,
  offset: 100,
  easing: 'ease-in-out',
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </React.StrictMode>
);