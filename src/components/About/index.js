import AnimatedLetters from "../AnimatedLetters";
import "./index.scss";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngular, faCss3, faGitAlt, faHtml5, faJsSquare, faPython, faReact } from "@fortawesome/free-brands-svg-icons";
import { Loader } from "react-loaders";

function About() {

    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {

        let timeoutId = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000)

        return () => {
            clearTimeout(timeoutId)
        }
    }, [])

    return <>
        <div className="container about-page">
            <div className="text-zone">
                <h1>
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
                        idx={15}
                    />
                </h1>
                <p>
                    I'm currently studying Computer Science at Georgia State University.
                    I have experience in Web and App development and would love to contribute
                    or help out in projects, internships or any other opportunities!
                </p>
                <p>
                    I love taking part in competitions and hackathons of all kinds, and am naturally
                    competitive. Some of my recent outgoings are:
                    <br />
                    <br />
                    Hack 4 Good - A Multidisclipinary Hakcathon my wonderful team and I addressed under-reporting of health and safety incidents on the MARTA transport system.
                    | <a className="hack" href="https://github.com/pramitbhatia25/Hack-4-Good/blob/main/Transportation%20Renovation.pdf">Project Link</a>
                    <br />
                    <br />
                    Code For Good 2022 - A Technology hackathon where my team and I developed a web application
                    under 24 hours to address early stage start-up support.
                    | <a className="hack" href="https://github.com/pramitbhatia25/Code-For-Good-2022">Project Link</a>
                </p>
            </div>

            <div className="stage-cube-cont">
                <div className="cubespinner">
                    <div className="face1">
                        <FontAwesomeIcon icon={faAngular} color="#DD0031" />
                    </div>
                    <div className="face2">
                        <FontAwesomeIcon icon={faHtml5} color="#F06529" />
                    </div>
                    <div className="face3">
                        <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
                    </div>
                    <div className="face4">
                        <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
                    </div>
                    <div className="face5">
                        <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
                    </div>
                    <div className="face6">
                        <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
                    </div>
                </div>
            </div>
        </div>
        <Loader type="pacman" />
    </>
}

export default About;