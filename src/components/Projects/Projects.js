import ImageCarousel from "./ImageCarousel";
import "./Projects.css";

const Projects = () => {
    const projects = [
        {
            name: "GameMatch AR",
            live: "https://gamematch.maripi.net/",
            git: "https://github.com/Maripirs/GameMatchAR",
            image: [
                "./projects-images/gm-1.png",
                "./projects-images/gm-2.png",
                "./projects-images/gm-3.png",
            ],
            tools: [
                {
                    name: "JavaScript",
                    badge: "https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black",
                },
                {
                    name: "Python",
                    badge: "https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white",
                },
                {
                    name: "FastAPI",
                    badge: "https://img.shields.io/badge/FastAPI-009688?style=for-the-badge&logo=fastapi&logoColor=white",
                },
                {
                    name: "ONNX Runtime",
                    badge: "https://img.shields.io/badge/ONNX_Runtime-005CED?style=for-the-badge&logo=onnx&logoColor=white",
                },
                {
                    name: "YOLO",
                    badge: "https://img.shields.io/badge/YOLO-111827?style=for-the-badge",
                },
                {
                    name: "OpenAI Codex",
                    badge: "https://img.shields.io/badge/OpenAI_Codex-412991?style=for-the-badge&logo=openai&logoColor=white",
                },
            ],
            summary:
                "WebAR shelf scanner that detects board-game boxes with YOLO/ONNX, crops titles, and matches them against a BGG visual index through FastAPI and CLIP. Built with Codex as an AI pair-programming workflow for prototyping, debugging, and integration.",
        },
        {
            name: "WalkCode",
            live: "https://walkcode.maripi.net/",
            git: "https://github.com/Maripirs/walkcode",
            image: [
                "./projects-images/walkcode-drill-question.png",
                "./projects-images/walkcode-complexity.png",
                "./projects-images/walkcode-review.png",
                "./projects-images/walkcode-drills.png",
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
                "Static, mobile-friendly coding-practice site for guided walkthroughs and quick code drills. It offers JavaScript and Python exercises, a browsable lesson library, and local progress tracking with no backend or build step.",
        },
        {
            name: "GeekGuide",
            live: "https://maripirs.github.io/geek-guide-v2/",
            git: "https://github.com/Maripirs/geek-guide-v2",
            image: [
                "./projects-images/geekguide-library.png",
                "./projects-images/geekguide-guide.png",
                "./projects-images/geekguide-rulebook.png",
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
                "React reference site for board-game rule summaries and searchable rulebooks. Browse a local game catalog, open individual guides, and search the included PDF rulebooks without relying on a backend.",
        },
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
                "React tool that fetches Pokemon data from PokeAPI, compares type advantages, and helps players quickly understand battle matchups. It focuses on clear interaction, responsive UI, and practical API-driven state management.",
        },
        {
            name: "Game of Tres",
            live: "https://maripirs.github.io/Game-of-Tres/",
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
            summary:
                "Browser card game for 2-4 players with custom rules, turn handling, and a lightweight vanilla JavaScript interface. The project emphasizes readable game logic, simple multiplayer flow, and a polished playable experience.",
        },
        // {
        //     name: "Tic Tac Toe",
        //     live: "https://ttt.maripi.net",
        //     git: "https://github.com/Maripirs/Tic-Tac-Toe",
        //     image: [
        //         "./projects-images/ttt-1.png",
        //         "./projects-images/ttt-2.png",
        //         "./projects-images/ttt-3.png",
        //     ],
        //     tools: [
        //         {
        //             name: "JavaScript",
        //             badge: "https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black",
        //         },
        //         {
        //             name: "HTML",
        //             badge: "https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white",
        //         },
        //         {
        //             name: "CSS",
        //             badge: "https://img.shields.io/badge/CSS-239120?&style=for-the-badge&logo=css3&logoColor=white",
        //         },
        //     ],
        //     summary: "Simple Tic Tac Toe browser game for two players.",
        // },
    ];

    return projects ? (
        <>
            <h2 className="section-title">Projects</h2>
            <div className="cards-container">
                {projects.map((project, index) => (
                    <div key={index} className="project-card ">
                        <div className="project-title">{project.name}</div>
                        <div className="card-contents">
                            <ImageCarousel
                                images={project.image}
                                projectName={project.name}
                            />
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
                                            alt={tool.name}
                                        />
                                    ))}
                                </div>
                                <div className="project-summary">
                                    <p>{project.summary}</p>
                                </div>
                                <div className="project-links">
                                    {project.git ? (
                                        <a
                                            className="project-link-button"
                                            href={project.git}
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            GitHub
                                        </a>
                                    ) : null}
                                    <a
                                        className="project-link-button"
                                        href={project.live}
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        Live Site
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
