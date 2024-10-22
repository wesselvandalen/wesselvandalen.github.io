import './projects.css';
import luftan from '../assets/projects/luftan_design.png';
import candidatePortal from '../assets/projects/candidate_onboarding_design.png';
import { useTranslation } from 'react-i18next';

export default function Projects() {
    const [t] = useTranslation("global");

    return (
        <div className='projects-container' id='projects'>
            <div className="projects-content">
                <div className="projects-inner-content">

                    <div className="projects-template-wrapper">
                        <h3 className='project-title'>{t('worktitle')}</h3>
                        <p className='project-description'>{t('workdescription')}</p>
                    </div>

                    <div className="projects-wrapper">

                        <div className="project">
                            <div className="project-content">
                                <div className="project-info">
                                    <h3 className='projects-title'>Luftan</h3>
                                    <p className='project-description'>{t('luftandescription')}</p>
                                    <a className='project-button' href="/" target='_blank' rel="noreferrer">{t('seeproject')}</a>
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
                                    <p className='project-description'>{t('candidateportaldescription')}</p>
                                    {/* <a className='project-button' href="/" target='_blank' rel="noreferrer">{t('seeproject')}</a> */}
                                </div>
                                <div className="project-image">
                                    <img src={candidatePortal} alt="Candidate onboarding portal"/>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
}