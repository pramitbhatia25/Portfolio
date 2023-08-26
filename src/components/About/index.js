import AnimatedLetters from "../AnimatedLetters";
import "./index.scss";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngular, faCss3, faGitAlt, faHtml5, faJsSquare, faPython, faReact } from "@fortawesome/free-brands-svg-icons";
import { Loader } from "react-loaders";

function About() {

    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        document.body.style.zoom = "80%";
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
                Hey there! Thanks for stopping by!
                I'm Pramit, a CS student at Georgia State University. 
                I've around 2 years of project building experience with technologies 
                like ReactJS, ExpressJS, NodeJS, Python, Flask, Docker and many more.
                I am also Microsoft Certified and have passed the Azure Fundamentals - AZ-900
                and Azure AI Fundamentals - AI-900 exams.
                </p>

                <p>
                I've been interning at Cybriant for the last couple of months
                and have gained experience in setting up and working with DevOps
                Automation Pipelines, using my Azure knowledge and programming 
                background to create automation scripts and deploying them via Azure services.
                </p>

                <p>
                I also have a Machine Learning and Data Science background, and
                have been working as a Undergraduate Researcher at Georgia State University.
                </p>
                
                <p>
                I am keen on engaging in various projects throughout my engineering journey.
                I am a quick learner and try my best to indulge in many different technologies 
                to understand their applications in the industry. I would love to contribute 
                to or help in projects, internships, or other opportunities!
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