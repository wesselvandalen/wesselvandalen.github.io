import { useTranslation } from 'react-i18next';
import './stack.css';
import StackTile from './stack-tile.jsx';
import react from '../assets/icons/react.png';
import js from '../assets/icons/javascript.png';
import ts from '../assets/icons/typescript.png';
import css from '../assets/icons/css.png';
import html from '../assets/icons/html.png';
import svelte from '../assets/icons/svelte.png';
import lit from '../assets/icons/lit.png';
import java from '../assets/icons/java.png';
import vsc from '../assets/icons/vsc.png';
import spring from '../assets/icons/spring.png';
import cs from '../assets/icons/csharp.png';
import junit5 from '../assets/icons/junit5.png';
import salesforce from '../assets/icons/salesforce.png';
import postgresql from '../assets/icons/postgreql.png';
import python from '../assets/icons/python.png';
import azure from '../assets/icons/azure.png';
import docker from '../assets/icons/docker.png';
import git from '../assets/icons/git.png';
import postman from '../assets/icons/postman.png';
import intellij from '../assets/icons/intellij.png';
import sqlite from '../assets/icons/sqlite.png';
import arc from '../assets/icons/arc.png';
import figma from '../assets/icons/figma.png';
import tailwind from '../assets/icons/tailwind.png';
import github from '../assets/icons/github.png';
import visualparadigm from '../assets/icons/visualparadigm.png';
import powershell from '../assets/icons/powershell.png';
import vue from '../assets/icons/vue.png';
import firebase from '../assets/icons/firebase.png';

export default function Stack() {
    const [t] = useTranslation("global");

    const frontendskills = [
        { name: 'React', type: 'library', img: react },
        { name: 'Typescript', type: 'language', img: ts },
        { name: 'Svelte', type: 'framework', img: svelte },
        { name: 'Lit', type: 'framework', img: lit },
        { name: 'Javascript', type: 'language', img: js },
        { name: 'Tailwind', type: 'CSS framework', img: tailwind },
        { name: 'HTML', type: 'language', img: html },
        { name: 'CSS', type: 'stylesheet language', img: css },
        { name: 'Vue', type: 'Framework', img: vue }
    ];

    const backendskills = [
        { name: 'Java', type: 'language', img: java },
        { name: 'Spring', type: 'framework', img: spring },
        { name: 'JUnit5', type: 'test framework', img: junit5 },
        { name: 'Python', type: 'language', img: python },
        { name: 'PostgreSQL', type: 'database', img: postgresql },
        { name: 'SQLite', type: 'database', img: sqlite },
        { name: 'C#', type: 'language', img: cs }
    ];

    const softwareskills = [
        { name: 'Visual Studio Code', type: 'IDE', img: vsc },
        { name: 'Azure (DevOps)', type: 'Cloud platform', img: azure },
        { name: 'Postman', type: 'API testing tool', img: postman },
        { name: 'Git', type: 'Version control', img: git },
        { name: 'Docker', type: 'Containerization ', img: docker },
        { name: 'Firebase', type: 'Cloud platform', img: firebase },
        { name: 'Salesforce', type: 'CRM platform', img: salesforce },
        { name: 'Inteallij IDEA', type: 'IDE', img: intellij },
        { name: 'Arc', type: 'Browser', img: arc },
        { name: 'Figma', type: 'Design tool', img: figma },
        { name: 'GitHub', type: 'Version Control platform', img: github },
        { name: 'Visual Paradigm', type: 'Modeling Tool', img: visualparadigm },
        { name: 'Powershell', type: 'Command line', img: powershell }
    ];

    return (
        <div className="stack-container" id='stack'>

            <div className="section-div">
                <p className='section-title'>{t('chapters.skills')}</p>
                <div/>
            </div>

            <div className="stack-content">

                <div className="stack-innhold">
                    <p className='stack-title'>{t('stack.languages.title')}</p>
                    <p className='stack-description'></p>

                    <ul>
                        <li>{t('stack.languages.norwegian')}</li>
                        <li>{t('stack.languages.english')}</li>
                        <li>{t('stack.languages.dutch')}</li>
                    </ul>

                </div>

                <div className="stack-innhold">
                    <p className='stack-title'>{t('stack.tools')}</p>
                    <p className='stack-description'>{t('stack.toolsandsoftwaredescription')}</p>

                    <div className="stack-grid">

                        {softwareskills.map((skill, index) => {
                            return <StackTile
                                key={index}
                                name={skill.name}
                                type={skill.type}
                                img={skill.img}
                            />
                        })}

                    </div>
                </div>

                <div className="stack-innhold">
                    <p className='stack-title'>Front-end / webdevelopment</p>
                    <p className='stack-description'>{t('stack.frontenddescription')}</p>

                    <div className="stack-grid">

                        {frontendskills.map((skill, index) => {
                            return <StackTile
                                key={index}
                                name={skill.name}
                                type={skill.type}
                                img={skill.img}
                            />
                        })}

                    </div>
                </div>

                <div className="stack-innhold">
                    <p className='stack-title'>Back-end / server & database development</p>
                    <p className='stack-description'>{t('stack.backenddescription')}</p>

                    <div className="stack-grid">

                        {backendskills.map((skill, index) => {
                            return <StackTile
                                key={index}
                                name={skill.name}
                                type={skill.type}
                                img={skill.img}
                            />
                        })}

                    </div>
                </div>

                <div className="stack-innhold">
                    <p className='stack-title'>{t('stack.security')}</p>
                    <p className='stack-description'>{t('stack.securitydescription')}</p>

                    <ul>
                        <li>OWASP TOP 10</li>
                        <li>Authentication & Authorization / Role-based access control</li>
                        <li>Cybersecurity threats (rainbow tables, brute force, timing attacks, injection etc.)</li>
                        <li>JWT tokens, encryption, encoding and hash (+ salt)</li>
                        <li>API Key Management</li>
                        <li>GDPR and other data protection regulations compliance</li>
                        <li>ISO 25010</li>
                    </ul>

                </div>

                <div className="stack-innhold">
                    <p className='stack-title'>Testing</p>
                    <p className='stack-description'>{t('stack.testingdescription')}</p>

                    <ul>
                        <li>Continious Integration / Continious Development</li>
                        <li>JUnit5</li>
                        <li>End-to-end tests</li>
                        <li>Test-Driven-Development</li>
                        <li>GitHub Action Pipelines</li>
                        <li>Code coverage analysis tools (JaCoCo)</li>
                    </ul>

                </div>

            </div>
        </div>
    );
}