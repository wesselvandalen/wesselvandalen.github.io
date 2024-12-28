import './language-menu.css';
import { useTranslation } from 'react-i18next';

export default function LanguageMenu() {
    const [t, i18n] = useTranslation("global");

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
                <button onClick={() => handleLanguageSwitch('no')} style={{ borderTopRightRadius: '5px', borderTopLeftRadius: '5px' }} >Norsk</button>
                <button onClick={() => handleLanguageSwitch('en')} >English</button>
                <button onClick={() => handleLanguageSwitch('nl')} >Nederlands</button>
                <button onClick={() => handleLanguageSwitch('dk')} >Dansk</button>
                <button onClick={() => handleLanguageSwitch('is')} >Íslenska</button>
                <button onClick={() => handleLanguageSwitch('sv')} style={{ borderBottomRightRadius: '5px', borderBottomLeftRadius: '5px' }} >Svenska</button>
            </div>
        </div>
    );
}