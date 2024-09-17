import './projects.css';
import TitleComponent from './title-component';
import luftan from '../assets/project_design_luftan.png';
import huskeliste from '../assets/project_design_huskeliste.png';
import kpn from '../assets/project_design_kpn.png';
import smartfinance from '../assets/project_design_smartfinance.png';
import candidateportal from '../assets/project_design_mysolution.png';
import { useEffect, useState } from 'react';
import { getCurrentLanguage } from '../service/language-service';

function Projects() {
    const [translation, setTranslation] = useState({});

    useEffect(() => {
        translateProjectPage();
    }, [translation]);

    const translateProjectPage = async () => {
        const currentLanguage = getCurrentLanguage();

        try {
          const translations = await import(`../languages/${currentLanguage}.json`);
          setTranslation(translations);
        } catch (error) {
          console.error('Error loading translations:', error);
        }
    };

    return (
        <div className='projects-wrapper'>
            <div className="projects-content">
                <div className="projects-title-container">
                    <div className="projects-inner-title-container">
                        <TitleComponent
                            title={translation['projectstitle']}
                            description={translation['projectsdescription']}
                            darkmode={false}
                        />
                    </div>
                </div>

                <div className="projects-container">

                    <div className="project-block">
                        <div className='line-divider'/>
                        <div className="project-inner-content">
                            <div className="project-tekst-container">
                                <div className="title-role-wrapper">
                                    <h3 className='title'>Luftan,</h3>
                                    <h3 className='role'>Java Spring & React Typescript developer</h3>
                                </div>
                                <p className='description'>{translation['luftandescription']}</p>
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
                                    <h3 className='title'>Candidate onboarding portal,</h3>
                                    <h3 className='role'>React Typescript & Salesforce developer</h3>
                                </div>
                                <p className='description'>{translation['candidateportaldescription']}</p>
                            </div>
                            <div className="project-image-container">
                                <img src={candidateportal} alt="Project visual image."/>
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
                                <p className='description'>{translation['huskelistedescription']}</p>
                                <a href='https://wesselvandalen.github.io/huskeliste/' target='_blank' className='project-button'>
                                    {translation['seeproject']}
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
                                <p className='description'>{translation['smartfinancedescription']}</p>
                                <a href='http://159.223.223.166:8080/' target='_blank' className='project-button'>
                                    {translation['seeproject']}
                                </a>
                            </div>
                            <div className="project-image-container">
                                <img src={smartfinance} alt="Project visual image."/>
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
                                <p className='description'>{translation['kpndescription']}</p>
                                <a href='https://hu-sd-sv2fe-studenten-2324.github.io/v2fe-eindopdracht-v2d_peer/' target='_blank' className='project-button'>
                                    {translation['seeproject']}
                                </a>
                            </div>
                            <div className="project-image-container">
                                <img src={kpn} alt="Project visual image."/>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Projects;