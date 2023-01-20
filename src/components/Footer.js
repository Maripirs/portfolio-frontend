import { useContext } from "react";
import "./Footer.css";
import { githubLogo, linkedInLogo } from "./logos/";
import ThemeContext from "./ThemeContext";
function Footer(props) {
	const { theme, setTheme } = useContext(ThemeContext);
	const handleTheme = () => {
		theme == "dark" ? setTheme("light") : setTheme("dark");
	};
	return (
		<div className="footer">
			<div className="link-group">
				<a
					className="links"
					id="linkedin-ref"
					href="https://www.linkedin.com/in/maripirs/"
				>
					<img
						className="link-logo"
						id="linkedin-logo"
						src={linkedInLogo}
						alt="linkedin logo"
					/>
				</a>
				<a className="links" id="github-ref" href="https://github.com/Maripirs">
					<img
						className="link-logo"
						id="github-logo"
						src={githubLogo}
						alt="github logo"
					/>
				</a>
			</div>
			<p id="footer-text">© 2022 Maripi Bartosch</p>{" "}
			<div onClick={handleTheme}>change theme</div>
		</div>
	);
}

export default Footer;
