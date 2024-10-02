import './skills.css';
import { useEffect, useState } from 'react';
import { getCurrentLanguage } from '../service/language-service';
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
import powershellIcon from '../assets/icons/powershell.png';
import inteallijIDEAIcon from '../assets/icons/inteallij_idea.png';
import vsc from '../assets/icons/vsc.png';
import csharp from '../assets/icons/csharp.png';

function Skills() {
    const [translation, setTranslation] = useState({});

    useEffect(() => {
        translateHeaderPage();
    }, [translation]);

    const translateHeaderPage = async () => {
        const currentLanguage = getCurrentLanguage();

        try {
          const translations = await import(`../languages/${currentLanguage}.json`);
          setTranslation(translations);
        } catch (error) {
          console.error('Error loading translations:', error);
        }
    };

    return (
        <div className='skills-container'>
            <div className="skills-content">
                <div className="skills-inner-content">

                    <div className="skills-template-wrapper">
                        <h3 className='skill-title'>{translation['skillstitle']}</h3>
                        <p className='skill-description'>{translation['skillsdescription']}</p>
                    </div>

                    <div className="skills-wrapper">

                        <div className="skill-set">
                            <div className="skill-info-box">
                                <h3>Front end</h3>
                                <p>{translation['frontenddescription']}</p>
                            </div>
                            <div className="skill-icons-box right">
                                <img src={reactIcon} alt='React' title='React'/>
                                <img src={litIcon} alt='Lit' title='Lit'/>
                                <img src={svelteIcon} alt='Svelte' title='Svelte'/>
                                <img src={javascriptIcon} alt='Javascript' title='Javascript'/>
                                <img src={typescriptIcon} alt='Typescript' title='Typescript'/>
                                <img src={htmlIcon} alt='HTML' title='HTML'/>
                                <img src={cssIcon} alt='CSS' title='CSS'/>
                                <img src={canvaIcon} alt='Canva' title='Canva'/>
                                <img src={figmaIcon} alt='Figma' title='Figma'/>
                            </div>
                        </div>

                        <div className="skill-set">
                            <div className="skill-icons-box left">
                                <img src={javaIcon} alt='Java' title='Java'/>
                                <img src={springIcon} alt='Spring' title='Spring'/>
                                <img src={csharp} alt='C#' title='C#'/>
                                <img src={pythonIcon} alt='Python' title='Python'/>
                                <img src={hibernateIcon} alt='Hibernate' title='Hibernate'/>
                                <img src={postgreSQLIcon} alt='PostgreSQL' title='PostgreSQL'/>
                                <img src={junit5Icon} alt='JUnit5' title='JUnit5'/>
                                <img src={dockerIcon} alt='Docker' title='Docker'/>
                            </div>
                            <div className="skill-info-box">
                                <h3>Back end</h3>
                                <p>{translation['backenddescription']}</p>
                            </div>
                        </div>

                        <div className="skill-set">
                            <div className="skill-info-box">
                                <h3>{translation['toolstitle']}</h3>
                                <p>{translation['toolsdescription']}</p>
                            </div>
                            <div className="skill-icons-box right">
                                <img src={postman} alt='Postman' title='Postman'/>
                                <img src={githubLogo} alt='GitHub' title='GitHub'/>
                                <img src={gitLogo} alt='Git' title='Git'/>
                                <img src={powershellIcon} alt='Powershell' title='Powershell'/>
                                <img src={azureIcon} alt='Azure' title='Azure'/>
                                <img src={inteallijIDEAIcon} alt='Inteallij IDEA' title='Inteallij IDEA'/>
                                <img src={vsc} alt='Visual Studio Code' title='Visual Studio Code'/>
                                <img src={salesforceIcon} alt='Salesforce' title='Salesforce'/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Skills;