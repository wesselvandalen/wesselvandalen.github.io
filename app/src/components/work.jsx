import { useTranslation } from 'react-i18next';
import './work.css';
import mysolution from '../assets/graphics/mysolution.png';
import skogogsinne from '../assets/graphics/skogogsinne.png';

export default function Work() {
    const [t] = useTranslation("global");

    const jobbs = [
        { img: mysolution, name: 'Mysolution', role: 'React Typescript & Java Spring developer, GDPR researcher', stack: ['React', 'Typescript', 'Java', 'Spring', 'SQLite', 'REST', 'Azure (DevOps)', 'Salesforce', 'Agile', 'Scrum', 'Git', "API's", 'OOP', 'Postman', 'Swagger', 'Translations', 'HTTP', 'Auth', 'Maven', 'JWT', 'Hibernate', 'Customer relationship'], link: 'https://www.mysolution.com/en/', date: '2024 - 2025', description: t('work.mysolution.description') },
        { img: skogogsinne, name: 'Skog & Sinne', role: 'React Typescript & Java Spring developer, DevOps Engineer', stack: ['React', 'Typescript', 'Java', 'Spring', 'CI/CD pipeline', 'Test-Driven Development', 'JUnit5', 'Postman', 'REST', 'Git', 'GitHub', "API's", 'OOP', 'Postman', 'Translations', 'HTTP', 'Auth', 'Maven', 'JWT', 'Hibernate'], link: '', date: '2024 - 2025', description: t('work.skogogsinne.description') }
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
                                <div className="vertical-line"></div>
                            </div>
                            <div className="work-right">
                                <h3 className='w-company'>{jobb.name}</h3>
                                <p className='w-role'>{jobb.role}</p>
                                <p className='w-description'>{jobb.description}</p>
                                <a href={jobb.link} className='w-link' target='_blank' rel='noreferrer'>{jobb.link}</a>
                                <div className="w-stack-div">
                                    {jobb.stack.map((skill, index) => {
                                        return <p key={index}>{skill}</p>
                                    })}
                                </div>
                                <div className="w-date-div">
                                    <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M21 10H3M16 2V6M8 2V6M10.5 14L12 13V18M10.75 18H13.25M7.8 22H16.2C17.8802 22 18.7202 22 19.362 21.673C19.9265 21.3854 20.3854 20.9265 20.673 20.362C21 19.7202 21 18.8802 21 17.2V8.8C21 7.11984 21 6.27976 20.673 5.63803C20.3854 5.07354 19.9265 4.6146 19.362 4.32698C18.7202 4 17.8802 4 16.2 4H7.8C6.11984 4 5.27976 4 4.63803 4.32698C4.07354 4.6146 3.6146 5.07354 3.32698 5.63803C3 6.27976 3 7.11984 3 8.8V17.2C3 18.8802 3 19.7202 3.32698 20.362C3.6146 20.9265 4.07354 21.3854 4.63803 21.673C5.27976 22 6.11984 22 7.8 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                    <p className='w-date'>{jobb.date}</p>
                                </div>
                            </div>
                        </div>
                    })}

                </div>
            </div>
        </div>
    );
}