import './App.css';
import Intro from './components/intro';
import Skills from './components/skills';
import Projects from './components/projects';

function App() {
  return (
    <>
      <div className="app-wrapper">
        <div className="app-content">
          <Intro/>
          <Skills/>
          <Projects/>
        </div>
      </div>
    </>
  );
}

export default App;
