// import { useEffect, useState } from "react";
import "./About.css";
import Drawing from "../../components/drawing/Drawing";

const About = (props) => {
	// const [about, setAbout] = useState(null);
	// const [aboutHTML, setAboutHTML] = useState(null);

	// const getAboutData = async () => {
	// 	const response = await fetch("../../about.json");
	// 	const data = await response.json();
	// 	setAbout(data);
	// };

	// useEffect(() => {
	// 	getAboutData();
	// }, []);

	// const dataToHTML = () => {
	// 	return (
	// 		<div className="about-container">
	// 			<div className="about-image">
	// 				<Drawing dimention="30vh" />
	// 			</div>
	// 			<div className="about-text">
	// 				<h2>{about.name}</h2>
	// 				<h4>{about.role}</h4>
	// 				<p className="about-bio"></p>
	// 			</div>
	// 		</div>
	// 	);
	// };

	// useEffect(() => {
	// 	if (about) {
	// 		setAboutHTML(dataToHTML());
	// 	}
	// }, [about]);

	return (
		<div className="about-container">
			<div className="about-image">
				<Drawing dimention="30vh" />
			</div>
			<div className="about-text">
				<div className="about-header">
					<h2 id="about-name">Maripi Bartosch</h2>
					<h4 id="about-title">Full Stack Web Developer</h4>
				</div>
				<div className="about-bio">
					<p className="about-bio-text">
						With a background in architecture, I recently made the desition to
						switch careers to pursue a career in Software Development{" "}
					</p>
					<p className="about-bio-text">
						In my free time, I enjoy playing guitar, rock climbing, hiking, and
						playing board games.
					</p>
					<p className="about-bio-text" id="bio-end">
						Thanks for stopping by!
					</p>
				</div>
			</div>
			<div className="white-space"></div>
		</div>
	);
};

export default About;
