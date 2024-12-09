import './App.css';
import Home from './components/home';
import About from './components/about';
import Education from './components/education';
import Work from './components/work';
import Stack from './components/stack';
import { useEffect } from 'react';

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
    <div className="app-container" >
      <div className="app-content">
        <div className="app-innhold">
          <div className="main-content">
            <Home />
            <div className="line" />
            <About />
            <div className="line" />
            <Education />
            <div className="line" />
            <Work /> 
            <div className="line" />
            <Stack /> 
          </div>
        </div>
      </div>
    </div>
  );
}