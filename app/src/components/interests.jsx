import { useTranslation } from 'react-i18next';
import './interests.css';

export default function Interests() {
    const [t] = useTranslation("global");

    const interests = [
        t('interests.bodybuilding'),
        t('interests.mountains'),
        'Gaming (Minecraft, Sackboy, Far Cry)',
        t('interests.learningnorwegian'),
        t('interests.dogwalks'),
        'Rock & Metal (Kvelertak, Ensiferum, Alestorm)'
    ];

    return (
        <div className="interests-container" id='interests'>
            <div className="interests-content">

                <div className="section-div">
                    <p className='section-title'>{t('chapters.interests')}</p>
                    <div/>
                </div>

                <p className='interests-tekst'>{t('interests.text')}</p>
                
                <ul className='interests-list'>
                    {interests.map((interest, index) => {
                        return <li key={index}>{interest}</li>
                    })}
                </ul>

            </div>
        </div>
    );
}