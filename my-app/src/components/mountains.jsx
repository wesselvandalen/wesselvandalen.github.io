import { useTranslation } from 'react-i18next';
import preikestolen from '../assets/preikestolen.jpg';
import './mountains.css';

export default function Mountains() {
    const [t] = useTranslation("global");

    return (
        <div className="mountains-container" id='mountains'>
            <div className="mountain-content">

                <p className='section-title mountain-section-title'>{t('chapters.mountains')}</p>

                <div className="mountains-list">

                    <div className="mountain-tile">
                        <div className="mountain-text">
                            <p className='mountain-name'>Preikestolen, Rogaland, {t('chapters.norway')}</p>
                            <p className='mountain-height'>604 m</p>
                        </div>
                        <img src={preikestolen} alt="Me at Preikestolen" />
                    </div>

                </div>

            </div>
        </div>
    )
}