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

export default function Stack() {
    const [t] = useTranslation("global");

    return (
        <div className="stack-container" id='stack'>
            <div className="stack-content">
                <p className='section-title stack-section-title'>Stack</p>

                <div className="stack-list">

                    <div className="stack-innhold">
                        <p className='stack-title'>Front end</p>

                        <div className="stack-grid">
                            <div className="stack-grid-block">
                                <img src={react} alt="React" />
                                <p>React</p>
                            </div>
                            <div className="stack-grid-block">
                                <img src={svelte} alt="Svelte" />
                                <p>Svelte</p>
                            </div>
                            <div className="stack-grid-block">
                                <img src={lit} alt="Lit" />
                                <p>Lit</p>
                            </div>
                            <div className="stack-grid-block">
                                <img src={js} alt="Javascript" />
                                <p>Javascript</p>
                            </div>
                            <div className="stack-grid-block">
                                <img src={ts} alt="Typescript" />
                                <p>Typescript</p>
                            </div>
                            <div className="stack-grid-block">
                                <img src={html} alt="HTML" />
                                <p>HTML</p>
                            </div>
                            <div className="stack-grid-block">
                                <img src={css} alt="CSS" />
                                <p>CSS</p>
                            </div>
                        </div>
                    </div>

                    <div className="stack-innhold">
                        <p className='stack-title'>Back end</p>

                        <div className="stack-grid">
                            <div className="stack-grid-block">
                                <img src={java} alt="Java" />
                                <p>Java</p>
                            </div>
                            <div className="stack-grid-block">
                                <img src={spring} alt="Spring" />
                                <p>Spring</p>
                            </div>
                            <div className="stack-grid-block">
                                <img src={cs} alt="C#" />
                                <p>C#</p>
                            </div>
                            <div className="stack-grid-block">
                                <img src={junit5} alt="JUnit5" />
                                <p>JUnit5</p>
                            </div>
                            <div className="stack-grid-block">
                                <img src={python} alt="Python" />
                                <p>Python</p>
                            </div>
                            <div className="stack-grid-block">
                                <img src={postgresql} alt="PostgreSQL" />
                                <p>PostgreSQL</p>
                            </div>
                        </div>
                    </div>

                    <div className="stack-innhold">
                        <p className='stack-title'>{t('stack.tools')}</p>

                        <div className="stack-grid">
                            <div className="stack-grid-block">
                                <img src={vsc} alt="Visual Studio Code" />
                                <p>Visual Studio Code</p>
                            </div>
                            <div className="stack-grid-block">
                                <img src={azure} alt="Azure" />
                                <p>Azure</p>
                            </div>
                            <div className="stack-grid-block">
                                <img src={postman} alt="Postman" />
                                <p>Postman</p>
                            </div>
                            <div className="stack-grid-block">
                                <img src={git} alt="Git" />
                                <p>Git</p>
                            </div>
                            <div className="stack-grid-block">
                                <img src={docker} alt="Docker" />
                                <p>Docker</p>
                            </div>
                            <div className="stack-grid-block">
                                <img src={salesforce} alt="Salesforce" />
                                <p>Salesforce</p>
                            </div>
                            <div className="stack-grid-block">
                                <img src={intellij} alt="Intellij IDEA" />
                                <p>Intellij IDEA</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}