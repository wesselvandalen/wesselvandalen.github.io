import './language-dropdown.css';
import { useTranslation } from "react-i18next";
import noFlag from '../assets/flags/no.png';
import nlFlag from '../assets/flags/nl.png';
import enFlag from '../assets/flags/gb.png';

export default function LanguageDropdown() {
    const [translation, i18n] = useTranslation("global");

    const handleChosenLanguage = (lang) => {
        if (lang === 'no') {
            return 'Norsk';
        } else if (lang === 'nl') {
            return 'Nederlands';
        } else if (lang === 'en') {
            return 'English';
        } else {
            return '?';
        }
    };

    const handleLanguageSwitch = (lang) => {
        i18n.changeLanguage(lang);
        localStorage.setItem('lang', lang);
    };


    return (
        <div className="dropdown">
            <button className="dropbtn">
                {handleChosenLanguage(i18n.language)} 
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                </svg>
            </button>
            <div className="dropdown-content">
                <button onClick={() => handleLanguageSwitch('en')} >
                    <img src={enFlag} alt='English flag'/>
                    English
                </button>
                <button onClick={() => handleLanguageSwitch('no')} >
                    <img src={noFlag} alt='Norwegian flag'/>
                    Norsk
                </button>
                <button onClick={() => handleLanguageSwitch('nl')} >
                    <img src={nlFlag} alt='Dutch flag'/>
                    Nederlands
                </button>
            </div>
        </div>
    );
}