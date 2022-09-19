import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import ReactTypingEffect from 'react-typing-effect';
import { Loader } from "react-loaders";

import "./index.scss";
import AnimatedLetters from "../AnimatedLetters";

function Home() {

    const [letterClass, setLetterClass] = useState('text-animate');
    const nameArray = ['r', 'a', 'm', 'i', 't'];

    useEffect(() => {
            document.body.style.zoom = "100%";
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
            <h2><ReactTypingEffect typingDelay="0" eraseDelay="1000" eraseSpeed="10" speed="100"
                text={["Software Developer.", "Undergrad @ Georgia State University", "Aspring Software Engineer :)"]}
            /></h2>
            <Link to="/Portfolio/contact" className="flat-button">CONTACT ME</Link>
        </div>
    </div>
        <Loader type="pacman" />
    </>
}

export default Home;