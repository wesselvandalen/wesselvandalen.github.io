import './home.css';
import { useEffect, useState } from 'react';
import { getCurrentLanguage } from '../service/language-service';

export default function Home() {
    const [translation, setTranslation] = useState({});

    useEffect(() => {
        translatePage();
    }, [translation]);

    const translatePage = async () => {
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

    return (
        <div className="home-container">
            <div className="home-content">
                <div className="home-wrapper">
                    <div className="home-text">
                        <h3 className='name'>Wessel van <span className='norwegian-colors'>Dalen</span></h3>
                        <p className='role'>Full Stack {translation['role']}</p>
                        <p className='description'>
                            <>
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
                                )} <a href="mailto:wesselvandalen@gmail.com" className='description-a'>{translation['email']}!</a>
                            </>
                        </p>
                        <div className="social-icons-container">
                            <a className='social' href="https://ivory-marcellina-50.tiiny.site/" target='_blank' rel="noreferrer">{translation['cv']}</a>
                            <a className='social' href="https://github.com/wesselvandalen/" target='_blank' rel="noreferrer">GitHub</a>
                            <a className='social' href="https://linkedin.com/in/wesselvandalen/" target='_blank' rel="noreferrer">LinkedIn</a>
                        </div>
                    </div>
                    <div className="home-image-wrapper">
                        <div className="form"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}