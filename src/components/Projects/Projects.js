import { useState, useEffect } from "react";
import ImageCarousel from "./ImageCarousel";
import "./Projects.css";

const Projects = () => {
    const projects = [
        {
            name: "Pokemon Advantage Calculator",
            live: "https://poke-calc.maripi.net/",
            git: "https://github.com/Maripirs/pokemon-advantage-calculator",
            image: [
                "./projects-images/pc-1.png",
                "./projects-images/pc-2.png",
                "./projects-images/pc-3.png",
                "./projects-images/pc-4.png",
            ],
            tools: [
                {
                    name: "React",
                    badge: "https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB",
                },
                {
                    name: "JavaScript",
                    badge: "https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black",
                },
                {
                    name: "HTML",
                    badge: "https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white",
                },
                {
                    name: "CSS",
                    badge: "https://img.shields.io/badge/CSS-239120?&style=for-the-badge&logo=css3&logoColor=white",
                },
            ],
            summary:
                "React App that fetches random pokemon from pokeAPI and compares their type advantages",
        },
        {
            name: "Game of Tres",
            live: "https://tres.maripi.net",
            git: "https://github.com/Maripirs/Game-of-Tres",
            image: [
                "./projects-images/tr-1.png",
                "./projects-images/tr-2.png",
                "./projects-images/tr-3.png",
                "./projects-images/tr-4.png",
            ],
            tools: [
                {
                    name: "JavaScript",
                    badge: "https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black",
                },
                {
                    name: "HTML",
                    badge: "https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white",
                },
                {
                    name: "CSS",
                    badge: "https://img.shields.io/badge/CSS-239120?&style=for-the-badge&logo=css3&logoColor=white",
                },
            ],
            summary: "A web browser card game for 2-4 players",
        },
        {
            name: "Mastermind-backend",
            live: "https://maripirs.github.io/Mastermind/",
            git: "https://github.com/Maripirs/Mastermind",
            image: [
                "./projects-images/mm-1.png",
                "./projects-images/mm-2.png",
                "./projects-images/mm-3.png",
                "./projects-images/mm-4.png",
            ],
            tools: [
                {
                    name: "JavaScript",
                    badge: "https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black",
                },
                {
                    name: "HTML",
                    badge: "https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white",
                },
                {
                    name: "CSS",
                    badge: "https://img.shields.io/badge/CSS-239120?&style=for-the-badge&logo=css3&logoColor=white",
                },
            ],
            summary:
                "A build of the classic game of mastermind using vanilla JS",
        },
        {
            name: "Tic Tac Toe",
            live: "https://ttt.maripi.net",
            git: "https://github.com/Maripirs/Tic-Tac-Toe",
            image: [
                "./projects-images/ttt-1.png",
                "./projects-images/ttt-2.png",
                "./projects-images/ttt-3.png",
            ],
            tools: [
                {
                    name: "JavaScript",
                    badge: "https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black",
                },
                {
                    name: "HTML",
                    badge: "https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white",
                },
                {
                    name: "CSS",
                    badge: "https://img.shields.io/badge/CSS-239120?&style=for-the-badge&logo=css3&logoColor=white",
                },
            ],
            summary: "Simple Tic Tac Toe browser game for two players.",
        },
    ];

    return projects ? (
        <>
            <h2 className="section-title">Projects</h2>
            <div className="cards-container">
                {projects.map((project, index) => (
                    <div key={index} className="project-card ">
                        <div className="project-title">{project.name}</div>
                        <div className="card-contents">
                            <ImageCarousel images={project.image} />
                            {/* <img
									className="project-img-element"
									src={project.image}
									alt="project screenshot"
								/> */}

                            <div className="project-info">
                                <div className="tools-cont">
                                    {project.tools.map((tool, index) => (
                                        <img
                                            className="tool-badge"
                                            key={index + "tool"}
                                            src={tool.badge}
                                        />
                                    ))}
                                </div>
                                <div className="project-summary">
                                    <p>{project.summary}</p>
                                </div>
                                <div className="project-links">
                                    <a href={project.git}>
                                        <button>Github</button>
                                    </a>
                                    <a href={project.live}>
                                        <button>Live Site</button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    ) : (
        <h1>Loading...</h1>
    );
};

export default Projects;
