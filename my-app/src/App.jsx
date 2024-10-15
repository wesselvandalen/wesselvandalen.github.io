import './App.css';
import Home from './components/home';
import Header from './components/header';
import NorwayComponent from './components/norway-component';
import Skills from './components/skills';
import Projects from './components/projects';
import NorwayComponent2 from './components/norway-component2';

export default function App() {
  return (
    <>
      <Header/>
      <Home/>
      <NorwayComponent/>
      <Skills/>
      <NorwayComponent2/>
      <Projects/>
    </>
  );
}