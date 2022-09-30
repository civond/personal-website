import './index.scss'
import Logo from '../../assets/images/test2.png'
import LogoText from '../../assets/images/nametest3.png'
import { Link, NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUser, faEnvelope, faTerminal, faBrain} from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => (

    <div className="nav-bar">
        <Link className="logo" to="/">
            <img src={Logo} alt='logo'/>
            <img className="sub-logo" src={LogoText} alt='logos'/>
        </Link>
        <nav>
            <NavLink exact="true" activeclassname="active" to="/">
                <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
            </NavLink>
            <NavLink exact="true" className="about-link" activeclassname="active" to="/about">
                <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
            </NavLink>
            <NavLink exact="true" className="project-link" activeclassname="active" to="/projects">
                <FontAwesomeIcon icon={faTerminal} color="#4d4d4e" />
            </NavLink>
            <NavLink exact="true" className="contact-link"activeclassname="active" to="/contact">
                <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
            </NavLink>
          
        </nav>
        <ul>
            <li>
                <a target = "_blank" rel="noreferrer" href="http://www.cn3laboratory.org/">
                    <FontAwesomeIcon icon={faBrain} color="#4d4d4e" />
                </a>
            </li>
            <li>
                <a target = "_blank" rel="noreferrer" href="https://www.linkedin.com/in/d-yeh/">
                    <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
                </a>
            </li>
            <li>
                <a target = "_blank" rel="noreferrer" href="https://github.com/civond">
                    <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
                </a>
            </li>

        </ul>

    </div>
)
    
    


export default Sidebar