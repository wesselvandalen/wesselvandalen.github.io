import './title-component.css';

function TitleComponent(props) {
    const styleH3 = {
        'background': props.darkmode ? 
        'linear-gradient(90deg, rgb(130, 60, 200) -45%, rgb(160, 80, 220) 10%, rgb(199, 98, 255) 25%, rgb(221, 131, 255) 60%, rgb(239, 122, 200) 80%)' :
        'linear-gradient(90deg, rgb(255, 167, 69) -45%, rgb(254, 134, 159) 10%, rgb(239, 122, 200) 25%, rgb(160, 131, 237) 60%, rgb(67, 174, 255) 80%)',
        'WebkitBackgroundClip': 'text',
        'WebkitTextFillColor': 'transparent'
    };

    const styleP = {
        'color': props.darkmode ? 'white' : 'black',
        'opacity': props.darkmode ? '1' : '.6'
    };

    return (
        <div className='title-wrapper'>
            <h3 style={styleH3} className='title-title'>{props.title}</h3>
            <p style={styleP} className='title-description'>{props.description}</p>
        </div>
    );
}

export default TitleComponent;