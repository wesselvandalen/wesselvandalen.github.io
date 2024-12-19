import './App.css';
import Home from './components/home';
import Education from './components/education';
import Header from './components/header';
import Work from './components/work';
import Stack from './components/stack';
import Footer from './components/footer';

export default function App() {

  return (
    <div className="app-container">
      <div className="app-content">
        <Header/>
        <Home/>
        <div className="line"/>
        <Stack/>
        <div className="line"/>
        <Education/>
        <div className="line"/>
        <Work/>
        <Footer/>
      </div>
    </div>
  );
}