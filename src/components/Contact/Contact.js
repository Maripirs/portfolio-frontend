import "./Contact.css";
import ThemeContext from "../ThemeContext";
import { useContext } from "react";
const Contact = (props) => {
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
				{" "}
				Contact{" "}
			</h2>
			<div className="contact-form"> This is a form</div>
		</>
	);
};

export default Contact;
