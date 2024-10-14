import './header.css';
import noFlag from '../assets/flags/no.png';
import nlFlag from '../assets/flags/nl.png';
import enFlag from '../assets/flags/gb.png';
import logo from '../assets/norway-icon.png';
import { useTranslation } from 'react-i18next';

export default function Header() {
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

    const getFlagByLanguage = (lang) => {
        if (lang === 'no') {
            return noFlag;
        } else if (lang === 'nl') {
            return nlFlag;
        } else if (lang === 'en') {
            return enFlag;
        } else {
            console.error(`The language ${lang} does not exist.`);
            return enFlag;
        }
    };

    const handleLanguageSwitch = (lang) => {
        i18n.changeLanguage(lang);
        localStorage.setItem('lang', lang);
    };

    return (
        <div className='header-wrapper'>
            <div className="header-content">
                <div className='logo-nav-wrapper'>
                    <div className="logo-wrapper">
                        <a href="/">
                            <img src={logo} alt="Dalen logo" className='logo'/>
                        </a>
                    </div>
                    <div className="navigation">
                        <a className='nav' href="#norway">{translation('norway')}</a>
                        <a className='nav' href="#skills">{translation('skills')}</a>
                        <a className='nav' href="#projects">{translation('projects')}</a>
                    </div>
                </div>

                <div className="dropdown">
                    <button className="dropbtn">
                        <img src={getFlagByLanguage(i18n.language)} alt={`${handleChosenLanguage(i18n.language)} flag`} className='dropdown-flag'/>
                        {handleChosenLanguage(i18n.language)} 
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                        </svg>
                    </button>
                    <div className="dropdown-content">
                        <a href="#" onClick={() => handleLanguageSwitch('no')}>
                            <img src={noFlag} alt='Norwegian flag'/>
                            Norsk
                        </a>
                        <a href="#" onClick={() => handleLanguageSwitch('nl')}>
                            <img src={nlFlag} alt='Dutch flag'/>
                            Nederlands
                        </a>
                        <a href="#" onClick={() => handleLanguageSwitch('en')}>
                            <img src={enFlag} alt='English flag'/>
                            English
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}