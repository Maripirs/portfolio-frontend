import { useState, useEffect } from "react";
import ImageCarousel from "./ImageCarousel";
import "./Projects.css";

const Projects = () => {
	const [projects, setProjects] = useState(null);
	const [projectsHTML, setProjectsHTML] = useState(null);

	const getProjectsData = async () => {
		const response = await fetch(
			"https://maripi-portfolio-backend.herokuapp.com/projects"
		);
		const data = await response.json();
		setProjects(data);
	};

	useEffect(() => {
		getProjectsData();
	}, []);

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
