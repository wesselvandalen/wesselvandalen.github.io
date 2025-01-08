import { useTranslation } from 'react-i18next';
import './education.css';
import EducationTile from './education-tile';

export default function Education() {
    const [t] = useTranslation("global");

    const educations = [
        { 
            school: 'Hogeschool Utrecht',
            study: 'Bachelor Software Development - HBO ICT', 
            description: t('education.hu.description'), 
            date: '2022 - 2026'
        }
    ];

    return (
        <div className="education-container" id='education'>

            <h3 className='section-title'>{t('chapters.education')}</h3>

            <div className="education-content">
                <div className="education-list">

                    {educations.map((education, index) => {
                        return <EducationTile
                            key={index}
                            study={education.study}
                            school={education.school}
                            date={education.date}
                            description={education.description}
                        />
                    })}

                </div>
            </div>
        </div>
    );
}