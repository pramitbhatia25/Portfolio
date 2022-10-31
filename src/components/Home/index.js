import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import ReactTypingEffect from 'react-typing-effect';
import { Loader } from "react-loaders";
import { NavLink } from "react-router-dom";
import file from "../../assets/files/Resume.pdf"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faFile, faUser, faEnvelope, faSuitcase, faBars, faContactCard, faPlay, faPause } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub, faInstagram } from "@fortawesome/free-brands-svg-icons";
import "./index.scss";
import AnimatedLetters from "../AnimatedLetters";
import useSound from "use-sound";
import sound from "./sound.mp3";
function Home() {
    const [letterClass, setLetterClass] = useState('text-animate');
    const nameArray = ['r', 'a', 'm', 'i', 't'];
    const [a, setA] = useState("Loading!");
    const [play, { stop }] = useSound(sound);


    async function apiTest(){
        await fetch("http://127.0.0.1:5000", { method: "GET" }).then((response) => response.json()).then((data) => {setA(data.u)});
    }
    
    useEffect(() => {
        // apiTest();
        document.body.style.zoom = "80%";
        let timeoutId = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000)

        return () => {
            clearTimeout(timeoutId)
        }        
    }, [])

    function stopMusic() {
        stop();
        console.log("Stopped!")
    }

    function startMusic() {
        play();
        console.log("Started!")
    }
    
    return <><div className="container home-page">
        <div className="text-zone">
            <h1>
                <span className={letterClass}>H</span>
                <span className={`${letterClass} _12`}>i,</span>
                <br />
                <span className={`${letterClass} _13`}>I</span>
                <span className={`${letterClass} _14`}>'m</span>
                <div className="hh4">P</div>
                <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={15} />
                <span className={`${letterClass} _15`}>!</span>
                <br />
            </h1>
            <br />
            <br />
            <br />
            <div className="typing"><ReactTypingEffect typingDelay="1000" eraseDelay="1000" eraseSpeed="10" speed="50"
                text={["Software Developer.", "Undergrad @ Georgia State University", "Huge Marvel Fan!", "Aspring Software Engineer :)"]}
            /></div>
            <div className="music-q">How 'bout some music? 🎺</div>
            
            {
            //<audio controls id="beep" >
            //<source src="./mysound.mp3" type="audio/mp3" />
            //    Your browser does not support the audio tag.
            //</audio>
            }
            
            <Link to="#" className="flat-button" onClick={startMusic}>Play <FontAwesomeIcon className="ic" icon={faPlay} color="white" fontSize={"20px"}/></Link>
            <Link to="#" onClick={stopMusic} className="flat-button" >Stop <FontAwesomeIcon className="ic" icon={faPause} color="white" fontSize={"20px"}/></Link>
            <Link to="//linkedin.com/in/pramit-bhatia-220680b2/" target="_blank" className="flat-button">Linkedin <FontAwesomeIcon className="ic" icon={faLinkedin} color="white" fontSize={"20px"}/></Link>
            <Link to="//github.com/pramitbhatia25" target="_blank" className="flat-button">Github <FontAwesomeIcon className="ic" icon={faGithub} color="white" fontSize={"20px"}/></Link>
            <Link to={file} download target="_blank" className="flat-button">Resume <FontAwesomeIcon className="ic" icon={faFile} color="white" fontSize={"20px"}/></Link>
            <Link to="/Portfolio/contact" className="flat-button">Contact Me! <FontAwesomeIcon className="ic" icon={faContactCard} color="white" fontSize={"20px"}/></Link>
        </div>
        <div className="iron-man">
            <div className="reactor-container">
                <div className="reactor-container-inner circle abs-center"></div>
                <div className="tunnel circle abs-center"></div>
                <div className="core-wrapper circle abs-center"></div>
                <div className="core-outer circle abs-center"></div>
                <div className="core-inner circle abs-center"></div>
                <div className="coil-container">
                    <div className="coil coil-1"></div>
                    <div className="coil coil-2"></div>
                    <div className="coil coil-3"></div>
                    <div className="coil coil-4"></div>
                    <div className="coil coil-5"></div>
                    <div className="coil coil-6"></div>
                    <div className="coil coil-7"></div>
                    <div className="coil coil-8"></div>
                </div>
            </div>
        </div>
    </div>
        <Loader type="pacman" />
    </>
}

export default Home;