import './projects.css';
import { useEffect, useState } from 'react';
import { getCurrentLanguage } from '../service/language-service';
import luftan from '../assets/projects/luftan_design.png';
import candidatePortal from '../assets/projects/project_design_mysolution.png';
import huskeliste from '../assets/projects/project_design_huskeliste.png';
import smartfinance from '../assets/projects/project_design_smartfinance.png';
import kpn from '../assets/projects/project_design_kpn.png';

function Projects() {
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
        <div className='projects-container'>
            <div className="projects-content">
                <div className="projects-inner-content">

                    <div className="projects-template-wrapper">
                        <h3 className='project-title'>{translation['worktitle']}</h3>
                        <p className='project-description'>{translation['workdescription']}</p>
                    </div>


                    <div className="projects-wrapper">

                        <div className="project">
                            <div className="project-content">
                                <div className="project-info">
                                    <h3 className='projects-title'>Luftan</h3>
                                    <p className='project-description'>{translation['luftandescription']}</p>
                                    <a className='project-button' href="/" target='_blank'>{translation['seeproject']}</a>
                                </div>
                                <div className="project-image">
                                    <img src={luftan} alt="Luftan design"/>
                                </div>
                            </div>
                            <div className="line-divider"></div>
                        </div>

                        <div className="project">
                            <div className="project-content">
                                <div className="project-info">
                                    <h3 className='projects-title'>Canidate onboarding portal</h3>
                                    <p className='project-description'>{translation['candidateportaldescription']}</p>
                                    <a className='project-button' href="/" target='_blank'>{translation['seeproject']}</a>
                                </div>
                                <div className="project-image">
                                    <img src={luftan} alt="Candidate onboarding portal"/>
                                </div>
                            </div>
                            <div className="line-divider"></div>
                        </div>

                        <div className="project">
                            <div className="project-content">
                                <div className="project-info">
                                    <h3 className='projects-title'>Huskeliste</h3>
                                    <p className='project-description'>{translation['huskelistedescription']}</p>
                                    <a className='project-button' href="/" target='_blank'>{translation['seeproject']}</a>
                                </div>
                                <div className="project-image">
                                    <img src={luftan} alt="Huskeliste"/>
                                </div>
                            </div>
                            <div className="line-divider"></div>
                        </div>

                        <div className="project">
                            <div className="project-content">
                                <div className="project-info">
                                    <h3 className='projects-title'>Smartfinance</h3>
                                    <p className='project-description'>{translation['smartfinancedescription']}</p>
                                    <a className='project-button' href="/" target='_blank'>{translation['seeproject']}</a>
                                </div>
                                <div className="project-image">
                                    <img src={luftan} alt="SmartFinance"/>
                                </div>
                            </div>
                            <div className="line-divider"></div>
                        </div>

                        <div className="project">
                            <div className="project-content">
                                <div className="project-info">
                                    <h3 className='projects-title'>KPN Travelmovements</h3>
                                    <p className='project-description'>{translation['kpndescription']}</p>
                                    <a className='project-button' href="/" target='_blank'>{translation['seeproject']}</a>
                                </div>
                                <div className="project-image">
                                    <img src={luftan} alt="KPN Travel Movements"/>
                                </div>
                            </div>
                            <div className="line-divider"></div>
                        </div>
                        {/* <div className="property-card">
                            <div className="image-container">
                                <img src={luftan} alt="Cedar Ridge Villas" className="property-image"/>
                                <span className="rental-badge">For Rent</span>
                            </div>
                            <div className="property-details">
                               <div>
                                    <h2 className="property-title">Luftan</h2>
                                    <p className="property-distance">{translation['luftandescription']}</p>
                               </div>
                                <a className='project-btn' href="/" target='_blank' rel="noreferrer">
                                    See project
                                </a>
                            </div>
                        </div>

                        <div className="property-card">
                            <div className="image-container">
                                <img src={candidatePortal} alt="Candidate onboarding portal" className="property-image"/>
                                <span className="rental-badge">For Rent</span>
                            </div>
                            <div className="property-details">
                                <div>
                                    <h2 className="property-title">Candidate onboarding portal</h2>
                                    <p className="property-distance">{translation['candidateportaldescription']}</p>
                                </div>
                                <a className='project-btn' href="/" target='_blank' rel="noreferrer">
                                    See project
                                </a>
                            </div>
                        </div>

                        <div className="property-card">
                            <div className="image-container">
                                <img src={huskeliste} alt="Huskeliste" className="property-image"/>
                                <span className="rental-badge">For Rent</span>
                            </div>
                            <div className="property-details">
                                <div>
                                    <h2 className="property-title">Huskeliste</h2>
                                    <p className="property-distance">{translation['huskelistedescription']}</p>
                                </div>
                                <a className='project-btn' href="/" target='_blank' rel="noreferrer">
                                    See project
                                </a>
                            </div>
                        </div>

                        <div className="property-card">
                            <div className="image-container">
                                <img src={smartfinance} alt="SmartFinance" className="property-image"/>
                                <span className="rental-badge">For Rent</span>
                            </div>
                            <div className="property-details">
                                <div>
                                    <h2 className="property-title">SmartFinance</h2>
                                    <p className="property-distance">{translation['smartfinancedescription']}</p>
                                </div>
                                <a className='project-btn' href="/" target='_blank' rel="noreferrer">
                                    See project
                                </a>
                            </div>
                        </div>

                        <div className="property-card">
                            <div className="image-container">
                                <img src={kpn} alt="KPN Travel Movements" className="property-image"/>
                                <span className="rental-badge">For Rent</span>
                            </div>
                            <div className="property-details">
                                <div>
                                    <h2 className="property-title">KPN Travel Movements</h2>
                                    <p className="property-distance">{translation['kpndescription']}</p>
                                </div>
                                <a className='project-btn' href="/" target='_blank' rel="noreferrer">
                                    See project
                                </a>
                            </div>
                        </div> */}

                        {/* <div className="card">
                            <div className="image-container">
                                <img src={luftan} alt='Luftan project visual' title='Luftan project visual'/>
                                <div className="overlay">
                                    <p>Side project</p>
                                </div>
                            </div>
                            <div className="content">
                                <h3>Luftan</h3>
                                <p>Swedish aroma diffuser E-commerce platform</p>
                            </div>
                            <div className="arrow">
                                <a href="#">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                                    </svg>

                                </a>
                            </div>
                        </div>

                        <div className="card">
                            <div className="image-container">
                                <img src={candidatePortal} alt='Luftan project visual' title='Luftan project visual'/>
                                <div className="overlay">
                                    <p>9 min read</p>
                                </div>
                            </div>
                            <div className="content">
                                <h3>Candidate onboarding portal</h3>
                                <p>Portal for candidates of customer of Mysolution</p>
                            </div>
                            <div className="arrow">
                                <a href="#">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                                    </svg>

                                </a>
                            </div>
                        </div>

                        <div className="card">
                            <div className="image-container">
                                <img src={huskeliste} alt='Luftan project visual' title='Luftan project visual'/>
                                <div className="overlay">
                                    <p>9 min read</p>
                                </div>
                            </div>
                            <div className="content">
                                <h3>Candidate onboarding portal</h3>
                                <p>Hei</p>
                            </div>
                            <div className="arrow">
                                <a href="#">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                                    </svg>

                                </a>
                            </div>
                        </div>

                        <div className="card">
                            <div className="image-container">
                                <img src={smartfinance} alt='Luftan project visual' title='Luftan project visual'/>
                                <div className="overlay">
                                    <p>9 min read</p>
                                </div>
                            </div>
                            <div className="content">
                                <h3>Candidate onboarding portal</h3>
                                <p>Hei</p>
                            </div>
                            <div className="arrow">
                                <a href="#">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                                    </svg>

                                </a>
                            </div>
                        </div>

                        <div className="card">
                            <div className="image-container">
                                <img src={kpn} alt='Luftan project visual' title='Luftan project visual'/>
                                <div className="overlay">
                                    <p>9 min read</p>
                                </div>
                            </div>
                            <div className="content">
                                <h3>Candidate onboarding portal</h3>
                                <p>Hei</p>
                            </div>
                            <div className="arrow">
                                <a href="#">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                                    </svg>

                                </a>
                            </div>
                        </div> */}
                        
                        {/* <div className="project-block">
                            <div className="project-inner-block">
                                <img src={luftan} alt='Luftan project visual' title='Luftan project visual'/>
                                <div className="project-block-info">
                                    <h3 className='project-block-title'>Luftan</h3>
                                    <p className='project-block-description'>{translation['luftandescription']}</p>
                                </div>
                            </div>
                        </div>

                        <div className="project-block">
                            <div className="project-inner-block">
                                <img src={candidatePortal} alt='Candidate onboarding portal project visual' title='Candidate onboarding portal project visual'/>
                                <div className="project-block-info">
                                    <h3 className='project-block-title'>Candidate onboarding portal</h3>
                                    <p className='project-block-description'>{translation['candidateportaldescription']}</p>
                                </div>
                            </div>
                        </div>

                        <div className="project-block">
                            <div className="project-inner-block">
                                <img src={huskeliste} alt='HuskeListe project visual' title='HuskeListe project visual'/>
                                <div className="project-block-info">
                                    <h3 className='project-block-title'>Huskeliste</h3>
                                    <p className='project-block-description'>{translation['huskelistedescription']}</p>
                                    <a className='project-btn' href="https://wesselvandalen.github.io/huskeliste/" target='_blank' rel="noreferrer">{translation['seeproject']}</a>
                                </div>
                            </div>
                        </div>

                        <div className="project-block">
                            <div className="project-inner-block">
                                <img src={smartfinance} alt='Smartfinance project visual' title='Smartfinance project visual'/>
                                <div className="project-block-info">
                                    <h3 className='project-block-title'>Smartfinance</h3>
                                    <p className='project-block-description'>{translation['smartfinancedescription']}</p>
                                    <a className='project-btn' href="http://159.223.223.166:8080/" target='_blank' rel="noreferrer">{translation['seeproject']}</a>
                                </div>
                            </div>
                        </div>

                        <div className="project-block">
                            <div className="project-inner-block">
                                <img src={kpn} alt='KPN project visual' title='KPN project visual'/>
                                <div className="project-block-info">
                                    <h3 className='project-block-title'>KPN Travel Movements</h3>
                                    <p className='project-block-description'>{translation['kpndescription']}</p>
                                    <a className='project-btn' href="https://hu-sd-sv2fe-studenten-2324.github.io/v2fe-eindopdracht-v2d_peer/" target='_blank' rel="noreferrer">{translation['seeproject']}</a>
                                </div>
                            </div>
                        </div> */}

                    </div>

                </div>
            </div>
        </div>
    );
}

export default Projects;