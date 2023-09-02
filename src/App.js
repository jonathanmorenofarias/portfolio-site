import './App.css';
import Navbar from './components/Navbar'
import Main from './components/Main'
import AboutMe from './components/AboutMe'
import Skills from './components/Skills'
import Projects from './components/Projects';

function App() {
  return (
    <div className="m-0 p-0">
        <Navbar />
        <Main />
        <AboutMe />
        <Skills />
        <Projects />
    </div>
  );
}

export default App;