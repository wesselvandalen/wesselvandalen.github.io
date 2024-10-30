import './App.css';
import { useEffect } from 'react'
import About from './components/about';
import SidePanel from './components/side-panel';
import Projects from './components/projects';
import Interests from './components/interests';
import Education from './components/education';
import Skills from './components/skills';
import Norway from './components/norway';

export default function App() {

  // Sørger for at det er smooth scrolling over hele nettsida
  useEffect(() => {
    // Velg alle lenker som starter med #
    const anchors = document.querySelectorAll('a[href^="#"]');
    anchors.forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });

    // Cleanup for å unngå minnelekkasjer ved fjerning av event listeners
    return () => {
      anchors.forEach(anchor => {
        anchor.removeEventListener('click', () => {});
      });
    };
  }, []);

  return (
    <div className='app-container'>
      <div className="app-content">
        <SidePanel/>
        <About/>
        <div className="line-divider"/>
        <Projects/>
        <div className="line-divider"/>
        <Education/>
        <div className="line-divider"/>
        <Skills/>
        <div className="line-divider"/>
        <Norway/>
        {/* <div className="line-divider"/>
        <Interests/> */}
      </div>
    </div>
  );
}