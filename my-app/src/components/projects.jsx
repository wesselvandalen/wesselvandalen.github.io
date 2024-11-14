import { useTranslation } from 'react-i18next';
import './projects.css';

export default function Projects() {
    const [translation] = useTranslation("global");

    return (
        <div className='projects-container vanlig' id='projects'>

            <div className="component-title-container">
                <h2 className='component-title up'>{translation('projects.title')}</h2>
                <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
                    <div className="resume-content">
                        <p className='component-description'>
                            {translation('projects.description')}
                        </p>
                    </div>
                </div>
            </div>

            <div className="project">
                <div className="project-content">
                    <h3 className="project-company">Mysolution</h3>
                    <div className="project-name">Candidate onboarding portal</div>
                    <p>
                        <em>
                            {translation('projects.mysolution.text1')}
                        </em>
                    </p>
                    <p>
                        {translation('projects.mysolution.text2')}
                    </p>
                    <ul className="tech-list">
                        <li>
                            <div>Typescript</div>
                        </li>
                        <li>
                            <div>React</div>
                        </li>
                        <li>
                            <div>HTML</div>
                        </li>
                        <li>
                            <div>CSS</div>
                        </li>
                        <li>
                            <div>Java</div>
                        </li>
                        <li>
                            <div>Spring</div>
                        </li>
                        <li>
                            <div>Salesforce</div>
                        </li>
                        <li>
                            <div>Azure</div>
                        </li>
                        <li>
                            <div>JWT</div>
                        </li>
                        <li>
                            <div>Hibernate</div>
                        </li>
                        <li>
                            <div>Scrum</div>
                        </li>
                        <li>
                            <div>Agile</div>
                        </li>
                        <li>
                            <div>GDPR</div>
                        </li>
                        <li>
                            <div>REST</div>
                        </li>
                        <li>
                            <div>API's</div>
                        </li>
                        <li>
                            <div>Object Oriented Programming</div>
                        </li>
                        <li>
                            <div>Architecture</div>
                        </li>
                        <li>
                            <div>Postman</div>
                        </li>
                        <li>
                            <div>Swagger</div>
                        </li>
                        <li>
                            <div>Translations</div>
                        </li>
                        <li>
                            <div>Git</div>
                        </li> 
                        <li>
                            <div>Secrets management</div>
                        </li>   
                        <li>
                            <div>Role-Based Access Control</div>
                        </li>
                        <li>
                            <div>Auth</div>
                        </li>
                        <li>
                            <div>HTTP</div>
                        </li>
                        <li>
                            <div>Maven</div>
                        </li>
                    </ul>
                </div>
                <div className="project-info">
                    <p className="project-date">
                        {translation('projects.mysolution.date')}
                    </p>
                    <p className='project-role'>
                        {translation('projects.mysolution.role1')}
                    </p>
                    <p className='project-role'>
                        {translation('projects.mysolution.role2')}
                    </p>
                </div>
            </div>

            <div className="project">
                <div className="project-content">
                    <h3 className="project-company">Luftan</h3>
                    <div className="project-name">SAAS E-commerce website</div>
                    <p>
                        <em>
                            {translation('projects.luftan.text1')}
                        </em>
                    </p>
                    <p>
                        {translation('projects.luftan.text2')}
                    </p>
                    <ul className="tech-list">
                        <li>
                            <div>Typescript</div>
                        </li>
                        <li>
                            <div>React</div>
                        </li>
                        <li>
                            <div>HTML</div>
                        </li>
                        <li>
                            <div>CSS</div>
                        </li>
                        <li>
                            <div>Java</div>
                        </li>
                        <li>
                            <div>Spring</div>
                        </li>
                        <li>
                            <div>Hibernate</div>
                        </li>
                        <li>
                            <div>PostgreSQL</div>
                        </li>
                        <li>
                            <div>Scrum</div>
                        </li>
                        <li>
                            <div>Agile</div>
                        </li>
                        <li>
                            <div>REST</div>
                        </li>
                        <li>
                            <div>API's</div>
                        </li>
                        <li>
                            <div>Object Oriented Programming</div>
                        </li>
                        <li>
                            <div>Architecture</div>
                        </li>
                        <li>
                            <div>Postman</div>
                        </li>
                        <li>
                            <div>Docker</div>
                        </li>
                        <li>
                            <div>Maven</div>
                        </li>
                        <li>
                            <div>GitHub</div>
                        </li>
                        <li>
                            <div>Translations</div>
                        </li>
                        <li>
                            <div>Git</div>
                        </li>    
                    </ul>
                </div>
                <div className="project-info">
                    <p className="project-date">
                        {translation('projects.luftan.date')}
                    </p>
                    <p className='project-role'>
                        {translation('projects.luftan.role1')}
                    </p>
                    <div className="projects-role">
                        {translation('projects.luftan.role2')}
                    </div>
                </div>
            </div>

            <div className="project">
                <div className="project-content">
                    <h3 className="project-company">Hogeschool Utrecht</h3>
                    <div className="project-name">Smart Finance Tool - Business departure</div>
                    <p>
                        <em>
                            {translation('projects.smartfinance.text1')}
                        </em>
                    </p>
                    <p>
                        {translation('projects.smartfinance.text2')}
                    </p>
                    <ul className="tech-list">
                        <li>
                            <div>JavaScript</div>
                        </li>
                        <li>
                            <div>React</div>
                        </li>
                        <li>
                            <div>HTML</div>
                        </li>
                        <li>
                            <div>CSS</div>
                        </li>
                        <li>
                            <div>Java</div>
                        </li>
                        <li>
                            <div>Spring</div>
                        </li>
                        <li>
                            <div>Hibernate</div>
                        </li>
                        <li>
                            <div>PostgreSQL</div>
                        </li>
                        <li>
                            <div>Scrum</div>
                        </li>
                        <li>
                            <div>Agile</div>
                        </li>
                        <li>
                            <div>REST</div>
                        </li>
                        <li>
                            <div>API's</div>
                        </li>
                        <li>
                            <div>Object Oriented Programming</div>
                        </li>
                        <li>
                            <div>Architecture</div>
                        </li>
                        <li>
                            <div>Postman</div>
                        </li>
                        <li>
                            <div>Docker</div>
                        </li>
                        <li>
                            <div>Maven</div>
                        </li>
                        <li>
                            <div>GitHub</div>
                        </li>
                        <li>
                            <div>Git</div>
                        </li>
                    </ul>
                </div>
                <div className="project-info">
                    <p className="project-date">
                        {translation('projects.smartfinance.date')}
                    </p>
                    <p className='project-role'>
                        {translation('projects.smartfinance.role1')}
                    </p>
                    <div className="projects-role">
                        {translation('projects.smartfinance.role2')}
                    </div>
                    <div className="projects-role">
                        {translation('projects.smartfinance.role3')}
                    </div>
                </div>
            </div>

        </div>
    );
}