import './App.css';
import LanguageView from './components/language-view';
import Header from './components/header';
import Introduction from './components/introduction';
import Offerings from './components/offerings';
import ProjectsView from './components/projects-view';
import AboutView from './components/about-view';

function App() {
  return (
    <div className="App">
      <Header/>
      <Introduction/>
      <Offerings/>
      <LanguageView/>
      <ProjectsView/>
      <AboutView/>
    </div>
    );
}

export default App;