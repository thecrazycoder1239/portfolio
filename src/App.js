import './App.css';
import Header from './components/Header';
import Links from './components/Links';
import Projects from './components/projects';

function App() {
  return (
    <>
    <p className='viewport-error'>My portfolio is currently not supported on mobile. <br/><br/> Please open on desktop!</p>
    <div className='visible-content'>
    <Header/>
    <Links/>
    <h1 className='title'>Thomas Barrett</h1>
    <p className='bio'>Hello there! I am a junior full stack software developer. Thankyou for visiting my portfolio page, I hope you enjoy viewing my projects!</p>
    <div className='purple'></div>
    <div className='blue'></div>
    <Projects/>
    </div>
    </>
  );
}

export default App;
