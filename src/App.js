import Bounce from 'react-reveal/Bounce';
import './App.css';
import Footer from './Components/Footer';
import QuizData from './Components/QuizData';
import ParticleBackground from './particle';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';

function App() {
  
  return (
   <Router>
    <div>
    <div className="App" >   
    {/* //cool animations   */}
    <ParticleBackground/> 
      <div className="Main-Heading"><h1>QUIZ TIME</h1></div>
      <div className="Message">
        <h2>
          <Bounce right cascade>-----    Unleash The Knowledge Within You    -----
            </Bounce>
          </h2>
      </div>
      <QuizData/>
    </div>
 
 
    <div>
      <Footer/>
    </div>
    </div>
    </Router>
  );
}

export default App;
