import './about-view.css';
import githubIcon from '../assets/icons/github.png';
import gmailIcon from '../assets/icons/gmail.png';
import linkedInIcon from '../assets/icons/linkedin.png';
import discordIcon from '../assets/icons/discord.png';

function AboutView() {

    function getCurrentYear(): number {
        return new Date().getFullYear();
    }

    return (
        <div className='about-view-container'>
            <div className="about-view-content">
                <div className="about-social-title-container">
                    <div className="about-title-container">
                        <p>I'm <span className='about-span'>Wessel</span>, a 20 year old Full Stack Software Developer specialized in Front end & Design from the Netherlands.</p>
                    </div>
                    <div className="about-social-container">
                        <a href="https://www.github.com/wesselvandalen/" target='_blank'>
                            <img src={githubIcon} alt="GitHub"/>
                        </a>
                        <a href="https://www.linkedin.com/in/wesselvandalen/" target='_blank'>
                            <img src={linkedInIcon} alt="LinkedIn"/>
                        </a>
                        <a href="mailto:wesselvandalen@gmail.com">
                            <img src={gmailIcon} alt="Gmail"/>
                        </a>
                        <a href="https://www.discordapp.com/users/bjarndal" target='_blank'>
                            <img src={discordIcon} alt="Discord"/>
                        </a>
                    </div>
                </div>
                <p>&copy; {getCurrentYear()} All Rights Reserved.</p>
            </div>
        </div>
    );
}

export default AboutView;