import './stack.css';
import { useTranslation } from 'react-i18next';
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

export default function Stack() {
    const [t] = useTranslation("global");

    const frontendskills = [
        { name: 'React', type: 'library', img: react },
        { name: 'Svelte', type: 'framework', img: svelte },
        { name: 'Lit', type: 'framework', img: lit },
        { name: 'Typescript', type: 'language', img: ts },
        { name: 'Javascript', type: 'language', img: js },
        { name: 'HTML', type: 'language', img: html },
        { name: 'CSS', type: 'language', img: css }
    ];

    const backendskills = [
        { name: 'Java', type: 'language', img: java },
        { name: 'Spring', type: 'framework', img: spring },
        { name: 'C#', type: 'language', img: cs },
        { name: 'JUnit5', type: 'framework', img: junit5 },
        { name: 'Python', type: 'language', img: python },
        { name: 'PostgreSQL', type: 'database', img: postgresql },
        { name: 'SQLite', type: 'database', img: sqlite }
    ];

    const softwareskills = [
        { name: 'Visual Studio Code', type: 'IDE', img: vsc },
        { name: 'Azure (DevOps)', type: 'cloud platform', img: azure },
        { name: 'Postman', type: 'software', img: postman },
        { name: 'Git', type: 'version control', img: git },
        { name: 'Docker', type: 'containerization ', img: docker },
        { name: 'Salesforce', type: 'crm platform', img: salesforce },
        { name: 'Inteallij IDEA', type: 'IDE', img: intellij },
        { name: 'Arc', type: 'browser', img: arc }
    ];

    return (
        <div className="stack-container" id='stack'>
            <div className="stack-content">

                <div className="section-title-wrapper">
                    <p className='section-number'>05</p>
                    <p className='section-title'>Stack</p>
                </div>

                <div className="stack-list">

                    <div className="stack-innhold">
                        <p className='stack-title'>Front-end / webdevelopment</p>

                        <div className="stack-grid">

                            {frontendskills.map(skill => {
                                return <div className="stack-tile">
                                    <div className="stack-pic-wrapper">
                                        <img src={skill.img} alt={skill.name} />
                                    </div>
                                    <div className="stack-info">
                                        <h6>{skill.name}</h6>
                                        <p>{skill.type}</p>
                                    </div>
                                </div>
                            })}

                        </div>
                    </div>

                    <div className="stack-innhold">
                        <p className='stack-title'>Back-end / server & database development</p>

                        <div className="stack-grid">

                            {backendskills.map(skill => {
                                return <div className="stack-tile">
                                    <div className="stack-pic-wrapper">
                                        <img src={skill.img} alt={skill.name} />
                                    </div>
                                    <div className="stack-info">
                                        <h6>{skill.name}</h6>
                                        <p>{skill.type}</p>
                                    </div>
                                </div>
                            })}

                        </div>
                    </div>

                    <div className="stack-innhold">
                        <p className='stack-title'>{t('stack.tools')}</p>

                        <div className="stack-grid">

                            {softwareskills.map(skill => {
                                return <div className="stack-tile">
                                    <div className="stack-pic-wrapper">
                                        <img src={skill.img} alt={skill.name} />
                                    </div>
                                    <div className="stack-info">
                                        <h6>{skill.name}</h6>
                                        <p>{skill.type}</p>
                                    </div>
                                </div>
                            })}

                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}