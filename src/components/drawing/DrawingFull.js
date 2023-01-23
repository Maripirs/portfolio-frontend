import "./Drawing.css";
import {
	fullLinework,
	fullFill,
	fullShadows,
	fullBorder,
} from "./full_drawing";

const DrawingFull = (props) => {
	return (
		<div className="full-drawing">
			<div className="drawing-container">
				<img
					className="drawing-img"
					src={fullBorder}
					id="border"
					alt="logo-layer"
				/>
				<img
					className="drawing-img"
					src={fullFill}
					id="body-fill"
					alt="logo-layer"
				/>
				<img
					className="drawing-img"
					src={fullShadows}
					id="shadows"
					alt="logo-layer"
				/>
				<img
					className="drawing-img"
					src={fullLinework}
					id="linework"
					alt="logo-layer"
				/>
			</div>
		</div>
	);
};
export default DrawingFull;
