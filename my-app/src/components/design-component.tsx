import './design-component.css';
import luftanDesign from '../assets/design.png';

function DesignComponent() {
    return (
        <div className='design-component-container'>
            <div className="design-component-content">
                <img src={luftanDesign} alt="Laptop design image"/>
            </div>            
        </div>
    );
}

export default DesignComponent;