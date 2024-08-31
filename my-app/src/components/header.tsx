import './header.css';
import logo from '../assets/logo.png';

function Header() {
    return (
        <header>
            <div className='header-content'>
                <div className="logo-container">
                    <a href="/" target='_blank'>
                        <img src={logo} alt="Logo"/>
                    </a>
                </div>
                <ul className="nav-links">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#work">Work experience</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#languages">Languages</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </div>
        </header>
    );
}

export default Header;