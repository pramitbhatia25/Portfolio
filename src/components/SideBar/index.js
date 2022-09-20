import "./index.scss";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faUser, faEnvelope, faSuitcase, faBars } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { useState } from "react";
const SideBar = () => {
    const [showNav, setShowNav] = useState(false);


    return <div className="nav-bar">
        <Link onClick={() => setShowNav(false)} className="logo" to="/Portfolio/home" >
            <h4>P</h4>
        </Link>


        <nav className={showNav ? 'mobile-show' : ''}>
            <NavLink exact="true" activeclassname="active" to="/Portfolio/home" onClick={() => setShowNav(false)}>
                <FontAwesomeIcon icon={faHome} color="#fff" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="about-link" to="/Portfolio/about" onClick={() => setShowNav(false)}>
                <FontAwesomeIcon icon={faUser} color="#fff" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="projects-link" to="/Portfolio/projects" onClick={() => setShowNav(false)}>
                <FontAwesomeIcon icon={faSuitcase} color="#fff" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="contact-link" to="/Portfolio/contact" onClick={() => setShowNav(false)}>
                <FontAwesomeIcon icon={faEnvelope} color="#fff" />
            </NavLink>
        </nav>
        <ul>
            <li>
                <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.linkedin.com/in/pramit-bhatia-220680b2/"
                >
                    <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
                </a>
            </li>
            <li>
                <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/pramitbhatia25"
                >
                    <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
                </a>
            </li>
        </ul>
        <FontAwesomeIcon
            onClick={() => setShowNav(true)}
            icon={faBars}
            color="#ffd700"
            size="3x"
            className='hamburger-icon' />
    </div>
}

export default SideBar;