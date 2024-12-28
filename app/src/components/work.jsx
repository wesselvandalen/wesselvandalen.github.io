import { useTranslation } from 'react-i18next';
import './work.css';
import mysolution from '../assets/graphics/mysolution.png';
import skogogsinne from '../assets/graphics/skogogsinne.png';

export default function Work() {
    const [t] = useTranslation("global");

    const jobbs = [
        { img: mysolution, name: 'Mysolution', role: 'React Typescript & Java Spring developer, GDPR researcher', stack: ['React', 'Typescript', 'HTML', 'CSS', 'Java', 'Spring', 'SQLite', 'REST', 'Azure (DevOps)', 'Salesforce', 'Agile', 'Scrum', 'Git', "API's", 'OOP', 'Postman', 'Swagger', 'Translations', 'HTTP', 'Auth', 'Maven', 'JWT', 'Hibernate', 'Customer relationship'], link: 'https://www.mysolution.com/en/', date: '2024 - 2025', description: t('work.mysolution.description') },
        { img: skogogsinne, name: 'Skog & Sinne', role: 'React Typescript & Java Spring developer, DevOps Engineer', stack: ['React', 'Typescript', 'HTML', 'CSS', 'Java', 'Spring', 'CI/CD pipeline', 'Test-Driven Development', 'JUnit5', 'Postman', 'REST', 'Git', 'GitHub', "API's", 'OOP', 'Postman', 'Translations', 'HTTP', 'Auth', 'Maven', 'JWT', 'Hibernate'], link: '', date: '2024 - 2025', description: t('work.skogogsinne.description') }
    ];

    return (
        <div className="work-container" id='work'>

            <h3 className='section-title'>{t('chapters.work')}</h3>

            <div className="work-content">
                <div className="work-list">

                    {jobbs.map((jobb, index) => {
                        return <div className="work-block" key={index}>
                            <div className="work-left">
                                <img src={jobb.img} alt={`${jobb.name} logo`} />
                            </div>
                            <div className="work-right">
                                <h3 className='w-company'>{jobb.name}</h3>
                                <p className='w-role'>{jobb.role}</p>
                                <p className='w-date'>{jobb.date}</p>
                                <p className='w-description'>{jobb.description}</p>
                                <a href={jobb.link} className='w-link' target='_blank' rel='noreferrer'>{jobb.link}</a>
                                <div className="w-stack-div">
                                    {jobb.stack.map((skill, index) => {
                                        return <p key={index}>{skill}</p>
                                    })}
                                </div>
                            </div>
                        </div>
                    })}

                </div>
            </div>
        </div>
    );
}