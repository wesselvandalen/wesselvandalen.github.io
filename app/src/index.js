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
import global_is from './translations/is/global.json';
import global_dk from './translations/dk/global.json';
import global_sv from './translations/sv/global.json';

function getLanguage() {
  const lang = localStorage.getItem('lang');

  if (lang === 'en' || lang === 'no' || lang === 'nl' || lang === 'is' || lang === 'dk' || lang === 'sv') {
    document.documentElement.lang = lang;
    return lang;
  }

  // English is the standard app language
  localStorage.setItem('lang', 'en');
  return 'en';
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
    },
    dk: {
      global: global_dk,
    },
    is: {
      global: global_is,
    },
    sv: {
      global: global_sv,
    },
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