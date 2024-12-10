import './language-menu.css';
import { useTranslation } from 'react-i18next';
import noFlag from '../assets/flags/no.png';
import nlFlag from '../assets/flags/nl.png';
import enFlag from '../assets/flags/en.png';

export default function LanguageMenu() {
    const [t, i18n] = useTranslation("global");

    const handleLanguageFlag = (lang) => {
        if (lang === 'no') {
            return noFlag;
        } else if (lang === 'nl') {
            return nlFlag;
        } else {
            return enFlag;
        }
    }

    const handleChosenLanguage = (lang) => {
        if (lang === 'no') {
            return 'Norsk bokmål';
        } else if (lang === 'nl') {
            return 'Nederlands';
        } else {
            return 'English';
        }
    }

    const handleLanguageSwitch = (lang) => {
        i18n.changeLanguage(lang);
        document.documentElement.lang = lang;
        localStorage.setItem('lang', lang);
    }

    return (
        <div className="dropdown">
            <button className="dropbtn">
                {handleChosenLanguage(i18n.language)}
                <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </button>
            <div className="dropdown-content">
                <button onClick={() => handleLanguageSwitch('no')} >
                    <img src={noFlag} alt='Norwegian flag' />
                    Norsk bokmål
                </button>
                <button onClick={() => handleLanguageSwitch('en')} >
                    <img src={enFlag} alt='English flag' />
                    English
                </button>
                <button onClick={() => handleLanguageSwitch('nl')} >
                    <img src={nlFlag} alt='Dutch flag' />
                    Nederlands
                </button>
            </div>
        </div>
    );
}