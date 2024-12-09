import './about.css';
import { useTranslation } from 'react-i18next';
import picture from '../assets/meg.png';
import nature from '../assets/nature.jpg';

export default function About() {
    const [t] = useTranslation("global");

    function calculateExperience() {
        let dob = new Date("02/09/2024");
        let month_diff = Date.now() - dob.getTime();
        let age_dt = new Date(month_diff);
        let year = age_dt.getUTCFullYear();
        const years = Math.abs(year - 1970);

        return years < 1 ? 1 : years;
    }

    return (
        <div className="about-container" id='about'>
            <div className="about-content">

                <div className="section-title-wrapper">
                    <p className='section-number'>02</p>
                    <p className='section-title'>{t('chapters.about')}</p>
                </div>

                <div className="section-content">

                    <div className="name-img-wrapper">
                        <div className="name-img-left">
                            <img src={picture} alt="My face" />
                            <div className='about-info'>
                                <h4>Wessel van Dalen</h4>
                                <p>Full Stack Software Developer</p>
                            </div>
                        </div>
                        <div className="name-img-right">
                            <img src={nature} alt="Nature background" />
                        </div>
                    </div>

                    <div className="about-texts">
                        <p>
                            <span className='text-1'>{t('about.1').replace('{exp}', calculateExperience())} </span>
                            <span className='text-2'>{t('about.2')}
                                <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4.5 22V17M4.5 7V2M2 4.5H7M2 19.5H7M13 3L11.2658 7.50886C10.9838 8.24209 10.8428 8.60871 10.6235 8.91709C10.4292 9.1904 10.1904 9.42919 9.91709 9.62353C9.60871 9.84281 9.24209 9.98381 8.50886 10.2658L4 12L8.50886 13.7342C9.24209 14.0162 9.60871 14.1572 9.91709 14.3765C10.1904 14.5708 10.4292 14.8096 10.6235 15.0829C10.8428 15.3913 10.9838 15.7579 11.2658 16.4911L13 21L14.7342 16.4911C15.0162 15.7579 15.1572 15.3913 15.3765 15.0829C15.5708 14.8096 15.8096 14.5708 16.0829 14.3765C16.3913 14.1572 16.7579 14.0162 17.4911 13.7342L22 12L17.4911 10.2658C16.7579 9.98381 16.3913 9.8428 16.0829 9.62353C15.8096 9.42919 15.5708 9.1904 15.3765 8.91709C15.1572 8.60871 15.0162 8.24209 14.7342 7.50886L13 3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </span>
                        </p>
                    </div>

                </div>
            </div>
        </div>
    );
}