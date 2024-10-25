import './App.css';
import Home from './components/home';
import NorwayComponent from './components/norway-component';
import Skills from './components/skills';
import Projects from './components/projects';
import NorwayComponent2 from './components/norway-component2';

export default function App() {
  return (
    <div className='app'>
      <div className="app-content">
        <Home/>
        <NorwayComponent/>
        <Skills/>
        <NorwayComponent2/>
        <Projects/>
      </div>
    </div>
  );
}