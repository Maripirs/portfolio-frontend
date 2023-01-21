// import { useEffect, useState } from "react";
import "./About.css";
import Drawing from "../drawing/Drawing";
import ThemeContext from "../ThemeContext";
import { useContext } from "react";

const About = (props) => {
	const { theme, themeColors } = useContext(ThemeContext);
	return (
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
				About Me
			</h2>
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
							In my free time, I enjoy playing guitar, rock climbing, hiking,
							and playing board games.
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
