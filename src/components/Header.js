import { Link } from "react-router-dom";
import "./Header.css";

function Header(props) {
	return (
		<header>
			<nav className="nav-bar">
				<Link to="/">
					<div>HOME</div>
				</Link>
				<Link to="/main/about">
					<div>ABOUT</div>
				</Link>
				<Link to="/main/projects">
					<div>PROJECTS</div>
				</Link>
			</nav>
		</header>
	);
}

export default Header;
