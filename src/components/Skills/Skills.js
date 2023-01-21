import "./Skills.css";
import skills_arr from "./skills_logos";
const Skills = (props) => {
	return (
		<>
			<h2 className="section-title"> Skills</h2>
			<div className="skills-container">
				{/* <p> Probably learning something new right now...</p> */}
				<div className="skill-cards-container">
					{skills_arr.map((skill) => {
						return (
							<div className="skill-card" key={skill.name}>
								<p className="skill-name">{skill.name}</p>
								{skill.svg}
							</div>
						);
					})}
				</div>
			</div>
		</>
	);
};

export default Skills;
