import { useTranslation } from 'react-i18next';
import './work.css';
import mysolutionlogo from '../assets/graphics/mysolution.png';
import nav from '../assets/graphics/image.png';

export default function Work() {
    const [translation] = useTranslation("global");

    return (
        <div className="work-container" id='work'>
            <div className="work-content">
                
                <p className='section-title'>{translation('header.work')}</p>

                <div className="work-stack">

                    <a className="work-block" href='#'>
                        <div className="work-block-right">
                            <img src={mysolutionlogo} alt="Mysolution logo" />
                            <div className="work-block-info">
                                <h2>Mysolution</h2>
                                <p>React TS & Java Spring developer</p>
                            </div>
                        </div>
                        <div className='work-date'>2024 - 2025</div>
                    </a>
                    
                    <a className="work-block" href='#'>
                        <div className="work-block-right">
                            <img src={nav} alt="Mysolution logo" />
                            <div className="work-block-info">
                                <h2>NAV</h2>
                                <p>Angular JS developer (senior)</p>
                            </div>
                        </div>
                        <div className='work-date'>2026 - 2028</div>
                    </a>
                    
                </div>

            </div>
        </div>
    )
}