import './about.css';
import { useTranslation } from 'react-i18next';

export default function About() {
    const [translation] = useTranslation("global");

    function calculateExperience() {
        let dob = new Date("02/09/2024");
        let month_diff = Date.now() - dob.getTime();
        let age_dt = new Date(month_diff);
        let year = age_dt.getUTCFullYear();
        return Math.abs(year - 1970);
    }

    return (
        <div className="section-container" id='about'>
            <div className="section-content">
                <p className='section-title'>{translation('header.about')}</p>

                <div className="about-texts">
                    <p>{translation('about.1')}</p>
                    <p>{translation('about.2').replace('{experience}', calculateExperience())}</p>
                    <p>{translation('about.3')}</p>
                </div>
            </div>
        </div>
    );
}