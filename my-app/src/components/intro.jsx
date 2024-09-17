import './intro.css';
import image from '../assets/image.png';
import FloatingCursor from './floating-cursor';
import { useEffect, useState } from 'react';
import { getCurrentLanguage, setCurrentLanguage } from '../service/language-service';

function Intro() {
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

    const handleLanguageChange = (lang) => {
        setCurrentLanguage(lang);
    }
    
    return (
        <>
            {/* TODO: Forårsaker bug hvor skjermen automatisk skroller ned (jeg tror FloatingCursor componenten er årsaken..?) */}
            <FloatingCursor/>
            <div className="intro-wrapper">
                <div className="intro-content">
                    <div className="intro-tekst-wrapper">
                        <div className="header-wrapper">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m10.5 21 5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 0 1 6-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 0 1-3.827-5.802" />
                            </svg>

                            <a href="#" onClick={() => handleLanguageChange('no')}>Norsk bokmål</a>
                            <a href="#" onClick={() => handleLanguageChange('nl')}>Nederlands</a>
                            <a href="#" onClick={() => handleLanguageChange('en')}>English</a>
                        </div>
                        <h3 className='intro-title'>Wessel Rowdy van Dalen</h3>
                        <p className='intro-job'>Full Stack Software Engineer / UI UX Designer</p>
                        <p className='intro-description'>
                            {translation['introdescription'] && (
                                <>
                                    {translation['introdescription']
                                        .replace('{age}', calculateAge())
                                        .split('{bachelorLink}')[0]}
                                    <a className="intro-a" href="https://www.hu.nl/voltijd-opleidingen/hbo-ict" target="_blank">
                                        Software Development Bachelor
                                    </a>
                                    {translation['introdescription']
                                        .replace('{age}', calculateAge())
                                        .split('{bachelorLink}')[1]}
                                </>
                            )}
                        </p>
                        <div className="social-links-container">
                            <a href="mailto:wesselvandalen@gmail.com">{translation['mailtext']}</a>
                            <a href="https://github.com/wesselvandalen/" target='_blank'>GitHub</a>
                            <a href="https://linkedin.com/in/wesselvandalen/" target='_blank'>LinkedIn</a>
                            <a href="https://ivory-marcellina-50.tiiny.site/" target='_blank'>{translation['resumetext']}</a>
                        </div>
                    </div>
                    <div className="intro-image-wrapper">
                        <img src={image} alt="Me and my dog" title="Me and my dog"/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Intro;