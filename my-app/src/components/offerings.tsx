import './offerings.css';
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

function Offerings() {

    return (
        <div className='offerings-view-container' id="skills">
            <div className="offerings-view-content">

                <h3 className='offerings-view-title'>Explore My <span className='skills'>Skills</span></h3>
                <p className='offerings-view-description'>A concise overview of my full stack development skills.</p>

                <div className="skills-container">

                    <div className="skill-container">
                        <div className="skill-row">
                            <div className="skill-title-container">

                                <div className="skill-logo-background">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25" />
                                    </svg>
                                </div>

                                <h3>Front end</h3>
                                <p>
                                    Proficient in crafting responsive, user-friendly interfaces using HTML, CSS, and Typescript frameworks like React, ensuring seamless user experiences.
                                </p>
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
                    </div>

                    <div className="skill-container">
                        <div className="skill-row">
                            <div className="skill-title-container">
                                
                                <div className="skill-logo-background">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m6.75 7.5 3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0 0 21 18V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v12a2.25 2.25 0 0 0 2.25 2.25Z" />
                                    </svg>
                                </div>

                                <h3>Back end</h3>
                                <p>
                                    I've built a very solid foundation in back end (especially with Java & Spring), and can easily set up a complex system from scratch.
                                </p>
                                <div className="skill-images-container">
                                    <img src={javaIcon} alt="Java" title="Java"/>
                                    <img src={springIcon} alt="Spring" title="Spring"/>
                                    <img src={junit5Icon} alt="JUnit5" title="JUnit5"/>
                                    <img src={pythonIcon} alt="Python" title="Python"/>
                                    <img src={salesforceIcon} alt="Salesforce" title="Salesforce"/>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="skill-container">
                        <div className="skill-row">
                            <div className="skill-title-container">
                                
                                <div className="skill-logo-background">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
                                    </svg>
                                </div>

                                <h3>Team / presentation</h3>
                                <p>
                                    Effective communicator and collaborator, I excel in both team environments and presentations, conveying complex ideas clearly to diverse audiences.
                                </p>
                                <div className="skill-images-container">
                                    <img src={githubLogo} alt="GitHub" title="GitHub"/>
                                    <img src={gitLogo} alt="Git" title="Git"/>
                                    <img src={pptIcon} alt="Presenting" title="Presenting"/>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="skill-container">
                        <div className="skill-row">
                            <div className="skill-title-container">
                                
                                <div className="skill-logo-background">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128Zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42" />
                                    </svg>
                                </div>

                                <h3>Design</h3>
                                <p>
                                    A keen eye for design principles, I create intuitive and visually appealing layouts that enhance user interaction and accessibility.
                                </p>
                                <div className="skill-images-container">
                                    <img src={canvaIcon} alt="Canva" title="Canva"/>
                                    <img src={figmaIcon} alt="Figma" title="Figma"/>
                                    <img src={adobeExpressIcon} alt="Adobe Express" title="Adobe Express"/>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="skill-container">
                        <div className="skill-row">
                            <div className="skill-title-container">
                                
                                <div className="skill-logo-background">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
                                    </svg>
                                </div>

                                <h3>Database</h3>
                                <p>
                                    Skilled in designing, managing, and optimizing databases with SQL and NoSQL solutions, ensuring data integrity and efficient querying.
                                </p>
                                <div className="skill-images-container">
                                    <img src={postgreSQLIcon} alt="PostgreSQL" title="PostgreSQL"/>
                                    <img src={sql} alt="SQL" title="SQL"/>
                                    <img src={hibernateIcon} alt="Hibernate" title="Hibernate"/>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="skill-container">
                        <div className="skill-row">
                            <div className="skill-title-container">
                                
                                <div className="skill-logo-background">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z" />
                                </svg>
                                </div>

                                <h3>Tools</h3>
                                <p>
                                    Experienced in leveraging a wide range of development tools and environments, including Git, Docker, and CI/CD pipelines, to streamline workflows.
                                </p>
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
        </div>
    );
}

export default Offerings;