import './home.css';
import { useTranslation } from 'react-i18next';
import meg from '../assets/IMG_4044.jpg';
import norwayFlag from '../assets/icons/norway.png';
import netherlandsFlag from '../assets/icons/netherlands.png';

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
        <div className="home-container" id='home'>
            <div className="home-content">

                <div className="video-thumbnail-link">
                    <div className="video-thumbnail">
                        <img src={meg} alt="Me" className="thumbnail-image" />
                    </div>
                </div>

                <h3 className='name'>Wessel Rowdy van Dalen</h3>

                <div className="role-container">
                    <h2 className='role'>{t('home.role')}</h2>
                </div>

                <p className='description'>Hallaisen! {t('home.description1').replace('{age}', calculateAge()).replace('{exp}', calculateExperience())}</p>
                <p className='description'>{t('home.description2')}</p>

                <div className="social-container">
                    <a href="mailto:wesselvandalen@gmail.com">
                        {t('footer.mail').charAt(0).toUpperCase() + t('footer.mail').slice(1)}
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                        </svg>

                    </a>
                    <a href="https://github.com/wesselvandalen" target='_blank' rel='noreferrer'>
                        GitHub
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                        </svg>

                    </a>
                    <a href="https://linkedin.com/in/wesselvandalen" target='_blank' rel='noreferrer'>
                        LinkedIn
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                        </svg>

                    </a>
                    <a href="tel:0630682063">
                        {t('home.call')}
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                        </svg>

                    </a>
                </div>

            </div>
        </div>
    );
}