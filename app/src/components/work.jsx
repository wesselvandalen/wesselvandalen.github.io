import { useTranslation } from 'react-i18next';
import './work.css';
import WorkTile from './work-tile.jsx';

export default function Work() {
    const [t] = useTranslation("global");

    const jobbs = [
        {   
            name: 'Mysolution', 
            role: 'React Typescript & Java Spring developer, GDPR researcher', 
            stack: ['React', 'Typescript', 'HTML', 'CSS', 'Java', 'Spring', 'SQLite', 'REST', 'Azure (DevOps)', 'Salesforce', 'GitHub Gist', 'Agile', 'Scrum', 'Git', "API's", 'OOP', 'Postman', 'Swagger', 'Translations', 'HTTP', 'Auth', 'Maven', 'JWT', 'Hibernate', 'Customer relationships', 'Design patterns', 'ISO 25010', 'OWASP TOP 10'], 
            date: '2024 - 2025', 
            description: t('work.mysolution.description') 
        },
        { 
            name: 'Hjemvik', 
            role: 'React Typescript & Java Spring developer, DevOps Engineer', 
            stack: ['React', 'Typescript', 'HTML', 'CSS', 'Java', 'Spring', 'CI/CD pipeline', 'Test-Driven Development', 'JUnit5', 'Postman', 'REST', 'Git', 'GitHub', "API's", 'OOP', 'Postman', 'Translations', 'HTTP', 'Auth', 'Maven', 'JWT', 'Hibernate'], 
            date: '2024 - 2025', 
            description: t('work.hjemvik.description') 
        }
    ];

    return (
        <div className="work-container" id='work'>

            <h3 className='section-title'>{t('chapters.work')}</h3>

            <div className="work-content">
                <div className="work-list">

                    {jobbs.map((jobb, index) => {
                        return <WorkTile
                            key={index}
                            name={jobb.name}
                            role={jobb.role}
                            date={jobb.date}
                            description={jobb.description}
                            stack={jobb.stack}
                        />
                    })}

                </div>
            </div>
        </div>
    );
}