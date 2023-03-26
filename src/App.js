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
    {/* <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
    <h1>NC-Games</h1>
    <p>my links for the backend</p>
    <a href="https://github.com/thecrazycoder1239/NC-Games-BE">backend github link</a> <br></br>
    <a href="https://my-board-game-database.onrender.com/api">hosted backend</a>
    <br/>
    <p>my links for the frontend</p>
    <a href="https://github.com/thecrazycoder1239/NC-Games-FE">frontend github link</a> <br></br>
    <a href="https://toms-nc-games.netlify.app/">hosted frontend</a> */}
    </>
  );
}

export default App;
