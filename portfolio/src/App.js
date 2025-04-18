import Navbar from './components/Navbar/navbar.js';
import Intro from './components/Intro/intro.js';
import Skills from './components/Skills/skills.js';
import Works from './components/Works/works.js';
function App() {
  return (
    <div className="App">
     <Navbar/>
      <Intro/>
      <Skills/>
      <Works/>
    </div>
  );
}
export default App;
