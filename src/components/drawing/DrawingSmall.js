import "./Drawing.css";

import {
	smallLinework,
	smallFill,
	smallShadows,
	smallBorder,
} from "./small-drawing";
const DrawingSmall = () => {
	return (
		<div className="small-drawing">
			<div className="drawing-container">
				<img
					className="drawing-img"
					src={smallBorder}
					id="border"
					alt="logo-layer"
				/>
				<img
					className="drawing-img"
					src={smallFill}
					id="body-fill"
					alt="logo-layer"
				/>
				<img
					className="drawing-img"
					src={smallShadows}
					id="shadows"
					alt="logo-layer"
				/>
				<img
					className="drawing-img"
					src={smallLinework}
					id="linework"
					alt="logo-layer"
				/>
			</div>
		</div>
	);
};
export default DrawingSmall;
