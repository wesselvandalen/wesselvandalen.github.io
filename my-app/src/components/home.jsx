import './home.css';
import bilde from '../assets/IMG_1347.jpg';
import { useEffect, useState } from 'react';
import { getCurrentLanguage } from '../service/language-service';
import norwayFlag from '../assets/flags/no.png';

function Home() {
    const [translation, setTranslation] = useState({});

    useEffect(() => {
        translateHeaderPage();
    }, [translation]);

    const translateHeaderPage = async () => {
        const currentLanguage = getCurrentLanguage();

        try {
          const translations = await import(`../languages/${currentLanguage}.json`);
          setTranslation(translations);
        } catch (error) {
          console.error('Error loading translations:', error);
        }
    };

    function calculateAge() {
        let dob = new Date("01/20/2004");
        let month_diff = Date.now() - dob.getTime();
        let age_dt = new Date(month_diff);
        let year = age_dt.getUTCFullYear();
        return Math.abs(year - 1970);
    };

    function generateGreeting() {
        const date = new Date();
        const hours = date.getHours();
        if (hours <= 5 && hours >= 0) {
            return 'God natt!';
        } else if (hours >= 6 && hours <= 11) {
            return 'God morgen!';
        } else if (hours >= 12 && hours <= 17) {
            return 'God dag!';
        } else {
            return 'God kveld!';
        }
    }

    return (
        <div className='home-wrapper'>
            <div className="home-container">
                <div className="home-content">
                    <div className="home-image-container">
                        <img src={bilde} alt='Jeg' title='Jeg'/>
                    </div>
                    <div className="home-text-container">
                        <p className='greeting'>{generateGreeting()}</p>
                        <h3 className='name'>Wessel Rowdy van Dalen</h3>
                        <div className='role-container'>
                            <img src={norwayFlag} alt="Flag of Norway" className='norway-icon'/>
                            <p className='role'>Full Stack {translation['role']}</p>
                        </div>
                        <p className='description'>
                            {translation['description'] && (
                                <>
                                    {translation['description']
                                        .replace('{age}', calculateAge())
                                        .split('{bachelorLink}')[0]}
                                    <a href="https://www.hu.nl/voltijd-opleidingen/hbo-ict" target="_blank" rel="noreferrer">
                                        Software Development Bachelor
                                    </a>
                                    {translation['description']
                                        .replace('{age}', calculateAge())
                                        .split('{bachelorLink}')[1]}
                                </>
                            )}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;