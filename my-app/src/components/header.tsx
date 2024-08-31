import './header.css';

function Header() {
    return (
        <header>
            <div className='header-content'>
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