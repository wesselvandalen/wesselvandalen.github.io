import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import i18next from 'i18next';
import { I18nextProvider } from 'react-i18next';
import { initReactI18next } from 'react-i18next';

import global_en from './translations/en/global.json';
import global_no from './translations/no/global.json';
import global_nl from './translations/nl/global.json';

function getLanguage() {
  const lang = localStorage.getItem('lang');

  if (lang === 'en' || lang === 'no' || lang === 'nl') {
    document.documentElement.lang = lang;
    return lang;
  }

  // Norwegian is the standard app language
  localStorage.setItem('lang', 'no');
  return 'no';
}

i18next.use(initReactI18next).init({
  interpolation: {escapeValue: true},
  lng: getLanguage(),
  resources: {
    no: {
      global: global_no,
    },
    nl: {
      global: global_nl,
    },
    en: {
      global: global_en,
    }
  }
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <I18nextProvider i18next={i18next}>
      <App />
    </I18nextProvider>
  </React.StrictMode>
);