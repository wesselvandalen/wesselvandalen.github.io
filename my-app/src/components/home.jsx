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

    function calculateYearsExperience() {
        let dob = new Date("07/01/2023");
        let month_diff = Date.now() - dob.getTime();
        let age_dt = new Date(month_diff);
        let year = age_dt.getUTCFullYear();
        return Math.abs(year - 1970);
    }

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
    };

    return (
        <div className='home-wrapper'>
            <div className="home-container">
                <div className="home-content">
                    <div className="home-image-container">
                        <img src={bilde} alt='Me and my dog' title='Me and my dog'/>
                    </div>
                    <div className="home-text-container">
                        <p className='greeting'>{generateGreeting()} {translation['iam']}</p>
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
                                        .replace('{experience}', calculateYearsExperience())  
                                        .split('{bachelorLink}')[0]}
                                    <a href="https://www.hu.nl/voltijd-opleidingen/hbo-ict" target="_blank" rel="noreferrer">
                                        Software Development Bachelor
                                    </a>
                                    {translation['description']
                                        .replace('{age}', calculateAge())
                                        .replace('{experience}', calculateYearsExperience()) 
                                        .split('{bachelorLink}')[1]}
                                </>
                            )}
                        </p>
                        <div className="availability">
                            <div class="blob"></div>
                            <p>{translation['availability']}</p>
                        </div>
                        <div className="home-buttons">
                            <a href="mailto:wesselvandalen@gmail.com" className='mail-button'>
                                {translation['email']}
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                                </svg>
                            </a>
                            <a href="https://ivory-marcellina-50.tiiny.site/" target='_blank' className='mail-button'>
                                {translation['cv']}
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m18.375 12.739-7.693 7.693a4.5 4.5 0 0 1-6.364-6.364l10.94-10.94A3 3 0 1 1 19.5 7.372L8.552 18.32m.009-.01-.01.01m5.699-9.941-7.81 7.81a1.5 1.5 0 0 0 2.112 2.13" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;