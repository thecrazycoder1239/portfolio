
import githubLogo from "../assets/github.png"
import linkedIn from "../assets/linkedIn.png"


export default function Links () {
    return (
        <ol className="logos">
            <li>
                <a className="links" href="https://github.com/thecrazycoder1239"><img className="github" src={githubLogo} alt="Github"/></a>
            </li>
            <li>
                <a className="links" href="https://www.linkedin.com/in/thomas-barrett-profile/?original_referer="><img className="linkedIn" src={linkedIn} alt="Linked In"/></a>
            </li>
        </ol>
    )
}