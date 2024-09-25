import './skills.css';
import TitleComponent from './title-component';
import reactIcon from '../assets/icons/react.png';
import litIcon from '../assets/icons/lit.png';
import svelteIcon from '../assets/icons/svelte.png';
import typescriptIcon from '../assets/icons/typescript.png';
import javascriptIcon from '../assets/icons/javascript.png';
import htmlIcon from '../assets/icons/html.png';
import cssIcon from '../assets/icons/css.png';
import canvaIcon from '../assets/icons/canva.png';
import figmaIcon from '../assets/icons/figma.png';
import javaIcon from '../assets/icons/java.png';
import springIcon from '../assets/icons/spring.png';
import azureIcon from '../assets/icons/azure.png';
import dockerIcon from '../assets/icons/docker.png';
import hibernateIcon from '../assets/icons/hibernate.png';
import junit5Icon from '../assets/icons/junit5.png';
import postgreSQLIcon from '../assets/icons/postgreql.png';
import pythonIcon from '../assets/icons/python.png';
import postman from '../assets/icons/postman.png';
import salesforceIcon from '../assets/icons/salesforce.png';
import githubLogo from '../assets/icons/github.png';
import gitLogo from '../assets/icons/git.png';
import pptIcon from '../assets/icons/ppt.png';
import powershellIcon from '../assets/icons/powershell.png';
import inteallijIDEAIcon from '../assets/icons/inteallij_idea.png';
import sql from '../assets/icons/sql.png';
import vsc from '../assets/icons/vsc.png';
import adobeExpressIcon from '../assets/icons/adobe_express.png';
import { useEffect, useState } from 'react';
import { getCurrentLanguage } from '../service/language-service';
import csharp from '../assets/icons/csharp.png';

function Skills() {
    const [translation, setTranslation] = useState({});

    useEffect(() => {
        translateSkillsPage();
    }, [translation]);

    const translateSkillsPage = async () => {
        const currentLanguage = getCurrentLanguage();

        try {
          const translations = await import(`../languages/${currentLanguage}.json`);
          setTranslation(translations);
        } catch (error) {
          console.error('Error loading translations:', error);
        }
    };


    return (
        <div className='skills-wrapper'>
            <div className="skills-content">
                <TitleComponent
                    title={translation['skillstitle']}
                    description={translation['skillsdescription']}
                    darkmode={true}
                />

                <div className="skills-container">

                    <div className="skill-container">
                        <div className="skill-row">
                            <div className="skill-title-container">
                                <p className='skill-title-title'>Front end</p>
                                <p className='skill-title-description'>{translation['frontenddescription']}</p>
                            </div>
                            <div className="skill-images-container">
                                <img src={reactIcon} alt="React" title="React"/>
                                <img src={litIcon} alt="Lit" title="Lit"/>
                                <img src={svelteIcon} alt="Svelte" title="Svelte"/>
                                <img src={typescriptIcon} alt="Typescript" title="Typescript"/>
                                <img src={javascriptIcon} alt="Javascript" title="Javascript"/>
                                <img src={htmlIcon} alt="HTML" title="HTML"/>
                                <img src={cssIcon} alt="CSS" title="CSS"/>
                            </div>
                        </div>
                    </div>

                    <div className="skill-container">
                        <div className="skill-row">
                            <div className="skill-title-container">
                                <p className='skill-title-title'>Back end</p>
                                <p className='skill-title-description'>{translation['backenddescription']}</p>
                            </div>
                            <div className="skill-images-container">
                                <img src={javaIcon} alt="Java" title="Java"/>
                                <img src={springIcon} alt="Spring" title="Spring"/>
                                <img src={junit5Icon} alt="JUnit5" title="JUnit5"/>
                                <img src={csharp} alt="C#" title="C#"/>
                                <img src={pythonIcon} alt="Python" title="Python"/>
                                <img src={salesforceIcon} alt="Salesforce" title="Salesforce"/>
                            </div>
                        </div>
                    </div>

                    <div className="skill-container">
                        <div className="skill-row">
                            <div className="skill-title-container">
                                <p className='skill-title-title'>{translation['teampresentationtitle']}</p>
                                <p className='skill-title-description'>{translation['teampresentationdescription']}</p>
                            </div>
                            <div className="skill-images-container">
                                <img src={githubLogo} alt="GitHub" title="GitHub"/>
                                <img src={gitLogo} alt="Git" title="Git"/>
                                <img src={pptIcon} alt="Presenting" title="Presenting"/>
                            </div>
                        </div>
                    </div>

                    <div className="skill-container">
                        <div className="skill-row">
                            <div className="skill-title-container">
                                <p className='skill-title-title'>Design</p>
                                <p className='skill-title-description'>{translation['designdescription']}</p>
                            </div>
                            <div className="skill-images-container">
                                <img src={canvaIcon} alt="Canva" title="Canva"/>
                                <img src={figmaIcon} alt="Figma" title="Figma"/>
                                <img src={adobeExpressIcon} alt="Adobe Express" title="Adobe Express"/>
                            </div>
                        </div>
                    </div>

                    <div className="skill-container">
                        <div className="skill-row">
                            <div className="skill-title-container">
                                <p className='skill-title-title'>Database</p>
                                <p className='skill-title-description'>{translation['databasedescription']}</p>
                            </div>
                            <div className="skill-images-container">
                                <img src={postgreSQLIcon} alt="PostgreSQL" title="PostgreSQL"/>
                                <img src={sql} alt="SQL" title="SQL"/>
                                <img src={hibernateIcon} alt="Hibernate" title="Hibernate"/>
                            </div>
                        </div>
                    </div>

                    <div className="skill-container">
                        <div className="skill-row">
                            <div className="skill-title-container">
                                <p className='skill-title-title'>Tools</p>
                                <p className='skill-title-description'>{translation['toolsdescription']}</p>
                            </div>
                            <div className="skill-images-container">
                                <img src={vsc} alt="Visual Studio Code" title="Visual Studio Code"/>
                                <img src={inteallijIDEAIcon} alt="Inteallij IDEA" title="Inteallij IDEA"/>
                                <img src={powershellIcon} alt="Powershell" title="Powershell"/>
                                <img src={azureIcon} alt="Azure" title="Azure"/>
                                <img src={dockerIcon} alt="Docker" title="Docker"/>
                                <img src={postman} alt="Postman" title="Postman"/>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Skills;