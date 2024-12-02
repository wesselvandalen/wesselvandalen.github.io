import './home.css';
import { useTranslation } from 'react-i18next';

import picture from '../assets/meg.png';
import preikestolen from '../assets/background.JPG';
import checkmark from '../assets/icons/checkmark.png';

import github from '../assets/icons/github.png';
import linkedin from '../assets/icons/linkedin.png';
import discord from '../assets/icons/discord.png';

export default function Home() {
    const [t] = useTranslation("global");

    function sendMail() {
        window.location.href = "mailto:wesselvandalen@gmail.com";
    }

    return (
        <div className="home-container" id='home'>
            <div className="home-content">

                <div className="framer">
                    <div className="framer-cover">
                        <div className="framer-3">
                            <div className="framer-4">
                                <img src={preikestolen} alt="Me at Preikestolen" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="pf-container">
                    <img src={picture} alt="Me" />
                </div>

                <div className="home-main">
                    <div className="name-title-image">
                        <div className='name-checkmark-container'>
                            <h1>Wessel van Dalen</h1>
                            <img className='checkmark' src={checkmark} alt="Blue checkmark icon" />
                        </div>
                        <h2>{t('home.role')}</h2>
                    </div>

                    <p className='story'>{t('home.story')}</p>

                    <div className="buttons-container">
                        <button className='mail-button' onClick={sendMail}>
                            {t('home.email')}
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                            </svg>
                        </button>
                    </div>

                    <div className="socials-container">
                        <a href="https://github.com/wesselvandalen" target='_blank' rel="noreferrer" className='social-tile'>
                            <img src={github} alt="GitHub icon" />
                            /wesselvandalen
                        </a>

                        <a href="https://linkedin.com/in/wesselvandalen" target='_blank' rel="noreferrer" className='social-tile'>
                            <img src={linkedin} alt="LinkedIn icon" />
                            /wesselvandalen
                        </a>

                        <a href="https://discord.com/users/bjarndal" target='_blank' rel="noreferrer" className='social-tile'>
                            <img src={discord} alt="Discord icon" />
                            @bjarndal
                        </a>
                    </div>

                </div>
            </div>
        </div>
    );
}