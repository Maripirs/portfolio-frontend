import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Projects from "../../components/Projects/Projects.js";
import About from "../../components/About/About.js";
import Skills from "../../components/Skills/Skills.js";
import ContactMe from "../../components/Contact/Contact.js";
import { useState } from "react";
import "./Main.css";
import Home from "../Home/Home";

const Main = () => {
    const [headerClass, setHeaderClass] = useState("header_active");

    return (
        <div className="main-page">
            <div className="main-content ">
                <div className="page-section" id="home">
                    <Home />
                </div>
                <Header
                    headerClass={headerClass}
                    setHeaderClass={setHeaderClass}
                />
                <div className="page-section" id="projects">
                    {/* <div className="header-background"></div> */}
                    <Projects />
                </div>
                <div className="page-section" id="about">
                    {/* <div className="header-background"></div> */}
                    <About />
                </div>
                <div className="page-section" id="skills">
                    {/* <div className="header-background"></div> */}
                    <Skills />
                </div>
                <div className="page-section" id="contact">
                    {/* <div className="header-background"></div> */}
                    <ContactMe />
                </div>
                <Footer />
            </div>
        </div>
    );
};

export default Main;
