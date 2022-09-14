import "./index.scss";
import {Link, NavLink} from "react-router-dom";
import LogoS from "../../assets/images/logo-s.png";
import LogoSubtitle from "../../assets/images/logo_sub.png";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHome, faUser, faEnvelope} from "@fortawesome/free-solid-svg-icons";
import {faLinkedin, faGithub} from "@fortawesome/free-brands-svg-icons";
const SideBar = () => {


    return <div className="nav-bar">
    <Link className="logo" to="/Portfolio" >
        <img src={LogoS} alt="logo"></img>
        <img className="sub-logo" src={LogoSubtitle} alt="slobodan"></img>
    </Link>


  <nav>
    <NavLink exact="true" activeclassname="active" to="/Portfolio" >
        <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
    </NavLink>
    <NavLink exact="true" activeclassname="active" className="about-link" to="/Portfolio/about">
        <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
    </NavLink>
    <NavLink exact="true" activeclassname="active" className="contact-link" to="/Portfolio/contact">
        <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
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
    </div>
}

export default SideBar;