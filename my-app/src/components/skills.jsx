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
import intellij from '../assets/icons/intellij.png';
import vsc from '../assets/icons/vsc.png';
import commandline from '../assets/icons/commandline.png';
import swagger from '../assets/icons/swagger.png';

import norskbevis from '../assets/icons/norsk-bevis.png';

export default function Skills() {
    const [translation] = useTranslation("global");

    return (
        <section className="skill-container vanlig" id="skills">
            <div className="w-100">
                
                <h3 className='chapter-title'>{translation('header.skills')}</h3>

                <div className="skill-title">{translation('skills.languages.title')}</div>
                <p>{translation('skills.languages.description')}</p>
                <ul className="list3">
                    <li>
                        {translation('skills.languages.dutch')}
                    </li>
                    <li>
                        {translation('skills.languages.english')}
                    </li>
                    <li>
                        {translation('skills.languages.norwegian')}
                        {/* <a className='extra' href='#about' target='_blank'>
                            <img src={norskbevis} alt="Bevis på at jeg klarte norskprøven"/>
                            Direktoratet for høyere utdanning og kompetanse B2 Norsk prøve resultat
                        </a> */}
                    </li>
                </ul>

                <div className="skill-title">FRONT END</div>
                <p>{translation('skills.frontend.description')}</p>
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
                <p>{translation('skills.backend.description')}</p>
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
                <p>{translation('skills.security.description')}</p>
                <ul className="list3">
                    <li>OWASP TOP 10</li>
                    <li>Authentication & Authorization</li>
                    <li>Cybersecurity threats (rainbow tables, brute force, timing attacks, injection etc.)</li>
                    <li>JWT tokens, encryption, encoding and hash (+ salt)</li>
                </ul>

                <div className="skill-title">{translation('skills.tools.title')}</div>
                <p>{translation('skills.tools.description')}</p>
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
                    <div className="skill">
                        <img src={vsc} alt="Visual Studio Code"/>
                        <p>Visual Studio Code</p>
                    </div>
                    <div className="skill">
                        <img src={commandline} alt="Command line"/>
                        <p>Command line</p>
                    </div>
                    <div className="skill">
                        <img src={intellij} alt="Intellij"/>
                        <p>Intellij IDEA</p>
                    </div>
                    <div className="skill">
                        <img src={swagger} alt="Swagger"/>
                        <p>Swagger</p>
                    </div>
                </div>

            </div>
        </section>
    );
}