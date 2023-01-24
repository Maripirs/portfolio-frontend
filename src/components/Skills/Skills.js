import { useState } from "react";
import "./Skills.css";
import skills_arr from "./skills_info";
const Skills = (props) => {
	const [activeModal, setActiveModal] = useState(null);
	const showModal = (e) => {
		setActiveModal(e.target.closest(".skill-card").id);
	};
	return (
		<>
			<h2 className="section-title"> Skills</h2>
			<div className="skills-container">
				{/* <p> Probably learning something new right now...</p> */}
				<div className="skill-cards-container">
					{skills_arr.map((skill) => {
						return (
							<div
								className={
									"skill-card " +
									(skill.name === activeModal ? "active" : "inactive")
								}
								key={skill.name}
								id={skill.name}
								onClick={showModal}
							>
								<p className="skill-name">{skill.name}</p>
								<div className="skill-logo">{skill.svg}</div>
								<small className="skill-description">{skill.description}</small>
								<a href={skill.doc}>More Info</a>
							</div>
						);
					})}
				</div>
			</div>
		</>
	);
};

export default Skills;
