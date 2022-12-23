import { useState, useEffect } from "react";
import "./Projects.css";

const Projects = (props) => {
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

	const dataToHTML = () => {
		return projects.map((project, index) => (
			<div key={index} className="project-card">
				<div className="project-title">{project.name}</div>
				<div className="card-contents">
					<div className="project-img-cont">
						<img
							className="project-img-element"
							src={project.image}
							alt="project screenshot"
						/>
					</div>
					<div className="project-info">
						<div className="project-summary"></div>
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
		));
	};

	useEffect(() => {
		if (projects) {
			setProjectsHTML(dataToHTML());
		}
	}, [projects]);

	// return (
	// 	<div className="project-card">
	// 		<div className="project-title">
	// 			<h1>Project Name</h1>
	// 		</div>
	// 		<div className="card-contents">
	// 			<div className="project-img-cont"></div>
	// 			<div className="project-info">
	// 				<p>This is a project about a thing</p>
	// 				<p>More text about this project</p>
	// 				<div className="project-links">
	// 					<a>
	// 						<button>Github</button>
	// 					</a>
	// 					<a>
	// 						<button>Live Site</button>
	// 					</a>
	// 				</div>
	// 			</div>
	// 		</div>
	// 	</div>
	// );

	return projects ? (
		<>
			<h2 className="section-title">Projects</h2>
			<div className="cards-container">{projectsHTML}</div>
		</>
	) : (
		<h1>Loading...</h1>
	);
};

export default Projects;
