import './introduction.css';
import laptop from '../assets/laptop.png';

function Introduction() {
    function calculateAge(): number {
        let dob: Date = new Date("01/20/2004");
        let month_diff: number = Date.now() - dob.getTime();
        let age_dt: Date = new Date(month_diff);
        let year: number = age_dt.getUTCFullYear();
        return Math.abs(year - 1970);
    }

    return (
        <div id='home'>
            <div className="hero">
                <div className="main-text-container">
                    <h2>
                        I'm <span className="highlight">Wessel</span>, 
                        a social {calculateAge()} year old Software Developer with a Norwegian charm.
                    </h2>
                </div>
                <div className="buttons">
                    <a href="mailto:wesselvandalen@gmail.com" className="btn btn-primary">
                        Let's talk
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                        </svg>
                    </a>
                    <a href='https://wesselvandalen.github.io/files/resume.pdf' target='_blank' rel='noopener noreferrer' className="btn btn-secondary">
                        My resume
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5M6 7.5h3v3H6v-3Z" />
                        </svg>
                    </a>
                </div>
          </div>
          <div className="main-image-display">
            <div className="main-image-content">
                <div className="image">
                    <img src={laptop} alt="Laptop frame"/>
                </div>
            </div>
          </div>
        </div>
    );
}

export default Introduction;