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

function Skills() {
    return (
        <div className='skills-wrapper'>
            <div className="skills-content">
                <TitleComponent
                    title={'Skills'}
                    description={'A concise overview of my full stack development / designing / team skills.'}
                    darkmode={true}
                />

                <div className="skills-container">

                    <div className="skill-container">
                        <div className="skill-row">
                            <div className="skill-title-container">
                                <p className='skill-title-title'>Front end</p>
                                <p className='skill-title-description'>
                                    Proficient in crafting responsive, user-friendly interfaces using HTML, CSS, and Typescript frameworks like React, ensuring seamless user experiences.
                                </p>
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
                                <p className='skill-title-description'>
                                    I've built a very solid foundation in back end (especially with Java & Spring), and can easily set up a complex system from scratch.
                                </p>
                            </div>
                            <div className="skill-images-container">
                                <img src={javaIcon} alt="Java" title="Java"/>
                                <img src={springIcon} alt="Spring" title="Spring"/>
                                <img src={junit5Icon} alt="JUnit5" title="JUnit5"/>
                                <img src={pythonIcon} alt="Python" title="Python"/>
                                <img src={salesforceIcon} alt="Salesforce" title="Salesforce"/>
                            </div>
                        </div>
                    </div>

                    <div className="skill-container">
                        <div className="skill-row">
                            <div className="skill-title-container">
                                <p className='skill-title-title'>Team / presentation</p>
                                <p className='skill-title-description'>
                                    Effective communicator and collaborator, I excel in both team environments and presentations, conveying complex ideas clearly to diverse audiences.
                                </p>
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
                                <p className='skill-title-title'>Database</p>
                                <p className='skill-title-description'>
                                    A keen eye for design principles, I create intuitive and visually appealing layouts that enhance user interaction and accessibility.
                                </p>
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
                                <p className='skill-title-description'>
                                    Skilled in designing, managing, and optimizing databases with SQL and NoSQL solutions, ensuring data integrity and efficient querying.
                                </p>
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
                                <p className='skill-title-description'>
                                    Experienced in leveraging a wide range of development tools and environments, including Git, Docker, and CI/CD pipelines, to streamline workflows.
                                </p>
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