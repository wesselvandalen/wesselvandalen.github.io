import './App.css';
import SidePanel from './components/side-panel';
import { useEffect } from 'react';
import Home from './components/home';
import About from './components/about';
import Education from './components/education';
import Work from './components/work';
import Stack from './components/stack';

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
        anchor.removeEventListener('click', () => { });
      });
    };
  }, []);

  return (
    <div className="app-container">
      <div className="app-content">
        <SidePanel />
        <div className="app-innhold">
          <Home />
          <div className="main-content">
            <About />
            <Education />
            <Work />
            <Stack/>
          </div>
        </div>
      </div>
    </div>
  );
}