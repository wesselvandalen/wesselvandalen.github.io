import { useTranslation } from 'react-i18next';
import './work.css';
import WorkTile from './work-tile.jsx';

export default function Work() {
    const [t] = useTranslation("global");

    const jobbs = [
        {   
            name: 'Mysolution', 
            role: 'React Typescript & Java Spring developer, GDPR researcher', 
            stack: ['React', 'Typescript', 'HTML', 'CSS', 'Java', 'Spring', 'SQLite', 'REST', 'Azure (DevOps)', 'Azure Web Service', 'Python', 'GDPR', 'Salesforce', 'GitHub Gist', 'Docker', 'Agile', 'Scrum', 'Git', "API's", 'Object Oriented Programming', 'Postman', 'Swagger', 'Translations', 'HTTP', 'Auth', 'Maven', 'JWT', 'Hibernate', 'Customer relationships', 'Design patterns', 'ISO 25010', 'OWASP TOP 10'], 
            date: '2024 - 2025', 
            descriptions: [t('work.mysolution.description1'), t('work.mysolution.description2')]
        },
        { 
            name: 'Strømlia', 
            role: 'React Javascript & Java Spring developer', 
            stack: ['React', 'Javascript', 'HTML', 'CSS', 'Java', 'Spring', 'Postman', 'REST', 'Git', 'GitHub', "API's", 'Object Oriented Programming', 'Postman', 'Translations', 'HTTP', 'Auth', 'Maven', 'JWT', 'Hibernate'], 
            date: '2025 - 2025', 
            descriptions: [t('work.strømlia.description1'), t('work.strømlia.description2')]
        }
    ];

    return (
        <div className="work-container" id='work'>

            <div className="section-div">
                <p className='section-title'>{t('chapters.work')}</p>
                <div/>
            </div>

            <div className="work-content">
                <div className="work-list">

                    {jobbs.map((jobb, index) => {
                        return <WorkTile
                            key={index}
                            name={jobb.name}
                            role={jobb.role}
                            date={jobb.date}
                            descriptions={jobb.descriptions}
                            stack={jobb.stack}
                        />
                    })}

                </div>
            </div>
        </div>
    );
}