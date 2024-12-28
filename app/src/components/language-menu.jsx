import './language-menu.css';
import { useTranslation } from 'react-i18next';
import noFlag from '../assets/flags/no.png';
import nlFlag from '../assets/flags/nl.png';
import enFlag from '../assets/flags/en.png';
import dkFlag from '../assets/flags/dk.png';
import isFlag from '../assets/flags/is.png';
import svFlag from '../assets/flags/sv.png';

export default function LanguageMenu() {
    const [t, i18n] = useTranslation("global");

    const handleLanguageFlag = (lang) => {
        if (lang === 'no') {
            return noFlag;
        } else if (lang === 'nl') {
            return nlFlag;
        } else if (lang === 'dk') {
            return dkFlag;
        } else if (lang === 'is') {
            return isFlag;
        } else if (lang === 'sv') {
            return svFlag;
        } else {
            return enFlag;
        }
    }

    const handleChosenLanguage = (lang) => {
        return lang.toUpperCase();
    }

    const handleLanguageSwitch = (lang) => {
        i18n.changeLanguage(lang);
        document.documentElement.lang = lang;
        localStorage.setItem('lang', lang);
    }

    return (
        <div className="dropdown">
            <button className="dropbtn">
                <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                {handleChosenLanguage(i18n.language)}
            </button>
            <div className="dropdown-content">
                <button onClick={() => handleLanguageSwitch('no')} >
                    <img src={noFlag} alt='Norwegian flag' />
                    Norsk
                </button>
                <button onClick={() => handleLanguageSwitch('en')} >
                    <img src={enFlag} alt='English flag' />
                    English
                </button>
                <button onClick={() => handleLanguageSwitch('nl')} >
                    <img src={nlFlag} alt='Dutch flag' />
                    Nederlands
                </button>
                <button onClick={() => handleLanguageSwitch('dk')} >
                    <img src={dkFlag} alt='Danish flag' />
                    Dansk
                </button>
                <button onClick={() => handleLanguageSwitch('is')} >
                    <img src={isFlag} alt='Icelandic flag' />
                    Íslenska
                </button>
                <button onClick={() => handleLanguageSwitch('sv')} >
                    <img src={svFlag} alt='Swedish flag' />
                    Svenska
                </button>
            </div>
        </div>
    );
}