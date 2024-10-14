import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import global_en from './translations/en/global.json';
import global_nl from './translations/nl/global.json';
import global_no from './translations/no/global.json';
import i18next from 'i18next';
import { I18nextProvider } from 'react-i18next';

const lang = localStorage.getItem('lang') || "en";

i18next.init({
  interpolation: {escapeValue: true},
  lng: lang,
  resources: {
    en: {
      global: global_en,
    },
    nl: {
      global: global_nl,
    },
    no: {
      global: global_no,
    }
  }
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next} >
      <App />
    </I18nextProvider>
  </React.StrictMode>
);