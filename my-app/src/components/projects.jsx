import './projects.css';
import luftan from '../assets/projects/project_design_luftan.png';
import candidatePortal from '../assets/projects/project_design_mysolution.png';
import huskeliste from '../assets/projects/project_design_huskeliste.png';
import smartfinance from '../assets/projects/project_design_smartfinance.png';
import kpn from '../assets/projects/project_design_kpn.png';
import { useState, useEffect } from 'react';
import { getCurrentLanguage } from '../service/language-service';
import "animate.css/animate.compat.css";
import ScrollAnimation from 'react-animate-on-scroll';

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
        <>
            <ScrollAnimation animateIn='fadeIn'>
                <div className="seksjon">
                    <div className="container">
                        <div className="title-component-wrapper">
                            <div className="title-component">
                                <h1>{translation['worktitle']}</h1>
                                <div className="paragraph">
                                    {translation['workdescription']}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </ScrollAnimation>
            <div className="projects-container">
                <div className="projects-content">
                    <ScrollAnimation animateIn='fadeIn'>
                        <div className="project-block">
                            <div className="project-wrapper">
                                <div className="project-image">
                                    <img src={luftan} alt='Luftan' title='Luftan'/>
                                </div>
                                <div className="project-text">
                                    <h1>Luftan</h1>
                                    <div className="paragraph">
                                        {translation['luftandescription']}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </ScrollAnimation>

                    <ScrollAnimation animateIn='fadeIn'>
                        <div className="project-block">
                            <div className="project-wrapper">
                                <div className="project-image">
                                    <img src={candidatePortal} alt='Candidate onboarding portal' title='Candidate onboarding portal'/>
                                </div>
                                <div className="project-text">
                                    <h1>Candidate onboarding portal</h1>
                                    <div className="paragraph">
                                        {translation['candidateportaldescription']}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </ScrollAnimation>

                   <ScrollAnimation animateIn='fadeIn'>
                        <div className="project-block">
                                <div className="project-wrapper">
                                    <div className="project-image">
                                        <img src={huskeliste} alt='HuskeListe' title='HuskeListe'/>
                                    </div>
                                    <div className="project-text">
                                        <h1>HuskeListe</h1>
                                        <div className="paragraph">
                                            {translation['huskelistedescription']}
                                        </div>
                                        <a className='project-btn' href="https://wesselvandalen.github.io/huskeliste/" target='_blank' rel="noreferrer">{translation['seeproject']}</a>
                                    </div>
                                </div>
                            </div>
                   </ScrollAnimation>

                    <ScrollAnimation animateIn='fadeIn'>
                        <div className="project-block">
                            <div className="project-wrapper">
                                <div className="project-image">
                                    <img src={smartfinance} alt='SmartFinance' title='SmartFinance'/>
                                </div>
                                <div className="project-text">
                                    <h1>SmartFinance</h1>
                                    <div className="paragraph">
                                        {translation['smartfinancedescription']}
                                    </div>
                                    <a className='project-btn' href="http://159.223.223.166:8080/" target='_blank' rel="noreferrer">{translation['seeproject']}</a>
                                </div>
                            </div>
                        </div>
                    </ScrollAnimation>

                   <ScrollAnimation animateIn='fadeIn'>
                    <div className="project-block">
                            <div className="project-wrapper">
                                <div className="project-image">
                                    <img src={kpn} alt='KPN Travelmovements' title='KPN Travelmovements'/>
                                </div>
                                <div className="project-text">
                                    <h1>KPN Travelmovements</h1>
                                    <div className="paragraph">
                                        {translation['kpndescription']}
                                    </div>
                                    <a className='project-btn' href="https://hu-sd-sv2fe-studenten-2324.github.io/v2fe-eindopdracht-v2d_peer/" target='_blank' rel="noreferrer">{translation['seeproject']}</a>
                                </div>
                            </div>
                        </div>
                   </ScrollAnimation>
                </div>
            </div>
        </>
    );
}

export default Projects;