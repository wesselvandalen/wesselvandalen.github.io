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
                                    <a className='project-button' href="https://wesselvandalen.github.io/huskeliste/" target='_blank' rel="noreferrer">{translation['seeproject']}</a>
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
                                    <a className='project-button' href="http://159.223.223.166:8080/" target='_blank' rel="noreferrer">{translation['seeproject']}</a>
                                </div>
                                <div className="project-image">
                                    <img src={luftan} alt="SmartFinance"/>
                                </div>
                            </div>
                            <div className="line-divider"></div>
                        </div>

                        <div className="project last">
                            <div className="project-content">
                                <div className="project-info">
                                    <h3 className='projects-title'>KPN Travelmovements</h3>
                                    <p className='project-description'>{translation['kpndescription']}</p>
                                    <a className='project-button' href="https://hu-sd-sv2fe-studenten-2324.github.io/v2fe-eindopdracht-v2d_peer/" target='_blank' rel="noreferrer">{translation['seeproject']}</a>
                                </div>
                                <div className="project-image">
                                    <img src={luftan} alt="KPN Travel Movements"/>
                                </div>
                            </div>
                            <div className="line-divider"></div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Projects;