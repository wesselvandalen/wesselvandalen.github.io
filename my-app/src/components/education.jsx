import { useTranslation } from 'react-i18next';
import './education.css';

export default function Education() {
    const [t] = useTranslation("global");

    return (
        <div className="education-container" id='education'>
            <div className="education-content">

                <div className="section-title-wrapper">
                    <p className='section-number'>03</p>
                    <p className='section-title'>{t('chapters.education')}</p>
                </div>

                <div className="section-content">
                    <div className="education-list">

                        <div className="education-block">
                            <div className="education-inner-block">
                                <a className="education-block-contents" target='_blank' rel="noreferrer" href='https://www.hu.nl/voltijd-opleidingen/hbo-ict'>
                                    <div className="education-block-info">
                                        <div className="education-block-left">
                                            <h6 className='education-block-name'>Bachelor Software Development · HBO ICT</h6>
                                            <p className='education-block-school'>Hogeschool Utrecht</p>
                                        </div>
                                        <p className='education-block-date'>2022 - 2026</p>
                                    </div>
                                    <p className='education-block-description'>{t('education.description')}</p>
                                </a>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
}