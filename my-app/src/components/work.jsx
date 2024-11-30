import { useTranslation } from 'react-i18next';
import './work.css';
import mysolutionlogo from '../assets/graphics/mysolution.png';
import nav from '../assets/graphics/image.png';
import netflix from '../assets/graphics/imagecopy.png';

export default function Work() {
    const [translation] = useTranslation("global");

    return (
        <div className="work-container" id='work'>
            <div className="work-content">
                
                <p className='section-title'>{translation('chapters.work')}</p>

                <div className="work-stack">

                    <div className="work-block">
                        <div className="work-block-right">
                            <img src={mysolutionlogo} alt="Mysolution logo" />
                            <div className="work-block-info">
                                <h2>Mysolution</h2>
                                <p>React Typescript & Java Spring developer</p>
                            </div>
                        </div>
                        <div className='work-date'>2024 - 2025</div>
                    </div>

                    <div className="work-block">
                        <div className="work-block-right">
                            <img src={nav} alt="Mysolution logo" />
                            <div className="work-block-info">
                                <h2>NAV</h2>
                                <p>Java Spring developer</p>
                            </div>
                        </div>
                        <div className='work-date'>2025 - 2027</div>
                    </div>

                    <div className="work-block">
                        <div className="work-block-right">
                            <img src={netflix} alt="Mysolution logo" />
                            <div className="work-block-info">
                                <h2>Netflix</h2>
                                <p>Angular developer & Software Architect</p>
                            </div>
                        </div>
                        <div className='work-date'>2027 - 2028</div>
                    </div>
                    
                </div>

            </div>
        </div>
    )
}