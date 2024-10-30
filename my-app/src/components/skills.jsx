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
import azure from '../assets/icons/azure.png';
import docker from '../assets/icons/docker.png';
import git from '../assets/icons/git.png';
import postman from '../assets/icons/postman.png';
import github from '../assets/icons/github.png';

import norskbevis from '../assets/icons/norsk-bevis.png';

export default function Skills() {
    const [translation] = useTranslation("global");

    return (
        <section className="skill-container vanlig" id="skills">
            <div className="w-100">
                <h2 className="component-title up">{translation('skills.skillstitle')}</h2>

                <div className="skill-title">{translation('skills.languages')}</div>
                <p className='skill-description'>Born and raised with Dutch with English learned at school. Norwegian learned through self-study, friends, games/tv-shows/books/podcasts and vacations.</p>
                <ul className="list3">
                    <li>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6"><path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" /></svg>
                            {translation('skills.dutch')}
                        </div>
                    </li>
                    <li>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6"><path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" /></svg>
                            {translation('skills.norwegian')}
                        </div>
                        <a className='extra' href='#about' target='_blank'>
                            <img src={norskbevis} alt="Bevis på at jeg klarte norskprøven"/>
                            Direktoratet for høyere utdanning og kompetanse B2 Norsk prøve resultat
                        </a>
                    </li>
                    <li>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6"><path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" /></svg>
                            {translation('skills.english')}
                        </div>
                    </li>
                </ul>

                <div className="skill-title">FRONT END</div>
                <p className='skill-description'>Specialised in user-friendly, good-looking and accessable websites.</p>
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
                <p className='skill-description'>Very skilled in building complex back-end systems incl. databases, especially in Java / likewise languages.</p>
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

                <div className="skill-title">SECURITY</div>
                <p className='skill-description'>Deep knowledge about different security aspects - from cybersecurity threats to building own Security Configurations.</p>
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

                <div className='skill-title'>TESTING</div> {/* https://testsigma.com/blog/testing-pyramid/ */}
                <p className='skill-description'>Thaught to test applications throughoug from top to bottom (The Testing Pyramid) to ensure high code quality.</p>
                <ul className='list1'>
                    <li>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6"><path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" /></svg>
                        Continious Integration / Continious Development Pipelines
                    </li>
                    <li>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6"><path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" /></svg>
                        JUnit5
                    </li>
                    <li>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6"><path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" /></svg>
                        Unit tests
                    </li>
                    <li>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6"><path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" /></svg>
                        Mockito
                    </li>
                    <li>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6"><path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" /></svg>
                        Integration tests
                    </li>
                    <li>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6"><path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" /></svg>
                        Test-Driven-Development
                    </li>
                </ul>

                <div className="skill-title">{translation('skills.tools')}</div>
                <p className='skill-description'>Tools I work with / know my way around with.</p>
                <div className="skills-list">
                    <div className="skill">
                        <img src={salesforce} alt="Salesforce"/>
                        <p>Salesforce</p>
                    </div>
                    <div className="skill">
                        <img src={docker} alt="Docker"/>
                        <p>Docker</p>
                    </div>
                    <div className="skill">
                        <img src={postman} alt="Postman"/>
                        <p>Postman</p>
                    </div>
                    <div className="skill">
                        <img src={git} alt="Git"/>
                        <p>Git</p>
                    </div>
                    <div className="skill">
                        <img src={azure} alt="Azure"/>
                        <p>Azure</p>
                    </div>
                    <div className="skill">
                        <img src={github} alt="GitHub" style={{ filter: 'invert(1)' }}/>
                        <p>GitHub</p>
                    </div>
                </div>

            </div>
        </section>
    );
}