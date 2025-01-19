import { useTranslation } from 'react-i18next';
import './education.css';
import EducationTile from './education-tile';

export default function Education() {
    const [t] = useTranslation("global");

    const educations = [
        { 
            school: 'Hogeschool Utrecht',
            study: 'Bachelor Software Development - HBO ICT', 
            descriptions: [t('education.hu.description1'), t('education.hu.description2')], 
            date: '2022 - 2026'
        }
    ];

    return (
        <div className="education-container" id='education'>

            <div className="section-div">
                <p className='section-title'>{t('chapters.education')}</p>
                <div/>
            </div>

            <div className="education-content">
                <div className="education-list">

                    {educations.map((education, index) => {
                        return <EducationTile
                            key={index}
                            study={education.study}
                            school={education.school}
                            icon={education.icon}
                            date={education.date}
                            descriptions={education.descriptions}
                        />
                    })}

                </div>
            </div>
        </div>
    );
}