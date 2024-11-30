import './App.css';
import SidePanel from './components/side-panel';
import MainPage from './pages/main-page';
import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NorwayPage from './pages/norway-page';

export default function App() {

  // useEffect(() => {
  //   const anchors = document.querySelectorAll('a[href^="#"]');
  //   anchors.forEach(anchor => {
  //     anchor.addEventListener('click', function (e) {
  //       e.preventDefault();
  //       const targetId = this.getAttribute('href');
  //       const targetElement = document.querySelector(targetId);
  //       if (targetElement) {
  //         targetElement.scrollIntoView({ behavior: 'smooth' });
  //       }
  //     });
  //   });

  //   return () => {
  //     anchors.forEach(anchor => {
  //       anchor.removeEventListener('click', () => { });
  //     });
  //   };
  // }, []);

  return (
    <Router>
      <div className="app-container">
        <div className="app-content">
          <SidePanel />
          <div className="app-innhold">
            <Routes>
              <Route path="/" element={<MainPage />} />
              <Route path='/norway' element={<NorwayPage/>} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}