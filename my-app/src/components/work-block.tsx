import './work-block.css';

function WorkBlock(props: any) {
    return (
        <div className='work-block-container'>
            <div className="work-block-content">

                <div className="work-location-role-container">
                    <div className="work-location-time-container">
                        <p className='work-location'><span className='work-name-span'><a href={props.link} target='_blank'>{props.name}</a></span>, ({props.location})</p>
                        <p className='work-time'>• {props.startTime} - {props.endTime}</p>
                    </div>
                    <div className="work-role-container">
                        <p>{props.role}</p>
                    </div>
                </div>
                <div className="work-type-container">
                    <p className='work-type-p'>{props.type}</p>
                </div>
            
            </div>
        </div>
    );
}

export default WorkBlock;