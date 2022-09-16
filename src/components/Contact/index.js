import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";
import "./index.scss";
import { useState, useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const refForm = useRef();
    useEffect(() => {

        let timeoutId = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000)

        return () => {
            clearTimeout(timeoutId)
        }
    }, [])

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            'service_o1xbn8k',
            'template_bvcoawo',
            refForm.current,
            'RVo9CxTqD3INEUHwE'
        )
            .then(
                () => {
                    alert("Message successfully sent!");
                    window.location.reload(false);
                },
                () => {
                    alert("Failed to send the message, try again.");
                }
            )
            ;
    }
    return <div>
        <div className="container contact-page">
            <div className="text-zone">
                <h1>
                    <AnimatedLetters strArray={["C", "o", "n", "t", "a", "c", "t", " ", "m", "e"]}
                        idx={15}
                        letterClass={letterClass} />
                </h1>
                <p>
                Hey! If you have any opportunities or would just like to chat with me, send me a message! I promise I'll get back ASAP :)
                <br />
                PS: Yes, the website works, I will get the message.
                </p>
                <div className="contact-form">
                    <form ref={refForm} onSubmit={sendEmail}>
                        <ul>
                            <li className="half">
                                <input type="text" name="name" placeholder="Name" required />
                            </li>
                            <li className="half">
                                <input type="email" name="email" placeholder="Email" required />
                            </li>
                            <li className="full">
                                <input type="text" name="subject" placeholder="Subject" required />
                            </li>
                            <li className="full">
                                <textarea name="message" placeholder="Message" required />
                            </li>
                            <li className="full">
                                <input type="submit" value="SEND" className="flat-button" />
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
        </div>
        <Loader type="pacman" />
    </div>
}

export default Contact;