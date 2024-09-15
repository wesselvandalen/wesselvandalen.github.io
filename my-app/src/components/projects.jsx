import './projects.css';
import TitleComponent from './title-component';
import luftan from '../assets/project_design.png';
import huskeliste from '../assets/project_design_huskeliste.png';

function Projects() {
    return (
        <div className='projects-wrapper'>
            <div className="projects-content">
                <TitleComponent
                    title={'Projects'}
                    description={'A selection of my standout projects, showcasing my work.'}
                    darkmode={false}
                />

                <div className="projects-container">

                    <div className="project-block">
                        <div className='line-divider'/>
                        <div className="project-inner-content">
                            <div className="project-tekst-container">
                                <div className="title-role-wrapper">
                                    <h3 className='title'>Luftan,</h3>
                                    <h3 className='role'>Java Spring & React Typescript developer</h3>
                                </div>
                                <p className='description'>Luftan is a Swedish company specializing in aroma diffusers and Scandinavian-inspired scents. The project includes a full e-commerce platform where users can browse products, add items to their cart, and place orders. I developed the entire site from scratch, covering both front-end and back-end development.</p>
                                <a href='/' target='_blank' className='project-button'>
                                    See project
                                </a>
                            </div>
                            <div className="project-image-container">
                                <img src={luftan} alt="Project visual image."/>
                            </div>
                        </div>
                    </div>

                    <div className="project-block">
                        <div className='line-divider'/>
                        <div className="project-inner-content">
                            <div className="project-tekst-container">
                                <div className="title-role-wrapper">
                                    <h3 className='title'>HuskeListe,</h3>
                                    <h3 className='role'>React Typescript developer</h3>
                                </div>
                                <p className='description'>HuskeListe is a simple Norwegian to-do app that allows users to add, cross off, and remove tasks from their lists, helping them stay organized.</p>
                                <a href='https://wesselvandalen.github.io/huskeliste/' target='_blank' className='project-button'>
                                    See project
                                </a>
                            </div>
                            <div className="project-image-container">
                                <img src={huskeliste} alt="Project visual image."/>
                            </div>
                        </div>
                    </div>

                    <div className="project-block">
                        <div className='line-divider'/>
                        <div className="project-inner-content">
                            <div className="project-tekst-container">
                                <div className="title-role-wrapper">
                                    <h3 className='title'>SmartFinance,</h3>
                                    <h3 className='role'>Java Spring & React Javascript developer</h3>
                                </div>
                                <p className='description'>SmartFinance is a web application for Hogeschool Utrecht's 'Bedrijfskunde' students. It helps them practice creating 'jaarrekeningen' (annual financial statements) and provides immediate feedback to prepare for tests and homework.</p>
                                <a href='http://159.223.223.166:8080/' target='_blank' className='project-button'>
                                    See project
                                </a>
                            </div>
                            <div className="project-image-container">
                                <img src="" alt="Project visual image."/>
                            </div>
                        </div>
                    </div>

                    <div className="project-block">
                        <div className='line-divider'/>
                        <div className="project-inner-content">
                            <div className="project-tekst-container">
                                <div className="title-role-wrapper">
                                    <h3 className='title'>KPN Travelmovements,</h3>
                                    <h3 className='role'>Lit Javascript developer</h3>
                                </div>
                                <p className='description'>KPN Reisbewegingen is a site for KPN employees to log their travel data, which is then compiled into an Excel report. Managers can view departmental statistics, and a leaderboard encourages reducing CO2 emissions.</p>
                                <a href='https://hu-sd-sv2fe-studenten-2324.github.io/v2fe-eindopdracht-v2d_peer/' target='_blank' className='project-button'>
                                    See project
                                </a>
                            </div>
                            <div className="project-image-container">
                                <img src="" alt="Project visual image."/>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Projects;