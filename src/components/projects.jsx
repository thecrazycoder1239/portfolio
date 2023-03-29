import NCGames from '../assets/NC-Games.jpeg'
import NCGames2 from '../assets/NC-Games-2.jpeg'
import pokemon from '../assets/pokemon.png'

export default function Projects () {
    return (
        <section id="projects">
            <div className="NC-Games">
                <div className='div'>
                <h2 className="project-title">NC-Games</h2>
                <p className='project-description'> A board game reviews site!</p> 
                <ol className='project-features-list'>
                    <li>comments and likes with optomistic rendering</li> <br/>
                    <li>dynamic searching of the board game reviews database</li> <br/>
                    <li>log in page that alters global context</li> <br/>
                    <li>responsive design and conditional rendering of components</li>
                </ol>
                <div className='project-footer'>
                <a className='link' href="https://github.com/thecrazycoder1239/NC-Games-BE">Backend repository</a>
                <a className='link' href="https://github.com/thecrazycoder1239/NC-Games-FE">Frontend repository</a>
                <a className='link' href="https://toms-nc-games.netlify.app/">Hosted application</a>
                </div>
                </div>
                <div className='div'>
                <img className="project-img" src={NCGames} alt="NC-Games preview"></img>
                <img className="project-img-2" src={NCGames2} alt="NC-Games preview"></img>
                </div>     
            </div>
            <div className="pokemon">
                <div className='div'>
                <h2 className="project-title">Pokemon</h2>
                <p className='project-description'> A Pokemon card generator!</p> 
                <ol className='project-features-list'>
                    <li>creates trading cards with data from the Pokemon API</li> <br/>
                    <li>card colours depend on the Pokemon type</li> <br/>
                    <li>currently working on an arena where the chosen pokemon can battle</li>
                </ol>
                <div className='project-footer'>
                <a className='link' href="https://github.com/thecrazycoder1239/Pokemon-cards">Github repository</a>
                <a className='link' href="https://pokemon-api-cards.netlify.app/">Hosted application</a>
                </div>
                </div>
                <div>
                <img id="pokemon-img" src={pokemon} alt="NC-Games preview"></img>
                </div>     
            </div>
            <div className='coming-soon'>
                <p>More projects coming very soon...</p>
            </div>
        </section>
    )
}