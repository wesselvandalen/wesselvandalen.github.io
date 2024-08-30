import './projects-view.css';
import luftanVisual from '../assets/projects/luftan_visual.png';

function ProjectsView() {
    return (
        <div className='projects-view-container' id='projects'>
            <div className="projects-view-content">
                <h3 className='projects-view-title'>Explore my projects</h3>
                <p className='projects-view-description'>A selection of my standout projects, showcasing my work.</p>

                <div className="projects-container">
                    <div className="projects-content">
                        <div className="project-block-container right">
                            <div className="project-block-img-container">
                                <img src={luftanVisual} alt="Project visual"/>
                            </div>
                            <div className="project-block-information">
                                <div>
                                    <h4 className='project-block-title'>Luftan</h4>
                                    <p className='project-block-description'>
                                        Luftan is a fictional Swedish company I created to showcase my skills in front-end and back-end development, database management, and design.
                                        <br/><br/>
                                        Specializing in aroma diffusers and Scandinavian-inspired scents, Luftan allows users to browse, add products to their cart, and place orders easily.
                                        While the interface is simple, the underlying code is complex, providing a rewarding challenge.
                                    </p>
                                </div>
                                <div className="project-buttons-container">
                                    <a className='btn btn-primary' href="" target='_blank'>
                                        See more
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                                        </svg>
                                    </a>
                                    <a className='btn btn-secondary' href="" target='_blank'>
                                        View code
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
                                        </svg>
                                    </a>
                                </div>
                          </div>
                        </div>
                    </div>

                    <div className="project-block-container right">

                            <div className="project-block-img-container">
                                <img src={luftanVisual} alt="Project visual"/>
                            </div>
                            <div className="project-block-information">
                                <div>
                                    <h4 className='project-block-title'>Luftan</h4>
                                    <p className='project-block-description'>
                                        Luftan is a fictional Swedish company I created to showcase my skills in front-end and back-end development, database management, and design.
                                        <br/><br/>
                                        Specializing in aroma diffusers and Scandinavian-inspired scents, Luftan allows users to browse, add products to their cart, and place orders easily.
                                        While the interface is simple, the underlying code is complex, providing a rewarding challenge.
                                    </p>
                                </div>
                                <div className="project-buttons-container">
                                    <a className='btn btn-primary' href="" target='_blank'>
                                        See more
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                                        </svg>
                                    </a>
                                    <a className='btn btn-secondary' href="" target='_blank'>
                                        View code
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>

                </div>

            </div>
        </div>
    );
}

export default ProjectsView;