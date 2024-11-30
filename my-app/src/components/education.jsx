import { useTranslation } from 'react-i18next';
import './education.css';

export default function Education() {
    const [translation] = useTranslation("global");

    return (
        <div className="education-container" id='education'>
            <div className="education-content">

                <p className='section-title'>{translation('chapters.education')}</p>

                <div className="education-list">

                    <div className="education-block">
                        <div className="education-inner-block">
                            <a className="education-block-contents" target='_blank' href='https://www.hu.nl/voltijd-opleidingen/hbo-ict'>
                                <div className="education-block-info">
                                    <div className="education-block-left">
                                        <p className='education-block-name'>Software Development · HBO ICT</p>
                                        <p className='education-block-title'>Hogeschool Utrecht</p>
                                    </div>
                                    <div className="education-block-date">2022 - 2026</div>
                                </div>
                                <p className='education-block-description'>{translation('education.description')}</p>
                            </a>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
}