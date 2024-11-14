import { useTranslation } from 'react-i18next';
import './work.css';

export default function Work() {
    const [translation] = useTranslation("global");

    return (
        <div className='projects-container vanlig' id='work'>

            <h3 className='chapter-title'>{translation('header.work')}</h3>

            <div className="project">
                <div className="project-content">
                    <h3 className="project-company">Mysolution</h3>
                    <div className="project-name">Candidate onboarding portal</div>
                    <p className="project-date">{translation('work.mysolution.date')}</p>
                    <p>{translation('work.mysolution.text')}</p>
        
                    <ul className="tech-list">
                        <li>Typescript</li>
                        <li>React</li>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>Java</li>
                        <li>Spring</li>
                        <li>Salesforce</li>
                        <li>Azure</li>
                        <li>JWT</li>
                        <li>Hibernate</li>
                        <li>Scrum</li>
                        <li>Agile</li>
                        <li>GDPR</li>
                        <li>REST</li>
                        <li>API's</li>
                        <li>Object Oriented Programming</li>
                        <li>Architecture</li>
                        <li>Postman</li>
                        <li>Swagger</li>
                        <li>Translations</li>
                        <li>Git</li> 
                        <li>Secrets management</li>   
                        <li>Role-Based Access Control</li>
                        <li>Auth</li>
                        <li>HTTP</li>
                        <li>Maven</li>
                    </ul>
                </div>
            </div>

            <div className="project">
                <div className="project-content">
                    <h3 className="project-company">Hogeschool Utrecht</h3>
                    <div className="project-name">Smart Finance Tool - Business departure</div>
                    <p className="project-date">{translation('work.hu.date')}</p>
                    <p className='project-text'>{translation('work.hu.text')}</p>
                
                    <ul className="tech-list">
                        <li>JavaScript</li>
                        <li>React</li>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>Java</li>
                        <li>Spring</li>
                        <li>Hibernate</li>
                        <li>PostgreSQL</li>
                        <li>Scrum</li>
                        <li>Agile</li>
                        <li>REST</li>
                        <li>API's</li>
                        <li>Object Oriented Programming</li>
                        <li>Architecture</li>
                        <li>Postman</li>
                        <li>Docker</li>
                        <li>Maven</li>
                        <li>GitHub</li>
                        <li>Git</li>
                    </ul>
                </div>
            </div>

        </div>
    );
}