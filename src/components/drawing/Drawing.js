import "./Drawing.css";
import { lineWork, bodyFill, shadows, backgroundFill } from "./maripi-drawing";
import { useContext } from "react";
import ThemeContext from "../ThemeContext";
const Drawing = (props) => {
	const { theme, themeColors } = useContext(ThemeContext);
	return (
		<div
			className={props.home ? "circle-crop" : "multi-crop"}
			style={{
				width: props.dimention,
				borderColor: props.home
					? "none"
					: theme === "dark"
					? "black"
					: themeColors.light.color1,
			}}
		>
			<div className="drawing-container">
				<img
					className="drawing-img"
					src={backgroundFill}
					id="background-fill"
					alt="logo-layer"
				/>
				<img
					className="drawing-img"
					src={bodyFill}
					id="body-fill"
					alt="logo-layer"
					style={{ display: theme === "dark" ? "flex" : "none" }}
				/>
				<img
					className="drawing-img"
					src={shadows}
					id="shadows"
					alt="logo-layer"
				/>
				<img
					className="drawing-img"
					src={lineWork}
					id="line-work"
					alt="logo-layer"
					style={{
						filter:
							theme === "dark"
								? "none"
								: "invert(.2) saturate(5) sepia(1) hue-rotate(180deg)",
					}}
				/>
			</div>
		</div>
	);
};

export default Drawing;
