import { useTranslation } from 'react-i18next';
import './hobbies.css';
import hobbyImage from '../assets/preikestolen.jpg';

export default function Hobbies() {
    const [t] = useTranslation("global");

    const hobbies = [
        t('hobbies.bodybuilding'),
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
                
                <ul className='hobbies-list'>
                    {hobbies.map((hobby, index) => {
                        return <li key={index}>{hobby}</li>
                    })}
                </ul>

            </div>
        </div>
    );
}