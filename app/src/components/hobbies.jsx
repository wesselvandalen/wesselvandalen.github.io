import { useTranslation } from 'react-i18next';
import './hobbies.css';
import hobbyImage from '../assets/preikestolen.jpg';

export default function Hobbies() {
    const [t] = useTranslation("global");

    const hobbies = [
        'Fitness',
        t('hobbies.chess'),
        t('hobbies.mountains'),
        'Gaming (Minecraft, Cuphead, Far Cry)',
        t('hobbies.learningnorwegian'),
        t('hobbies.dogwalks'),
        'Rock & Metal (Kvelertak, Ensiferum)'
    ];

    return (
        <div className="hobbies-container" id='hobbies'>
            <div className="hobbies-content">

                <div className="section-div">
                    <p className='section-title'>{t('chapters.hobbies')}</p>
                    <div/>
                </div>

                <div className="hobby-image">
                    <img src={hobbyImage} alt="Me at Preikestolen" />
                    <div className="hobby-image-location-container">
                        <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M12 22C16 18 20 14.4183 20 10C20 5.58172 16.4183 2 12 2C7.58172 2 4 5.58172 4 10C4 14.4183 8 18 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <p>Preikestolen, Rogaland, {t('general.norway')}</p>
                    </div>
                </div>

                <ul className='hobbies-list'>
                    {hobbies.map((hobby, index) => {
                        return <li key={index}>{hobby}</li>
                    })}
                </ul>

            </div>
        </div>
    );
}