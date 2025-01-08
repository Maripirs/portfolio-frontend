// import { useEffect, useState } from "react";
import "./About.css";
import DrawingFull from "../drawing/DrawingFull";
import DrawingSmall from "../drawing/DrawingSmall";

const About = (props) => {
    return (
        <>
            <h2 className="section-title">About Me</h2>
            <div className="about-container">
                <div className="about-image small">
                    <DrawingSmall />
                </div>
                <div className="about-image full">
                    <DrawingFull />
                </div>
                <div className="about-text">
                    <div className="about-header">
                        <h2 id="about-name">Maripi Maluenda</h2>
                        <h4 id="about-title">Full Stack Web Developer</h4>
                    </div>
                    <div className="about-bio">
                        <p className="about-bio-text">
                            Currently pursuing a Masters degree in Compurer
                            Science and Engineering at the University of Nevada,
                            Reno. Where I have the privilege of working as a Graduate Teaching Assistant.{" "}
                        </p>
                        <p className="about-bio-text">
                            I have a background in architecture, and in my free time I enjoy playing guitar, rock
                            climbing, hiking, and playing board games.
                        </p>
                        <p className="about-bio-text" id="bio-end">
                            Thanks for stopping by!
                        </p>
                    </div>
                </div>
                <div className="white-space"></div>
            </div>
        </>
    );
};

export default About;
