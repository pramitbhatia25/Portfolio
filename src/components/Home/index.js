import LogoTitle from "../../assets/images/logo-s.png";
import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import ReactTypingEffect from 'react-typing-effect';

import "./index.scss";
import AnimatedLetters from "../AnimatedLetters";
import Logo from "./Logo";

function Home() {

    const [letterClass, setLetterClass] = useState('text-animate');
    const nameArray = ['r', 'a', 'm', 'i', 't'];
    const jobArray = ['w', 'e', 'b', ' ', 'd', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r', '.'];

    useEffect(() => {
        
        let timeoutId = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000)
        
        return () => {
                    clearTimeout(timeoutId)
                }
    }, [])
        return <div className="container home-page">
    <div className="text-zone">


        <h1>
        <span className={letterClass}>H</span>
        <span className={`${letterClass} _12`}>i,</span>
        <br/>
        <span className={`${letterClass} _13`}>I</span>
        <span className={`${letterClass} _14`}>'m</span>
        <img src={LogoTitle} alt="developer" />
        <AnimatedLetters letterClass={letterClass} strArray = {nameArray} idx = {15} />
        <br />
        <AnimatedLetters letterClass={letterClass} strArray = {jobArray} idx = {22} />
        </h1>
        <h2><ReactTypingEffect typingDelay="10" eraseDelay="1000" eraseSpeed="10" speed="100"
        text={["Student.", "Software Developer.", "Aspring Software Engineer :)"]}
    /></h2>
            <h2>Frontend developer / Javascipt Expert / Youtuber</h2>
        <Link to="/contact" className="flat-button">CONTACT ME</Link>
    </div>
    </div>
}

export default Home;