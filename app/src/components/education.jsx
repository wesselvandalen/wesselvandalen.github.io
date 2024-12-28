import { useTranslation } from 'react-i18next';
import './education.css';

import hu from '../assets/graphics/hu.png';

export default function Education() {
    const [t] = useTranslation("global");

    const educations = [
        { img: hu, imgAlt: 'Hogeschool Utrecht logo', school: 'Hogeschool Utrecht', study: 'Bachelor Software Development - HBO ICT', description: t('education.hu.description'), date: '2022 - 2026' }
    ];

    return (
        <div className="education-container" id='education'>

            <h3 className='section-title'>{t('chapters.education')}</h3>

            <div className="education-content">
                <div className="education-list">

                    {educations.map((education, index) => {
                        return <div className="education-block" key={index}>
                            <div className="education-right">
                                <h3 className='e-school'>{education.school}</h3>
                                <p className='e-study'>{education.study}</p>
                                <p className='e-date'>{education.date}</p>
                                <p className='e-description'>{education.description}</p>
                            </div>
                        </div>
                    })}

                </div>
            </div>
        </div>
    );
}