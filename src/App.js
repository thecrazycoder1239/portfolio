import './App.css';
import Header from './components/Header';
import Links from './components/Links';
import Projects from './components/projects';

function App() {
  return (
    <>
    <Header/>
    <Links/>
    <h1 className='title'>Thomas <br></br> Barrett</h1>
    <p className='bio'>Hello there! I am a junior full stack software developer. Thankyou for visiting my portfolio page, I hope you enjoy viewing my projects!</p>
    <div className='purple'></div>
    <div className='blue'></div>
    <Projects/>
    </>
  );
}

export default App;
