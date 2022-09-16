import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";
import "./index.scss";
import {useState, useEffect} from "react";

const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {

        let timeoutId = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000)

        return () => {
            clearTimeout(timeoutId)
        }
    }, [])

    return <div>
        <div className="container contact-page">
            <div className="text-zone">
                <h1>
                    <AnimatedLetters strArray={["C", "o", "n", "t", "a", "c", "t", " ", "m", "e"]}
                    idx = {15}
                    letterClass = {letterClass} />
                </h1>
                <p>
                    Lorem Ipsum 
                </p>
                <div className="contact-form">
                    <form>
                        <ul>
                            <li className="half">
                                <input type="text" name="name" placeholder="Name" required/>
                            </li>
                            <li className="half">
                                <input type="email" name="email" placeholder="Email" required/>
                            </li>
                            <li className="full">
                                <input type="text" name="subject" placeholder="Subject" required/>
                            </li>
                            <li className="full">
                                <textarea name="message" placeholder="Message" required/>
                            </li>
                            <li className="full">
                                <input type="submit" value="SEND" className="flat-button"/>
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
        </div>
        <Loader type="pacman"/>
    </div>
}

export default Contact;