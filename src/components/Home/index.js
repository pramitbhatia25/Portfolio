import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import ReactTypingEffect from 'react-typing-effect';
import { Loader } from "react-loaders";

import "./index.scss";
import AnimatedLetters from "../AnimatedLetters";

function Home() {

    const [letterClass, setLetterClass] = useState('text-animate');
    const nameArray = ['r', 'a', 'm', 'i', 't'];
    const jobArray = ["s", "o", "f", "t", "w", "a", "r", "e", " " ,"d" ,"e" ,"v" ,"e" ,"l" ,"o" ,"p" ,"e" ,"r"];

    useEffect(() => {

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
                <br />
                <AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={15} />
            </h1>
            <h2><ReactTypingEffect typingDelay="0" eraseDelay="1000" eraseSpeed="10" speed="100"
                text={["Software Developer.", "Undergrad @ Georgia State University", "Aspring Software Engineer :)"]}
            /></h2>
            <Link to="/contact" className="flat-button">CONTACT ME</Link>
        </div>
    </div>
        <Loader type="pacman" />
    </>
}

export default Home;