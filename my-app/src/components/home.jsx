import './home.css';
import { useTranslation } from 'react-i18next';
import picture from '../assets/meg.png';
// import noFlag from '../assets/flags/no.png';
// import nlFlag from '../assets/flags/nl.png';
// import enFlag from '../assets/flags/gb.png';
import github from '../assets/icons/github.png';
import linkedin from '../assets/icons/linkedin.png';

export default function Home() {
    const [translation, i18n] = useTranslation("global");

    function sendMail() {
        window.location.href = "mailto:wesselvandalen@gmail.com";
    }

    function copyEmail() {
        navigator.clipboard.writeText('wesselvandalen@gmail.com');
    }

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
                        <button onClick={() => handleLanguageSwitch('en')} >
                            {/* <img src={enFlag} alt='English flag' /> */}
                            English
                        </button>
                        <button onClick={() => handleLanguageSwitch('no')} >
                            {/* <img src={noFlag} alt='Norwegian flag' /> */}
                            Norsk
                        </button>
                        <button onClick={() => handleLanguageSwitch('nl')} >
                            {/* <img src={nlFlag} alt='Dutch flag' /> */}
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
                        <div className="dot"/>
                        <div className="wave"/>
                    </div>
                    <p>{translation('home.available')}</p>
                </div>

                <div className="socials-container">
                    <a href="https://github.com/wesselvandalen" target='_blank'>
                        <img src={github} alt="GitHub" />
                    </a>
                    <a href="https://linkedin/in/wesselvandalen" target='_blank'>
                        <img src={linkedin} alt="LinkedIn icon" />
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
                        {translation('home.copyemail')}
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 8.25V6a2.25 2.25 0 0 0-2.25-2.25H6A2.25 2.25 0 0 0 3.75 6v8.25A2.25 2.25 0 0 0 6 16.5h2.25m8.25-8.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-7.5A2.25 2.25 0 0 1 8.25 18v-1.5m8.25-8.25h-6a2.25 2.25 0 0 0-2.25 2.25v6" />
                        </svg>
                    </button>
                </div>

                <p className='location'>{translation('home.location')} · 52.0291° N, 5.1698° E</p>

            </div>
        </div>
    );
}