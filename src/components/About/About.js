import "./About.css";
import DrawingFull from "../drawing/DrawingFull";
import DrawingSmall from "../drawing/DrawingSmall";

const About = () => {
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
                        <h4 id="about-title">
                            Full Stack Developer | Recent M.S. Graduate
                        </h4>
                    </div>
                    <div className="about-bio">
                        <p className="about-bio-text">
                            I recently graduated with a master's degree in
                            Computer Science and Engineering from the University
                            of Nevada, Reno, where I also worked as a Graduate
                            Teaching Assistant.
                        </p>
                        <p className="about-bio-text">
                            I'm now based in San Francisco and looking for
                            software engineering opportunities where I can build
                            practical tools across full-stack web, robotics, and
                            AI-assisted workflows.
                        </p>
                        <p className="about-bio-text">
                            I have a background in architecture, and in my free
                            time I enjoy playing guitar, rock climbing, hiking,
                            and board games.
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
