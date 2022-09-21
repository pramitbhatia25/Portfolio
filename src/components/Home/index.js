import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import ReactTypingEffect from 'react-typing-effect';
import { Loader } from "react-loaders";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faFile, faUser, faEnvelope, faSuitcase, faBars, faContactCard } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub, faInstagram } from "@fortawesome/free-brands-svg-icons";

import "./index.scss";
import AnimatedLetters from "../AnimatedLetters";

function Home() {

    const [letterClass, setLetterClass] = useState('text-animate');
    const nameArray = ['r', 'a', 'm', 'i', 't'];

    useEffect(() => {
        document.body.style.zoom = "80%";
        let timeoutId = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000)

        return () => {
            clearTimeout(timeoutId)
        }
    }, [])
    return <><div className="container home-page">
        <div className="text-zone">


            <h1>
                <span className={letterClass}>H</span>
                <span className={`${letterClass} _12`}>i,</span>
                <br />
                <span className={`${letterClass} _13`}>I</span>
                <span className={`${letterClass} _14`}>'m</span>
                <h4>P</h4>
                <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={15} />
                <span className={`${letterClass} _15`}>!</span>
                <br />
            </h1>
            <br />
            <br />
            <br />
            <div class="typing"><ReactTypingEffect typingDelay="1000" eraseDelay="1000" eraseSpeed="10" speed="50"
                text={["Software Developer.", "Undergrad @ Georgia State University", "Huge Marvel Fan!", "Aspring Software Engineer :)"]}
            /></div>
            <Link to="/Portfolio/contact" className="flat-button">Linkedin <FontAwesomeIcon className="ic" icon={faLinkedin} color="white" fontSize={"20px"}/></Link>
            <Link to="/Portfolio/contact" className="flat-button">Github <FontAwesomeIcon className="ic" icon={faGithub} color="white" fontSize={"20px"}/></Link>
            <Link to="/Portfolio/contact" className="flat-button">Resume <FontAwesomeIcon className="ic" icon={faFile} color="white" fontSize={"20px"}/></Link>
            <Link to="/Portfolio/contact" className="flat-button">Contact Me! <FontAwesomeIcon className="ic" icon={faContactCard} color="white" fontSize={"20px"}/></Link>
        </div>
        <div className="iron-man">
            <div class="reactor-container">
                <div class="reactor-container-inner circle abs-center"></div>
                <div class="tunnel circle abs-center"></div>
                <div class="core-wrapper circle abs-center"></div>
                <div class="core-outer circle abs-center"></div>
                <div class="core-inner circle abs-center"></div>
                <div class="coil-container">
                    <div class="coil coil-1"></div>
                    <div class="coil coil-2"></div>
                    <div class="coil coil-3"></div>
                    <div class="coil coil-4"></div>
                    <div class="coil coil-5"></div>
                    <div class="coil coil-6"></div>
                    <div class="coil coil-7"></div>
                    <div class="coil coil-8"></div>
                </div>
            </div>
        </div>
    </div>
        <Loader type="pacman" />
    </>
}

export default Home;