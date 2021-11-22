import Bounce from 'react-reveal/Bounce';
import './App.css';
import QuizData from './Components/QuizData';
function App() {
  
  return (
    <div className="App" >
     
      <div className="Main-Heading"><h1>QUIZ TIME</h1></div>
      <div className="Message">
        <h2>
          <Bounce left cascade>Unleash The Knowledge Within You
            </Bounce>
          </h2>
      </div>
      <QuizData/>
    </div>
  );
}

export default App;
