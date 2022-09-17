import "./index.scss";
import { Loader } from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";
import "./index.scss";
import { useState, useEffect } from "react";
import portfolioData from "../../../src/data/portfolio.json";

const Portfolio = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    useEffect(() => {
        let timeoutId = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000)

        return () => {
            clearTimeout(timeoutId)
        }
    }, [])

    function renderPortfolio(portfolio) {
        return <div className="images-container">
            {
                portfolio.map((port, idx) => {
                    return (
                        <div key={idx} className="image-box">
                            <img src={require('../Portfolio' + port.cover)}alt="port" className="portfolio-image"/>
                            <div className="content">
                                <p className="title">{port.title}</p>
                                <h4 className="description">{port.description}</h4>
                                <button className="btn" onClick={() => window.open(port.url)}>View</button>
                            </div>
                            </div>
                    )
                })
            }
        </div>
    }
    
    return <>
        <div className="container portfolio-page">
                <h1 className="page-title">
                    <AnimatedLetters strArray={"Portfolio".split("")}
                        idx={15}
                        letterClass={letterClass} />
                </h1>
                <div>{ renderPortfolio(portfolioData.portfolio) }</div>

        </div>
        <Loader type="pacman" />
    </>
};

export default Portfolio;