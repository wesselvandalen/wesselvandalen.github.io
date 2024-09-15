import './intro.css';
import image from '../assets/image.png';
import FloatingCursor from './floating-cursor';

function Intro() {
    
    // regner ut alderen til meg
    function calculateAge() {
        let dob = new Date("01/20/2004");
        let month_diff = Date.now() - dob.getTime();
        let age_dt = new Date(month_diff);
        let year = age_dt.getUTCFullYear();
        return Math.abs(year - 1970);
    };

    return (
        <>
            {/* TODO: Forårsaker bug hvor skjermen automatisk skroller ned (jeg tror FloatingCursor componenten er årsaken..?) */}
            <FloatingCursor/>
            <div className="intro-wrapper">
                <div className="intro-content">
                    <div className="intro-tekst-wrapper">
                        <h3 className='intro-title'>Wessel Rowdy van Dalen</h3>
                        <p className='intro-job'>Full Stack Software Engineer / UI UX Designer</p>
                        <p className='intro-description'>
                            Heisann! I’m a {calculateAge()}-year-old Full Stack Software Engineer from the Netherlands, specializing in front-end design.
                            I’m passionate about crafting clean, intuitive interfaces and love taking on new design challenges.
                            I also enjoy nature, dogs, and hope to move to Norway one day.
                        </p>
                        <div className="social-links-container">
                            <p>Follow me / have a chat with me:</p>
                            <a href="https://linkedin.com/in/wesselvandalen/" target='_blank'>LinkedIn</a>
                            <a href="https://github.com/wesselvandalen/" target='_blank'>GitHub</a>
                            <a href="mailto:wesselvandalen@gmail.com">Mail me</a>
                        </div>
                    </div>
                    <div className="intro-image-wrapper">
                        <img src={image} alt="Image of me" title="Picture of me"/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Intro;