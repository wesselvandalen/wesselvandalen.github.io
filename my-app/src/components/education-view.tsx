import './education-view.css';
import LineDivider from './line-divider';

function EducationView() {
    return (
        <div className='education-container' id="education">
            <div className="education-content">
                <h3 className='education-title'>My <span className='education-span'>Education</span></h3>
                <p className='education-description'>Focused on practical skills and hands-on learning in tech and development.</p>
                <div className="education-containers">
                    <div className="education-containers-content">
                        <div className="education-main-text-container">
                            <h3><span className='education-special'>HBO-ICT</span>, Software Development</h3>
                            <p>• October 2022 - July 2026</p>
                        </div>
                        <div className="education-secundary-text-container">
                            <p>HBO Bachelor • 240 ECTS</p>
                        </div>
                        <a href="https://www.hu.nl/voltijd-opleidingen/hbo-ict" target='_blank'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                            </svg>
                        </a>
                    </div>
                </div>
                
                <LineDivider
                    dark={false}
                />
            </div>
        </div>
    );
}

export default EducationView;