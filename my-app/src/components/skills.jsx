import { useTranslation } from 'react-i18next';
import './skills.css';
import react from '../assets/icons/react.png';
import js from '../assets/icons/javascript.png';
import ts from '../assets/icons/typescript.png';
import css from '../assets/icons/css.png';
import html from '../assets/icons/html.png';
import svelte from '../assets/icons/svelte.png';
import lit from '../assets/icons/lit.png';
import java from '../assets/icons/java.png';
import spring from '../assets/icons/spring.png';
import cs from '../assets/icons/csharp.png';
import junit5 from '../assets/icons/junit5.png';
import salesforce from '../assets/icons/salesforce.png';
import postgresql from '../assets/icons/postgreql.png';
import python from '../assets/icons/python.png';
import hibernate from '../assets/icons/hibernate.png';
import sql from '../assets/icons/sql.png';
import snyk from '../assets/icons/snyk.png';

export default function Skills() {
    const [translation] = useTranslation("global");

    return (
        <section className="skill-container vanlig" id="skills">
            <div className="w-100">
                <h2 className="component-title up">{translation('skills.skillstitle')}</h2>

                <div className="skill-title">{translation('skills.languages')}</div>
                <ul className="list1">
                    <li>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6"><path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" /></svg>
                        {translation('skills.dutch')}
                    </li>
                    <li>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6"><path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" /></svg>
                        {translation('skills.norwegian')}
                    </li>
                    <li>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6"><path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" /></svg>
                        {translation('skills.english')}
                    </li>
                </ul>
                <div className="skill-title">FRONT END</div>
                <div className="skills-list">
                    <div className="skill">
                        <img src={react} alt='React'/>
                        <p>React</p>
                    </div>
                    <div className="skill">
                        <img src={lit} alt="Lit"/>
                        <p>Lit</p>
                    </div>
                    <div className="skill">
                        <img src={svelte} alt="Svelte"/>
                        <p>Svelte</p>
                    </div>
                    <div className="skill">
                        <img src={js} alt='JavaScript'/>
                        <p>JavaScript</p>
                    </div>
                    <div className="skill">
                        <img src={ts} alt="TypeScript"/>
                        <p>TypeScript</p>
                    </div>
                    <div className="skill">
                        <img src={html} alt="HTML"/>
                        <p>HTML</p>
                    </div>
                    <div className="skill">
                        <img src={css} alt="CSS"/>
                        <p>CSS</p>
                    </div>
                </div>

                <div className="skill-title">BACK END</div>
                <div className="skills-list">
                    <div className="skill">
                        <img src={java} alt='Java'/>
                        <p>Java</p>
                    </div>
                    <div className="skill">
                        <img src={spring} alt='Spring'/>
                        <p>Spring</p>
                    </div>
                    <div className="skill">
                        <img src={cs} alt="C#"/>
                        <p>C#</p>
                    </div>
                    <div className="skill">
                        <img src={junit5} alt="JUnit5"/>
                        <p>JUnit5</p>
                    </div>
                    <div className="skill">
                        <img src={python} alt="Python"/>
                        <p>Python</p>
                    </div>
                    <div className="skill">
                        <img src={hibernate} alt="Hibernate"/>
                        <p>Hibernate</p>
                    </div>
                    <div className="skill">
                        <img src={postgresql} alt="PostgreSQL"/>
                        <p>PostgreSQL</p>
                    </div>
                    <div className="skill">
                        <img src={sql} alt="SQL"/>
                        <p>SQL</p>
                    </div>
                </div>

                <div className="skill-title">DEV OPS</div>
                <ul className="list1">
                    <li>    
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6"><path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" /></svg>
                        CI / CD Pipelines
                    </li>
                    <li>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6"><path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" /></svg>
                        GitHub
                    </li>
                    <li>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6"><path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" /></svg>
                        Git
                    </li>
                    <li>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6"><path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" /></svg>
                        Docker
                    </li>
                    <li>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6"><path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" /></svg>
                        Postman
                    </li>
                    <li>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6"><path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" /></svg>
                        Azure
                    </li>
                </ul>

                <div className="skill-title">SECURITY</div>
                <ul className="list1">
                    <li>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6"><path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" /></svg>
                        OWASP TOP 10
                    </li>
                    <li>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6"><path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" /></svg>
                        Authentication & Authorization
                    </li>
                    <li>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6"><path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" /></svg>
                        Cybersecurity threats (rainbow tables, brute force, timing attacks, injection etc.)
                    </li>
                    <li>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6"><path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" /></svg>
                        JWT tokens, encryption, encoding and hash (+ salt)
                    </li>
                </ul>

                <div className="skill-title">{translation('skills.tools')}</div>
                <div className="skill-list">
                    <img src={salesforce} alt="Salesforce"/>
                    <img src={snyk} alt="Snyk"/>
                </div>

            </div>
        </section>
    );
}