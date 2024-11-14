import './App.css';
import { useEffect } from 'react'
import About from './components/about';
import SidePanel from './components/side-panel';
import Projects from './components/work';
import Education from './components/education';
import Skills from './components/skills';
import Profile from './components/profile';

export default function App() {

  useEffect(() => {
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
        <Profile/>
        <div className="line-divider"/>
        <Projects/>
        <div className="line-divider"/>
        <Education/>
        <div className="line-divider"/>
        <Skills/>
      </div>
    </div>
  );
}