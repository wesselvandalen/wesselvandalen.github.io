import { useTranslation } from 'react-i18next';
import './work.css';

export default function Work() {
    const [t] = useTranslation("global");

    return (
        <div className="work-container" id='work'>
            <div className="work-content">

                <div className="section-title-wrapper">
                    <p className='section-number'>04</p>
                    <p className='section-title'>{t('chapters.work')}</p>
                </div>

                <div className="work-list">

                    <a href='https://www.mysolution.com/en/' target='_blank' rel="noreferrer" className="work-block">
                        <div className="work-block-top">
                            <div className="work-block-left">
                                <h6 className='work-block-role'>React Typescript & Java Spring developer</h6>
                                <p className='work-block-company'>Mysolution</p>
                            </div>
                            <p className='work-block-date'>2024 - 2025</p>
                        </div>
                        <ul>
                            <li>{t('work.mysolution.d1')}</li>
                            <li>{t('work.mysolution.d2')}</li>
                            <li>{t('work.mysolution.d3')}</li>
                            <li>{t('work.mysolution.d4')}</li>
                        </ul>
                    </a>

                    {/* <div className="line"/> */}

                </div>

            </div>
        </div>
    )
}