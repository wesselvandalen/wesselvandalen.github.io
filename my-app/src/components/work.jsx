import { useTranslation } from 'react-i18next';
import './work.css';
import mysolutionlogo from '../assets/graphics/mysolution.png';

export default function Work() {
    const [t] = useTranslation("global");

    return (
        <div className="work-container" id='work'>
            <div className="work-content">
                
                <p className='section-title work-section-title'>{t('chapters.work')}</p>

                <div className="work-stack">

                    <a href='https://www.mysolution.com/' target='_blank' rel="noreferrer" className="work-block">
                        <div className="work-block-right">
                            <img src={mysolutionlogo} alt="Mysolution logo" />
                            <div className="work-block-info">
                                <h2>Mysolution</h2>
                                <p>React Typescript & Java Spring developer</p>
                            </div>
                        </div>
                        <div className='work-date'>2024 - 2025</div>
                    </a>

                </div>

            </div>
        </div>
    )
}