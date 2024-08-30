import './product-block.css';

function ProjectBlock(props: any) {
    return (
        <div className="project-block-container">
            <div className="project-block-img-container">
                <img src={props.image} alt="Project visual"/>
            </div>
            <div className="project-block-information">
                <div>
                    <h4 className='project-block-title'>{props.name}</h4>
                    <p className='project-block-description'>
                        {props.description}
                    </p>
                </div>
                <div className="project-buttons-container">
                    <a className='btn btn-primary' href={props.link} target='_blank'>
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
    );
}

export default ProjectBlock;