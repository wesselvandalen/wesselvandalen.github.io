import './App.css';
import Home from './components/home';
import Header from './components/header';
import NorwayComponent from './components/norway-component';
import Skills from './components/skills';
import Projects from './components/projects';

function App() {
  return (
    <>
      <Header/>
      <Home/>
      <NorwayComponent/>
      <Skills/>
      <Projects/>
    </>
  );
}

export default App;