import './App.css';
import Navbar from './components/Navbar'
import Main from './components/Main'
import AboutMe from './components/AboutMe'
import Skills from './components/Skills'
import Projects from './components/Projects';
import Footer from './components/Footer';
import Contact from './components/Contact';


function App() {
  return (
    <div className="m-0 p-0">
        <Navbar />
        <Main />
        <AboutMe />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
    </div>
  );
}

export default App;