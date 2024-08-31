import LineDivider from './line-divider';
import WorkBlock from './work-block';
import './work-view.css';

function WorkView() {
    return (
        <div className='work-container' id='work'>
            <div className="work-content">
                <h3 className='work-title'>My <span className='work'>Work</span> Experience</h3>
                <p className='work-description'>Discover the path I've taken through various roles and industries, shaping my expertise and experience.</p>

                <div className="work-blocks">
                    
                    <WorkBlock
                        key={2}
                        name={'MySolution'}
                        link={'https://www.mysolution.com'}
                        location={'Houten, Utrecht, Netherlands'}
                        startTime={'September 2024'}
                        endTime={'January 2025'}
                        role={'Developer in Salesforce, HBO Bachelor documentation + project building'}
                        type={'Internship'}
                    />

                    <LineDivider
                        dark={false}
                    />

                    <WorkBlock
                        key={1}
                        name={'Concepts2Go'}
                        link={'https://www.google.com/search?q=concepts2go&oq=concepts2go&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIJCAEQABgNGIAEMgkIAhAAGA0YgAQyCAgDEAAYDRgeMggIBBAAGA0YHjIICAUQABgNGB4yCAgGEAAYDRgeMggIBxAAGA0YHjIKCAgQABgIGA0YHjIKCAkQABgIGA0YHtIBCDEzMzBqMGo3qAIAsAIA&sourceid=chrome&ie=UTF-8'}
                        location={'Nieuwegein, Utrecht, Netherlands'}
                        startTime={'November 2018'}
                        endTime={'November 2018'}
                        role={'Technical Intern, speculating software devs to follow an IT Bachelor'}
                        type={'Internship'}
                    />

                    <LineDivider
                        dark={false}
                    />

                </div>
            </div>
        </div>
    );
}

export default WorkView;