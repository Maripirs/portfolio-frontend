import { useState, useEffect } from "react";
import "./Projects.css";
import ThemeContext from "../ThemeContext";
import { useContext } from "react";

const Projects = (props) => {
	const { theme, themeColors } = useContext(ThemeContext);
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
			<div key={index} className={"project-card " + theme}>
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

	return projects ? (
		<>
			<h2
				className="section-title"
				style={{
					backgroundColor:
						theme === "dark"
							? themeColors.dark.background3
							: themeColors.light.background3,
					color:
						theme === "dark"
							? themeColors.dark.color1
							: themeColors.light.color1,
				}}
			>
				Projects
			</h2>
			<div className="cards-container">{projectsHTML}</div>
		</>
	) : (
		<h1>Loading...</h1>
	);
};

export default Projects;
