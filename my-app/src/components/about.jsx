import './about.css';
import { useTranslation } from 'react-i18next';

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
                <p className='section-title about-section-title'>{t('chapters.about')}</p>

                <div className="about-texts">
                    <p>{t('about.1')}</p>
                    <p>{t('about.2').replace('{experience}', calculateExperience())}</p>
                    <p>{t('about.3')}</p>
                </div>
            </div>
        </div>
    );
}