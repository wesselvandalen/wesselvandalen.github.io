import './home.css';
import { useTranslation } from 'react-i18next';
import picture from '../assets/meg.png';
import noFlag from '../assets/flags/no.png';
import nlFlag from '../assets/flags/nl.png';
import enFlag from '../assets/flags/en.png';
import github from '../assets/icons/github.png';
import linkedin from '../assets/icons/linkedin.png';
import { useState } from 'react';

export default function Home() {
    const [translation, i18n] = useTranslation("global");
    const [emailCopied, setEmailCopied] = useState(false);

    function sendMail() {
        window.location.href = "mailto:wesselvandalen@gmail.com";
    }

    function copyEmail() {
        navigator.clipboard.writeText('wesselvandalen@gmail.com');
        setEmailCopied(true);
        setTimeout(() => {
            setEmailCopied(false);
        }, 2000);
    }

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

    const handleLanguageSwitch = (lang) => {
        i18n.changeLanguage(lang);
        document.documentElement.lang = lang;
        localStorage.setItem('lang', lang);
    };

    return (
        <div className="home-container" id='home'>
            <div className="home-content">

                <div className="dropdown">
                    <button className="dropbtn">
                        {handleChosenLanguage(i18n.language)}
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
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

                <div className="name-title-image">
                    <img src={picture} alt="Me" />
                    <h1>Wessel van Dalen</h1>
                    <h2>{translation('home.role')}</h2>
                </div>

                <div className="available">
                    <div className="dot-container">
                        <div className="dot" />
                        <div className="wave" />
                    </div>
                    <p>{translation('home.available')}</p>
                </div>

                <div className="socials-container">
                    <a href="https://github.com/wesselvandalen" target='_blank'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24">
                            <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} color="currentColor">
                                <path d="M10 20.568c-3.429 1.157-6.286 0-8-3.568"></path>
                                <path d="M10 22v-3.242c0-.598.184-1.118.48-1.588c.204-.322.064-.78-.303-.88C7.134 15.452 5 14.107 5 9.645c0-1.16.38-2.25 1.048-3.2c.166-.236.25-.354.27-.46c.02-.108-.015-.247-.085-.527c-.283-1.136-.264-2.343.16-3.43c0 0 .877-.287 2.874.96c.456.285.684.428.885.46s.469-.035 1.005-.169A9.5 9.5 0 0 1 13.5 3a9.6 9.6 0 0 1 2.343.28c.536.134.805.2 1.006.169c.2-.032.428-.175.884-.46c1.997-1.247 2.874-.96 2.874-.96c.424 1.087.443 2.294.16 3.43c-.07.28-.104.42-.084.526s.103.225.269.461c.668.95 1.048 2.04 1.048 3.2c0 4.462-2.134 5.807-5.177 6.643c-.367.101-.507.559-.303.88c.296.47.48.99.48 1.589V22"></path>
                            </g>
                        </svg>
                    </a>
                    <a href="https:/linkedin.com/in/wesselvandalen" target='_blank'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="32px" height="32px" viewBox="0 0 24 24">
                            <g fill="currentColor"> strokeWidth={1.2}
                                <path fillRule="evenodd" d="M12.51 8.796v1.697a3.74 3.74 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766c-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483a1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.6 1.6 0 0 1 1.6 1.606" clipRule="evenodd"></path>
                                <path d="M7.2 8.809H4V19.5h3.2z"></path>
                            </g>
                        </svg>
                    </a>
                </div>

                <div className="mail-buttons">
                    <button className='contact-button' onClick={sendMail}>
                        {translation('home.contactme')}
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                        </svg>
                    </button>
                    <p>{translation('home.or')}</p>
                    <button className='copy-button' onClick={copyEmail}>
                        {emailCopied ?
                            <>
                                {translation('home.copiedmail')}
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                                </svg>
                            </>
                            :
                            <>
                                {translation('home.copyemail')}
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 8.25V6a2.25 2.25 0 0 0-2.25-2.25H6A2.25 2.25 0 0 0 3.75 6v8.25A2.25 2.25 0 0 0 6 16.5h2.25m8.25-8.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-7.5A2.25 2.25 0 0 1 8.25 18v-1.5m8.25-8.25h-6a2.25 2.25 0 0 0-2.25 2.25v6" />
                                </svg>
                            </>
                        }
                    </button>
                </div>

                <p className='location'>{translation('home.location')} · 52.0291° N, 5.1698° E</p>

            </div>
        </div>
    );
}