import './header.css';
import { setCurrentLanguage } from '../service/language-service';
import { useEffect, useState } from 'react';
import { getCurrentLanguage } from '../service/language-service';
import noFlag from '../assets/flags/no.png';
import nlFlag from '../assets/flags/nl.png';
import enFlag from '../assets/flags/gb.png';
import seFlag from '../assets/flags/se.png';
import logo from '../assets/norway-icon.png';

function Header() {
    const [translation, setTranslation] = useState({});
    const [chosenLanguage, setChosenLanguage] = useState('');
    const [flag, setFlag] = useState(null);

    useEffect(() => {
        translatePage();
    }, [translation]);

    const translatePage = async () => {
        const currentLanguage = getCurrentLanguage();
        setChosenLanguage(handleChosenLanguage(currentLanguage));
        setFlag(getFlagByLanguage(currentLanguage));

        try {
          const translations = await import(`../languages/${currentLanguage}.json`);
          setTranslation(translations);
          document.documentElement.lang = currentLanguage;
        } catch (error) {
          console.error('Error loading translations:', error);
        }
    };

    const handleChosenLanguage = (lang) => {
        if (lang === 'no') {
            return 'Norsk bokmål';
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
        }
    };

    const handleLanguageSwitch = (lang) => {
        setCurrentLanguage(lang);
    };

    return (
        <div className='header-wrapper'>
            <div className="header-content">
                <div className="logo-wrapper">
                    <a href="/">
                        <img src={logo} alt="Dalen logo" className='logo'/>
                    </a>
                    {/* <span className='logo-span'>Dalen</span> */}
                </div>
                <div className="navigation">
                    <a className='nav' href="mailto:wesselvandalen@gmail.com">{translation['email']}</a>
                    <a className='nav' href="https://ivory-marcellina-50.tiiny.site/" target='_blank' rel="noreferrer">{translation['cv']}</a>
                    <a className='nav' href="https://github.com/wesselvandalen/" target='_blank' rel="noreferrer">GitHub</a>
                    <a className='nav' href="https://linkedin.com/in/wesselvandalen/" target='_blank' rel="noreferrer">LinkedIn</a>

                    <div className="dropdown">
                        <button className="dropbtn">
                            <img src={flag} alt={`${chosenLanguage} flag`} className='dropdown-flag'/>
                            {chosenLanguage} 
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                            </svg>
                        </button>
                        <div className="dropdown-content">
                            <a href="#" onClick={() => handleLanguageSwitch('no')}>
                                <img src={noFlag} alt='Norwegian flag'/>
                                Norsk bokmål
                            </a>
                            {/* <a href="#" onClick={() => handleLanguageSwitch('se')}>
                                <img src={seFlag} alt='Swedish flag'/>
                                Svenska
                            </a> */}
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
        </div>
    );
}

export default Header;