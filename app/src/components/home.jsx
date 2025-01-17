import './home.css';
import { useTranslation } from 'react-i18next';
import meg from '../assets/kopi.png';
import linkedinIcon from '../assets/icons/linkedin.png';
import githubIcon from '../assets/icons/githubgray.png';
import stackoverflowIcon from '../assets/icons/stackoverflowgray.png';

export default function Home() {
    const [t] = useTranslation("global");

    function calculateExperience() {
        let dob = new Date("09/02/2024");
        let month_diff = Date.now() - dob.getTime();
        let age_dt = new Date(month_diff);
        let year = age_dt.getUTCFullYear();
        const years = Math.abs(year - 1970);

        return years < 1 ? 1 : years;
    }

    function calculateAge() {
        let dob = new Date("01/20/2004");
        let month_diff = Date.now() - dob.getTime();
        let age_dt = new Date(month_diff);
        let year = age_dt.getUTCFullYear();
        return Math.abs(year - 1970);
    }

    return (
        <div className="home-container">
            <div className="home-content">

                <div className="home-information">
                    <img src={meg} alt="A picture of me" className='home-image' />
                    <h1 className='home-name'>Wessel Rowdy van Dalen</h1>
                    <p className='home-role'>{t('home.role')}</p>
                    <p className='home-description'>Heisann! {t('home.description1').replace('{age}', calculateAge()).replace('{exp}', calculateExperience())}</p>
                    <p className='home-description'>{t('home.description2')}</p>
                </div>
                
                <div className="social-container">
                    <a href="mailto:wesselvandalen@gmail.com">
                        <svg width="90%" height="90%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.4995 13.5001L20.9995 3.00005M10.6271 13.8281L13.2552 20.5861C13.4867 21.1815 13.6025 21.4791 13.7693 21.566C13.9139 21.6414 14.0862 21.6415 14.2308 21.5663C14.3977 21.4796 14.5139 21.1821 14.7461 20.587L21.3364 3.69925C21.5461 3.16207 21.6509 2.89348 21.5935 2.72185C21.5437 2.5728 21.4268 2.45583 21.2777 2.40604C21.1061 2.34871 20.8375 2.45352 20.3003 2.66315L3.41258 9.25349C2.8175 9.48572 2.51997 9.60183 2.43326 9.76873C2.35809 9.91342 2.35819 10.0857 2.43353 10.2303C2.52043 10.3971 2.81811 10.5128 3.41345 10.7444L10.1715 13.3725C10.2923 13.4195 10.3527 13.443 10.4036 13.4793C10.4487 13.5114 10.4881 13.5509 10.5203 13.596C10.5566 13.6468 10.5801 13.7073 10.6271 13.8281Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </a>
                    <a href="https://github.com/wesselvandalen" target='_blank' rel='noreferrer'>
                        <img src={githubIcon} alt="GitHub icon" />
                    </a>
                    <a href="https://linkedin.com/in/wesselvandalen" target='_blank' rel='noreferrer'>
                        <img src={linkedinIcon} alt="LinkedIn icon" />
                    </a>
                    <a href="https://stackoverflow.com/users/24017710/wesseldalen" target='_blank' rel='noreferrer'>
                        <img src={stackoverflowIcon} alt="Stack Overflow icon" />
                    </a>
                </div>

            </div>
        </div>
    );
}