import './home.css';
import { useState, useEffect } from 'react';
import { getCurrentLanguage } from '../service/language-service';

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

    return (
        <div className='seksjon'>
            <div className="container">
                <div className="seksjon-wrapper">
                    <div className="tekst-wrapper">
                        <div className="display">
                            Wessel van <span className='tekst-span'>Dalen</span>
                        </div>
                        <h2 className='role'>Full Stack {translation['role']}</h2>
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
                    <div className="image-wrapper"></div>
                </div>
            </div>
        </div>
    );
}

export default Home;