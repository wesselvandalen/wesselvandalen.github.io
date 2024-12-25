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
        if (lang === 'no') {
            return 'Norsk';
        } else if (lang === 'nl') {
            return 'Nederlands';
        }  else if (lang === 'dk') {
            return 'Dansk';
        }  else if (lang === 'is') {
            return 'Íslenska';
        } else if (lang === 'sv') {
            return 'Svenska';
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
                <img src={handleLanguageFlag(i18n.language)} alt={`${i18n.language} flag`} />
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