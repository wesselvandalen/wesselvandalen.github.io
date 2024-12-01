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
                <img src={handleLanguageFlag(i18n.language)} alt="Language flag icon" />
                {handleChosenLanguage(i18n.language)}
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