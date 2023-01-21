import { useEffect, useState, useContext } from "react";
import { HashLink as Link } from "react-router-hash-link";
import "./Header.css";
import ThemeContext from "./ThemeContext";
import {
	homeLogo,
	projectsLogo,
	skillsLogo,
	contactLogo,
	aboutLogo,
} from "./logos/";

function Header(props) {
	const handleHeaderClick = (e) => {
		props.setHeaderClass("header_active");
		props.setNavScrolling(true);
		setTimeout(() => {
			props.setNavScrolling(false);
		}, 1000);
	};
	const { theme } = useContext(ThemeContext);
	const pages = ["about", "projects", "skills", "contact"];
	const aboutLogoPNG = aboutLogo;
	const projectsLogoPNG = projectsLogo;
	const skillsLogoPNG = skillsLogo;
	const contactLogoPNG = contactLogo;
	const homeLogoPNG = homeLogo;
	return (
		<header className={props.headerClass}>
			<nav className="nav-bar">
				<Link to="/#welcomeScreen">
					<div className="nav-text ">
						<div className="desktop-only">Home</div>
						<div className="mobile-only">
							<img src={homeLogoPNG} className={theme + " nav-logo"} />
						</div>
					</div>
				</Link>
				{pages.map((page) => (
					<Link
						smooth
						key={page}
						to={"#" + page}
						id={page + "Nav"}
						className={props.active === `${page}Nav` ? "selected" : undefined}
						onClick={handleHeaderClick}
					>
						<div className="nav-text ">
							<div className="desktop-only">
								{page.charAt(0).toUpperCase() + page.slice(1)}
							</div>
							<div className="mobile-only">
								<img
									src={eval(page + "LogoPNG")}
									className={theme + " nav-logo"}
								/>
							</div>
						</div>
					</Link>
				))}
			</nav>
		</header>
	);
}

export default Header;
