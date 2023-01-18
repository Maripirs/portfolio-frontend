import { useEffect, useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
import "./Header.css";

function Header(props) {
	return (
		<header className={props.headerClass}>
			<nav className="nav-bar">
				<Link to="/#welcomeScreen">
					<div className="nav-text">Home</div>
				</Link>
				<Link
					smooth
					to="#about"
					id="aboutNav"
					className={props.active === "aboutNav" ? "selected" : undefined}
				>
					<div className="nav-text">About</div>
				</Link>
				<Link
					smooth
					to="#projects"
					id="projectsNav"
					className={props.active === "projectsNav" ? "selected" : undefined}
				>
					<div className="nav-text">Projects</div>
				</Link>
				<Link
					smooth
					to="#skills"
					id="skillsNav"
					className={props.active === "skillsNav" ? "selected" : undefined}
				>
					<div className="nav-text">Skills</div>
				</Link>
				<Link
					smooth
					to="#contact"
					id="contactNav"
					className={props.active === "contactNav" ? "selected" : undefined}
				>
					<div className="nav-text">Contact</div>
				</Link>
			</nav>
		</header>
	);
}

export default Header;
