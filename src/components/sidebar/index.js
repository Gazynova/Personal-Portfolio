import './index.scss';
import { Link, NavLink } from 'react-router-dom'
import LogoS from '../../assets/images/logo-s.png'
//import LogoSubtitle from '../../assets/images/logo_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faEnvelope, faUser } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faTwitter, faLinkedin, faCodepen, faFreeCodeCamp } from '@fortawesome/free-brands-svg-icons';


const Sidebar = () => (
    <div className='nav-bar'>
        <Link className='logo' to='/'>
            <img src={LogoS} alt='logo' />
            {/*<img className='sub-logo' src={LogoSubtitle} alt='Somnath' />*/}
        </Link>

        <nav>
            <NavLink exact='true' activeclassname='active' to='/ '>
                <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
            </NavLink>

            <NavLink exact='true' activeclassname='active' className="about-link" to='about'>
                <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
            </NavLink>

            <NavLink exact='true' activeclassname='active' className="contact-link" to='contact '>
                <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
            </NavLink>

            <NavLink exact='true' activeclassname='active' className="project-link" to='project '>
                <FontAwesomeIcon icon={faFreeCodeCamp} color="#4d4d4e" />
            </NavLink>
        </nav>
        <ul>
            <li>
                <a target='_blank' rel="noreferrer" href="https://rb.gy/rnqlu">
                    <FontAwesomeIcon icon={faLinkedin} color='#4d4d4e' />
                </a>
            </li>
            <li>
                <a target='_blank' rel="noreferrer" href="https://github.com/Gazynova">
                    <FontAwesomeIcon icon={faGithub} color='#4d4d4e' />
                </a>
            </li>
            <li>
                <a target='_blank' rel="noreferrer" href="https://twitter.com/Somnath8956">
                    <FontAwesomeIcon icon={faTwitter} color='#4d4d4e' />
                </a>
            </li>
            <li>
                <a target='_blank' rel="noreferrer" href="https://auth.geeksforgeeks.org/user/sdprajapav2wh/practice">
                    <FontAwesomeIcon icon={faCodepen} color='#4d4d4e' />
                </a>
            </li>
        </ul>

    </div>
)

export default Sidebar