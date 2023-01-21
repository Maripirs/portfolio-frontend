import { useContext } from "react";
import "./Footer.css";
import { githubLogo, linkedInLogo } from "./logos/";
import ThemeContext from "./ThemeContext";
function Footer(props) {
	const { theme, setTheme, themeColors } = useContext(ThemeContext);
	const handleTheme = () => {
		theme == "dark" ? setTheme("light") : setTheme("dark");
	};
	return (
		<div
			className="footer"
			style={{
				backgroundColor:
					theme === "dark"
						? themeColors.dark.background2
						: themeColors.light.background2,
				color:
					theme === "dark" ? themeColors.dark.color1 : themeColors.light.color3,
			}}
		>
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
		</div>
	);
}

export default Footer;
